const React = require('react')
const ReactDOM = require('react-dom')


class Paragraph extends React.Component {
	render() {
		return <p className={this.props.className} id={this.props.id}> {this.props.text} </p>
	}
}
module.exports = Paragraph 
