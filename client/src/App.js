import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Inputfile } from "./Inputfile";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { BankForm }  from "./component/BankForm";
import { AdminLogin } from './component/AdminLogin';
import { EmployeeLogin } from './component/EmployeeLogin';
import { SideNavigation } from './component/SideNavigation';
import { AddList } from './component/AddList';


function App() {
  // const [data, setdata] = useState([]);
  // const [keys, setKeys] = useState([]);
  // const [object, setObject] = useState();

  // const getdata = async () => {
  //   const res = await axios.get("http://localhost:5500/getxlfile");
  //   setdata(res.data);
  //   res.data.map((items, index) => {
  //     console.log(items);
  //     if (index === 1) {
  //       setKeys(Object.keys(items));
  //     }
  //   });
  // };
  // useEffect(()=>{
  //   getdata()
  // },[])

  // console.log(data);

  // return (
  //   <>
  //     <Inputfile />
  //     {data.length >= 1 ? (
  //       <>
  //     <button onClick={getdata}>fghjhgf</button>
  //       <table>
  //         <thead>
  //           <tr >
  //             {Object.keys(data[0]).map((heading) => {
  //               console.log(heading);
  //               return <th>{heading}</th>;
  //             })}
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {data.map((row, index) => {
  //             return (
  //               <tr >
  //                 {Object.keys(data[0]).map((key, index) => {
  //                   return <td >{row[key]}</td>;
  //                 })}
  //               </tr>
  //             );
  //           })}
  //         </tbody>
  //       </table>
  //       </>

  //     ) : (
  //       ""
  //     )}
  //   </>
  // );
  return(
 <>
 
<Router>
  <Routes>
  
    <Route path='/' element={<SideNavigation/>}></Route>
    <Route path='/addlist' element={<AddList/>}></Route>
    <Route path='/adminlogin' element={<AdminLogin/>}></Route>
    <Route path='/employeelogin' element={<EmployeeLogin/>}></Route>
    <Route path="/formcalculate" element={<BankForm/>}></Route>
  </Routes>
</Router>
</>
)
}

export default App;
