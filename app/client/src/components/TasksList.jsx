import React, {Component} from 'react';
import MaterialTable from 'material-table'
import {withRouter} from 'react-router-dom';
import RowDetails from './RowDetails'
class TasksList extends Component  {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.getTasks(this.props.match.params.trade_id)
    console.log(this.props.currentUser);
  }

  render() {
    return (
      <div className='material-table'>
        <MaterialTable
          columns={[
            { title: 'Work Order', field: 'invoice' },
            { title: 'Priority', field: 'priority' },
            { title: 'Location', field: 'location' },
            { title: 'Employee', field: 'user.first_name' },
            { title: 'Workers', field: 'num_workers' },
            { title: 'Est. Time', field: 'est_time' },
            { title: 'Start Time', field: 'start_time' },
            { title: 'End Time', field: 'end_time' },
          ]}
          data={this.props.tasks}
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
