const decodeEntities = (encoded) => {
	const translateReplacement = /&(nbsp|amp|quot|lt|gt|mdash);/gm;
	const translate = {
		nbsp: ' ',
		amp: '&',
		quot: '"',
		lt: '<',
		gt: '>',
		mdash: '-',
	};
	return encoded
		.replace(translateReplacement, function (match, entity) {
			return translate[entity];
		})
		.replace(/&#(\d+);/gm, function (match, numStr) {
			return String.fromCharCode(numStr);
		});
};

const decodeText = (data) => {
	const fixString = data.desc[0].replace(/[\r\n]/gm, '');
	return decodeEntities(fixString);
};

export default decodeText;
