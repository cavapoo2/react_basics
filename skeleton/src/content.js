import React,{Component} from "react";
import ReactDOM from "react-dom";
import style from "./div.css";

class Content extends Component {
	render() {
		return <div className={style.background} >Hello</div>
	}
}

module.exports=Content
