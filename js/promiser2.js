
let pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved");
    },1000)

    setTimeout(()=>{
        reject("Promise rejected");
    },5000)
   
})

pro.then((data)=>console.log("from then"+data))
  .catch((err)=>console.log("from Catch"+err))
