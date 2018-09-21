import React, { Component } from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import NavBar from './component/layout/NavBar'
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetail from './component/project/ProjectDetail'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp'

class App extends Component {
  render() {
    return (
      <BrowserRouter>

      <div className="App">
      <NavBar/>
      <Switch>
      <Route path='/' exact component={Dashboard}/>
      <Route path='/project/:id' component={ProjectDetail}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/signup' component={SignUp}/>
      </Switch>
      </div>

      </BrowserRouter>
    );
  }
}

export default App;
