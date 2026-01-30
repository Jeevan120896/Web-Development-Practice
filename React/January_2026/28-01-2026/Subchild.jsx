import React from 'react'

const Subchild = ({brand}) => {
    let {KeyName, price}=brand
  return (
    <section>
    <div>KeyName:{KeyName}</div>
     <div>Price:{price}</div>
    </section>
  )
}

export default Subchild
