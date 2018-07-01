const React = require('react')
const ReactDOM = require('react-dom')


class Header1 extends React.Component {
	render() {
		return <h1> {this.props.text} </h1>
	}
}
module.exports = Header1 
