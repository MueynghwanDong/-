import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { Grid, makeStyles, Container } from '@material-ui/core';
import {blue} from '@material-ui/core/colors'
// import {
//     Grid,
//     IconButton,
//     TextField,
//     Typography
//   } from '@material-ui/core';
const AuthFormBlock = styled.div`
    h3{
        margin : 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;
// 스타일링 된 input
const StyledInput = styled.input`
    font-size:1rem;
    border: none;
    norder-bottom: 1px solid ${palette.gray[5]};
    padding-bottom : 0.5rem;
    outline:none;
    width: 100%;
    &:focus{
        color:$oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

const Footer = styled.div`
    margin-top:2rem;
    text-align:right;
    {
        color:${palette.gray[6]};
        text-decoration:underline;
        &:hover {
            color:${palette.gray[9]}
        }
    }
`
const textmap={
    login: '로그인',
    register: '회원가입',
};

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
    
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const useStyles = makeStyles(theme => ({
    quote: {
        backgroundImage: 'url(/images/auth.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    root:{
        height: '100%'
    },
    grid:{
        height:'100%'
    },
    contentBody: {
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center'
          },
        flexGrow: 1,
        display: 'flex',    
        alignItems: 'center',
        
    },
    footer: {
        backgroundColor: blue[50]
    }

 }))

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
    
    const classes = useStyles();

    const text = textmap[type];
    return (

            // <AuthFormBlock>
            <div className={classes.contentBody}>
                <form onSubmit={onSubmit}>
                    <h3>{text}</h3>
                        <StyledInput 
                            autoComplete="username" 
                            name="username" 
                            placeholder="아이디"
                            onChange={onChange}
                            value={form.username}
                        />
                        <StyledInput 
                            autoComplete="new-password" 
                            name="password" 
                            placeholder="비밀번호" 
                            type="password"
                            onChange={onChange}
                            value={form.password}
                        />
                        {type === 'register' && (
                          <StyledInput
                            autoComplete="new-password"
                            name="passwordConfirm"
                            placeholder="비밀번호 확인"
                            type="password"
                            onChange={onChange}
                            value={form.passwordConfirm}
                          />
                        )}
                        {type === 'register' && (
                          <StyledInput
                            autoComplete="name"
                            name="fullName"
                            placeholder="이름"
                            onChange={onChange}
                            value={form.fullName}
                          />
                        )}
                        {type === 'register' && (
                          <StyledInput
                            autoComplete="email"
                            name="email"
                            placeholder="이메일"
                            type="email"
                            onChange={onChange}
                            value={form.email}
                          />
                        )}
                        {type === 'register' && (
                          <StyledInput
                            autoComplete="location"
                            name="location"
                            placeholder="위치"
                            onChange={onChange}
                            value={form.location}
                          />
                        )}
                        {error && <ErrorMessage>{error}</ErrorMessage>}
                        <ButtonWithMarginTop cyan fullWidth style={{marginTop: '1rem'}}>
                            {text}
                        </ButtonWithMarginTop>
                    </form>
                        <Footer
                            
                        >
                            {type === 'login' ? (
                                <Link to='/register'>회원가입</Link>
                            ) : (
                                <Link to='/login'>로그인</Link>
                            )}
                        </Footer>
            </div>
                // </AuthFormBlock>

    );
};

export default AuthForm;
