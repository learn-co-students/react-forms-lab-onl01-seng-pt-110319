import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: ''
    };
  }

  inputChange = (event) => {
    this.setState({
      maxChars: event.target.value
    })
  }

  render() {
    let leftChars = this.props.maxChars - this.state.maxChars.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.inputChange(event)} value={this.state.maxChars} />
        {leftChars}
      </div>
    );
  }
}

export default TwitterMessage;
