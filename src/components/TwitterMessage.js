import React, {Component} from "react";


class TwitterMessage extends Component{

constructor(){
  super()
  this.state={
    value:""
  };
}

handleChange=(event)=>{
this.setState({
  value: event.target.value})
}

render (){
  return(
    <div>
      <form>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} value={this.state.value} type="text"></input>
        <p>Remaining Charcters:{this.props.maxChars-this.state.value.length}</p>
      </form>
    </div>
  )
}

}

export default TwitterMessage