import React from 'react';
import MaterialTable from 'material-table'
export default props => {

  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={[
          { title: 'invoice', field: 'invoice' },
          { title: 'priority', field: 'priority' },
          { title: 'task', field: 'description' },
          { title: 'location', field: 'location' },
          { title: 'workers', field: 'num_workers' },
          { title: 'est. time', field: 'est_time' },
          { title: 'act. time', field: 'act_time' },
          { title: 'start time', field: 'start_time' },
        ]}
        data={[]}
        title="Tasks"
      />
    </div>
  )
}
