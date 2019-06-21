import React from 'react';
import LargeText from '../../SmallComponent/LargeText';
import SmallMain from '../../SmallComponent/SmallMain';
import InputComponent from '../../SmallComponent/InputComponent';
import Buttoncomponent from '../../SmallComponent/Buttoncomponent';

function AllDashComponent() {
    return (
        <React.Fragment>
            <div className="container-fluid main-padding dashboard-main">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <LargeText largetext={'Add Organisation'}/>
                        <SmallMain organisationname={'Organisation Details.'} tabledata={ 'tabledata-bold' }/>
                        <form >
                            <InputComponent name={'name'} type={"text"} place={"Name of Organisation"} inputclass={ 'form-control input-bottomblack' }/>
                            <InputComponent name={'url'} type={"text"} place={"URL"} inputclass={ 'form-control input-bottomblack' }/>
                            <InputComponent name={'size'} type={"text"} place={"Organisation Size"} inputclass={ 'form-control input-bottomblack' }/>
                            <InputComponent name={'email'} type={"email"} place={"Administrator Email Address"} inputclass={ 'form-control input-bottomblack' }/>
                            <SmallMain organisationname={'Billing'} tabledata={ 'tabledata-bold pt-5' }/>
                            <InputComponent name={'fees'} type={"text"} place={"Deployment Fees"} inputclass={ 'form-control input-bottomblack' }/>
                            <InputComponent name={'cost'} type={"text"} place={"Per User Cost"} inputclass={ 'form-control input-bottomblack' }/>
                            <InputComponent name={'users'} type={"text"} place={"Minimum Number of Users"} inputclass={ 'form-control input-bottomblack' }/>
                            <InputComponent name={'billingdate'} type={"date"} place={"Next Billing Date"} inputclass={ 'form-control input-bottomblack' }/>
                            <div className="col p-0">
                                <Buttoncomponent buttontype={'submit'} buttonclass={'text-roboto rightsmall-button'} buttontext={'Add Account'} />
                            </div>
                        </form>                        
                    </div>
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <LargeText/>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <LargeText largetext={'Onboarded Organisations'}/>
                        <SmallMain organisationname={'Organisation Name'} totaluser={'Number of users'} tabledata={ 'tabledata-bold' } activestatus={'Active Since'} />
                        <form>
                            <InputComponent name={'search'} type={'search'} place={'Enter Search'} inputclass={ 'form-control input-bottomblack' }/>
                            <SmallMain organisationname={'Organisation Name'} totaluser={'Number of users'} tabledata={ 'tabledata-light' } activestatus={'Active Since'} />
                            {/* {
                               TotalOrganisation.map ((total, index) =>{
                                    console.log(total);
                               })
                            } */}
                        </form>
                    </div>    
                </div>
            </div>
        </React.Fragment>
    )
}

export default AllDashComponent;
