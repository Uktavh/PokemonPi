const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('pokemon', {
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        },
        hp:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        attack:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        defense:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        speed:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        height:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        create: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },{timestamps: false},);
};