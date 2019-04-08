import React from 'react';
import {withRouter} from 'react-router-dom';
import TasksList from './TasksList'

const TradePage = props => {
  return (
    <>
    <button onClick={() => props.history.push(`/company/1/trades/1/new-task`)}>Add a task</button>
    <div className='company-trades-container'>
      <TasksList/>
    </div>
    </>
  )
}

export default withRouter(TradePage)
