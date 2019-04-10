import React from 'react';
import {withRouter} from 'react-router-dom';
import TasksList from './TasksList'

const TradePage = props => {
  const {match, currentUser} = props
  const {trade_id} = match.params
  return (
    <>
    <div className='trade-tasks-container'>
      {currentUser.is_boss &&
        <button onClick={() => props.history.push(`/company/1/trades/${trade_id}/new-task`)}>Add a task</button>
      }
      <TasksList
        currentUser={props.currentUser}
        onClick={props.onClick}
        tasks={props.tasks}
        getTasks={props.getTasks}
        />
    </div>
    </>
  )
}

export default withRouter(TradePage)
