import React, { Component } from 'react'
import HeaderComponent from '../Header/HeaderComponent';
import AllDashComponent from './Insidepage/AllDashComponent';

export class MainDashBoard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div class="row">
                        <HeaderComponent headertext={'Curtis'} /> 
                        <AllDashComponent/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MainDashBoard;
