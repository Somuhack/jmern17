import React from 'react'
import Home from "./Home"
import { useContext } from 'react'
import { Mycontext } from '../App'
const Login = () => {
const {name,setName} = useContext(Mycontext)

  return (
    <div>Login{name && <Home />}
      <button onClick={()=>setName("Plabon")}>Login</button>
    </div>
  )
}

export default Login