function fetchData() {
  return new Promise((resolve) => {
    resolve("Data fetched");
  });
}

function processData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve("Data processed");
    }, 5000);
  });
}

function displayData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data displayed");
    }, 500);
  });
}

// fetchData().then((result) => {
//   console.log(result);
//     processData().then((result) => {
//     console.log(result);
//     displayData().then((result) => console.log(result));
//   });
// });

(async()=>{
    const data = await fetchData();
    console.log(data);
    const processedData = await processData(data);
    console.log(processedData);
    const displayedData = await displayData(processedData);
    console.log(displayedData);
    
})()
