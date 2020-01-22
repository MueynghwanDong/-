module.exports = (sequelize, DataTypes) => (
    sequelize.define('reply', {
        rno:{
            type : DataTypes.INTEGER,
            allowNull:false,
            primaryKey : true,
            autoIncrement: true
        },
      bno : {
        type : DataTypes.INTEGER,
        allowNull:false,
      },
      replytext: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      writer: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      regdate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedate:{
          type : DataTypes.DATE,
          allowNull: true,
      },
     
    }, {
      timestamps: false,
      paranoid: false,
    })
  );