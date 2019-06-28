import React, { Component } from 'react'
import HeaderComponent from '../Header/HeaderComponent';
import AllDashComponent from './Insidepage/AllDashComponent';
import DashboardLogo from '../../assets/images/logo.png';

export class MainDashBoard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <HeaderComponent linkopen={'/dashboard'} DashboardLogo={DashboardLogo} headertext={'Curtis'} /> 
                        <AllDashComponent/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MainDashBoard;
