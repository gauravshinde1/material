import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login';
import MainDashBoard from './Components/DashBoard/MainDashBoard';
import Default from './Components/Default';
import ViewOrganisation from './Components/ViewPage/ViewOrganisation';
import PostLoginMain from './Components/Mobile/PostLoginMain';
import MobileAddOrganisation from './Components/Mobile/MobileAddOrganisation';
import MobileViewOrganisation from './Components/Mobile/MobileViewOrganisation';

function App() {
  return (
    <React.Fragment>
      <Router>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/dashboard' component={MainDashBoard}/>
            <Route exact path='/edit' component={ViewOrganisation}/>
            <Route exact path='/mobile' component={PostLoginMain}/>
            <Route exact path='/mobileaddorganisation' component={MobileAddOrganisation}/>
            <Route exact path='/mobilevieworganisation' component={MobileViewOrganisation}/>
            <Route component={Default}/>
          </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
