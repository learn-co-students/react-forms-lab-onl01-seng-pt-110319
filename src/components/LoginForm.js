import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: String(),
      password: String()
    };
  }

  handleFormFieldChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    return !this.state.username || !this.state.password ? alert("Please enter both username and password!") : this.props.handleLogin(this.state);
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleFormFieldChanges(event)} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handleFormFieldChanges(event)} id="password" name="password" type="password" value={this.state.password} />
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
