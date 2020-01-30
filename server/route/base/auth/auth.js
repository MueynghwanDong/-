const Joi = require('joi');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {members} = require('../../../models');

const router = express.Router();
router.post('/join', async(req,res,next)=>{
    // 로그인되어있지 않음을 확인하기
    const token = req.cookies.access_token;
  if(token!=="undefined" && token){
    return res.status(403).send('로그아웃 필요');
  }
    const schema = Joi.object().keys({
      m_id : Joi.string()
      .alphanum()
      .min(0) 
      .max(20)
      .required(),
      pw : Joi.string().required(),
      email : Joi.string(),
      name : Joi.string(),
      location : Joi.string(),
    });
    const result = Joi.validate(req.body, schema);
    //console.log(result);
    if(result.error){
      res.status = 400;
      res.body = result.error;
      return;
    }

    const {m_id, pw, email,name,location} = req.body;
    try{
      const exMember = await members.findOne({where : {m_id}});
      if(exMember){
        res.status = 409;
        // 중복된 값이라는 화면 출력해주기
         console.log('joinError', '이미 가입된 사용자');
        return res.redirect('/');           
         //return req.flash('joinError', '이미 가입된 사용자');
            
            //return res.redirect('/join');
        }
        //const hash = await bcrypt.hash (pw, 10);
       const member =  await members.create({
            m_id,
            email,
            pw ,
            name,
            location,
        });
        const sr = async function(){
          return member.toJSON();
        }
        res.body = await sr();
        const generateToken = async function(){
          const token = jwt.sign({
            m_id : member.m_id,
            pw : member.pw,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '7d'
          },
          );
          return token;
        };
        const token = await generateToken();
        res.cookie('access_token',token,{
          maxAge : 1000 * 60 * 60 * 24 *7,
          httpOnly : true,
        });
        return res.send("회원가입 성공");
    }catch(error){
        console.error(error);
    }

});
// 로그인이 안되어있는 상태인지 확인하는 작업 필요
router.post('/login', async(req, res, next) => {
  const token = req.cookies.access_token;
  if(token!=="undefined"){
    return res.status(403).send('로그아웃 필요');
  }

  const {m_id, pw} = req.body;
  if(!m_id || !pw){
    res.status = 401;
    return res.send("아이디, 비밀번호 누락 오류");
    //return res.sendStatus(401);
  }
  try{
    const member = await members.findOne({where : {m_id}});
    
    if(!member){
      res.status = 401;
      return res.send("존재하는 회원이 없습니다.");
    }
    const vresult = async function(pw){
      //const hash = await bcrypt.hash (pw, 10);
      if(pw === member.pw){
        return true;
      }else{
        return false;
      }
    }
    const valid = await vresult(pw);
    if(!valid){
      res.status = 401;
      return res.send("pw가 다릅니다. - 로그인 화면 이동");      
    }
    const sr = async function(){
      //console.log(member.toJSON());
      return member.toJSON();
    }
    res.body = await sr();
    console.log(res.body);
    const generateToken = function(){
      const token = jwt.sign({
        m_id : member.m_id,
        pw : member.pw,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '7d'
      },
      );
      return token;
    };
    const token =  generateToken();
    res.cookie('access_token',token,{
      maxAge : 1000 * 60 * 60 * 24 *7,
      httpOnly : true,
    });
    console.log("login 되어 로그인 후 화면으로 이동하는 것해야함.")
    return res.redirect('/');
  } catch(e){
    console.log(e);
  }
 });
  
router.get('/check', async (req,res,next) =>{
  const token = req.cookies.access_token;
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   console.log(decoded);   
  if((req.body.m_id!==String(decoded.m_id)) || (req.body.pw !== decoded.pw)){
    console.log(req.body);
    res.status = 401;
    return res.send("토큰 비교 결과 - 값이 다른 경우"); 
  }
  req.body.m_id = decoded.m_id;
  req.body.pw = decoded.pw;
  console.log(req.body); // m_id값이 인트형? 스트링? 어떤 걸로 유지해야할 지 고민해봐야함.
  console.log("check 확인");
  const now = Math.floor(Date.now() / 1000);
   if(decoded.exp - now < 60 * 60 *24 * 3.5){
     const member = await members.findOne(decoded.m_id);
     const generateToken = function(){
      const mtoken = jwt.sign({
        m_id : member.m_id,
        pw : member.pw,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '3d'
      },
      );
      
      return mtoken;
    };
    res.cookie('access_token',token,{
      maxAge : 1000 * 60 * 60 * 24 *7,
      httpOnly : true,
    });
   }  
  return res.redirect('/'); // 어디로 이동해야할지??
});


// 로그인 했는지 확인한은 작업 필요
  router.post('/logout', async(req, res) => {
    const token = req.cookies.access_token;
  // 로그아웃 버튼 클릭 시 check를 통해 값 비교를 해서 토큰 값으로 추출된 아이디 비밀번호를 post로 넘겨줘야함.
    res.cookie('access_token');
    res.status = 204;
    req.logout();
    req.session.destroy();
    return res.redirect('/');
  });
  
  
  module.exports = router;