import React from 'react';
import {withRouter} from 'react-router-dom';
import TradesList from './TradesList';

export default props => {
  return (
    <div className='company-trades-container'>
      <TradesList
        trades={props.trades}/>
    </div>
  )
}
