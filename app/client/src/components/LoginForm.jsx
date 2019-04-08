import React from "react";

export default props => {
  const { email, password, onChange, onSubmit, submitButton } = props;
  return (
    <div className="user-form-container">
      <form onSubmit={onSubmit}>
        <h2>Login</h2>
        <div className='user-form-input'>
          <label htmlFor="email">Email</label>
          <input
            id='email'
            type="text"
            onChange={onChange}
            name="email"
            id="email"
            value={email}
          />
        </div>
        <div className='user-form-input'>
          <label htmlFor="password">Password</label>
          <input
            id='password'
            type="password"
            onChange={onChange}
            name="password"
            id="password"
            value={password}
          />
        </div>
        <button type="submit">
          Sign In
        </button>
        <p id='register'> Don't have an account?
          <button onClick={props.history.push(`/home/register`)}>
            Register
          </button>
        </p>
      </form>
    </div>
  )
}