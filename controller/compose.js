const express = require('express');
const router = express.Router();
const Article = require('../model/article');

router
	.get('/', (req, res) => {
		//sending index.html to the client once a get request received

		res.render('index');
	})
	.post('/', (req, res, next) => {
		const article = new Article({
			title: req.body.title,
			description: req.body.description,
		});

		next();
		article.save().then(console.log('saved'));
		res.redirect('/');
	});

module.exports = router;
