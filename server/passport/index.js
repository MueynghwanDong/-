const local = require('./localStrategy');
const {members} = require('../models');

module.exports = (passport) => {
    passport.serializeUser((member,done)=> {
        done(null, member.m_id);
    });

    passport.deserializeUser((m_id, done) => {
        members.findOne({where : {m_id}})
        .then(member => done(null, member))
        .catch(err=> done(err));
    });

    local(passport);
};