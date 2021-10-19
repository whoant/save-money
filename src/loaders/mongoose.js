const mongoose = require('mongoose');
const {DATABASE} = require('../config');

module.exports = async () =>  {
    try {
        await mongoose.connect(`mongodb://${DATABASE.host}:${DATABASE.port}`, {
            dbName: DATABASE.name,
        });
        console.log('Connect database successfully !');
    } catch (error) {

        console.error(`Connect database failure !`);
    }
};