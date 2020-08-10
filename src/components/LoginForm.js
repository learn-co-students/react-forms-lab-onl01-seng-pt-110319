import React from "react";

class LoginForm extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      username:'',
      password:''
    };
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submit = e =>{
    e.preventDefault()
    console.log(e)
    if (this.state.username && this.state.password) {
      return this.props.handleLogin(this.state)
    }

  }

  render() {
    return (
      <form onSubmit={event => this.submit(event)}>
        <div>
          <label>
            Username:
            <input 
              id="username" 
              name="username" 
              type="text"
              value={this.state.username}
              onChange={e => this.change(e)}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={e => this.change(e)}
            />
          </label>
        </div>
        <div>
          <button 
            type="submit"
          >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
