import React, { Component } from 'react';

import mobileLogo from '../../assets/images/mobile/mobilelogo.png';
import Buttoncomponent from '../SmallComponent/Buttoncomponent';
import LargeText from '../SmallComponent/LargeText';
import SmallMain from '../SmallComponent/SmallMain';

import HeaderComponent from '../Header/HeaderComponent';

export class PostLoginMain extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Buttoncomponent buttontype={'button'} buttontext={'< Back'} buttonclass={'text-roboto leftblack-button'}/>                        
                        </div>
                        <div className="col-12 mobile-postlogin">
                            <LargeText largetext={'Hello Super'}/>
                            <SmallMain tabledata={'text-roboto tabledata-bold'} organisationname={'Manage Organizations'}/>
                            <SmallMain tabledata={'text-roboto tabledata-light'} organisationname={'Archives'}/>
                            <div className="mobile-div"></div>
                            <SmallMain tabledata={'text-roboto tabledata-light'} organisationname={'Profile'}/>
                        </div>
                        <HeaderComponent linkopen={'/mobile'} DashboardLogo={mobileLogo} headertext={'+ Add Organisation'} />        
                    </div>                    
                </div>                
            </React.Fragment>
        )
    }
}

export default PostLoginMain;
