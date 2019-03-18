import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import ProjectsContainer from './components/projectsContainer.jsx'
import NotFound from './NotFound'
import './manifest.scss'

class App extends Component {
  render () {
    return <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/tommy-admin' exact component={ProjectsContainer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  }
}

export default App
