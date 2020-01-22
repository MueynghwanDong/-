const envJson = require(`${__dirname}/env/env.json`);
const port = process.env.PORT ? envJson.port : 3001;
const {sequelize} = require('./models');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const methodOverride = require('method-override');


sequelize.sync().then(()=> {
  console.log("연결 성공");
}).catch(err =>{
  console.log("실패");
  console.log(err);
});
const cors = require("cors");

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200
};
app.use(methodOverride('_method'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require(`${__dirname}/middleware/init`));
app.use(require(`${__dirname}/middleware/db`));

app.use("/board", require(`${__dirname}/route/base/board`));
app.use("/member", require(`${__dirname}/route/base/member`));
app.use("/barn", require(`${__dirname}/route/base/barn`));
app.use("/livestock", require(`${__dirname}/route/base/livestock`));
app.use("/lsbs", require(`${__dirname}/route/base/ls_bs`));
app.use("/planner", require(`${__dirname}/route/base/planner`));
app.use("/qna", require(`${__dirname}/route/base/qna`));
app.use("/reply", require(`${__dirname}/route/base/reply`));



app.get("/", function(req, res) {
  res.send("Hello Vote On~");
});

app.listen(port, () => {
  console.log(`Backend start ${port}!`);
});
