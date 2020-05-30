import React from 'react';
import './App.css';
import FullName from "./components/FullName/FullName";
import Message from "./components/Message/Message";

function App() {
  return (
    <div className="App">
      <FullName message="Тышкевич Михаил Казимирович"/>
      <Message name="Kenshiro" message="Omae Wa Mou Shindeiru" time="04:20"/>
    </div>
  );
}

export default App;
