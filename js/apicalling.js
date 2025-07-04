// const DataFetched=() => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1").then((res)=>res.json().then((data)=>console.log(data))
//     )
// } 
// DataFetched()
const DataFetched=async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const data = await res.json()
    console.log(data);
    
} 
DataFetched()
