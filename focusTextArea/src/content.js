import React,{Component} from "react";
import ReactDOM from "react-dom";
import style from "./div.css";//not used in this case!


class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
	this.focusTextInput = this.focusTextInput.bind(this);
	this.handleChange = this.handleChange.bind(this);
	  this.state = {
		  view:""
	}
	  
  }
 
	handleChange(event) {
		let v = event.target.value;
		this.setState({view:v});
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
	  this.textInput.current.focus();
	  
	  //do something else in this handler
	  let c = this.state.view;
	  c = c + "a";
	  this.setState({view:c});
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <textarea
          type="text"
		  ref={this.textInput}
		  value={this.state.view}	
		  onChange={this.handleChange}/>
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

module.exports=CustomTextInput
