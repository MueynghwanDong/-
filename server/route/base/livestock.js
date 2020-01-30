var express = require("express");
var app = express.Router();

app.get("/", async function(req, res) {

  var selectQuery = req.mybatisMapper.getStatement(
    "livestock",
    "alllivestock",
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

app.get("/:ls_id", async function(req, res) {
  var selectParms = {
    ls_id : req.params.ls_id
  };

  var selectQuery = req.mybatisMapper.getStatement(
    "livestock",
    "selectlivestock",
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
  
  var insertlivestockParms = {
    kinds : req.body.kinds
  };

  var insertlivestockQuery = req.mybatisMapper.getStatement(
    "livestock",
    "insertlivestock",
    insertlivestockParms,
        { language: "sql", indent : "  "}
  );
  try {
    await req.sequelize.query(insertlivestockQuery, {
      type: req.sequelize.QueryTypes.INSERT,
    });
  } catch (error) {
    res.status(403).send({ msg: "db select에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});


app.put("/update/:ls_id", async function(req, res) {

  var updatelivestockParms = {
    ls_id : req.params.ls_id,
    body_temperature : req.body.body_temperature,
    heart_rate : req.body.heart_rate,
    step_count : req.body.step_count,
    time : req.body.time
  };

  var updatelivestockQuery = req.mybatisMapper.getStatement(
    "livestock",
    "updatelivestock",
    updatelivestockParms,
        { language: "sql", indent : "  "}
  );
  try {
    await req.sequelize.query(updatelivestockQuery, {
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
app.delete("/del/:ls_id", async function(req, res) {

  var deleteParms = {
    ls_id : req.params.ls_id
  };
  var deleteQuery = req.mybatisMapper.getStatement(
    "livestock",
    "deletelivestock",
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
