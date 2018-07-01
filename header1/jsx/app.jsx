require('../css/main.css')

const React = require('react')
const ReactDOM = require ('react-dom')
const H1 = require('./header1.jsx')


ReactDOM.render(
  <H1 text="hello" />,
  document.getElementById('content')
)
