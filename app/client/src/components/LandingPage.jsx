import React from "react";
import LoginForm from './LoginForm';
import UserForm from './UserForm';
export default props => {
  const { userFormData, loginFormData, toggle, onRegisterChange, onLoginChange, onRegister, onLogin, trades, toggleForm, hasAccount } = props;
  const { first_name, last_name, phone_number, email, password, is_boss } = userFormData;

  return (
    <div className="landing-page">
      { hasAccount?
        <LoginForm
          toggleForm={toggleForm}
          email={loginFormData.email}
          password={loginFormData.password}
          onChange={onLoginChange}
          onSubmit={onLogin}
        />
      :
        <UserForm
          toggleForm={toggleForm}
          firstName={first_name}
          lastName={last_name}
          phoneNumber={phone_number}
          position={is_boss}
          toggle={toggle}
          email={email}
          password={password}
          onChange={onRegisterChange}
          onSubmit={onRegister}
          trades={trades}
        />
      }
    </div>
  )
}
