const checkLoggIn = (res, req, next) => {
    
  const token = req.cookies.access_token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const username = decoded.username;
  console.log(username);

  if(username!==null || username === undefined || username === "undefined"){
    console.log("에러");
    res.status = 401;
    return;
  }
  return next();
};