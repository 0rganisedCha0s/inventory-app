let { db, DataTypes } = require('./connection.js');

let Item = db.define('Item', {
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
});

module.exports = Item;