import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

const RegisterPage = () =>{
    // eslint-disable-next-line react/react-in-jsx-scope
    return (
        <AuthTemplate>
            <AuthForm type="register"/>
        </AuthTemplate>
    );

};
export default RegisterPage