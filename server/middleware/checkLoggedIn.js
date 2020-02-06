const checkLoggIn = (res, req, next) => {
    
  const token = req.cookies.access_token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const m_id = decoded.m_id;
  console.log(m_id);

  if(m_id!==null || m_id === undefined || m_id === "undefined"){
    console.log("에러");
    res.status = 401;
    return;
  }
  return next();
};