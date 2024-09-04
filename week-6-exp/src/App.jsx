function App() {

  return (
    <>
      <CarWrapper>
        Hi There
      </CarWrapper>
    </>
  )
}

function CarWrapper({children}){
  return <div style={{border:"2px solid black"}}>
    {children}
    </div>
}

export default App
