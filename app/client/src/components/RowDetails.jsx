import React from 'react';
import {withRouter} from 'react-router-dom';
import TasksList from './TasksList'

const RowDetails = props => {
  const {rowData, onClick, currentUser} = props;
  console.log(currentUser);
  console.log(rowData);
  return (
    <div className='row-details-container'>
      <p>{rowData.description}</p>
      { !currentUser.is_boss &&
        rowData.completed_by_id?
          (<p>activated</p>)
        :
          (<button onClick={() => onClick(rowData.id, rowData.trade_id, currentUser.sub)}>Start Task</button>)
      }
    </div>
  )
}

export default withRouter(RowDetails)
