import React from 'react';
import {withRouter} from 'react-router-dom';
import TasksList from './TasksList';
const moment = require('moment');
const RowDetails = props => {
  const {rowData, onClick, currentUser} = props;

  const onActivate = () => {
    const now = moment()
    const body = {
      user_id: currentUser.sub,
      start_time: now.format('MMMM Do YYYY, h:mm:ss a')
    }
    onClick(rowData.id, rowData.trade_id, body, true)
  }
  const onComplete = () => {
    const now = moment()
    const body = {
      is_complete: true,
      end_time: now.format('MMMM Do YYYY, h:mm:ss a')
    }
    onClick(rowData.id, rowData.trade_id, body, false)
  }
  const checkUser = () => {
    if (!currentUser.is_boss && (currentUser.trade_id === rowData.trade_id)) {
      return true
    } else {
      return false
    }
  }
  const checkStatus = () => {
    if (rowData.is_complete){
      return (
        <p>{`Completed by ${rowData.user.first_name}`}</p>
      )
    } else if (rowData.start_time && (currentUser.sub === rowData.user_id)) {
      return (
        <button onClick={onComplete}>complete</button>
      )
    } else if (rowData.start_time && !(currentUser.sub === rowData.user_id)){
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
