import './App.css';
import { useState,useEffect} from 'react';

function App() {
  const [number,setNumber]=useState(0);
  const [name,setName]=useState({
  name: "",
  selected: false,
  // console.log("Compoment App is rendering");
  // console.count("Times rendered");


  // useEffect(()=>{
  //   console.log("UseEffect runs!!");
  //   document.title=`You clicked ${number} times`;
  // },[]);
  // console.count("Component rendered");

});

useEffect(()=>{
  console.log("The state has chnaged, useEffect run");
},[]);

  return (
    <div className="App">
      <span>You Clicked{number}</span>
      <button onClick={()=>setNumber(number+1)}>
        Click and Increment
        </button>
        <input onChange={(e)=>setName(e.target.value)}/>
        <input type="text" onChnage={(e)=> setName(e.target.value)}/>
        {/* <button onClick={}>Add Name</button> */}
        {/* <button></button> */}
    </div>
  );
}

export default App;
