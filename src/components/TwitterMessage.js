import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      entry: ''
    };
  }

  changeHandler = (event) => {
    this.setState({
      entry: event.target.value
    })
  }

  remainingChars = () => {
    return (this.props.maxChars - this.state.entry.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.changeHandler} value={this.state.entry} name="message" id="message" />
        {this.remainingChars()}
      </div>
    );
  }
}

export default TwitterMessage;
