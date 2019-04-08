import React from 'react';
import {withRouter} from 'react-router-dom';
const TradesList = props => {
  console.log(props.trades);
  const trades = ['plumbing', 'electrician', 'painting', 'locksmith', 'housekeeping']
  return (
    <>
      {
        (props.trades !== []) && props.trades.map((trade, index) => (
          <div onClick={() => props.history.push(`/company/1/trades/${trade.id}`)} id={index} className='trade-container'>
            <h2>{trade.name}</h2>
            <p>daily tasks:</p>
            <p>completed:</p>
          </div>
        ))
      }
    </>
  )
}

export default withRouter(TradesList)
