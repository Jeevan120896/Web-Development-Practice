import React, { useContext } from 'react'
import { CityContext } from './Createcontext'

const E = () => {
  const { city, setCity } = useContext(CityContext)

  return (
    <div>
      <h3>NYB Infotech - {city}</h3>
      <button onClick={() => setCity("Chennai")}>
        Change to Chennai
      </button>
    </div>
  )
}

export default E
