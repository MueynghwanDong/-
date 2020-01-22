module.exports = (sequelize, DataTypes) => (
    sequelize.define('qna', {
        q_id:{
            type : DataTypes.INTEGER,
            allowNull:false,
            primaryKey : true
        },
        m_id : {
          type : DataTypes.INTEGER,
          allowNull :false,
        },
      question: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
      answer: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
     
    }, {
      timestamps: false,
      paranoid: false,
    })
  );