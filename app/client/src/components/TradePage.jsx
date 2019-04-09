import React from 'react';
import {withRouter} from 'react-router-dom';
import TasksList from './TasksList'

const TradePage = props => {
  return (
    <>
    <div className='trade-tasks-container'>
      <button onClick={() => props.history.push(`/company/1/trades/1/new-task`)}>Add a task</button>
      <TasksList/>
    </div>
    </>
  )
}

export default withRouter(TradePage)
