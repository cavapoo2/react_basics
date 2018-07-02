const React = require('react')
const ReactDOM = require('react-dom')


class Header3 extends React.Component {
	render() {
		return <h3> {this.props.text} </h3>
	}
}
module.exports = Header3 
