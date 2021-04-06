import './App.css';
import { useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { usernameContext, initialUsername, usernameReducer } from './core';
import { passwordContext, initialPassword, passwordReducer } from './core';
import { roomContext, initialRoom, roomReducer } from './core';

import Welcome from './components/Welcome'
import Join from './components/Join'
import Room from './components/Room'
import Play from './components/Play'
import Win from './components/Win'
import Lose from './components/Lose'

function App() {
  const [curUsername, setCurUsername] = useReducer(usernameReducer, initialUsername);
  const [curPassword, setCurPassword] = useReducer(passwordReducer, initialPassword);
  const [curRoom, setCurRoom] = useReducer(roomReducer, initialRoom);

  return (
    <usernameContext.Provider value={{ get: curUsername, set: setCurUsername }}>
      <passwordContext.Provider value={{ get: curPassword, set: setCurPassword }}>
        <roomContext.Provider value={{ get: curRoom, set: setCurRoom }}>
          <Router>
            <Route path='/' exact component={Welcome} />
            <Route path='/join' component={Join} />
            <Route path='/room' component={Room} />
            <Route path='/play' component={Play} />
            <Route path='/win' component={Win} />
            <Route path='/lose' component={Lose} />
          </Router>
        </roomContext.Provider>
      </passwordContext.Provider>
    </usernameContext.Provider>
  );
}

export default App;
