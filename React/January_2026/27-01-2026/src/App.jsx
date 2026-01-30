import { useState } from 'react'
import FirstComp from './propCotainer/FirstComp'
import SecondComp from './propCotainer/SecondComp'
import ThirdComp from './propCotainer/ThirdComp'
import FourthComp from './propCotainer/FourthComp'


// const user={
//   name:"Ram",
//   city:"Vijayawada",
//   Area:"Ajit Singh Nagar"
// }

const myCar = {
  model: "Maruti",
  year: 2025,
  dealer: "Nixon",
  color: "White"
}

const person ={
  name: "Jeevan",
  age: 28,
  city: "Vijayawada"
}

function App() {
 
 

  return (

    <div className="container">
    {/* <FirstComp name="Jeevan"/> 
    <SecondComp name="SaiRam"/> */}
     <ThirdComp value={person}/>
    {/* <FourthComp name={user.Area}/> 
    <SecondComp name={myCar}/> */}
    </div>
  )
}

export default App
