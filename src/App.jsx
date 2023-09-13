import { useState } from 'react'
import {puppyList} from './data.js'
import './App.css'
import './index.css'



function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  // null so you can conditionally render an element in your JSX code

  console.log("puppyList: ", puppyList);

  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);
  
function handleClick() {
    // some logic here
  }

  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1> Puppy List </h1>
      
      {
        puppies.map((puppy) => {
          return <p> {puppy.name} </p>
          return <p onClick={handleClick} key ={puppy.id}> {puppy.name} </p>
        })
      };
      { featPupId && (
        <div className="featPup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      
      </div>
    
    </>
  );
}

export default App;
