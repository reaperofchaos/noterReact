import React from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import response from '../json/response.json';
import Button from '../components/Button.js';

export default class TabComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {
            chatCategories: props.chatCategories,
            subChatCategories: []
        }
    }
    render(){
        return(
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Home">
                <p>home</p>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <p>profile</p>
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
                <p>contact</p>
            </Tab>
            </Tabs>
        )
    }
}
