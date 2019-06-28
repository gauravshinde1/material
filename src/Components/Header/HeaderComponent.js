import React from 'react';
import { Link } from 'react-router-dom'

const HeaderComponent = ({
    homelink,
    mobilelink,
    DashboardLogo,
    headertext,
    linkopen
}) => {
    return (
        <React.Fragment>
            <div className="container-fluid mt-3 header-main">
                <div className="row">
                    <div className="w-100 divheading">
                        <Link to={linkopen}><img src={DashboardLogo} className="img-fluid" alt="Dashboard Logo" /></Link>
                        {/* <Link to={homelink}><img src={DashboardLogo} class={`img-fluid ${linkclass}`} alt="Dashboard Logo" /></Link> */}
                        <Link to={linkopen} className="header-anchor" ><h4 className="text-roboto">{headertext}</h4></Link>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default HeaderComponent
