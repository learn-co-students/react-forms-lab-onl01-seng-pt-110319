import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      charCount: this.props.maxChars
    };
  }
  change = e => {
    this.setState({
      [e.target.name]: e.target.value,
      charCount: this.props.maxChars - e.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text" 
          name="message" 
          id="message"
          value={this.state.message} 
          onChange={e => this.change(e)}
        />
        <p><strong>Remaining Characters:</strong> {this.state.charCount}</p>
      </div>
    );
  }
}

export default TwitterMessage;