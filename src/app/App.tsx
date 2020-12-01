import React from 'react';
import './App.css';
import FullName from "../components/HomeWork1/FullName/FullName";
import Message from "../components/HomeWork1/Message/Message";
import Matters from '../components/HomeWork2/Matters/Matters';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import HomeWork3 from "../components/HomeWork3/HomeWork3";
import {HomeWork4} from '../components/HomeWork4/HomeWork4';
import {HomeWork5} from '../components/HomeWork5-6/HomeWork5';
import {HomeWork7} from "../components/HomeWork7/HomeWork7";
import {HomeWork8} from '../HomeWork8/homeWork8';
import {HomeWork9} from '../HomeWork9/homeWork9';
import {HomeWork10} from "../HomeWork10/HomeWork10";
import {HomeWork11} from '../HomeWork11/HomeWork11';
import {HomeWork12} from '../HomeWork12/HomeWork12';
import { HomeWork13 } from '../HomeWork13/HomeWork13';

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
              <NavLink exact to="/homework_8" className="hw" activeClassName="hw-active">Homework №8</NavLink>
              <NavLink exact to="/homework_9" className="hw" activeClassName="hw-active">Homework №9</NavLink>
              <NavLink exact to="/homework_10" className="hw" activeClassName="hw-active">Homework №10</NavLink>
              <NavLink exact to="/homework_11" className="hw" activeClassName="hw-active">Homework №11</NavLink>
              <NavLink exact to="/homework_12" className="hw" activeClassName="hw-active">Homework №12</NavLink>
              <NavLink exact to="/homework_13" className="hw" activeClassName="hw-active">Homework №13</NavLink>
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
              <Route path="/homework_8" render={() => <HomeWork8/>}/>
              <Route path="/homework_9" render={() => <HomeWork9/>}/>
              <Route path="/homework_10" render={() => <HomeWork10/>}/>
              <Route path="/homework_11" render={() => <HomeWork11/>}/>
              <Route path="/homework_12" render={() => <HomeWork12/>}/>
              <Route path="/homework_13" render={() => <HomeWork13/>}/>
          </div>
      </HashRouter>

    );
}

export default App;
