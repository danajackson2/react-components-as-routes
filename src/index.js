import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import Messages from './Messages'
import Navbar from './Navbar'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}


ReactDOM.render((
  <Router>
    <div>
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/messages' component={Messages}/>
    </div>
  </Router>),
  document.getElementById('root')
)