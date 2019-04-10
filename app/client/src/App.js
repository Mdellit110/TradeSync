import React, { Component } from 'react';
import './App.css';
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import CompanyPage from "./components/CompanyPage";
import TradePage from "./components/TradePage";
import TaskForm from "./components/TaskForm";
import { Route, withRouter } from 'react-router-dom';
import decode from 'jwt-decode';
import {fetchTrades} from './services/trades';
import {
  fetchTasks,
  createTask,
  setTaskToUser,
  completeTask
} from './services/tasks';
import {
  createNewUser,
  loginUser,
  createNewTask,
  verifyToken,
} from './services/users'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      is_active: false,
      currentUser: {},
      trades: [],
      tasks: [],
      taskFormData: {
        invoice: '',
        location: '',
        is_emergency: false,
        priority: '',
        description: '',
        est_time: '',
        num_workers: '',
        is_complete: false,
        in_review: false,
      },
      userFormData: {
        first_name: "",
        last_name: "",
        phone_number: "",
        is_boss: false,
        email: "",
        password: "",
        trade_id: "1"
      },
      loginFormData: {
        email: "",
        password: ""
      },
    }
    this.onRegisterChange = this.onRegisterChange.bind(this)
    this.onLoginChange = this.onLoginChange.bind(this)
    this.onTaskChange = this.onTaskChange.bind(this)
    this.onRegister = this.onRegister.bind(this)
    this.onLogin = this.onLogin.bind(this)
    this.newTask = this.newTask.bind(this)
    this.toggle = this.toggle.bind(this)
    this.toggleTask = this.toggleTask.bind(this)
    this.getTasks = this.getTasks.bind(this)
    this.updateTask = this.updateTask.bind(this)
  }

  async onRegister(e) {
    e.preventDefault();
    const token = await createNewUser(this.state.userFormData);
    await loginUser(this.state.userFormData);
    const currentUser = this.handleCurrentUser()
    this.props.history.push('/company/1')
    this.setState((prevState, newState) => ({
      currentUser,
      userFormData: {
        username: "",
        first_name: "",
        last_name: "",
        is_boss: false,
        email: "",
        password: "",
        trade_id: "1"
      },
    }));
  }
  async onLogin(e) {
    e.preventDefault();
    const token = await loginUser(this.state.loginFormData);
    const currentUser = this.handleCurrentUser();
    this.props.history.push('/company/1')
    this.setState({
      currentUser,
      is_active: true,
      loginFormData: {
        email: "",
        password: ""
      }
    });
  }
  async newTask(trade_id) {
    console.log(trade_id);
    const task = await createTask(trade_id, this.state.taskFormData);
    this.setState((prevState, newState) => ({
      tasks: [
        ...prevState.tasks,
        task
      ],
      taskFormData: {
        invoice: '',
        location: '',
        is_emergency: false,
        priority: '',
        description: '',
        est_time: '',
        num_workers: ''
      },
    }));
  }
  onRegisterChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userFormData: {
        ...prevState.userFormData,
        [name]: value
      },
    }));
  }
  onLoginChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value
      }
    }));
  }
  onTaskChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      taskFormData: {
        ...prevState.taskFormData,
        [name]: value
      }
    }));
  }
  toggle(e) {
    const { checked } = e.target;
   this.setState(prevState => ({
     userFormData: {
       ...prevState.userFormData,
       is_boss: checked
     },
   }))
  }
  toggleTask(e) {
    const { checked } = e.target;
   this.setState(prevState => ({
     taskFormData: {
       ...prevState.taskFormData,
       is_emergency: checked
     },
   }))
  }

  async updateTask(task_id, trade_id, body, start) {
    if (start) {
      const taskUser = await setTaskToUser(task_id, trade_id, body);
    } else {
      const taskUser = await completeTask(task_id, trade_id, body)
    }
    const tasks = await fetchTasks(trade_id);
    this.setState({
      tasks
    })
  }

  async getTasks(id) {
    await verifyToken();
    const tasks = await fetchTasks(id)
    this.setState({
      tasks,
    })
  }

  handleCurrentUser() {
    const token = localStorage.getItem('jwt');
    if (token) {
      const userData = decode(token);
      localStorage.setItem('user', JSON.stringify(userData))
      const currentUser = JSON.parse(localStorage.getItem('user'));
      return currentUser
    }
  }

  async componentDidMount() {
    const verified = await verifyToken();
    const currentUser = JSON.parse(localStorage.getItem('user'))
    const trades = await fetchTrades()
    this.setState({
      is_active: verified,
      trades,
      currentUser
    })
  }
  render() {
    return (
      <div className="App">
        <NavBar
          currentUser={this.state.currentUser}/>
        <div className='body'>
          <Route
            path="/"
            render={props => (
              !localStorage.getItem('jwt') &&
              <LandingPage
                trades={this.state.trades}
                userFormData={this.state.userFormData}
                loginFormData={this.state.loginFormData}
                onRegisterChange={this.onRegisterChange}
                toggle={this.toggle}
                onLoginChange={this.onLoginChange}
                onRegister={this.onRegister}
                onLogin={this.onLogin}
              />
              )
            }
          />
          <Route
            exact
            path="/company/1"
            render={props => (
              <CompanyPage
                getTasks={this.getTasks}
                trades={this.state.trades}/>
              )
            }
          />
          <Route
            exact
            path="/company/1/trades/:trade_id"
            render={props => (
              <TradePage
                currentUser={this.state.currentUser}
                onClick={this.updateTask}
                getTasks={this.getTasks}
                tasks={this.state.tasks}/>
              )
            }
          />
          <Route
            exact
            path="/company/1/trades/:trade_id/new-task"
            render={props => (
              <TaskForm
                taskFormData={this.state.taskFormData}
                onChange={this.onTaskChange}
                toggle={this.toggleTask}
                onSubmit={this.newTask}
                />
              )
            }
          />
      </div>
    </div>
    );
  }
}

export default withRouter(App);
