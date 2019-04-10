import React from 'react';
const moment = require('moment')

const onActivate = (rowData, currentUser) => {
  const now = moment()
  const body = {
    completed_by_id: currentUser.sub,
    start_time: now.format()
  }
  onClick(rowData.id, rowData.trade_id, body)
}
const onComplete = (rowData, currentUser) => {
  const now = moment()
  const body = {
    completed_by_id: currentUser.sub,
    is_complete: true,
    end_time: now.format()
  }
  onClick(rowData.id, rowData.trade_id, body)
}
const checkUser = (currentUser) => {
  if (!currentUser.is_boss && (currentUser.trade_id === rowData.trade_id)) {
    return true
  } else {
    return false
  }
}
const checkStatus = (rowData, currentUser, onClick) => {
  if (rowData.start_time && (currentUser.sub === rowData.completed_by_id)) {
    return (
      <button onClick={() => onComplete(rowData, currentUser, onClick)}>complete</button>
    )
  } else if (rowData.start_time && !(currentUser.sub === rowData.completed_by_id)){
    return (
      <p>Active</p>
    )
  } else {
    return (
    <button onClick={() => onActivate(rowData, currentUser, onClick)}>Start Task</button>
    )
  }
}

export {
  onActivate,
  checkUser,
  checkStatus
}
