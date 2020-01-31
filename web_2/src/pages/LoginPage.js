import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const LoginPage = () =>{
    // eslint-disable-next-line react/react-in-jsx-scope
    return (
        <AuthTemplate>
            <AuthForm type="login"/>
        </AuthTemplate>
    );

};
export default LoginPage