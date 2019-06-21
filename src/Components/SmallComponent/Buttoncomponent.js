import React from 'react'

const Buttoncomponent = ({
    buttontype,
    buttonclass,
    buttontext,
    onClick
}) => {
    return (
        <React.Fragment>
            <button type={buttontype} onClick={ onClick } className={buttonclass}>{buttontext}</button>
        </React.Fragment>
    )
}

export default Buttoncomponent;
