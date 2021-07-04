const path = require('path');

module.exports = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	module: {
		rules: [
			{
				test: /\.(png|jpg|jpeg|svg|gif)$/i,
				use: ["file-loader"]
			}
		]
	}
}