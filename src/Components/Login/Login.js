import React, { Component } from 'react';
import Logo from '../../assets/images/logo.png';
import InputComponent from '../SmallComponent/InputComponent';
import Buttoncomponent from '../SmallComponent/Buttoncomponent';

export class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 login-align">
                            <form >
                                <img src={Logo} className="img-fluid" alt="Materiely Logo" />
                                <InputComponent name={'email'} type={"email"} place={"email address"} inputclass={ 'form-control input-bottomblack' }/>
                                <InputComponent name={'password'} type={"password"} place={"password"} inputclass={ 'form-control input-bottomblack' }/>
                                <div className="col p-0">
                                    <Buttoncomponent buttontype={'button'} buttonclass={'text-roboto forgot-button'} buttontext={'Forgot password?'} />
                                </div>
                                <div className="col p-0">
                                    <Buttoncomponent buttontype={'submit'} buttonclass={'text-roboto login-button'} buttontext={'Login'} />
                                </div>
                            </form>
                        </div>    
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Login;
