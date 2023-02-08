const getMedia = (data) => {
	const { main, i } = data;
	const mediaSet = [];
	const mainMedia = main[0].ATTR;
	mediaSet.push({
		url: mainMedia.url.replace(/origxorig/gm, 'fit-in/2000x2000'),
		main: true,
	});
	if (i !== undefined) {
		i.forEach((media) => {
			mediaSet.push({
				url: media.ATTR.url.replace(/origxorig/gm, 'fit-in/2000x2000'),
				main: false,
			});
		});
	}
	return mediaSet;
};

export default getMedia;
