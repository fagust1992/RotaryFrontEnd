import React from 'react'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

export const UseAuth = () => {
  return (
   useContext(AuthContext)
  )
}
export default UseAuth;