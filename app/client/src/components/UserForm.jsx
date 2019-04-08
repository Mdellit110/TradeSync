import React from 'react';

export default props => {
  const { first_name, last_name, phone_number, email, password, onChange, onSubmit} = props;
  return (
    <form onSubmit={onSubmit}>
      <h2>Login</h2>
      <div className='user-form-input'>
        <label htmlFor="first_name">First Name</label>
        <input
          id='first_name'
          type="text"
          onChange={onChange}
          name="first_name"
          value={first_name}
        />
      </div>
      <div className='user-form-input'>
        <label htmlFor="last_name">Last Name</label>
        <input
          id='last_name'
          type="text"
          onChange={onChange}
          name="last_name"
          value={last_name}
        />
      </div>
      <div className='user-form-input'>
        <label htmlFor="position">Position/Role</label>
        <input
          id='position'
          type="text"
          onChange={onChange}
          name="position"
          value={position}
          />
      </div>
      <div className='user-form-input'>
        <label htmlFor="phone_number">Phone Number</label>
        <input
          id='phone_number'
          type="text"
          onChange={onChange}
          name="phone_number"
          value={phone_number}
        />
      </div>
      <div className='user-form-input'>
        <label htmlFor="email">Email</label>
        <input
          id='email'
          type="text"
          onChange={onChange}
          name="email"
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
          value={password}
        />
      </div>
      <button type="submit">
        Register
      </button>
      <p id='login-register-button'> already have an account?
        <button onClick={props.history.push(`/home/login`)}>
          Login
        </button>
      </p>
    </form>
  )
}
