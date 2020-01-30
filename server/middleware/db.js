const path = require("path");
const Sequelize = require("sequelize");
const mybatisMapper = require("mybatis-mapper");
const envJson = require(`${__dirname}/../env/env.json`);
//const sequelize = new Sequelize("mysql://root@127.0.0.1:3306");
const sequelize = new Sequelize('ptj_sub1', 'root', 'mysql', {
  dialect: 'mysql'
  });

const sqlPath = path.join(__dirname, "..", ".", `/sql/${envJson.version}/`);
mybatisMapper.createMapper([`${sqlPath}/board.xml`]);
mybatisMapper.createMapper([`${sqlPath}/member.xml`]);
mybatisMapper.createMapper([`${sqlPath}/barn.xml`]);
mybatisMapper.createMapper([`${sqlPath}/livestock.xml`]);
mybatisMapper.createMapper([`${sqlPath}/ls_bs.xml`]);
mybatisMapper.createMapper([`${sqlPath}/qna.xml`]);
mybatisMapper.createMapper([`${sqlPath}/planner.xml`]);
mybatisMapper.createMapper([`${sqlPath}/reply.xml`]);

var init = async function(req, res, next) {
  req.sequelize = sequelize;
  req.mybatisMapper = mybatisMapper;

  next();
};

module.exports = init;
