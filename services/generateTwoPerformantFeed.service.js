import mongoose from 'mongoose';
import PL from '../models/PL.js';

mongoose.connect('mongodb://localhost:27017/podlasiakFeed', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS: 10000,
});
mongoose.set('strictQuery', false);
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('connected to db'));

const finddd = async () => {
	const prods = await PL.find();

	const {
		title,
		description,
		price,
		category,
		url,
		media,
		variantId,
		brand,
	} = prods;

	const feed = {
		Title: title,
		Description: description,
		'Short message': '',
		Price: price,
		Category: category,
		Subcategory: '',
		URL: url,
		'Image URL': 'test',
		'Product ID': variantId,
		'Generating text link': 0,
		'Brand name': brand,
		Availability: 'test',
	};
	console.log(feed);
};

finddd();
