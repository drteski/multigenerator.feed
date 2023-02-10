import mongoose from 'mongoose';

const PL = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const BE = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const BG = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const CZ = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const DE = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const EE = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const EN = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const ES = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const FR = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const HR = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const HU = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const IT = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const LT = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const LV = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const ME = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const NL = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const RO = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const RS = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const RU = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const SI = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const SK = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});
const UK = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
		unique: true,
	},
	variantId: {
		type: Number,
		required: true,
		unique: true,
	},
	sku: {
		type: String,
		required: false,
	},
	ean: {
		type: Number || null,
		required: false,
		default: null,
	},
	title: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	url: {
		type: String,
		required: false,
	},
	brand: {
		type: String,
		required: false,
	},
	stock: {
		type: Number,
		required: false,
		default: 0,
	},
	price: {
		type: Number || null,
		required: false,
	},
	weight: {
		type: Number,
		required: false,
	},
	attributes: {
		type: [
			{
				name: String,
				value: String,
			},
		],
	},
	media: {
		type: [
			{
				url: String,
				main: Boolean,
			},
		],
		required: false,
		autoIndex: false,
	},
});

const modelPL = mongoose.model('PL', PL);
const modelBE = mongoose.model('BE', BE);
const modelBG = mongoose.model('BG', BG);
const modelCZ = mongoose.model('CZ', CZ);
const modelDE = mongoose.model('DE', DE);
const modelEE = mongoose.model('EE', EE);
const modelEN = mongoose.model('EN', EN);
const modelES = mongoose.model('ES', ES);
const modelFR = mongoose.model('FR', FR);
const modelHR = mongoose.model('HR', HR);
const modelHU = mongoose.model('HU', HU);
const modelIT = mongoose.model('IT', IT);
const modelLT = mongoose.model('LT', LT);
const modelLV = mongoose.model('LV', LV);
const modelME = mongoose.model('ME', ME);
const modelNL = mongoose.model('NL', NL);
const modelRO = mongoose.model('RO', RO);
const modelRS = mongoose.model('RS', RS);
const modelRU = mongoose.model('RU', RU);
const modelSI = mongoose.model('SI', SI);
const modelSK = mongoose.model('SK', SK);
const modelUK = mongoose.model('UK', UK);

export default {
	modelPL,
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
	modelRO,
	modelRS,
	modelRU,
	modelSI,
	modelSK,
	modelUK,
};
