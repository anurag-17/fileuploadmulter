import React, { useState } from 'react'
import { SideNavigation } from './SideNavigation'
import "./AddList.css"

export const AddList = () => {
const [fileData, setFileData] = useState("")
const file_submit = (e) =>{
    e.preventdefault()
    console.log(fileData);
}

    return (
        <>
            <div className="AddFlex">
                <SideNavigation />
                <div>
                    <div className="addflexbox">

  
                        <div>
                            <form action="" onSubmit={file_submit}>
                            
                            <label className="file-upload">
                                <input type="file" multiple="multiple" name="fileToUpload" id="fileToUpload" onChange={(e)=>{setFileData(e.target.files[0])}}/>
                                    Browse File
                            </label>
                            <input type="submit" value="Upload" id='buttonupload' className='btn btn-success ' />
                        </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
