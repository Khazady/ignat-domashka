import React from 'react';
import './App.css';
import FullName from "./components/FullName/FullName";
import Message from "./components/Message/Message";
import Matters from './components/Matters/Matters';

function App() {
    return (
      <div className="App">
          <FullName message="Тышкевич Михаил Казимирович"/>
          <Message name="Kenshiro" message="Omae Wa Mou Shindeiru" time="04:20"/>
          <Matters/>
      </div>
    );
}

export default App;
