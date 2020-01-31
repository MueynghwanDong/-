import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { makeStyles } from '@material-ui/styles';
import {
    Grid,
    IconButton,
    TextField,
    Typography
  } from '@material-ui/core';
const AuthFormBlcok = styled.div`
    h3{
        margin : 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;
// 스타일링 된 input
const StyleInput = styled.input`
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

 }))

const AuthForm = ({type}) => {
    
    const classes = useStyles();

    const text = textmap[type];
    return (

                <AuthFormBlcok>  
                    <h3>{text}</h3>
                    <form>
                        <StyleInput 
                            autoComplete="username" 
                            name="username" 
                            placeholder="ID"
                        />
                        <StyleInput 
                            autoComplete="new-password" 
                            name="password" 
                            placeholder="비밀번호" 
                            type="password" 
                        />
                        {type === 'register' && (
                            <StyleInput 
                            autoComplete="new-password" 
                            name="password Confirm" 
                            placeholder="비밀번호 확인" 
                            type="password" 
                        />
                        )}
                        <ButtonWithMarginTop cyan fullWidth style={{marginTop: '1rem'}}>
                            {text}
                        </ButtonWithMarginTop>
                    </form>
                    <Footer>
                        {type === 'login' ? (
                            <Link to='/register'>회원가입</Link>
                        ) : (
                            <Link to='/login'>로그인</Link>
                        )}
                    </Footer>
                </AuthFormBlcok>

    );
};

export default AuthForm;
