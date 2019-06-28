import React, { Component } from 'react';

import LargeText from '../../SmallComponent/LargeText';
import SmallMain from '../../SmallComponent/SmallMain';
import InputComponent from '../../SmallComponent/InputComponent';
import Buttoncomponent from '../../SmallComponent/Buttoncomponent';
import { organisationValidate } from '../../../store/validation/addOrganisation';
import TotalOrganisation from '../../../Json/TotalOrganisation.json';
import { Redirect } from 'react-router';

export class AllDashComponent extends Component {

    constructor(){
        super();
        this.state={
            name: "",
            url: "",
            size: "",
            email: "",
            fees: "",
            cost: "",
            users: "",
            billingdate: "",
            errors: {}
        };
    }        
    onChangeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value,
            errors:{}
        })
    }
    onSubmitHandler = (e) =>{
        e.preventDefault();
        const { errors, isValid } = organisationValidate(this.state);
        if (!isValid){
            this.setState({
                errors: errors
            });
        }
        else{
            console.log(this.state);
        }
    }

    handleOnClick = () => {
        this.setState({redirect: true});
    }

    render() {
        let errors = this.state.errors;
        console.log(this.state.errors);
        return (
            <React.Fragment>
            <div className="container-fluid main-padding dashboard-main">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                        <LargeText largetext={'Add Organisation'}/>
                        <SmallMain organisationname={'Organisation Details.'} tabledata={ 'tabledata-bold' }/>
                        <form noValidate>
                            <InputComponent name={'name'} type={"text"} place={"Name of Organisation"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler} />
                            {errors.name ? <span className="is-invalid">{errors.name}</span> : ""}
                            <InputComponent name={'url'} type={"text"} place={"URL"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                            <InputComponent name={'size'} type={"text"} place={"Organisation Size"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                            <InputComponent name={'email'} type={"email"} place={"Administrator Email Address"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                            {errors.email ? <span className="is-invalid">{errors.email}</span> : ""}
                            <SmallMain organisationname={'Billing'} tabledata={ 'tabledata-bold pt-5' }/>
                            <InputComponent name={'fees'} type={"text"} place={"Deployment Fees"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                            <InputComponent name={'cost'} type={"text"} place={"Per User Cost"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                            <InputComponent name={'users'} type={"text"} place={"Minimum Number of Users"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                            <InputComponent name={'billingdate'} type={"date"} place={"Next Billing Date"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                            <div className="col p-0">
                                <Buttoncomponent buttontype={'button'} onClick={this.onSubmitHandler} buttonclass={'text-roboto rightsmall-button'} buttontext={'Add Account'} />
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
                         </form>
                        { TotalOrganisation.map ((total, index) =>{
                            if (this.state.redirect) {
                                return <Redirect push to="/edit" />;
                            }
                            return <SmallMain
                                key={total._id} 
                                tabledata={ 'tabledata-light' } 
                                onClick={this.handleOnClick}                              
                                organisationname={total.name}
                                totaluser={total.totaluser}
                                activestatus={total.activedate}
                            />

                            })
                        }
                     </div>    
                 </div>
             </div>
         </React.Fragment>
        )
    }
}

export default AllDashComponent;

