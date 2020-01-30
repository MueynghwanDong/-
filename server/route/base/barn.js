var express = require("express");
var app = express.Router();

app.get("/", async function(req, res) {

  var selectQuery = req.mybatisMapper.getStatement(
    "BARN",
    "allbarn",
    { language: "sql", indent : "  "}
  );
  let data = [];
  try {
    data = await req.sequelize.query(selectQuery, {
      type: req.sequelize.QueryTypes.SELECT
    });
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

app.get("/:b_id", async function(req, res) {
  var selectParms = {
    b_id : req.params.b_id
  };
  
  try {
  var selectQuery = req.mybatisMapper.getStatement(
    "BARN",
    "selectbarn",
    selectParms,
    { language: "sql", indent : "  "}
  );
  let data = [];
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
  
  var insertbarnParms = {
    b_id : req.body.b_id,
    m_id : req.body.m_id
  };
  
  try {
  var insertbarnQuery = req.mybatisMapper.getStatement(
    "BARN",
    "insertbarn",
    insertbarnParms,
        { language: "sql", indent : "  "}
  );
    await req.sequelize.query(insertbarnQuery, {
      type: req.sequelize.QueryTypes.INSERT,
    });
  } catch (error) {
    res.status(403).send({ msg: "정보 추가 실패.", error: error });
    return;
  }

  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});
app.put("/cnt/:b_id", async function(req, res) {

  var cntParms = {
    b_id : req.params.b_id,
  };
      try {
  var cntQuery = req.mybatisMapper.getStatement(
    "BARN",
    "updatecount",
    cntParms,
        { language: "sql", indent : "  "}
  );
    await req.sequelize.query(cntQuery, {
      type: req.sequelize.QueryTypes.UPDATE
    });
  } catch (error) {
    res.status(403).send({ msg: "정보 수정에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/update/:b_id", async function(req, res) {

  var updatebarnParms = {
    b_id : req.params.b_id,
    temperature : req.body.temperature,
    humidity : req.body.humidity,
    ch4 : req.body.ch4,
    co2 : req.body.co2
  };
  
  try {
  var updatebarnQuery = req.mybatisMapper.getStatement(
    "BARN",
    "updatebarn",
    updatebarnParms,
        { language: "sql", indent : "  "}
  );
    await req.sequelize.query(updatebarnQuery, {
      type: req.sequelize.QueryTypes.UPDATE,
    });
  } catch (error) {
    res.status(403).send({ msg: "정보 수정에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

// 수정요망 - 값이 있는지 확인하고 없으면 없다는 메시지 출력
// 값이 있으면 삭제후 확인 메시지 출력
app.delete("/del/:b_id", async function(req, res) {

  var deleteParms = {
    b_id : req.params.b_id
  };
  try {
  var deleteQuery = req.mybatisMapper.getStatement(
    "BARN",
    "deletebarn",
    deleteParms,
        { language: "sql", indent : "  "}
  );
    await req.sequelize.query(deleteQuery, {
      type: req.sequelize.QueryTypes.DELETE
    });
  } catch (error) {
    res.status(403).send({ msg: "삭제에 실패하였습니다.", error: error });
    return;
  }


  res.json({ success: "delete call succeed!", url: req.url });
});

module.exports = app;
