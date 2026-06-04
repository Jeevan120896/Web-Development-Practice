import React from 'react'
import D from './D'
import E from './E'

const B = ({ value }) => {
  return (
    <div>
      <D value={value} />
      <E value={value} />
    </div>
  )
}

export default B
