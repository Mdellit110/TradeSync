import React from 'react';
import {withRouter} from 'react-router-dom';
const TradesList = props => {
  const trades = ['plumbing', 'electrician', 'painting', 'locksmith', 'housekeeping']
  return (
    <>
      {
        trades.map((trade, index) => (
          <div id={index} className='trade-container'>
            <h2>{trade}</h2>
            <p>daily tasks:</p>
            <p>completed:</p>
          </div>
        ))
      }
    </>
  )
}

export default withRouter(TradesList)
