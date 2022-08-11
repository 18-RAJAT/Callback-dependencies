import './App.css';
import { useState,useEffect} from 'react';

function App() {
  const [number,setNumber]=useState(0);
  const [name,setName]=useState('');
  // console.log("Compoment App is rendering");
  // console.count("Times rendered");

  useEffect(()=>{
    console.log("UseEffect runs!!");
    document.title=`You clicked ${number} times`;
  })

  return (
    <div className="App">
      <span>You Clicked{number}</span>
      <button onClick={()=>setNumber(number+1)}>
        Click and Increment
        </button>
        <input onChange={(e)=>setName(e.target.value)}/>
    </div>
  );
}

export default App;