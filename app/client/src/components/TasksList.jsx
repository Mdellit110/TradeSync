import React, {Component} from 'react';
import MaterialTable from 'material-table'
import {withRouter} from 'react-router-dom';
import RowDetails from './RowDetails';
const moment = require('moment');
class TasksList extends Component  {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.getTasks(this.props.match.params.trade_id)
    console.log(this.props.currentUser);
  }

  render() {
    const tasks = this.props.tasks.map(task => (
        task = {
          ...task,
          created_at: moment(task.created_at).format('MMMM Do YYYY, h:mm:ss a')
        }
      ))
    return (
      <div className='material-table'>
        <MaterialTable
          columns={[
            { title: 'Work Order', field: 'invoice' },
            { title: 'Priority', field: 'priority' },
            { title: 'Employee', field: 'user.first_name' },
            { title: 'Est. Time', field: 'est_time' },
            { title: 'Posted At', field: 'created_at' },
            { title: 'Start Time', field: 'start_time' },
            { title: 'End Time', field: 'end_time' },
          ]}
          data={tasks}
          title='Tasks'
          detailPanel={rowData => {
            return (
              <RowDetails
                currentUser={this.props.currentUser}
                onClick={this.props.onClick}
                rowData={rowData}/>
            )
          }}
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
        />
      </div>
    )
  }
}

export default withRouter(TasksList)
