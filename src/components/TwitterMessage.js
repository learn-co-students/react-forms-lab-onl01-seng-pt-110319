import React from "react";

class TwitterMessage extends React.Component {

  constructor(props) {
    super()
    this.state = {
      maxChars: props.maxChars, 
      charsLeft: props.maxChars,
      message: ""
    }
  }

  handleChange = event => {
    let clickCount = event.target.value.length
    this.setState({
      charsLeft: this.state.maxChars - clickCount,
      message: event.target.value
    })
  }


  render() {
    return (
      <div>
      Characters Left: {this.state.charsLeft}
      <br/>
      <br/>
    
        <strong>Your message:</strong>

        <input 
          type="text"
          onChange={event => this.handleChange(event)}
          name="message" 
          value={this.state.message}
          id="message" 
        />

      </div>
    );
  }
}

export default TwitterMessage;
