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
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'invoice#', field: 'invoice' },
            { title: 'priority', field: 'priority' },
            { title: 'location', field: 'location' },
            { title: 'head worker', field: 'completed_by_id' },
            { title: 'workers', field: 'num_workers' },
            { title: 'est. time', field: 'est_time' },
            { title: 'start time', field: 'start_time' },
            { title: 'end time', field: 'end_time' },
          ]}
          data={this.props.tasks}
          title="Tasks"
          detailPanel={rowData => {
            console.log(rowData);
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
