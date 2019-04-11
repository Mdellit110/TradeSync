import React from 'react';
import {withRouter} from 'react-router-dom';

const TradesList = props => {

  return (
    <>
      {
        (props.trades !== []) && props.trades.map((trade, index) => (
          <div onClick={() => props.history.push(`/company/1/trades/${trade.id}`)} id={index} className='trade-container'>
            <h2>{trade.name}</h2>
          </div>
        ))
      }
    </>
  )
}

export default withRouter(TradesList)
