const {model,Schema} = require('mongoose');

articleSchema = new Schema({
	title: String,
	description: String,
	date: {
		type: Date,
		default: Date.now,
	},
});
// compiling the article schema into a model
module.exports = model('Article', articleSchema);