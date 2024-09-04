import { useState } from "react"

function App() {

  return (
    <>
      <CarWrapper innerComponent={<TextComponent/>}></CarWrapper>
    </>
  )
}

function CarWrapper({innerComponent}){
  return <div style={{border:"2px solid black"}}>
    {innerComponent}
    </div>
}

function TextComponent(){
  return <div>
      <h1>Hi there!</h1>
  </div>
}


export default App
