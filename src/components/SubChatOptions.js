import React from 'react';
import response from '../json/response.json'
import Button from '../components/Button.js'

export default class SubChatOptions extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            chatCategories: props.chatCategories,
            subChatCategories: []
        }
    }

    getSubChatTypes(chatType){
        let isChatType = responses => response.groupName === chatType;
        let subChatCategories = response.filter(isChatType)
                                        .map((currentElement)=>{
                                            return (currentElement.subGroup);
                                        })
        this.setState({chatSubCategories: subChatCategories});
        return subChatCategories;
    }

    componentDidMount()
    {
        let subChatCategories = this.getSubChatTypes(this.state.chatCategories);
        if(!subChatCategories)
        {
            subChatCategories = '';
            this.setState({subChatCategories: subChatCategories});
        }
        else
        {
            this.setState({subChatCategories: subChatCategories});
        }   
    }

    render()
    {
        return(
            <div id='chatSubOptions'>
                <label htmlFor='chatSubOptionsBox'>Chat Type:  </label>
                <select name='chatSubOptions' id='chatSubOptionsBox' onClick = 'ChatScripts.getChatButtons()'>
                        {this.state.subChatCategories.map((currentElement)=>{
                            return(
                                    <option name='{currentElement}'>{currentElement}</option>
                                );
                        })
                        }
                </select>
            </div>
        )
    }
}