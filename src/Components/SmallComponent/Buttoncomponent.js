import React from 'react'

const Buttoncomponent = ({
    buttontype,
    buttonclass,
    buttontext,
    onClick,
    children
}) => {
    return (
        <React.Fragment>
            <button type={buttontype} onClick={ onClick } className={buttonclass}>{buttontext}{children}</button>
        </React.Fragment>
    )
}

export default Buttoncomponent;
