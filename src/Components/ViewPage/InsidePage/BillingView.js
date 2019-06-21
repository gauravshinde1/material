import React from 'react'
import LargeText from '../../SmallComponent/LargeText';
import Buttoncomponent from '../../SmallComponent/Buttoncomponent';

const BillingView = () => {
    return (
        <React.Fragment>
            <LargeText 
                largetext={'Billing Details'}
            />
            <form>
                <div className="col p-0">
                    <Buttoncomponent buttontype={'button'} buttonclass={'text-roboto leftblack-button'} buttontext={'Pause Subscriptipn'} />
                    <Buttoncomponent buttontype={'button'} buttonclass={'text-roboto rightsmall-button'} buttontext={'Edit'} />
                </div>
            </form>
        </React.Fragment>
    )
}

export default BillingView;
