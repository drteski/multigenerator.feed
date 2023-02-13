import dotenv from 'dotenv';
import xml2js from 'xml2js';
import mongoose from 'mongoose';
import decodeText from '../utilities/decodeText.utility.js';
import getAttrs from '../utilities/getAttributes.utility.js';
import getMedia from '../utilities/getMedia.utility.js';
import PL from '../models/PL.js';
import AT from '../models/AT.js';
import BE from '../models/BE.js';
import BG from '../models/BG.js';
import CZ from '../models/CZ.js';
import DE from '../models/DE.js';
import EE from '../models/EE.js';
import EN from '../models/EN.js';
import ES from '../models/ES.js';
import FR from '../models/FR.js';
import HR from '../models/HR.js';
import HU from '../models/HU.js';
import IE from '../models/IE.js';
import IT from '../models/IT.js';
import LV from '../models/LV.js';
import LT from '../models/LT.js';
import ME from '../models/ME.js';
import NL from '../models/NL.js';
import RO from '../models/RO.js';
import RS from '../models/RS.js';
import RU from '../models/RU.js';
import SI from '../models/SI.js';
import SK from '../models/SK.js';
import UA from '../models/UA.js';

dotenv.config();

mongoose.connect('mongodb://localhost:27017/podlasiakFeed', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS: 10000,
});
mongoose.set('strictQuery', false);
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('connected to db'));

const parserXML = new xml2js.Parser({ attrkey: 'ATTR' });

const fetch = (...args) =>
	import('node-fetch').then(({ default: fetch }) => fetch(...args));

const saveToDb = async (DB, item, variantId) => {
	try {
		const existing = await DB.findOne({ variantId: `${variantId}` });
		if (existing === null) {
			const prodToDb = new DB(item);
			await prodToDb.save();
			// console.log(`Dodane - ${variantId}`);
		} else {
			DB.updateOne({ variantId: `${variantId}` }, item, (err, docs) => {
				console.log(
					`${docs.matchedCount} - ${variantId} - Już istnieje!`
				);
			});
			// console.log(`Zaktualizowane - ${variantId}`);
		}
	} catch (e) {
		console.error(e);
	}
};

const xmlToDb = async (data, mediaData, lang) => {
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
	let category;
	if (!data.cat || data.cat[0] === '') {
		category = '---';
	} else {
		const catSplit = data.cat[0].split(' > ');
		category = catSplit[catSplit.length - 1];
	}
	const { url } = data.ATTR;
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

	const newProduct = {
		id,
		variantId,
		sku,
		ean,
		title,
		description,
		category,
		url,
		brand,
		stock,
		price,
		weight,
		attributes,
		media,
	};

	switch (lang) {
		case 'at':
			await saveToDb(AT, newProduct, variantId);
			break;
		case 'be':
			await saveToDb(BE, newProduct, variantId);
			break;
		case 'bg':
			await saveToDb(BG, newProduct, variantId);
			break;
		case 'cz':
			await saveToDb(CZ, newProduct, variantId);
			break;
		case 'de':
			await saveToDb(DE, newProduct, variantId);
			break;
		case 'ee':
			await saveToDb(EE, newProduct, variantId);
			break;
		case 'uk':
			await saveToDb(EN, newProduct, variantId);
			break;
		case 'es':
			await saveToDb(ES, newProduct, variantId);
			break;
		case 'fr':
			await saveToDb(FR, newProduct, variantId);
			break;
		case 'hr':
			await saveToDb(HR, newProduct, variantId);
			break;
		case 'hu':
			await saveToDb(HU, newProduct, variantId);
			break;
		case 'ie':
			await saveToDb(IE, newProduct, variantId);
			break;
		case 'it':
			await saveToDb(IT, newProduct, variantId);
			break;
		case 'lt':
			await saveToDb(LT, newProduct, variantId);
			break;
		case 'lv':
			await saveToDb(LV, newProduct, variantId);
			break;
		case 'me':
			await saveToDb(ME, newProduct, variantId);
			break;
		case 'nl':
			await saveToDb(NL, newProduct, variantId);
			break;
		case 'pl':
			await saveToDb(PL, newProduct, variantId);
			break;
		case 'ro':
			await saveToDb(RO, newProduct, variantId);
			break;
		case 'rs':
			await saveToDb(RS, newProduct, variantId);
			break;
		case 'RU':
			await saveToDb(RU, newProduct, variantId);
			break;
		case 'si':
			await saveToDb(SI, newProduct, variantId);
			break;
		case 'sk':
			await saveToDb(SK, newProduct, variantId);
			break;
		case 'ua':
			await saveToDb(UA, newProduct, variantId);
			break;
		default:
			console.error('brak bazy dla danego języka');
			break;
	}
};

const getXmlData = async (url) => {
	const xml = await fetch(url)
		.then((res) => res.text())
		.then((data) => data);
	const lang = await fetch(url)
		.then((res) => res.url)
		.then((langMatch) => {
			return langMatch.replace('/feed/generate/catalog', '');
		})
		.then((langRes) => langRes.slice(-2));
	console.log(lang);
	parserXML.parseString(xml, (error, result) => {
		const parsedData = result.offers.o;
		if (error === null) {
			parsedData.forEach((data) => xmlToDb(data, data.imgs[0], lang));
		} else {
			console.log(error);
		}
	});
};

export default getXmlData;
