import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleTxtChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    
    let charNums = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTxtChange(event)} value={this.state.message}/>
        {charNums}
      </div>
    );
  }
}

export default TwitterMessage;
