import React, { useState } from 'react'
import B from './B'
import C from './C'

const Parent = () => {
  const [city, setCity] = useState("Hyderabad");

  return (
    <div>
      <B value={city} />
      <C value={city} />
    </div>
  )
}

export default Parent
