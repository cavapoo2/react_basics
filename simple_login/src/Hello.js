const React = require('react')
const ReactDOM = require('react-dom')


class Hello extends React.Component {
	render() {
		return <h1> {this.props.text} </h1>
	}
}
module.exports = Hello 
