var express = require("express");
var app = express.Router();
const jwt = require('jsonwebtoken');
//const checkLoggedIn = require('../../middleware');
const {board} = require('../../models');
const bodyparser = require('body-parser');

app.get("/", async function(req, res) {
  var selectQuery = req.mybatisMapper.getStatement(
    "board",
    "allboard",
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

app.get("/:bno", async function(req, res) {
  var selectParms = {
    bno : req.params.bno
  };
  try {

  var selectQuery = req.mybatisMapper.getStatement(
    "board",
    "selectboard",
    selectParms,
    { language: "sql", indent : "  "}
  );
  let data = [];
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

app.post("/insert", async function(req, res) {
  
  try{
  const token = req.cookies.access_token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
  const username = decoded.username;
  console.log(username);
  
  if(username!==null || username === undefined || username === "undefined"){
    console.log("에러");
    res.status = 401;
    return;
  }
}catch(error){
  //res.send("로그인하고 하기");
  console.log("에러");
  res.status(401).send({ msg: "로그인 정보가 없습니다..", error: error });

  return;
  // res.status(401).send({ msg: "에러!!.", error: e });
  //   return;
}
  var insertboardParms = {
    m_id : decoded.username,
    title : req.body.title,
    content : req.body.content,
  };
      try {
  if(insertboardParms.m_id===null || insertboardParms.title === null || insertboardParms.content ===null){
    return res.send("누락 에러 - 정보 값을 제대로 입력해주세요");
    }
  var insertboardQuery = req.mybatisMapper.getStatement(
    "board",
    "insertboard",
    insertboardParms,
        { language: "sql", indent : "  "}
  );
    await req.sequelize.query(insertboardQuery, {
      type: req.sequelize.QueryTypes.INSERT,
    });
  } catch (error) {
    res.status(403).send({ msg: "db insert에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});
app.put("/vcnt/:bno", async function(req, res) {

  var viewcntParms = {
    bno : req.params.bno,
  };
      try {
  var viewcntQuery = req.mybatisMapper.getStatement(
    "board",
    "viewcntupdate",
    viewcntParms,
        { language: "sql", indent : "  "}
  );
    await req.sequelize.query(viewcntQuery, {
      type: req.sequelize.QueryTypes.UPDATE
    });
  } catch (error) {
    res.status(403).send({ msg: "db update에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/rcnt/:bno", async function(req, res) {

  var replycntParms = {
    bno : req.params.bno,
  };
  try {
  var replycntQuery = req.mybatisMapper.getStatement(
    "board",
    "replycnt",
    replycntParms,
        { language: "sql", indent : "  "}
  );
    await req.sequelize.query(replycntQuery, {
      type: req.sequelize.QueryTypes.UPDATE
    });
  } catch (error) {
    res.status(403).send({ msg: "db update에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

app.put("/update/:bno", async function(req, res) {

  const token = req.cookies.access_token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
  const username = decoded.username; // 사용자 아이디
  console.log(username);

  const bd = await board.findOne({where : {bno}});
  // 작성자와 수정자가 같은 지 확인 하기
  if(username !== bd.m_id){
    console.log("사용자의 게시물이 아닙니다.");
    return res.status = 401;
  }
  
  var updateboardParms = {
    bno : req.params.bno,
    title : req.body.title,
    content : req.body.content,
  };

  try {
  var updateboardQuery = req.mybatisMapper.getStatement(
    "board",
    "updateboard",
    updateboardParms,
        { language: "sql", indent : "  "}
  );
    await req.sequelize.query(updateboardQuery, {
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
app.delete("/del/:bno", async function(req, res) {

  var deleteParms = {
    bno : req.params.bno
  };
  try {
  var deleteQuery = req.mybatisMapper.getStatement(
    "board",
    "deleteboard",
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
