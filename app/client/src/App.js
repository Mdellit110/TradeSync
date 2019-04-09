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
import {fetchTasks, createTask} from './services/tasks';
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
      currentUser: null,
      trades: [],
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
  }

  async onRegister(e) {
    e.preventDefault();
    const token = await createNewUser(this.state.userFormData);
    const currentUser = decode(token.jwt);
    await loginUser(this.state.userFormData);
    this.setState((prevState, newState) => ({
      currentUser,
      userFormData: {
        username: "",
        first_name: "",
        last_name: "",
        is_boss: false,
        email: "",
        password: ""
      },
    }));
  }
  async onLogin(e) {
    e.preventDefault();
    const token = await loginUser(this.state.loginFormData);
    const currentUser = decode(token.jwt)
    this.setState({
      is_active: true,
      currentUser,
      loginFormData: {
        email: "",
        password: ""
      }
    });
  }
  async newTask(trade_id) {
    const task = await createTask(trade_id, this.state.taskFormData);
    this.setState((prevState, newState) => ({
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

  async componentDidMount() {
    const verified = await verifyToken();
    const trades = await fetchTrades()
    this.setState({
      is_active: verified,
      trades
    })
  }
  render() {
    return (
      <div className="App">
        { this.state.is_active &&
        <NavBar/>
        }
        <div className='body'>
          <Route
            path="/"
            render={props => (
              !this.state.is_active &&
              <LandingPage
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
                trades={this.state.trades}/>
              )
            }
          />
          <Route
            exact
            path="/company/1/trades/:trade_id"
            render={props => (
              <TradePage/>
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
