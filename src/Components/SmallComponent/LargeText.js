import React from 'react'

const LargeText = ({
    largetext
}) => {
    return (
        <React.Fragment>
            <div className="col-12 large-text">
                {largetext ? <h4 className="text-roboto">{largetext}</h4> : null }                
            </div>
        </React.Fragment>
    )
}

export default LargeText;
