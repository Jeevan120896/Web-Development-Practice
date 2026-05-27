import React, { useContext } from 'react'
import { CityContext } from './Createcontext'

const F = () => {
  const { city } = useContext(CityContext)

  return (
    <div>
      <h4>Jeevan lives in {city}</h4>
    </div>
  )
}

export default F
