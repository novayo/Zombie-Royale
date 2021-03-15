import './App.css';
import { useReducer } from 'react';
import { posContext, posInitial, posReducer } from './core';
import { objectContext, objectInitial, objectReducer } from './core';
import Facotry from './components/Facotry';
import KeyboardEvent from './components/KeyboardEvent';

function App() {
  const [pos, setPos] = useReducer(posReducer, posInitial);
  const [object, setObject] = useReducer(objectReducer, objectInitial);

  return (
    <objectContext.Provider value={{ get: object, set: setObject }}>
      <posContext.Provider value={{ get: pos, set: setPos }}>
        <KeyboardEvent />
        <div className="canvas">
          {object.map((ob, index) => (
            <Facotry key={index} type={ob} startLeft={index * 100} startTop={0} />
          ))}
        </div>
      </posContext.Provider>
    </objectContext.Provider>
  );
}

export default App;
