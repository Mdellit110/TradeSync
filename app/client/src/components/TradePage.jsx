import React from 'react';
import {withRouter} from 'react-router-dom';
import TasksList from './TasksList'
import Button from '@material-ui/core/Button';

const TradePage = props => {
  const {match, currentUser} = props
  const {trade_id} = match.params
  return (
    <>
    <div className='trade-tasks-container'>
      {currentUser.is_boss &&
        <Button color='secondary' onClick={() => props.history.push(`/company/1/trades/${trade_id}/new-task`)}>Add a task</Button>
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
