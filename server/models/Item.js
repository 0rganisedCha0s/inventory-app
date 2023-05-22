let { db } = require('./connection.js');

let Sauce = db.define('Sauce', {
    total: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    Price: DataTypes.INTEGER,
    Category: DataTypes.STRING,
    Image: DataTypes.STRING,
});

module.exports = Sauce;