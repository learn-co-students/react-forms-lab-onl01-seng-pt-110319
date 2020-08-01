import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleUserChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleFormClick = event => {
    event.preventDefault()
    console.log("username", this.state.username)
    console.log("password", this.state.password)
    if (this.state.username !== '' && this.state.password !== '') {
      return this.props.handleLogin(this.state)
    }
    
  }

  render() {
    return (
      <form onSubmit={this.handleFormClick} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUserChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
