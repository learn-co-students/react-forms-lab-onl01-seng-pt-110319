import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: ''
    };
  }

  handleChange = event => {
    this.setState({
      maxChars: event.target.value
    })
  }

  render() {
    let charsLeft = this.props.maxChars - this.state.maxChars.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.maxChars}/>
        {charsLeft}
      </div>
    );
  }
}

export default TwitterMessage;
