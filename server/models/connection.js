let path = require('path');
let { Sequelize, Model, DataTypes } = require('sequelize');

let db = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'db.sqlite'),
    logging: false
});

module.exports = {
    db,
    Model,
    DataTypes
};