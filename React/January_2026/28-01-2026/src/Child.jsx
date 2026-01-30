import React from 'react'
import Childnode from './Childnode'

const Child = ({car,user}) => {
  const { model, year, dealer, color} = car

  const fruitObj = {
    fruit: "orange"
  };

  return (
    <section>
      <div>Model: {model}</div>
      <div>Year: {year}</div>
      <div>Dealer: {dealer}</div>
      <div>Color: {color}</div>

       <h2>User & Fruit Information</h2>
      <Childnode user={user} value={fruitObj} />
      
    </section>
  )
}

export default Child
