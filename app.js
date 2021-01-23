require('dotenv').config(); // module used tp save sensetive data in the process
const express = require('express'); //backend framework
const mongoose = require('mongoose'); // import the mongoose module for mongoDB
const compose = require('./controller/compose');
const ejs = require('ejs');
const app = express();
const Article = require('./model/article');

// data base connection config
mongoose
	.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(console.log('connected to the database'))
	.catch((error) => console.error(error.message));

// creating the article schema

//middlewares
// app.use(express.static('public')); // defining the public folder to be served staticlly
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // handling the date received from the form by post request
app.use('/compose', compose);
app.set('view engine', 'ejs');

//the router root handler
app.get('/', (req, res) => {
	//sending index.html to the client once a get request received
	Article.find({}, (err, result) => {
		if (err) console.log(err);
		res.render('show', { data: result });
	});
});

app.listen(process.env.PORT, () => console.log(' server connected '));
