import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()

    if (this.state.username.length === 0 || this.state.password.length === 0 ) return

    this.props.handleLogin(this.state)
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.changeHandler} value={this.state.username} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"  onChange={this.changeHandler} value={this.state.password} name="password" type="password" />
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
