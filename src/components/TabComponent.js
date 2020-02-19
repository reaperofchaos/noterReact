import React, { useState } from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import ChatScripts from '../components/ChatScripts.js';
import NoterSelector from '../components/NoterSelector.js';
import "bootstrap/dist/css/bootstrap.css";

export default class TabComponent extends React.Component{
    
  constructor(props) {
    super(props);
    this.state = {
      key: "ChatScripts"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(key) {
    console.log('selected' + key);
    this.setState({ key: key });
  }

  render(){
        return(
            <Tabs id="tabs" activeKey={this.state.key} onSelect={this.handleSelect}>
                <Tab eventKey="ChatScripts" title="ChatScripts">
                    <ChatScripts />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p>profile</p>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <p>contact</p>
                </Tab>
            </Tabs>
        )
    }
}
