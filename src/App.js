import { useState } from 'react';
import './App.css';

function App() {
  const [activeLight, setActiveLight] = useState(null);

  return (
    <div className="container">
      <h1>Traffic Light</h1>
      <div className="outer-circle">
        <div className="circle1" style={{ backgroundColor:activeLight === 'red'?'red':'white' }}></div>
        <div className="circle2" style={{ backgroundColor:activeLight === 'yellow'?'yellow':'white' }}></div>
        <div className="circle3" style={{ backgroundColor:activeLight === 'green'? 'green': 'white' }}></div>
      </div>
      <div className="buttons">
        <button className="b1" onClick={() =>setActiveLight('red')}>Red</button>
        <button className="b2" onClick={() =>setActiveLight('yellow')}>Yellow</button>
        <button className="b3" onClick={() =>setActiveLight('green')}>Green</button>
      </div>
    </div>
  );
}

export default App;