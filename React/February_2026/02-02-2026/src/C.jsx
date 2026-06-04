import React, { useContext } from 'react'
import { CityContext } from './Createcontext'

const C = () => {
  const { city, setCity } = useContext(CityContext)

  return (
    <div>
      <h1>Welcome - {city}</h1>
      <button onClick={() => setCity("Bangalore")}>
        Change to Bangalore
      </button>
    </div>
  )
}

export default C
