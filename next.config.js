const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	devtool: "source-map",
	images: {
		domains: ['images.unsplash.com', '*.com'],
	},
}