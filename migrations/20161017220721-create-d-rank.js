'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('d_ranks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Team: {
        type: Sequelize.STRING
      },
      PassYardsPerGame: {
        type: Sequelize.FLOAT
      },
      PassYardsPerGameRank: {
        type: Sequelize.FLOAT
      },
      RushYardsPerGame: {
        type: Sequelize.FLOAT
      },
      RushYardsPerGameRank: {
        type: Sequelize.FLOAT
      },
      PointsPerGame: {
        type: Sequelize.FLOAT
      },
      PointsPerGameRank: {
        type: Sequelize.FLOAT
      },
      AveragePassRank: {
        type: Sequelize.FLOAT
      },
      TruePassRank: {
        type: Sequelize.FLOAT
      },
      AverageRushRank: {
        type: Sequelize.FLOAT
      },
      TrueRushRank: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('d_ranks');
  }
};
