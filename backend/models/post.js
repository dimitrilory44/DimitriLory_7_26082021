'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Post.hasMany(models.Like_post);
      models.Post.hasMany(models.Comment);

      models.Post.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  };
  Post.init({
    idUSERS: DataTypes.INTEGER,
    titre: DataTypes.STRING,
    image: DataTypes.STRING,
    contenu: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    isLike: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};