import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  
    const[userInput, setUserInput] = React.useState('');
    const[availableitems, setAvailableitems] = React.useState([]);
    const[wishlistitems, setWishlistitems] = React.useState([]);

  const addToAvailable = ()=>{
    //create avalable item object
    let avaiObj = {
      
    }
    let input = userInput;
    let newAvailable = [...availableitems]
    newAvailable.push(input)
    setAvailableitems(newAvailable)

  }
  return (
    <div className="App">
      <h2>My Wish List</h2>
      <div id="available-item">
  <h3>Available Items <span id="count-item">{availableitems.length}</span></h3>
        <input type="text" onChange={(e)=>setUserInput(e.target.value)}></input>
        <button onClick={(e)=>addToAvailable()}>Add To Available</button>
        <ul>
          
            {availableitems.map((input,index)=>
              <li key={index}>{input}{index}</li>
            )}
        
        </ul>
      </div>
      <div id="wish-list-item">
        <h3>My Wish List <span id="count-wish-list">0</span></h3>
        <button>Remove from Wish List</button>
      </div>
    </div>
  );
}

export default App;
