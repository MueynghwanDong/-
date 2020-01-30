module.exports = (sequelize, DataTypes) => (
    sequelize.define('ls_bs', {
      ls_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey:true
      },
      b_id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey:true
      },
      location: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    }, {
      timestamps: false,
      paranoid: false,
    })
  );