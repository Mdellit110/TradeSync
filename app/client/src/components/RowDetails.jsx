import React from 'react';
import {withRouter} from 'react-router-dom';
import TasksList from './TasksList';
const moment = require('moment');
const RowDetails = props => {
  const {rowData, onClick, currentUser} = props;

  const onActivate = () => {
    const now = moment()
    const body = {
      completed_by_id: currentUser.sub,
      start_time: now.format()
    }
    onClick(rowData.id, rowData.trade_id, body)
  }
  const onComplete = () => {
    const now = moment()
    const body = {
      completed_by_id: currentUser.sub,
      is_complete: true,
      end_time: now.format()
    }
    onClick(rowData.id, rowData.trade_id, body)
  }
  const checkUser = () => {
    if (!currentUser.is_boss && (currentUser.trade_id === rowData.trade_id)) {
      return true
    } else {
      return false
    }
  }
  const checkStatus = () => {
    if (rowData.start_time && (currentUser.sub === rowData.completed_by_id)) {
      return (
        <button onClick={onComplete}>complete</button>
      )
    } else if (rowData.start_time && !(currentUser.sub === rowData.completed_by_id)){
      return (
        <p>Active</p>
      )
    } else {
      return (
      <button onClick={onActivate}>Start Task</button>
      )
    }
  }

  return (
    <div className='row-details-container'>
      <p>{rowData.description}</p>
      { checkUser() &&
        checkStatus()
      }
    </div>
  )
}

export default withRouter(RowDetails)
