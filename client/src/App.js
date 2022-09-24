import logo from './logo.svg';
import './App.css';
import  React,{useState,useEffect} from "react"
import axios from "axios"
import { Inputfile } from './Inputfile';


function App() {
const [data,setdata] = useState([])
const [keys,setKeys] = useState([])
const [object,setObject]= useState()

const getdata = async()=>{
  const res = await axios.get("http://localhost:5500/getxlfile")
  setdata(res.data)
  res.data.map((items,index)=>{
    if(index===1){
      setKeys(Object.keys(items)) 
    }
  })
}
useEffect(()=>{
  getdata()
},[])
console.log(data)
return (
  <>
  <Inputfile/>
<table className='table table-bordered' style ={{border:"1px solid black"}}>
<thead>
  <tr style={{textAlign:"center"}}>
  {
  keys.map((items,index)=>{
    return(
<th>{items}</th>
    )
    
  })
}
</tr>
</thead>

  <tbody>

    {/* <td> */}
   
{
  data.map((items,index)=>{
return(
  <tr style={{textAlign:"center"}}>
<td>
  {items["Account Number"]}
</td>
<td>
  {items["Bank Linkage Variation"]}
</td>
<td>
  {items["Bank Name"]}
</td>
<td>
  {items["Closing Bank Balance"]}
</td>
<td>
  {items["Closing Cash in Hand"]}
</td>
<td>
  {items["Current Year Recovery"]}
</td>
<td>
  {items["Current Year Recovery_1"]}
</td>
<td>
  {items["Current Year Recovery_2"]}
</td>
<td>
  {items["Current Year Recovery_3"]}
</td>
<td>
  {items["Current Year Recovery_4"]}
</td>
<td>
  {items["Current Year Recovery_5"]}
</td>
<td>
  {items["Current Year Recovery_6"]}
</td>
<td>
  {items["Current Year Recovery_7"]}
</td>
<td>
  {items["Current Year Sanctioned"]}
</td>
<td>
  {items["Current Year Sanctioned_1"]}
</td>
<td>
  {items["Current Year Sanctioned_2"]}
</td>
<td>
  {items["Current Year Sanctioned_3"]}
</td>
<td>
  {items["Current Year Sanctioned_4"]}
</td>
<td>
  {items["Current Year Sanctioned_5"]}
</td>
<td>
  {items["Current Year Sanctioned_6"]}
</td>
<td>
  {items["Current Year Sanctioned_7"]}
</td>
<td>
  {items["Current Year Sanctioned_8"]}
</td>
<td>
  {items["Current Year Savings"]}
</td>
<td>
  {items["Grade"]}
</td>
<td>
  {items["Muncipality"]}
</td>
<td>
  {items.No["of Members"]}
</td>
<td>
  {items["Opening Bank Balances"]}
</td>
<td>
  {items["Opening Bank Loan"]}
</td>
<td>
  {items["Opening Cash Balance"]}
</td>
<td>
  {items["Opening Loans"]}
</td>
<td>
  {items["Opening Loans_1"]}
</td>
<td>
  {items["Opening Loans_2"]}
</td>
<td>
  {items["Opening Loans_3"]}
</td>
<td>
  {items["Opening Loans_4"]}
</td>
<td>
  {items["Opening Loans_5"]}
</td>
<td>
  {items["Opening Loans_6"]}
</td>
<td>
  {items["Opening Loans_7"]}
</td>

  </tr>
)

})
}

  {/* </td> */}

  </tbody>
</table>
  </>
  );
}

export default App;
