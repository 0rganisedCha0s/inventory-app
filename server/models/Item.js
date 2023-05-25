let { db, DataTypes } = require('./connection.js');

let Item = db.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: DataTypes.STRING,
    price: DataTypes.FLOAT, // Use FLOAT to support decimal values
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
});

module.exports = Item;