import React from 'react';
import './App.css';
import FullName from "./components/HomeWork1/FullName/FullName";
import Message from "./components/HomeWork1/Message/Message";
import Matters from './components/HomeWork2/Matters/Matters';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import HomeWork3 from "./components/HomeWork3/HomeWork3";

function App() {
    return (

      <BrowserRouter>
          <div className="header">
              <NavLink exact to="/homework_1" className="hw" activeClassName="hw-active">Homework №1 </NavLink>
              <NavLink exact to="/homework_2" className="hw" activeClassName="hw-active">Homework №2 </NavLink>
              <NavLink exact to="/homework_3" className="hw" activeClassName="hw-active">Homework №3</NavLink>
          </div>
          <div className="App">
              <Route path="/homework_1" render={() => <FullName message="Тышкевич Михаил Казимирович"/>}/>
              <Route path="/homework_1"
                     render={() => <Message name="Kenshiro" message="Omae Wa Mou Shindeiru" time="04:20"/>}/>
              <Route path="/homework_2" render={() => <Matters/>}/>
              <Route path="/homework_3" render={() => <HomeWork3/>}/>
          </div>
      </BrowserRouter>

    );
}

export default App;
