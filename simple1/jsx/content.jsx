const React = require('react')
const ReactDOM = require('react-dom')
const H1 = require('./header1.jsx')
const H2 = require('./header2.jsx')
const H3 = require('./header3.jsx')
const Para = require('./paragraph.jsx')

class Content extends React.Component {
	render() {
		return (
			<div className="plutonium">
			<H1 text="Plutonium"/>
			<Para className="warning" text="Useful for many applications, but dangerous"/>
			<H2 text="Safety Information"/>
			<Para text="Avoid formation of critical mass"/>
			<H3 text="Comments"/>
			<Para id="important" text="Best to avoid it"/>
		</div>
		)

	}
}

module.exports= Content
