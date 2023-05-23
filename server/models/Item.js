let { db } = require('./connection.js');

let Sauce = db.define('Sauce', {
    total: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    image: DataTypes.STRING,
});

module.exports = Sauce;