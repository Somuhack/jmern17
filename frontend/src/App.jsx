// import React, { useReducer } from 'react'
// import MyCallback from './components/Callback'
// import MyMemo from './components/UseMemo'
// import MyuseEffects from './components/MyuseEffects'
// import {useApiCall} from './components/CustomHooks/useApicalling'
// import { ToastContainer } from 'react-toastify'
// import Regisiter from './pages/form/Formtype2'
// import FormbyFormik from './pages/form/FormbyFormik'
// import {NestedExample} from "./pages/form/Multiple"
// import Regisiter2 from './pages/form/UsingFormData'
// import Zpp from './pages/form/MyUseForm'

// import CounterReduser from './features/counter/counterSlice'
// import { useSelector } from 'react-redux'
// useSelector
// const App = () => {
//   const data = useReducer((state)=>state.counter.value)
//   //  const data =useApiCall("https://jsonplaceholder.typicode.com/posts")
//   return (

//     // <>
//     // {data && data.length>0 && data.map((item,index)=>
//     //   <div key={index}>{item.title}</div>
//     // )}
//     // </>

//     // <>
//     //   <h1>My All Data</h1>
//     //   {data && data.length>0 && data.map((item,index)=>{
//     //     return(
//     //         <div key={index}>{item.title}</div>
//     //     )
//     //   })}

//     // </>
//     <>
//    {data}

//        {/* <ToastContainer /> */}
//     {/* <Regisiter2/> */}
//     {/* <Zpp/> */}
//     {/* <NestedExample/> */}
//     </>
//   )
// }

// export default App
// import React from 'react'
// import { useSelector,useDispatch } from 'react-redux'
// import { inc,dec,incByvalue } from './features/counter/counterSlice'
// const App = () => {
//   const data = useSelector((state)=>state.counter.value)
//   const productData = useSelector((state)=>state.product)
//   console.log(productData);

//   console.log(data);
//   const dispath =useDispatch();

//   return (
//     <div>App :{data}
//     <button onClick={()=>dispath(inc())}>Increment</button>
//     <button>Decrement</button>
//     <button onClick={()=>dispath(incByvalue(30))}>Inc by 30 value</button>
//     </div>
//   )
// }

// export default App
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { AddData, GetData } from "./features/product/productSclice";
// const App = () => {
//   const dipatch = useDispatch();
//   const ProductData = useSelector((state) => state.product);
//   console.log(ProductData);
//   const AddDataMydata = () => {
//     dipatch(
//       AddData({
//         pname: "Asus Rog G15",
//         pprice: 70000,
//         pquantity: 5,
//         pdec: "This is Gaming Laptop",
//       })
//     );
//   };
//   return (
//     <div>
//       {ProductData && ProductData.pname}

//       <button onClick={AddDataMydata}>Click to Add Data</button>
//     </div>
//   );
// };

// export default App;
import React from "react";
import { useSelector } from "react-redux";
import RegForm from "./pages/form/Formtype2";
const App = () => {
  const userData = useSelector((state) => state.signupform);
  return (
    <div>
      <h1>Show My Data</h1>
      {userData && userData.name}

      <RegForm />
    </div>
  );
};

export default App;
