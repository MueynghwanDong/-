var express = require("express");
var app = express.Router();

app.get("/", async function(req, res) {

  var selectQuery = req.mybatisMapper.getStatement(
    "planner",
    "allplanner",
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

  res.json(data);
});

app.get("/:p_id", async function(req, res) {
  var selectParms = {
    p_id : req.params.p_id
  };
  try {

  var selectQuery = req.mybatisMapper.getStatement(
    "planner",
    "selectplanner",
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
  res.json(data);
});

app.post("/insert", async function(req, res) {
  
  var insertplannerParms = {
    m_id : req.body.m_id,
    start_date : req.body.start_date,
    end_date : req.body.end_date,
    title : req.body.title,
    info : req.body.info
  };
  
  try {
  var insertplannerQuery = req.mybatisMapper.getStatement(
    "planner",
    "insertplanner",
    insertplannerParms,
        { language: "sql", indent : "  "}
  );
    await req.sequelize.query(insertplannerQuery, {
      type: req.sequelize.QueryTypes.INSERT,
    });
  } catch (error) {
    res.status(403).send({ msg: "db insert에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.put("/update/:p_id", async function(req, res) {

  var updateplannerParms = {
    p_id : req.params.p_id,
    start_date : req.body.start_date,
    end_date : req.body.end_date,
    title : req.body.title,
    info : req.body.info
  };

  try {
  var updateplannerQuery = req.mybatisMapper.getStatement(
    "planner",
    "updateplanner",
    updateplannerParms,
        { language: "sql", indent : "  "}
  );
    await req.sequelize.query(updateplannerQuery, {
      type: req.sequelize.QueryTypes.UPDATE,
    });
  } catch (error) {
    res.status(403).send({ msg: "db update에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

// 수정요망 - 값이 있는지 확인하고 없으면 없다는 메시지 출력
// 값이 있으면 삭제후 확인 메시지 출력
app.delete("/del/:p_id", async function(req, res) {

  var deleteParms = {
    p_id : req.params.p_id
  };
  try {
  var deleteQuery = req.mybatisMapper.getStatement(
    "planner",
    "deleteplanner",
    deleteParms,
        { language: "sql", indent : "  "}
  );
    await req.sequelize.query(deleteQuery, {
      type: req.sequelize.QueryTypes.DELETE
    });
  } catch (error) {
    res.status(403).send({ msg: "db delete에 실패하였습니다.", error: error });
    return;
  }


  res.json({ success: "delete call succeed!", url: req.url });
});

module.exports = app;
