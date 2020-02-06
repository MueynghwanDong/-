'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, config.username, config.password, config,
);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.livestock = require('./livestock')(sequelize, Sequelize);
db.barns = require('./barns')(sequelize, Sequelize);
db.ls_bs = require('./ls_bs')(sequelize, Sequelize);
db.members = require('./members')(sequelize, Sequelize);
db.planners = require('./planners') (sequelize, Sequelize);
db.board = require('./board')(sequelize, Sequelize);
db.reply = require('./reply')(sequelize, Sequelize);
db.faq = require('./faq')(sequelize, Sequelize);



//db.barns.hasMany(db.ls_bs);
//db.ls_bs.belongsTo(db.barns);
//db.members.hasMany(db.qna);
//db.qna.belongsTo(db.members);
//db.members.hasMany(db.barns);
//db.barns.belongsTo(db.members);

//db.members.hasMany(db.board);
//db.board.belongsTo(db.members);

//db.members.hasMany(db.planners);
//db.planners.belongsTo(db.members);

//db.board.hasMany(db.reply);
//db.reply.belongsTo(db.board);

module.exports = db;