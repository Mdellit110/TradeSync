import React from 'react';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const TaskForm = props => {
  const { taskFormData, toggle, onChange, onSubmit, match} = props;
  const { invoice, location, is_emergency, priority, description, est_time, num_workers } = taskFormData
  return (
    <div className='landing-page'>
      <form onSubmit={(e) => {
          e.preventDefault();
          const {trade_id, company_id} = match.params
          onSubmit(trade_id)
          props.history.push(`/company/1/trades/${trade_id}`)
        }}>
        <h2>Create Task</h2>
          <div className='checkbox-input'>
            <label htmlFor="is_emergency">is it an emergency?</label>
            <input
              type="checkbox"
              onClick={toggle}
              name="is_emergency"
              value={!is_emergency}
              />
          </div>
          <div className='form-container'>
          <div className='form-input'>
            <input
              placeholder='work order#'
              type="number"
              onChange={onChange}
              name="invoice"
              value={invoice}
            />
          </div>
          <div className='form-input'>
            <input
              placeholder='location'
              type="text"
              onChange={onChange}
              name="location"
              value={location}
            />
          </div>
          <div className='form-input'>
            <input
              placeholder='priority'
              type="text"
              onChange={onChange}
              name="priority"
              value={priority}
            />
          </div>
          <div className='form-input'>
            <input
              placeholder='description'
              type="text-area"
              onChange={onChange}
              name="description"
              value={description}
            />
          </div>
          <div className='form-input'>
            <input
              placeholder='estimated time'
              type="number"
              onChange={onChange}
              name="est_time"
              value={est_time}
            />
          </div>
          <div className='form-input'>
            <input
              placeholder='how many workers'
              type="number"
              onChange={onChange}
              name="num_workers"
              value={num_workers}
            />
          </div>
          <Button type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default withRouter(TaskForm)
