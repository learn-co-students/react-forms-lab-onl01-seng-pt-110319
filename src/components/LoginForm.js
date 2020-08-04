import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {userName: '', password: ''};

    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  handlePwChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    console.log(event)
    event.preventDefault()

    if (this.state.userName && this.state.password) {

      return this.props.handleLogin(this.state)
    }

  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.userName} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePwChange} />
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
