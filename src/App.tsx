import React from 'react';
import './App.css';
import FullName from "./components/HomeWork1/FullName/FullName";
import Message from "./components/HomeWork1/Message/Message";
import Matters from './components/HomeWork2/Matters/Matters';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import HomeWork3 from "./components/HomeWork3/HomeWork3";
import { HomeWork4 } from './components/HomeWork4/HomeWork4';
import { HomeWork5 } from './components/HomeWork5-6/HomeWork5';
import {HomeWork7} from "./components/HomeWork7/HomeWork7";

function App() {
    return (

      <HashRouter>
          <div className="header">
              <NavLink exact to="/homework_1" className="hw" activeClassName="hw-active">Homework №1 </NavLink>
              <NavLink exact to="/homework_2" className="hw" activeClassName="hw-active">Homework №2 </NavLink>
              <NavLink exact to="/homework_3" className="hw" activeClassName="hw-active">Homework №3</NavLink>
              <NavLink exact to="/homework_4" className="hw" activeClassName="hw-active">Homework №4</NavLink>
              <NavLink exact to="/homework_5_6" className="hw" activeClassName="hw-active">Homework №5-6</NavLink>
              <NavLink exact to="/homework_7" className="hw" activeClassName="hw-active">Homework №7</NavLink>
          </div>
          <div className="App">
              <Route path="/homework_1" render={() => <FullName message="Тышкевич Михаил Казимирович"/>}/>
              <Route path="/homework_1"
                     render={() => <Message name="Kenshiro" message="Omae Wa Mou Shindeiru" time="04:20"/>}/>
              <Route path="/homework_2" render={() => <Matters/>}/>
              <Route path="/homework_3" render={() => <HomeWork3/>}/>
              <Route path="/homework_4" render={() => <HomeWork4/>}/>
              <Route path="/homework_5_6" render={() => <HomeWork5/>}/>
              <Route path="/homework_7" render={() => <HomeWork7/>}/>
          </div>
      </HashRouter>

    );
}

export default App;
