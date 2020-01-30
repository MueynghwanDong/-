const Joi = require('joi');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {members} = require('../../../models');

const router = express.Router();
router.post('/join', async(req,res,next)=>{
    // 로그인되어있지 않음을 확인하기
    const token = req.cookies.access_token;
  if(token!=="undefined"){
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
        // toJSON 이 안먹힘....
       // const data = members.toJSON();
        //delete data.hash;
        res.body = data.toJSON();
        console.log(member.pw);
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
        res.cookies.set('access_token',token,{
          maxAge : 1000 * 60 * 60 * 24 *7,
          httpOnly : true,
        });
        return res.redirect('/');
    }catch(error){
        console.error(error);
        res.throw(500,error);
        return next(error);
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
    return;
  }
  try{
    const member = await members.findOne({where : {m_id}});
    
    if(!member){
      res.status = 401;
      return;
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
      return;
    }
    const sr = async function(){
      //console.log(member.toJSON());
      return member.toJSON();
    }
    res.body = await sr();
    //console.log(res);
    //console.log(req);
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
    //res.throw(500,e);
  }
 });
  
router.get('/check', async (req,res,next) =>{
  //console.log(req.body);
  const token = req.cookies.access_token;
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   console.log(decoded);   
  if((req.body.m_id!==String(decoded.m_id)) || (req.body.pw !== decoded.pw)){
    console.log(req.body);
    res.status = 401;
    return;
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

  //const member = await members.findOne({where : {decoded.m_id}});
  //const {member} = res.state.member
  
  return res.redirect('/'); // 어디로 이동해야할지??
});


// 로그인 했는지 확인한은 작업 필요
  router.post('/logout', async(req, res) => {
    //console.log(req.isAuthenticated());
    const token = req.cookies.access_token;
  if(token==="undefined"){
    return res.status(403).send('로그인 필요');
  }


    res.cookie('access_token');
    res.status = 204;
    //req.logout();
    //req.session.destroy();
    return res.redirect('/');
  });
  
  
  module.exports = router;