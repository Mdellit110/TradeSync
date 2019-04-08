import React from 'react';
import MaterialTable from 'material-table'
export default props => {
  const tasks = ['do this', 'do that', 'some stuff', 'fix it', 'do more']
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
        data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
        title="Tasks"
      />
    </div>
  )
}
