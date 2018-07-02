const React = require('react')
const ReactDOM = require('react-dom')


class Header2 extends React.Component {
	render() {
		return <h2> {this.props.text} </h2>
	}
}
module.exports = Header2 
