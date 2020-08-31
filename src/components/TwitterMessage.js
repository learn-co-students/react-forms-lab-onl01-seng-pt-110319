import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: ''
    };
  }

  handleInputChanges = event => {
    this.setState({
      maxChars: event.target.value
    })
  }

  render() {
    let remainingChars = this.props.maxChars - this.state.maxChars.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleInputChanges(event)} value={this.state.maxChars} />
        <p>Remaining Characters Left: {remainingChars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
