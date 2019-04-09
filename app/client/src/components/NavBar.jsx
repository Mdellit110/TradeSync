import React from 'react';
import {Link} from 'react-router-dom';

export default props => {
  return (
    <>
      { props.currentUser &&
        <div className='navbar'>
          <h1>St. Johns Episcopal</h1>
          <div className='navbar-links'>
            <Link to='/users/1'>Profile</Link>
            <Link to='/company/1'>Your Company</Link>
            <Link to='/company/1/trades/1'>Your Trade</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      }
    </>
  )
}
