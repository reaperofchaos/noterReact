import React from 'react';
import Button from '../components/Button.js';

export default class ButtonGroup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                buttons: this.props.buttons
        }        
    }

    render(){
        return(
            this.state.buttons.map((currentElement, index)=>{
                    return(    
                        <tr>
                            <td>
                                <Button key={index}
                                            name={currentElement.name}
                                            action={currentElement.action}
                                            classType={currentElement.classType}
                                            value={currentElement.value}
                                            response={currentElement.response}
                                />
                            </td>
                        </tr>
                    )
            })
        );
    }

}