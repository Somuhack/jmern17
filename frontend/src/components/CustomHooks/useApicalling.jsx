import { useEffect, useState } from "react";

export function useApiCall(url) {
  const [apidata, setApiData] = useState([]);
  const CallApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setApiData(data);
  };
  useEffect(() => {
    CallApi()
  },[url]);
  
  return apidata;
}


