import React from "react";
import ReactDOM from "react-dom";
import style from "./div.css";

class Content extends React.Component {
	render() {
		return <div className={style.background} >Hello</div>
	}
}

module.exports=Content
