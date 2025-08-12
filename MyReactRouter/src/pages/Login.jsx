import React from 'react'
import { useContext } from 'react'
import { ThemeContextApi } from '../Api/ThemeContextApi'
const Login = () => {
  const { data } = useContext(ThemeContextApi)
  return (
    <div>Login : {data}</div>
  )
}

export default Login