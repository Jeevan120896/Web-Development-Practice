import React from 'react'
import Child from './Child'
import Childnode from './Childnode'
import Subchild from '../Subchild'

const exampleCarObject = {
  model: "Maruti",
  year: 2025,
  dealer: "Nixon",
  color: "White"
}

const person ={
    name:"Jeevan",
    age:28,
    city:"Vijayawada"
}

let KeyName ="Brand"
 let product ={
    KeyName:"Nike",
    price:2999

 }

export default function Parent() {
  return (
    <div className="container">
      <Child car={exampleCarObject} />
      <Childnode user={person}/>
      <Subchild brand={product}/>
    </div>
  )
}
