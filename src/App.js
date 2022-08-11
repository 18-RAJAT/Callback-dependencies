import './App.css';
import { useState } from 'react';

function App() {
  const [number,setNumber]=useState(0);
  console.log("Compoment App is rendering");
  // console.count("Times rendered");

  return (
    <div className="App">
      <span>You Clicked{number}</span>
      <button onClick={()=>setNumber(number+1)}>
        Click and Increment
        </button>
    </div>
  );
}

export default App;