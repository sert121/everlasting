import React, {useRef} from 'react'
import { Input,Button, Box } from '@chakra-ui/react';

 const FileUpload = ({onFileSelectError,onFileSelectSuccess}) => {
    const fileInput = useRef(null)
    const hiddenFileInput = useRef(null);

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        if (file.size > 10024)
          onFileSelectError({ error: "File size cannot exceed more than 1MB" });
        else onFileSelectSuccess(file);
      };
      


      const handleClick = event => {
        hiddenFileInput.current.click();
      };

      const handleChange = event => {
        const fileUploaded = event.target.files[0];
        console.log(fileUploaded);
        if (fileUploaded.size > 200000)
          onFileSelectError({ error: "File size cannot exceed more than 1MB" });
        else {
            onFileSelectSuccess(fileUploaded);     
        }

     };

    return (
        <>
        {/* <div className="file-uploader">
            <input type="file" onChange={handleFileInput}/>
            <button onClick={e => fileInput.current && fileInput.current.click()} className="btn btn-primary"/>
        </div> */}
      <Button onClick={handleClick}>
        Upload a file
      </Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{display: 'none'}} 
      />

        </>
    )
}

export default FileUpload