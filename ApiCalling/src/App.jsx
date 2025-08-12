import React, { useEffect } from 'react'
import { GetDataApi } from './Api/api'
const App = () => {
const [data, setData] = React.useState([])
const DataFetched = async()=>{
  const res = await GetDataApi()
  setData(res.data.data)
}
  useEffect(()=>{
    DataFetched()
  },[])
  return (
    <div>App:
      {data.length>0 && data.map((item,index)=><p>{item.statusCode}</p>
      )}
    </div>
  )
}

export default App