const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	devtool: "source-map",
	images: {
		domains: ['images.unsplash.com', 'telegraph.id', '*.com'],
	},
}