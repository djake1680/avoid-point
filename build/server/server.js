require('babel-register');
const express 				= require('express');
const app 					= express();
const path 					= require('path');
const config 				= require('dotenv');
const bodyParser 			= require('body-parser');
const PORT 					= process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Gets distributed App for server rendering
app.use(express.static('dist/assets'));
const render = require('../../dist/assets/index.js');
app.get('*', render.default);

// Create express server
app.listen(PORT, function () {
    console.log('Server listening at port: ' , PORT);
});






