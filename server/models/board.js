module.exports = (sequelize, DataTypes) => (
    sequelize.define('board', {
        bno:{
            type : DataTypes.INTEGER,
            allowNull:false,
            primaryKey : true
        },
        m_id :{
          type: DataTypes.INTEGER,
          allowNull :false
        },
      title: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      regdate: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('now()'),
      },
      viewcnt:{
          type : DataTypes.INTEGER,
          allowNull: true,
          defaultValue: 0,
      },
      replycnt : {
          type : DataTypes.INTEGER,
          allowNull : true,
          defaultValue :0,
      }
  
    }, {
      timestamps: false,
      paranoid: false,
    })
  );