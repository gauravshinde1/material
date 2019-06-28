import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import EditView from './InsidePage/EditView';
import MaterialView from './InsidePage/MaterialView';
import BillingView from './InsidePage/BillingView';
import DashboardLogo from '../../assets/images/logo.png';

const ViewOrganisation = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <HeaderComponent linkopen={'/dashboard'} DashboardLogo={DashboardLogo} headertext={'Curtis'}/>
                </div>
            </div>
            <div className="container-fluid main-padding">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <EditView/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <MaterialView/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <BillingView/>
                    </div>
                </div>    
            </div>
        </React.Fragment>
    )
}

export default ViewOrganisation;
