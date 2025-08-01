import React, { useState } from 'react'
import { useEffect } from 'react'
import {useApiCall} from './CustomHooks/useApicalling'

const MyuseEffects = () => {
    // const[data,setData] =useState([])
    const data =useApiCall("https://jsonplaceholder.typicode.com/posts")
  //  const CallApi =()=>{
  //    fetch('https://jsonplaceholder.typicode.com/posts')
  //    .then(response => response.json())
  //    .then(data => setData(data))
  //  }


    //  useEffect(()=>{
    //      CallApi()
    //  },[])


  return (
    <>
      <h1>My All Data</h1>
      {data && data.length>0 && data.map((item,index)=>{
        return(
            <div key={index}>{item.title}</div>
        )
      })}
    
    </>
  )
}

export default MyuseEffects
// import React, { useEffect, useState } from 'react'

// const MyuseEffects = () => {
//     const [inputs,setInputs]=useState(0)
//    let count=0
//    useEffect(()=>{
//     console.log(inputs);
//     setInputs(count++)
//    },[inputs])
//   return (
//     <>
//     <div>{inputs}</div>
//     <button onClick={()=>setInputs(count++)}>inc</button>
//      </>
//   )
   
// }

// export default MyuseEffects