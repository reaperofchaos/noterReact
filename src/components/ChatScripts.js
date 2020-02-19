import React from 'react';
import response from '../json/response.json'
import ButtonGroup from '../components/ButtonGroup.js'
import Selector from '../components/Selector.js'

export default class ChatScripts extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            chatCategories: [],
            chatSubCategories: [],
            chatButtons: [],
            buttonCount: 0,
            selectedCategory: '',
            selectedSubCategory: '',
        }
    }
    handleCategorySelectChange = (selectedValue) =>{
        //update the state
        this.setState({
            selectedCategory: selectedValue,
        });
        //update subCategories
        this.getSubCategories();
        //update the chat buttons and state
        this.getChatButtons();
      };

      handleSubChatSelectChange = (selectedValue) =>{
        this.setState({
            selectedSubCategory: selectedValue,
        })
        //update the chat buttons
        this.getChatButtons();
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
        this.setState({chatCategories: result}); 
	}
    
    getSubCategories(){
        let isSubCategory = response => response.groupName === this.state.selectedCategory;
        let chatSubCategories = response.filter(isSubCategory)
                                        .map((currentElement)=>{
                                            return currentElement.subGroup;
                                        })
        this.setState({chatSubCategories: chatSubCategories});
    }

    getChatButtons(){
        let isChatButton = response => response.groupName === this.state.selectedCategory && response.subGroup === this.state.selectedSubCategory;
        let chatButtons = response.filter(isChatButton)
                                  .map((currentElement)=>{
                                      return currentElement.buttons;
                                  });
        if(chatButtons[0])
        { 
            console.log(chatButtons[0])
            this.setState({chatButtons: chatButtons[0]});
        }
    } 
    
    componentDidMount(){
        this.getUniqueChatTypes();
        this.getSubCategories();
    }

    componentWillUnmount(){
    }
    
    render()
    {
        return (
            <div id='chatSelector'>
				<table className='table borderless'>
					<tbody>
                        <tr>
                            <td>
                                <label htmlFor='chatOptions'>Chat Script Categories:  </label>
                                <Selector name='chatOptions' listOptions={this.state.chatCategories} onSelectChange={this.handleCategorySelectChange} />  
                                <p>Selected Category is {this.state.selectedCategory}</p>
                            </td>
                            <td>
                                <label htmlFor='subChatOptions'>Sub Category:  </label>
                                <Selector name='subChatOptions' listOptions={this.state.chatSubCategories} onSelectChange={this.handleSubChatSelectChange} />  
                                <p>Selected SubCategory is {this.state.selectedSubCategory}</p>
                            </td>
                        </tr>
                    </tbody>
				</table>
                <h1>Chat Buttons</h1>
                <p>
                    {this.state.chatButtons.map((currentElement, index)=>{
                        return currentElement.name;
                    })}
                </p>
                <table>
                <ButtonGroup buttons={this.state.chatButtons} />
                </table>
            </div>
        );
    }
}

