function fetchData(callback) {
    console.log('Data fetched');
    callback();
}
function processData(callback) {
    setTimeout(()=>{
        console.log('Data processed');
    },10000)
    
    callback();
}
function displayData() {
    setTimeout(()=>{
       console.log('Data displayed');
    },5000)
    
}
fetchData(function(){
    processData(function(){
        displayData();
    })
})