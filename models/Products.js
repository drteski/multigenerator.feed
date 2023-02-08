import mongoose from 'mongoose';

const Products = new mongoose.Schema({
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

export default mongoose.model('Products', Products);
