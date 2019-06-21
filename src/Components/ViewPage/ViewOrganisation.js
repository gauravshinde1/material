import React from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import EditView from './InsidePage/EditView';
import MaterialView from './InsidePage/MaterialView';
import BillingView from './InsidePage/BillingView';

const ViewOrganisation = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div class="row">
                    <HeaderComponent headertext={'Curtis'}/>
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
