import React, { Component } from 'react';
import './App.css';
import LandingPage from "./components/LandingPage";
import { Route, withRouter } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userFormData: {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: "",
      },
      loginFormData: {
        email: "",
        password: ""
      }
      this.onChange = this.onChange.bind(this)
      this.onLoginChange = this.onLoginChange.bind(this)
      this.onRegister = this.onRegister.bind(this)
      this.onLogin = this.onLogin.bind(this)
  }

  async handleLogin(e) {
    e.preventDefault();
    const currentUser = await loginUser(this.state.loginFormData);
    this.setState({
      loginFormData: {
        email: "",
        password: ""
      },
      currentUser: currentUser.user,
    });
  }
  handleLoginChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value
      }
    }));
  }
  handleRegisterChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      userFormData: {
        ...prevState.userFormData,
        [name]: value
      },
    }));
  }
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/"
          render={props => (
            <>
            <LandingPage
              userFormData={this.state.userFormData}
              loginFormData={this.state.loginFormData}
              onChange={this.onChange}
              onLoginChange={this.onLoginChange}
              onRegister={this.onRegister}
              onLogin={this.onLogin}
            </>
            )
          }
        />

      </div>
    );
  }
}

export default withRouter(App);
