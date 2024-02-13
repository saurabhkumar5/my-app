import React, { useContext } from 'react'
import {data,ghotala} from '../App'

function Janta() {
      const name =  useContext(data)
      const naam =  useContext(ghotala)

  return (
    <>
    <h1>{name}</h1>
    <h1>{naam}</h1>
    </>
  )
}

export default Janta