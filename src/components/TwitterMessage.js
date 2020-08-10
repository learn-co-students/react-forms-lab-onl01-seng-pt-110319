import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentChars: props.maxChars,
      message: String()
    };
  }

  calculateRemainingChars = event => {
    this.setState({
      message: event.target.value,
      currentChars: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.calculateRemainingChars(event)} type="text" value={this.state.message} name="message" id="message" />
        <p>Remaining Characters: {this.state.currentChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
