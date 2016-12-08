"use strict";

module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    player_name: DataTypes.STRING,
    devoured: { type: DataTypes.BOOLEAN, defaultValue: false }
  }, {

    underscored: true,

    freezeTableName: true,

    // define the table's name
    tableName: 'players',

    classMethods: {
      associate: function(models) {
        Player.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });

  return Player;
};
