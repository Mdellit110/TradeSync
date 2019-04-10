import React from 'react';
import {withRouter} from 'react-router-dom';
import TasksList from './TasksList';
const moment = require('moment');
const RowDetails = props => {
  const {rowData, onClick, currentUser} = props;

  const onActivate = (task_id, trade_id, user_id) => {
    const now = moment()
    const body = {
      completed_by_id: user_id,
      start_time: now.format()
    }
    onClick(task_id, trade_id, body)
  }
  const onComplete = (task_id, trade_id, user_id) => {
    const now = moment()
    const body = {
      completed_by_id: user_id,
      is_complete: true,
      end_time: now.format()
    }
    onClick(task_id, trade_id, body)
  }

  return (
    <div className='row-details-container'>
      <p>{rowData.description}</p>
      { !currentUser.is_boss &&
        rowData.completed_by_id?
          (<button onClick={() => onComplete(rowData.id, rowData.trade_id, currentUser.sub)}>complete</button>)
        :
          (<button onClick={() => onActivate(rowData.id, rowData.trade_id, currentUser.sub)}>Start Task</button>)
      }
    </div>
  )
}

export default withRouter(RowDetails)
