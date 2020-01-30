var express = require("express");
var app = express.Router();

app.get("/", async function(req, res) {

  var selectQuery = req.mybatisMapper.getStatement(
    "qna",
    "allqna",
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

app.get("/:q_id", async function(req, res) {
  var selectParms = {
    q_id : req.params.q_id
  };

  var selectQuery = req.mybatisMapper.getStatement(
    "qna",
    "selectqna",
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
  
  var insertqnaParms = {
      question : req.body.question,
      answer : req.body.answer,
      m_id : req.body.m_id,
  };

  var insertqnaQuery = req.mybatisMapper.getStatement(
    "qna",
    "insertqna",
    insertqnaParms,
        { language: "sql", indent : "  "}
  );
  try {
    await req.sequelize.query(insertqnaQuery, {
      type: req.sequelize.QueryTypes.INSERT,
    });
  } catch (error) {
    res.status(403).send({ msg: "db select에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.put("/update/:q_id", async function(req, res) {

  var updateqnaParms = {
    q_id : req.params.q_id,
    question : req.body.question,
    answer : req.body.answer
  };

  var updateqnaQuery = req.mybatisMapper.getStatement(
    "qna",
    "updateqna",
    updateqnaParms,
        { language: "sql", indent : "  "}
  );
  try {
    await req.sequelize.query(updateqnaQuery, {
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
app.delete("/del/:q_id", async function(req, res) {

  var deleteParms = {
    q_id : req.params.q_id
  };
  var deleteQuery = req.mybatisMapper.getStatement(
    "qna",
    "deleteqna",
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
