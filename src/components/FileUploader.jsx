import { use, useState } from "react"
import axios from 'axios'



function FileUploader(){
    const [foto, setFoto] = useState(null)

    const handleFoto = async () =>{
        if (!foto) return;

        const uparFotoForm = new FormData()
        await uparFotoForm.append('foto', foto)

        await axios.post('user/upload', uparFotoForm, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }



    
    return(
    <div>
        <input type="file" onChange={(e) => setFoto(e.target.files[0])}/>
        <button onClick={handleFoto}>upar</button>
    </div>
    )
}



export default FileUploader