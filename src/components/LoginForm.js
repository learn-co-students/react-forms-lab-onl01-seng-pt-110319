import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:"",
    };
  }

  handleEvent=(e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    const {username, password}= this.state;
    if (username && password) {
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} type="text" onChange={this.handleEvent}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} type="password" onChange={this.handleEvent}/>
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
