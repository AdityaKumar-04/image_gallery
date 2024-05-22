import "./upload.css"
import { useState } from "react"
export default function Upload (props){
    const [file, setfile]= useState()
    

    function handleUpload() {
        if (file) {
            props.addImages(file);
        }
    }
    return(
        <>
            <div className="upload">
                <div className="upload_container">
                    <input type="file" onChange={(e)=>{setfile((e.target.files))
                        
                    }} multiple={true}/>
                    <button type="submit" onClick={handleUpload}><i class="fa-solid fa-upload"></i></button>
                </div>
            </div>
        
        </>
    )
}

