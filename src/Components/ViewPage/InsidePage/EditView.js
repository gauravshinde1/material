import React from 'react'
import LargeText from '../../SmallComponent/LargeText';
import SmallMain from '../../SmallComponent/SmallMain';
import InputComponent from '../../SmallComponent/InputComponent';
import Buttoncomponent from '../../SmallComponent/Buttoncomponent';

const EditView = () => {
    return (
        <React.Fragment>
                <LargeText 
                    largetext={'Edit Organisation'}
                />
                <SmallMain 
                    organisationname={'Organisation Details.'} 
                    tabledata={ 'tabledata-bold' }
                />
                <form>
                    <InputComponent name={'name'} type={"text"} place={"Name of Organisation"} inputclass={ 'form-control input-bottomblack' }/>
                    <InputComponent name={'url'} type={"text"} place={"URL"} inputclass={ 'form-control input-bottomblack' }/>
                    <InputComponent name={'size'} type={"text"} place={"Organisation Size"} inputclass={ 'form-control input-bottomblack' }/>
                    <InputComponent name={'email'} type={"email"} place={"Administrator Email Address"} inputclass={ 'form-control input-bottomblack' }/>
                    <div className="col p-0">
                        <Buttoncomponent buttontype={'button'} buttonclass={'text-roboto leftsmall-button'} buttontext={'Delete Organisation'} />
                        <Buttoncomponent buttontype={'button'} buttonclass={'text-success text-roboto rightsmall-button'} buttontext={'Update Organisation'} />
                    </div>
                </form>
        </React.Fragment>
    )
}

export default EditView;
