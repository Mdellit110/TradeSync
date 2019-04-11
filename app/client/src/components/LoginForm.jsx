import React from "react";
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
const LoginForm = props => {
  const { email, password, onChange, onSubmit, submitButton, toggleForm } = props;
  return (
    <>
      <form onSubmit={onSubmit}>
        <h2>Login</h2>
        <div className="form-container">
          <div className='form-input'>
            <input
              type="text"
              onChange={onChange}
              name="email"
              placeholder="email address"
              value={email}
            />
          </div>
          <div className='form-input'>
            <input
              type="password"
              onChange={onChange}
              name="password"
              placeholder="password"
              value={password}
            />
          </div>
        </div>
        <Button color='secondary' size='large' type="submit">
          Sign In
        </Button>
      </form>
      <div className='form-switch'>
        <p>dont have an account yet?</p>
        <Button color='secondary' size='small' onClick={toggleForm}>Register Now!</Button>
      </div>
    </>
  )
}

export default withRouter(LoginForm)
