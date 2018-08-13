import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
import  Login from './Login';
import Hello from './Hello'
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact={true} path="/" component={Login} />
	  <Route path="/hello" render= {(props) => <Hello {...props} text={"Hello"}  />}/>
    </Switch>
  </HashRouter>
  , document.getElementById('content')
);
