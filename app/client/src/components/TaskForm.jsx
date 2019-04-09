import React from 'react';
import {withRouter} from 'react-router-dom';
const TaskForm = props => {
  const { taskFormData, toggle, onChange, onSubmit, match} = props;
  const { invoice, location, is_emergency, priority, description, est_time, num_workers } = taskFormData
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(match.params.trade_id)
      }}>
      <h2>Create Task</h2>
      <div className='form-input'>
        <label htmlFor="invoice">invoice#</label>
        <input
          id='invoice'
          type="number"
          onChange={onChange}
          name="invoice"
          value={invoice}
        />
      </div>
      <div className='form-input'>
        <label htmlFor="location">Location</label>
        <input
          id='location'
          type="text"
          onChange={onChange}
          name="location"
          value={location}
        />
      </div>
      <div className='form-input'>
        <label htmlFor="is_emergency">is it an Emergency?</label>
        <input
          id='is_emergency'
          type="checkbox"
          onClick={toggle}
          name="is_emergency"
          value={!is_emergency}
          />
      </div>
      <div className='form-input'>
        <label htmlFor="priority">Priority</label>
        <input
          id='priority'
          type="text"
          onChange={onChange}
          name="priority"
          value={priority}
        />
      </div>
      <div className='form-input'>
        <label htmlFor="description">What will they have to do?</label>
        <input
          id='description'
          type="text-area"
          onChange={onChange}
          name="description"
          value={description}
        />
      </div>
      <div className='form-input'>
        <label htmlFor="est_time">How long should this take?(in hours)</label>
        <input
          id='est_time'
          type="number"
          onChange={onChange}
          name="est_time"
          value={est_time}
        />
      </div>
      <div className='form-input'>
        <label htmlFor="num_workers">how many workers are needed?</label>
        <input
          id='num_workers'
          type="number"
          onChange={onChange}
          name="num_workers"
          value={num_workers}
        />
      </div>
      <button type="submit">
        Register
      </button>
    </form>
  )
}

export default withRouter(TaskForm)
