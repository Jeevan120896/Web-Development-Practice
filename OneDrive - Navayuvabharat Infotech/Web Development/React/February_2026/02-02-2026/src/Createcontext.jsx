import React, { useState, createContext } from 'react'
import A from './A'
import B from './B'

export const CityContext = createContext()

const Createcontext = () => {
  const [city, setCity] = useState("Hyderabad")

  return (
    <CityContext.Provider value={{ city, setCity }}>
      <A />
      <B />
    </CityContext.Provider>
  )
}

export default Createcontext




