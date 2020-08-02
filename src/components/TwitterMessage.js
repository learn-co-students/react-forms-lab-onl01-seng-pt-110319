import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: ''
    };
  }

  handleChange = e => {
    this.setState({
      msg: e.target.value
    })
  }

  render() {
    let maxChars = 280 - this.state.msg.length; 

    return (
      <div>
        <h3> {maxChars}</h3>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value = {this.state.msg} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
