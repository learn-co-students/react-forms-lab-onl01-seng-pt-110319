import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {val: '', charsLeft: this.props.maxChars};
  }

  handleChange = (event) => {
    let input = event.target.value
    this.setState({
      val: input, 
      charsLeft: this.props.maxChars - input.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleChange} value={this.state.val} />
        {this.state.charsLeft}
      </div>
    );
  }
}

export default TwitterMessage;
