import React from 'react';
import {withRouter} from 'react-router-dom';
const TradesList = props => {

  const onClick = async (id) => {
    await props.getTasks(id)
    props.history.push(`/company/1/trades/${id}`)
  }

  return (
    <>
      {
        (props.trades !== []) && props.trades.map((trade, index) => (
          <div onClick={() => onClick(trade.id)} id={index} className='trade-container'>
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
