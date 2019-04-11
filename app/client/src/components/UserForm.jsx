import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
const UserForm = props => {
  const { first_name, last_name, phone_number, position, email, password, toggle, onChange, onSubmit, trades, toggleForm } = props;
  return (
    <>
      <form onSubmit={onSubmit}>
        <h2>Register</h2>
        <div className='form-container'>
          <div className='form-input'>
            <input
              placeholder='first name'
              type="text"
              onChange={onChange}
              name="first_name"
              value={first_name}
            />
          </div>
          <div className='form-input'>
            <input
              placeholder='last name'
              type="text"
              onChange={onChange}
              name="last_name"
              value={last_name}
            />
          </div>
          <div className='form-input'>
            <input
              placeholder='phone number'
              type="text"
              onChange={onChange}
              name="phone_number"
              value={phone_number}
            />
          </div>
          <div className='form-input'>
            <input
              placeholder='email address'
              type="text"
              onChange={onChange}
              name="email"
              value={email}
            />
          </div>
          <div className='form-input'>
            <input
              placeholder='password'
              type="password"
              onChange={onChange}
              name="password"
              value={password}
            />
          </div>
          <div className='checkbox-input'>
            <label htmlFor="is_boss">Are you the Boss?</label>
            <input
              type="checkbox"
              onClick={toggle}
              name="is_boss"
              value={!position}
              />
          </div>
          {!position &&
            <select onChange={onChange} name="trade_id">
              {
                trades.map((trade, index) => (
                  <option value={trade.id}>{trade.name}</option>
                ))
              }
            </select>
          }
        </div>
        <Button color='secondary' size='large' type="submit">
          Register
        </Button>
      </form>
      <div className='user-form-switch'>
        <p>already have an account?</p>
        <Button color='secondary' size='small' onClick={toggleForm}>Login Now!</Button>
      </div>
    </>
  )
}

export default withRouter(UserForm)
