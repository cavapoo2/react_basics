import React,{Component} from "react";
import ReactDOM from "react-dom";
import style from "./css/calc.css";

class Calculator extends Component {
	constructor(props) {
		super(props);
		this.textInput = React.createRef();
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleEval = this.handleEval.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.state = {
			view:""
		}
	}
	handleEval(event) {
		let res = "";
		let v = (this.state.view).toLowerCase();
		//this easier with current options only need to check first letter! 
		//note this is a terrible parser really!
		for(let i=0; i < v.length; i++) { 
			if(v[i] == "c" || v[i] == "s" || v[i] == "t" ||  v[i] == "p" || v[i] =="l" ){
				res = res + "Math.";
			}
			else if(v[i].charCodeAt(0) === 960)
			{
				res=res + "Math.PI";
				continue;

			}
			else if(v[i] == "e") {
				res = res + "Math.exp";
				continue;
			}

			else if(v[i].charCodeAt(0) === 8730)
			{
				res = res + "Math.sqrt";
				continue;
			}

			res = res + v[i];

		}
		console.log("comp=" + res);
		let f = eval(res).toString();
		this.setState({view:f});
	}
	handleCancel(event){
		this.setState({view:""});
	}
	handleDelete(event) {
		let c = this.state.view;
		if(c.length > 0) {
			let n = c.substr(0,c.length-1);
			this.setState({view:n})
		}


	}
	handleChange(event) {
		let v = event.target.value;
		this.setState({view:v});
	}
	handleClick(event) {
		this.textInput.current.focus();
		let c = this.state.view;
		c = c + event.target.value;
		this.setState({view:c});
		console.log(c)
		console.log(event.target.value.charCodeAt(0));
	}
	render() {
		return (
			<form name="calc" onSubmit={this.handleSubmit}>
				<table className={style.calculator} cellSpacing="0" cellPadding="1">
					<tbody>
						<tr>
							<td colSpan="5"><textarea id={style.display} name="display" value={this.state.view} onChange={this.handleChange} ref={this.textInput}/></td>
						</tr>
						<tr>
							<td><input type="button" className={style.btnTop} name="btnTop" value="C" onClick={this.handleCancel}/></td>
							<td><input type="button" className={style.btnTop} name="btnTop" value="DEL" onClick={this.handleDelete}/></td>
							<td><input type="button" className={style.btnTop} name="btnTop" value="=" onClick={this.handleEval}/></td>
							<td><input type="button" className={style.btnOpps} name="btnOpps" value="&#960;" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnMath} name="btnMath" value="%" onClick={this.handleClick}/></td>
						</tr>
						<tr>
							<td><input type="button" className={style.btnNum} name="btnNum" value="7" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnNum} name="btnNum" value="8" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnNum} name="btnNum" value="9" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnOpps} name="btnOpps" value="pow" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnMath} name="btnMath" value="/" onClick={this.handleClick}/></td>
						</tr>	
						<tr>
							<td><input type="button" className={style.btnNum} name="btnNum" value="4" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnNum} name="btnNum" value="5" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnNum} name="btnNum" value="6" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnOpps} name="btnOpps" value="e" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnMath} name="btnMath" value="*" onClick={this.handleClick}/></td>
						</tr>
						<tr>
							<td><input type="button" className={style.btnNum} name="btnNum" value="1" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnNum} name="btnNum" value="2" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnNum} name="btnNum" value="3" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnOpps} name="btnOpps" value="&#8730;" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnMath} name="btnMath" value="-" onClick={this.handleClick}/></td>
						</tr>
						<tr>
							<td><input type="button" className={style.btnNum} name="btnNum" value="0" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnNum} name="btnNum" value="." onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnMath} name="btnMath" value="log10" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnMath} name="btnMath" value="log" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnMath} name="btnMath" value="+" onClick={this.handleClick}/></td>
						</tr>
						<tr>
							<td><input type="button" className={style.btnMath} name="btnMath" value="(" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnMath} name="btnMath" value=")" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnMath} name="btnMath" value="cos" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnMath} name="btnMath" value="sin" onClick={this.handleClick}/></td>
							<td><input type="button" className={style.btnMath} name="btnMath" value="tan" onClick={this.handleClick}/></td>
						</tr>
					</tbody>
				</table>
			</form>
		)

	}
}

mod
