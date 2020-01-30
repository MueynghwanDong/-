module.exports = (sequelize, DataTypes) => (
    sequelize.define('barns', {
        b_id:{
            type : DataTypes.INTEGER,
            allowNull:false,
            primaryKey : true,
            autoIncrement: true,
        },
      m_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      temperature: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      humidity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      air_condition: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      time: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      count :{
        type : DataTypes.INTEGER,
        allowNull:true,
      },
    }, {
      timestamps: false,
      paranoid: false,
    })
  );