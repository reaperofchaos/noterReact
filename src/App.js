import React from 'react';
//import './css/noter.css';
import ChatScripts from './components/ChatScripts.js'
import NoterSelector from './components/NoterSelector';
import TabComponent from './components/TabComponent.js'; 
import {Tab, Tabs} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="Noter">
      <header className="App-header">
        <p>
          Noter
        </p>
      </header>
      
        <TabComponent />
        <NoterSelector />
    </div>
  );
}

export default App;
