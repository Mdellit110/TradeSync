import React from 'react';
import {withRouter} from 'react-router-dom';
const UserForm = props => {
  const { first_name, last_name, phone_number, position, email, password, toggle, onChange, onSubmit} = props;
  return (
    <form onSubmit={onSubmit}>
      <h2>Register</h2>
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
        <label htmlFor="is_boss">are you the Boss?</label>
        <input
          id='is_boss'
          type="checkbox"
          onClick={toggle}
          name="is_boss"
          value={!position}
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
    </form>
  )
}

export default withRouter(UserForm)
