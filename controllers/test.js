import getXmlData from '../services/createProducts.service.js';
import config from '../config.json' assert { type: 'json' };

console.log(config);
const cron = async () => {
	for (let [key, value] of Object.entries(config)) {
		console.log(`Pobieram produkty - ${key}`);
		await getXmlData(value);
		console.log(`Pobrane - ${key}`);
	}
	console.log('Produkty Zaktualizowane');
};

cron();
