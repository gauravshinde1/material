import React from 'react';
import { Link } from 'react-router-dom'
import DashboardLogo from '../../assets/images/logo.png';

const HeaderComponent = ({
    homelink,
    mobilelink,
    headertext
    //linkclass
}) => {
    return (
        <React.Fragment>
            <div className="container-fluid mt-3 header-main">
                <div class="row">
                    <div className="w-100 divheading">
                        <Link to={homelink}><img src={DashboardLogo} class="img-fluid" alt="Dashboard Logo" /></Link>
                        {/* <Link to={homelink}><img src={DashboardLogo} class={`img-fluid ${linkclass}`} alt="Dashboard Logo" /></Link> */}
                        <Link to={mobilelink} className="header-anchor" ><h4 className="text-roboto">{headertext}</h4></Link>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeaderComponent
