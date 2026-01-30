import React from 'react'
import F from './F'
import G from './G'

const C = ({ value }) => {
  return (
    <div>
      <F value={value} />
      <G value={value} />
    </div>
  )
}

export default C
