// function abc(){
//     return "Hello, World!";
// }
// let a=10
// {
//     let z=20
//     console.log(z);
// }s=

// function sum(){
//     let a=10;
//     let b=20;
//     return a+b;
// }
// console.log(a);

// function sum2(a,b){
//     // let a=10;
//     // let b=20;
//     return a+b;
// }
// let a = abc();
// console.log(a)
// console.log(abc());
// console.log(sum());
// console.log(sum2(40,20));
// const diff = ()=>{
//     console.log("hello world")
// } //arrow functions
// diff()

// const sum =(x,y)=>{
//   return x+y
// }
// console.log(sum(4,5));
// const sum = (x,y)=> console.log(x+y);
// sum(5,6)
// (()=>{
//     console.log("hello world");
// })()
// (()=>{
//     console.log("hello world");
// })()
// const sam =(a=100000,b)=>{
//     console.log(a+b);
// }
// sam(5,10)
// let a=10;
// let b=20;
// if(a>b){
//     console.log("a is greater than b");
// }else{
//     console.log("a is less than b");
// }

// let cpm=100;
// let tmc=200
// let bjp=300
// if(cpm>tmc){
//     if(cpm>bjp){
//         console.log("CPM is Winner");
//     }else{
//         console.log("BJP is Winner");
//     }
// }else{
//     if(tmc>bjp){
//         console.log("TMC is Winner");
//     }else{
//         console.log("BJP is Winner");
//     }
// }let marks=91;
// if(marks>90){
//     console.log("O");
// }else if(marks>80){
//     console.log('A')
// }else if(marks>70){
//     console.log("B");
// }else{
//     console.log("F");
// }

// switch(marks){
//     case 90:
//         console.log("O");
//         break;
//     case 80:
//         console.log("A");
//         break;
//     case 70:
//         console.log("B");
//         break;
//     default:
//         console.log("You Fail");

// }
// if(cpm>tmc && cpm>bjp){
//     console.log("CPM is Winner");

// }else if(tmc>bjp && tmc>cpm){
//     console.log("TMC is Winner");
// }else{
//      console.log("BJP is Winner");
// }

// const Login=()=>{
//     console.log("Hello");
// }
// const Profile=(f)=>{
//       console.log("Start")
//        f();
//       console.log("end")
// }
// Profile(Login)

// for(let i=0;i<10;i++){
//     console.log(i);
// }
// let a = 1;
// while (a < 10) {
//   if (a == 5) {
//     a++;
//     continue;
//   }
//   console.log(`Lopp no ${a}`);
//   a++;
// }
// // do {
// //     console.log(a);
// //     a++;
// // } while (a<10);
// // console.log(++a)
// // console.log(a);
// // class Person{
// //     a =0;
// //     b=0;
// //     constructor(a,b){
// //         this.a=a
// //         this.b=b
// //     }
// //     xyz=function  name() {
// //         console.log("Hello Students")

// //     }
// // }
// // let x= new Person(4,5);
// // console.log(x.a);
// // console.log(x.b);
// // x.xyz();
// let obj = {
//   name: "Rahul",
//   age: 25,
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//   },
//   hobbies: ["reading", "swimming", "coding"],
//   display: function () {
//     console.log(this.name);
//     console.log(this.age);
//     console.log(this.address.street);
//   },
// };
// const arr = [
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
// ];
// arr.map((item,index)=>{
//     console.log(item.name);
//     console.log(item.age);
//     console.log(item.address.street);
//     console.log(item.address.city)
//     console.log(item.address?.state || "State not available");
// })
// let z = 10>20? "10":"2dkvvj0"
// console.log(z);

const isLogin=true
console.log(isLogin && "Login Successfull")
