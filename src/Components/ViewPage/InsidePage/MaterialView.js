import React, { Component } from 'react';
import LargeText from '../../SmallComponent/LargeText';
import SmallMain from '../../SmallComponent/SmallMain';
import Buttoncomponent from '../../SmallComponent/Buttoncomponent';

export class MaterialView extends Component {
    // constructor(){
    //     super();
    //     this.state{
            
    //     }
    // }
    render() {
        return (
            <React.Fragment>
                <LargeText 
                    largetext={'Material Catagories'}
                />
                <SmallMain 
                    tabledata={ 'tabledata-bold' }
                    organisationname={'Material Name'}
                    totaluser={'Number of Trades'}
                    activestatus={'Active Since'}
                />
                <form>
                    <div className="col p-0">
                        <Buttoncomponent buttontype={'button'} buttonclass={'text-roboto leftsmall-button'} buttontext={'Add New Materials'} />
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default MaterialView;
