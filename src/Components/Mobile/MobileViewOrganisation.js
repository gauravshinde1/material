import React, { Component } from 'react';

import HeaderComponent from '../Header/HeaderComponent';
import Buttoncomponent from '../SmallComponent/Buttoncomponent';

import mobileLogo from '../../assets/images/mobile/mobilelogo.png';
import LargeText from '../SmallComponent/LargeText';
import SmallMain from '../SmallComponent/SmallMain';
import TotalOrganisation from '../../Json/TotalOrganisation.json';

export class MobileViewOrganisation extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Buttoncomponent buttontype={'button'} buttontext={'< Back'} buttonclass={'text-roboto leftblack-button'}/>                        
                        </div>
                        <div className="col-12 mobile-postlogin">
                            <LargeText largetextclass={'mobile-text'} largetext={'Organisations'}/>
                            {/* <!-- Actual search box --> */}
                            <form>
                                <div className="form-group has-search">
                                    <span className="fa fa-search form-control-feedback"></span>
                                        <input type="text" className="form-control" placeholder="Search"/>
                                    <span className="fa fa-microphone form-control-feedbackone"></span>
                                </div>
                            </form>
                            <SmallMain tabledata={'tabledata-red'} organisationname={'Manage Organisation'}/>
                            { TotalOrganisation.map ((totalone, index) =>{
                                return <SmallMain
                                    key={totalone._id} 
                                    tabledata={ 'tabledata-light' } 
                                    onClick={this.handleOnClick}                              
                                    organisationname={totalone.name}
                                />

                                })
                            }
                        </div>
                        <HeaderComponent linkopen={'/mobile'} DashboardLogo={mobileLogo} headertext={'+ Add Organisation'} />        
                    </div>                    
                </div>                
            </React.Fragment>
        )
    }
}

export default MobileViewOrganisation;
