// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const replies = sequelizeClient.define('replies', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey: true
    },
    image: {
      type: DataTypes.TEXT,
    },
    message: {
      type: DataTypes.TEXT,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue:0,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  replies.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    replies.belongsTo(models.comments);
    replies.belongsTo(models.users);
  };

  return replies;
};