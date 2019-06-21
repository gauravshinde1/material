import React from 'react';

const SmallMain = ({
    organisationname,
    totaluser,
    activestatus,
    tabledata,
    onClick
}) => {
    return (
        <React.Fragment>
            <table className="table">
                <tbody>
                    <tr onClick={ onClick } >
                        { organisationname ? <td className={ tabledata }>{ organisationname }</td> : null }
                        { totaluser ? <td className={ `text-center ${tabledata}` }>{ totaluser }</td> : null }
                        { activestatus ? <td className={ `text-center ${tabledata}` }>{ activestatus }</td> : null }
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default SmallMain;
