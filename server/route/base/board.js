var express = require("express");
var app = express.Router();
const jwt = require('jsonwebtoken');
//const checkLoggedIn = require('../../middleware');
const {board} = require('../../models');
const bodyparser = require('body-parser');

app.get("/", async function(req, res) {

  var p = (req.query.page);
  // console.log(req.query);
  var searchType = (req.query.searchType);
  var searchKeyword = (req.query.searchKeyword);
  if( p == "" || p == null || p == undefined || ( p != null && typeof p == "object" && !Object.keys(p).length ))
  {
    page = 1;
  }else{
    page = (parseInt(req.query.page, 10));
  }
  //page = (parseInt(req.query.page, 10));
  no = (page-1) * 10;
  no = Number(no);
  var selectParms = {
    no : no,
    searchType : searchType,
    keyword : searchKeyword,
  };
  
  var selectQuery = req.mybatisMapper.getStatement(
    "board",
    "allboard",
    selectParms,
    { language: "sql", indent : ""}
  );
  let data = "";
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

  var sp = {
    searchType : searchType,
    keyword : searchKeyword,
  };
  
  var sq = req.mybatisMapper.getStatement(
    "board",
    "tempboard",
    sp,
    { language: "sql", indent : ""}
  );
  let tcnt = "";
  try {
    tcnt = await req.sequelize.query(sq, {
      type: req.sequelize.QueryTypes.SELECT
    });
  } catch (error) {
    res.status(403).send({ msg: "db select에 실패하였습니다.", error: error });
    return;
  }
  // console.log(tcnt);
  currentpage = parseInt(tcnt[0].tcnt/10)+1;
  // console.log(currentpage);
  //console.log(data);
  // totalpage = parseInt(totalcnt/10) +1;
  res.set('last-page',currentpage);
  res.json(data);
});

app.get("/:bno", async function(req, res) {
  var selectParms = {
    bno : req.params.bno
  };
  let data;

  try {

  var selectQuery = req.mybatisMapper.getStatement(
    "board",
    "selectboard",
    selectParms,
    { language: "sql", indent : "  "}
  );
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
  res.json(data[0]);
});

app.post("/insert", async function(req, res) {
  
  const token = req.cookies.access_token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
  const m_id = decoded.m_id;
  // console.log(m_id);
      try{
  
  if(m_id===null || m_id === undefined || m_id === "undefined"){
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
    m_id : m_id,
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

  const idxq = req.mybatisMapper.getStatement("board","idx",null,{lang:"sql", indent : ""});
  const idx =  await req.sequelize.query(idxq, {
    type: req.sequelize.QueryTypes.SELECT,
  });
  res.body = idx;
  // console.log(idx);
} catch (error) {
  res.status(403).send({ msg: "db insert에 실패하였습니다.", error: error });
  return;
}
res.json(res.body);
//res.json({ success: "post call succeed!", url: req.url, body: req.body });
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
  
  const m_id = decoded.m_id; // 사용자 아이디

  let bno = req.params.bno;
  const bd = await board.findOne({where : {bno}});
  // 작성자와 수정자가 같은 지 확인 하기
  if(m_id !== bd.m_id){
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
  let temp = {"bno" : bno};
  res.body = temp;
  res.json(res.body);
  //res.json({ success: "put call succeed!", url: req.url, body: req.body });
});

// 수정요망 - 값이 있는지 확인하고 없으면 없다는 메시지 출력
// 값이 있으면 삭제후 확인 메시지 출력
app.delete("/del/:bno", async function(req, res) {

  const token = req.cookies.access_token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const m_id = decoded.m_id; // 사용자 아이디

  let bno = req.params.bno;
  const bd = await board.findOne({where : {bno}});
  // 작성자와 수정자가 같은 지 확인 하기
  if(m_id !== bd.m_id){
    console.log("사용자의 게시물이 아닙니다.");
    return res.status = 401;
  }

  var deleteParms = {
    bno : req.params.bno,
    m_id : decoded.m_id
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
