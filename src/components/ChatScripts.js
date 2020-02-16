import React from 'react';
import response from '../json/response.json'
import SubChatOptions from '../components/SubChatOptions.js'
import Button from '../components/Button.js'

export default class ChatScripts extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            chatCategories: [],
            chatSubCategories: [],
            chatButtons: [],
            buttonCount: 0
        }
    }
    
    getUniqueChatTypes(){
		var lookup = {};
		var items = response;
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
    

    getChatButtons(chatType, subChatType){
        let isChatButton = responses => response.groupName === chatType && response.subGroup === subChatType;
        let chatButtons = response.filter(isChatButton)
                                  .map((currentElement)=>{
                                      return currentElement.buttons;
                                  })
        return chatButtons;                          
    }
    
    componentDidMount(){
        let chatCategories = this.getUniqueChatTypes();
        this.setState({chatCategories: chatCategories});
    }

    componentWillUnmount(){
    }

    static changeChatOptions(){
		document.getElementById('buttons').innerHTML = '';
		var chatType = document.getElementById('chatOptionsBox');
		var chatTypeOption = chatType.options[chatType.selectedIndex].value;
		var html = ''; 
		html += ChatScripts.getAllAvailableSubChatOptions(chatTypeOption);
		document.getElementById('chatSubOptions').innerHTML = html;
	}	

    render()
    {
        return (
            <div id='chatSelector'>
				<table class='table borderless'>
					<tr>
						<td>
							<label for='chatOptions'>Chat Scripts:  </label>
							<select name='chatOptions' id='chatOptionsBox' onClick = 'ChatScripts.getChatScripts()'>
                            {this.state.chatCategories.map((currentElement)=>{
								return(
                                    <option name='{currentElement}'>{currentElement}</option>);
							})
                            }
                            </select>
                        </td>
                        <td>
                            <SubChatOptions chatOptions={this.state.chatCategories} />
						</td>
					</tr>
				</table>
                <p>Current Chat button total is {this.state.chatButtons.size}</p>
				<div id='buttons' class='level1'>
                    {(() => {
                        if(this.state.buttonCount == 0) {
                            return "<tr>";
                        }
                        else if(this.state.buttonCount % 3 == 0) {
                            return "</tr><tr>";
                        }
                        })()
                    }
                    {this.state.chatButtons.map((currentElement)=>{
                        return(
                            <td>
                            <Button name="{currentElement.name}"
                                        action="{currentElement.action}"
                                        classType="{currentElement.classType}"
                                        value="{currentElement.value}"
                                        response="{currentElement.response}"
                            />
                            </td>
                        );
                    })
                }
                {
                    (() => {
                        if(this.state.buttonCount == this.state.chatButtons.size - 1) {
                            return "</ tr>";
                        }
                        })()
                    }
                </div>
            </div>
        );
    }
}

