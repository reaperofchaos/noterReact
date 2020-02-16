import React from 'react';
import buttons from '../json/buttons.json'

export default class NoterSelector extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            noterCategories: []
        }
    }
    getUniqueNoteTypes(){
		var lookup = {};
		var items = buttons;
		var result = [];
		for (var item, i = 0; item = items[i++];) {
			var name = item.groupName;
			if (!(name in lookup)) {
				lookup[name] = 1;
				result.push(name);
			}
		}
		return result; 
    }
    
    componentDidMount(){
        let buttonList = this.getUniqueNoteTypes();
        this.setState({noterCategories: buttonList});
    }

    componentWillUnmount(){
    }

    render()
    {
        return (
            <p>
                Noter Selector goes here
                <table class="table borderless">
                    <tbody>
                        <tr>
                            {this.state.noterCategories.map((currentElement)=>{
								return(
                                <td> 
                                    <input 
                                        type="radio" 
                                        onClick="NoterCategory.create(this)" 
                                        id="notetype" 
                                        name="notetype" 
                                        value={currentElement} />
                                </td>
                                )
                                 })}
                        </tr>
                        <tr>
                        {this.state.noterCategories.map((currentElement)=>{
								return(
                                <td> 
                                  {currentElement}
                                </td>
                                )
                                 })}
                        </tr>
                    </tbody>    
                </table> 
            </p>
        );
    }
}

