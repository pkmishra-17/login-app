import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path = "/" component = {Login}/>
      <Route path = "/Admin" component = {Admin}/>
      <Route path = "/Logout" component = {Logout}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
