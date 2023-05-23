let { db, DataTypes } = require('./connection.js');

let Sauce = db.define('Sauce', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
});

module.exports = Sauce;