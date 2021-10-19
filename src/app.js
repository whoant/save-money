const express = require('express');

const {PORT} = require('./config');
const loaders = require('./loaders');

const app = express();

loaders(app);

app.listen(PORT, () => {
    console.log('Server run on : ' + PORT);
});



