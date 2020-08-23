import React from 'react'
import SlotM from './SlotM.jsx'





const App = ()=>{

  return(
    <>
    <h1 className="heading_style"> 🎰<span style={{fontWeight:"bold"}}> machine</span> hey guys bacha  </h1>
    <div className="slotmachine">
      <SlotM x='😄' y='😄' z='😄'/>
      <hr/>
      <SlotM x='😄' y='😸' z= '🐶'/>
      <hr/>
      <SlotM x='🍎' y='🍌' z='🇦🇷'/>
      <hr/>
    </div>
    </>
  )

}

export default App;