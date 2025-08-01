import React from 'react'
import { useContext } from 'react'
import { Mycontext } from '../App'
const Profile = () => {
    const {name} = useContext(Mycontext)
  return (
    <div>Profile:{name}</div>
  )
}

export default Profile