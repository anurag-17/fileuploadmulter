import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Inputfile } from "./Inputfile";

function App() {
  const [data, setdata] = useState([]);
  const [keys, setKeys] = useState([]);
  const [object, setObject] = useState();

  const getdata = async () => {
    const res = await axios.get("http://localhost:5500/getxlfile");
    setdata(res.data);
    res.data.map((items, index) => {
      console.log(items);
      if (index === 1) {
        setKeys(Object.keys(items));
      }
    });
  };
  useEffect(()=>{
    getdata()
  },[])

  console.log(data);

  return (
    <>
      <Inputfile />
      {data.length >= 1 ? (
        <>
      <button onClick={getdata}>fghjhgf</button>
        <table>
          <thead>
            <tr >
              {Object.keys(data[0]).map((heading) => {
                console.log(heading);
                return <th>{heading}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              return (
                <tr >
                  {Object.keys(data[0]).map((key, index) => {
                    return <td >{row[key]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        </>

      ) : (
        ""
      )}
    </>
  );
}

export default App;
