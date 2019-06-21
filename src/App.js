import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import MainDashBoard from './Components/DashBoard/MainDashBoard';
import Default from './Components/Default';
import ViewOrganisation from './Components/ViewPage/ViewOrganisation';

function App() {
  return (
    <React.Fragment>
      <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/dashboard' component={MainDashBoard}/>
            <Route path='/edit' component={ViewOrganisation}/>
            <Route component={Default}/>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
