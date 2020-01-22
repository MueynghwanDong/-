var express = require("express");
var app = express.Router();
const {member} = require('../../models');
const bodyparser = require('body-parser');

app.get("/", async function(req, res) {

  var selectQuery = req.mybatisMapper.getStatement(
    "MEMBER",
    "allmember",
    { language: "sql", indent : "  "}
  );
  let data = [];
  try {
    data = await req.sequelize.query(selectQuery, {
      type: req.sequelize.QueryTypes.SELECT
    });
    //console.log("TCL: data", data);
  } catch (error) {
    res.status(403).send({ msg: "db select에 실패하였습니다.", error: error });
    return;
  }

  if (data.length == 0) {
    res.status(403).send({ msg: "정보가 없습니다." });
    return;
  }

  res.json({
      bno: data.map(x => {
      return x;
    })
  });
});

app.get("/:m_id", async function(req, res) {
  var selectParms = {
    m_id : req.params.m_id
  };

  var selectQuery = req.mybatisMapper.getStatement(
    "MEMBER",
    "selectmember",
    selectParms,
    { language: "sql", indent : "  "}
  );
  let data = [];
  try {
    data = await req.sequelize.query(selectQuery, {
      type: req.sequelize.QueryTypes.SELECT
    });
    //console.log("TCL: data", data);
  } catch (error) {
    res.status(403).send({ msg: "db select에 실패하였습니다.", error: error });
    return;
  }

  if (data.length == 0) {
    res.status(403).send({ msg: "정보가 없습니다." });
    return;
  }

  res.json({
      bno: data.map(x => {
      return x;
    })
  });
});

app.post("/insert", async function(req, res) {
  
  var insertmemberParms = {
    email : req.body.email,
    pw : req.body.pw,
    name : req.body.name,
    location : req.body.location
  };

  var insertmemberQuery = req.mybatisMapper.getStatement(
    "MEMBER",
    "insertmember",
    insertmemberParms,
        { language: "sql", indent : "  "}
  );
  try {
    await req.sequelize.query(insertmemberQuery, {
      type: req.sequelize.QueryTypes.INSERT,
    });
  } catch (error) {
    res.status(403).send({ msg: "db select에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});
app.put("/bcnt/:m_id", async function(req, res) {

  var bcntParms = {
    m_id : req.params.m_id,
  };
  var bcntQuery = req.mybatisMapper.getStatement(
    "MEMBER",
    "bcntupdate",
    bcntParms,
        { language: "sql", indent : "  "}
  );
  try {
    await req.sequelize.query(bcntQuery, {
      type: req.sequelize.QueryTypes.UPDATE
    });
  } catch (error) {
    res.status(403).send({ msg: "db select에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/update/:m_id", async function(req, res) {

  var updatememberParms = {
    m_id : req.params.m_id,
    email : req.body.email,
    pw : req.body.pw,
    name : req.body.name,
    location : req.body.location
  };

  var updatememberQuery = req.mybatisMapper.getStatement(
    "MEMBER",
    "updatemember",
    updatememberParms,
        { language: "sql", indent : "  "}
  );
  try {
    await req.sequelize.query(updatememberQuery, {
      type: req.sequelize.QueryTypes.UPDATE,
    });
  } catch (error) {
    res.status(403).send({ msg: "db select에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

// 수정요망 - 값이 있는지 확인하고 없으면 없다는 메시지 출력
// 값이 있으면 삭제후 확인 메시지 출력
app.delete("/del/:m_id", async function(req, res) {

  var deleteParms = {
    m_id : req.params.m_id
  };
  var deleteQuery = req.mybatisMapper.getStatement(
    "member",
    "deletemember",
    deleteParms,
        { language: "sql", indent : "  "}
  );
  try {
    await req.sequelize.query(deleteQuery, {
      type: req.sequelize.QueryTypes.DELETE
    });
  } catch (error) {
    res.status(403).send({ msg: "db select에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "delete call succeed!", url: req.url });
});

module.exports = app;
