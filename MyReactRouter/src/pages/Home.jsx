import React from 'react'
import { useContext } from 'react'
import { ThemeContextApi } from '../Api/ThemeContextApi'
import { ContextApi } from '../Api/ContextApi'
const Home = () => {
  const {data,setData} = useContext(ThemeContextApi)
  const data2 = useContext(ContextApi)
  console.log(data);
  const handleTheme = () => {
    setData("Dark")
  }
  
  return (
    <div>Home{data} : {data2}<button onClick={handleTheme}>Change Data</button></div>
  )
}

export default Home