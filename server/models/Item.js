let { db, DataTypes } = require('./connection.js');

let Item = db.define('Item', {
    title: DataTypes.STRING,
    price: DataTypes.FLOAT, // Use FLOAT to support decimal values
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
});

module.exports = Item;