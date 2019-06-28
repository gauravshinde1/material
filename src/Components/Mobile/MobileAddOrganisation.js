import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Buttoncomponent from '../SmallComponent/Buttoncomponent';
import LargeText from '../SmallComponent/LargeText';
import HeaderComponent from '../Header/HeaderComponent';
import mobileLogo from '../../assets/images/mobile/mobilelogo.png';
import buttonimg from '../../assets/images/mobile/add.png';
import InputComponent from '../SmallComponent/InputComponent';
import { organisationValidate } from '../../store/validation/addOrganisation';

export class MobileAddOrganisation extends Component {
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
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <Buttoncomponent buttontype={'button'} buttontext={'< Back'} buttonclass={'text-roboto leftblack-button'}/>                        
                        </div>
                        <div className="col-12 mobile-postlogin">
                            <LargeText largetext={'Add Organisation'}/>
                            <form noValidate>
                                <InputComponent name={'name'} type={"text"} place={"Name of Organisation"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler} />
                                {errors.name ? <span className="is-invalid">{errors.name}</span> : ""}
                                <InputComponent name={'url'} type={"text"} place={"URL"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                                <InputComponent name={'size'} type={"text"} place={"Organisation Size"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                                <InputComponent name={'email'} type={"email"} place={"Administrator Email Address"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                                {errors.email ? <span className="is-invalid">{errors.email}</span> : ""}
                                <div className="mobile-div d-flex align-items-center justify-content-between">
                                    <h5>Billed:</h5>
                                    <div className="dropdown">
                                        <button type="button" className="btn drop-down-btn dropdown-toggle" data-toggle="dropdown">
                                        Monthly
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                        <Link className="dropdown-item" to="#">Link 1</Link>
                                        <Link className="dropdown-item" to="#">Link 2</Link>
                                        <Link className="dropdown-item" to="#">Link 3</Link>
                                        </div>
                                    </div>
                                </div>
                                <InputComponent name={'fees'} type={"text"} place={"Set up fee (one time)"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                                <InputComponent name={'cost'} type={"text"} place={"Minimum Number of users"} inputclass={ 'form-control input-bottomblack' } onChange={this.onChangeHandler}/>
                                <div className="col p-0">
                                    <Buttoncomponent buttontype={'button'} onClick={this.onSubmitHandler} buttonclass={'text-roboto rightsmall-button'} buttontext={'Add Organisation'}
                                        children={<img src={buttonimg} alt="arrow" className="ml-2"/>}
                                    />
                                </div>
                            </form>
                            
                        </div>
                        <HeaderComponent linkopen={'/mobile'} DashboardLogo={mobileLogo} headertext={'+ Add Organisation'} />        
                    </div>                    
                </div>                
            </React.Fragment>
        )
    }
}

export default MobileAddOrganisation;
