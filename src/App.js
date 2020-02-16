import React from 'react';
import './App.css';
import ChatScripts from './components/ChatScripts.js'
import NoterSelector from './components/NoterSelector';

function App() {
  return (
    <div className="Noter">
      <header className="App-header">
        <p>
          Noter
        </p>
      </header>
        <ChatScripts />
        <NoterSelector />
    </div>
  );
}

export default App;
