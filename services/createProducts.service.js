import dotenv from 'dotenv';
import xml2js from 'xml2js';
import decodeText from '../utilities/decodeText.utility.js';
import getAttrs from '../utilities/getAttributes.utility.js';
import getMedia from '../utilities/getMedia.utility.js';

//test
import mongoose from 'mongoose';
import {
	modelBE,
	modelBG,
	modelCZ,
	modelDE,
	modelEE,
	modelEN,
	modelES,
	modelFR,
	modelHR,
	modelHU,
	modelIT,
	modelLT,
	modelLV,
	modelME,
	modelNL,
	modelPL,
	modelRO,
	modelRS,
	modelRU,
	modelSI,
	modelSK,
	modelUK,
} from '../models/Products.js';

dotenv.config();

mongoose.connect('mongodb://localhost:27017/podlasiakFeed', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS: 10000,
});
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('connected to db'));

//test

const parserXML = new xml2js.Parser({ attrkey: 'ATTR' });

const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args));

const xmlToDb = async (data, mediaData) => {
	const id = parseFloat(data.ATTR.id);
	const variantId = parseFloat(data.ATTR.variantId);
	const sku = data.attrs[0].a[2]._;
	let ean;
	if (!isNaN(parseFloat(data.attrs[0].a[1]._))) {
		ean = parseFloat(data.attrs[0].a[1]._);
	} else {
		ean = null;
	}
	const title = data.name[0];
	const description = decodeText(data);
	const url = data.ATTR.url;
	const brand = data.attrs[0].a[0]._;
	let stock;
	if (parseFloat(data.ATTR.stock) < 10) {
		stock = 0;
	} else {
		stock = parseFloat(data.ATTR.stock);
	}
	const price = parseFloat(data.ATTR.price);
	const weight = parseFloat(data.ATTR.weight);
	const attributes = getAttrs(data);
	const media = getMedia(mediaData);

	const newProduct = new PL({
		id,
		variantId,
		sku,
		ean,
		title,
		description,
		url,
		brand,
		stock,
		price,
		weight,
		attributes,
		media,
	});
	await newProduct.save();
};

const getXmlData = async (url) => {
	const xml = await fetch(url)
		.then((res) => res.text())
		.then((data) => data);

	parserXML.parseString(xml, (error, result) => {
		const parsedData = result.offers.o;
		if (error === null) {
			parsedData.forEach((data) => xmlToDb(data, data.imgs[0]));
		} else {
			console.log(error);
		}
	});
};

getXmlData('https://files.lazienka-rea.com.pl/catalog_test.xml');
