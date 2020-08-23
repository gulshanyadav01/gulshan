import React from 'react';

let count =1;
const IncNum = () =>{
  console.log("clicked " +count++);
  // count++;
}

const App =() =>{

  return (
    <>
    <h1>{count}</h1>
    <button onClick={IncNum}> click me </button>
    </>
  );

}
export default App;