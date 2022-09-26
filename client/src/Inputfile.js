import axios from 'axios'
import React, { useState } from 'react'

export const Inputfile = () => {
    const[selectedfile,setselectedfile] = useState()

const handlesubmit = async(e)=>{
    e.preventDefault()
    const formdata = new FormData()
    console.log(selectedfile);
    formdata.append("xlsx",selectedfile)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    const res = await axios.post("http://localhost:5500/upload",formdata,config)
    console.log(res.data)
}

  return (
    <div>
<form onSubmit={handlesubmit} action="">
<input type="file" onChange={(e)=>setselectedfile(e.target.files[0])}/>
<input type="submit" value="submit"/>
</form>
    </div>
  )
}
