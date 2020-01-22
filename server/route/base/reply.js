var express = require("express");
var app = express.Router();

app.get("/", async function(req, res) {

  var selectQuery = req.mybatisMapper.getStatement(
    "reply",
    "allreply",
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

app.get("/:rno", async function(req, res) {
  var selectParms = {
    rno : req.params.rno
  };

  var selectQuery = req.mybatisMapper.getStatement(
    "reply",
    "selectreply",
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
app.get("/member/:m_id", async function(req, res) {
    var selectParms = {
      m_id : req.params.m_id
    };
  
    var selectQuery = req.mybatisMapper.getStatement(
      "reply",
      "selectreplym",
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
  
app.get("/board/:bno", async function(req, res) {
    var selectParms = {
        bno : req.params.bno
    };
  
    var selectQuery = req.mybatisMapper.getStatement(
      "reply",
      "selectbno",
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
  
  var insertreplyParms = {
    bno : req.body.bno,
    replytext : req.body.replytext,
    m_id : req.body.m_id,
    regdate : req.body.regdate,
  };

  var insertreplyQuery = req.mybatisMapper.getStatement(
    "reply",
    "insertreply",
    insertreplyParms,
        { language: "sql", indent : "  "}
  );
  try {
    await req.sequelize.query(insertreplyQuery, {
      type: req.sequelize.QueryTypes.INSERT,
    });
  } catch (error) {
    res.status(403).send({ msg: "db select에 실패하였습니다.", error: error });
    return;
  }

  res.json({ success: "post call succeed!", url: req.url, body: req.body });
});

app.put("/update/:rno", async function(req, res) {

  var updatereplyParms = {
    rno : req.params.rno,
    replytext : req.body.replytext,
    updatedate : req.body.updatedate
  };

  var updatereplyQuery = req.mybatisMapper.getStatement(
    "reply",
    "updatereply",
    updatereplyParms,
        { language: "sql", indent : "  "}
  );
  try {
    await req.sequelize.query(updatereplyQuery, {
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
app.delete("/del/:rno", async function(req, res) {

  var deleteParms = {
    rno : req.params.rno
  };
  var deleteQuery = req.mybatisMapper.getStatement(
    "reply",
    "deletereply",
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
