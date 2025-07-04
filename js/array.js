const _1Darr=[1,7,3,4,5,3,3]
const _2Darr=[7,8]
// console.log(_2Darr[2][0])
// _1Darr.push(10)
// console.log(_1Darr);
// console.log(_1Darr.length)
// console.log(_1Darr.join("and"))
// _1Darr.forEach((item)=>{
//     console.log(_1Darr.indexOf(item))
// });
// console.log(_1Darr.lastIndexOf(3)+1)
// console.log(_1Darr.includes(3))
// // console.log(_1Darr.find())
// console.log(_1Darr.toSorted())
// console.log(_1Darr)
// _1Darr.forEach((item)=>{
//     console.log(item+10)
// })
// console.log(_1Darr);

// const arr= _1Darr.map((item)=>item+10)
// console.log(arr);
// const arr1= _1Darr.forEach((item)=>item+10)
// const arr2= _1Darr.filter((item)=>item%2==0)
// console.log(arr2)
// console.log(arr);
// console.log("Hello :",arr1);

// console.log(_1Darr);

// const myarrarr = [
//   {
//     name: "Rahul",
//     age: 25,
//     address: {
//       street: "123 Main St",
//       city: "Anytown",
//     },
//     hobbies: ["reading", "swimming", "coding"],
//   },
//   {
//     name: "Minmoy",
//     age: 26,
//     address: {
//       street: "123 Main St",
//       city: "Newtown",
//       state: "WB",
//     },
//     hobbies: ["reading", "swimming", "coding"],
//   },
//   {
//     name: "Minmoy",
//     age: 26,
//     address: {
//       street: "123 Main St",
//       city: "Newtown",
//       state: "WB",
//     },
//     hobbies: ["reading", "swimming", "coding"],
//   },
// ];
// const searchitem = "w"
// const filterdata=myarrarr.filter((person)=>{
//     return person.address.state?.toLowerCase()==searchitem.toLowerCase()
// })
// console.log(filterdata)

// function sum(...ar){
//     return ar.reduce((total,acc)=>{
//         console.log(acc)
//         // console.log(total)
//         return acc+total
//     })

// }
// const arrp = [5,2,3,4]
// const calculateSum = arrp.reduce((accumulator, currentValue) =>{
//      console.log("acc: ",accumulator)
//         console.log("curretValue",currentValue)
//     return accumulator + currentValue
// })
// console.log(calculateSum);
// const str = ' Hello, World! ';
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.indexOf('ld'))
// console.log(str.lastIndexOf('o'));
// console.log(str.includes('borld'));
// console.log(str.slice(2, 5));
// console.log(str.substring(2, 5));
// console.log(str.replace('llo',''));
// console.log(str.split("l"));
// console.log(str.trim(""));
// let text = "Is this all there is?";
// let pattern = /is/g; 
// //  let pattern = new RegExp("is", "g") 
// let result = text.match(pattern);
// console.log(result)
let str = "hello world"
console.log(str.split(" "));


// for(let i=0;i<str.split("").length;i++){
//     if(str.split("").charAt(i)==str.slice("").charAt(0)){
//        ans+=str.slice().charAt(i).toUpperCase()
//     }
// }
let ans=str.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
console.log(ans);
