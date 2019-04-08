import React from "react";
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import UserForm from './UserForm';
export default props => {
  const { userFormData, loginFormData, onChange, onRegister, onLogin } = props;
  const { first_name, last_name, phone_number, email, password } = userFormData;

  return (
    <div className="landing-page">
      <LoginForm
        email={loginFormData.email}
        password={loginFormData.password}
        onChange={onChange}
        onSubmit={onLogin}
        />
      <UserForm
        firstName={first_name}
        lastName={last_name}
        phoneNumber={phone_number}
        email={email}
        password={password}
        onChange={onChange}
        onSubmit={onRegister}
        />
    </div>
  )
}
