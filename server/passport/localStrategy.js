  
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

const { members } = require('../models');

module.exports = (passport) => {
  passport.use(new LocalStrategy({
    memberidField: 'm_id',
    passwordField: 'pw',
  }, async (m_id, pw, done) => {
    try {
      const exMember = await members.findOne({ where: { m_d } });
      if (exMember) {
        const result = await bcrypt.compare(pw, exMember.pw);
        if (result) {
          done(null, exMember);
        } else {
          done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
        }
      } else {
        done(null, false, { message: '가입되지 않은 회원입니다.' });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};