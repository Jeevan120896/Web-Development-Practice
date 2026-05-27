import React, { useContext } from 'react'
import { CityContext } from './Createcontext'

const D = () => {
  const { city } = useContext(CityContext)

  return (
    <div>
      <h2>Hello - {city}</h2>
    </div>
  )
}

export default D
