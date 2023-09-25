// import React, { useCallback, useEffect, useRef, useState } from "react";
// import "./style.css";
// import { Icon } from "@iconify/react";
// import { Alert, Box } from "@mui/material";

// const ImageUpload = ({ setStepValue, values }) => {
//   const [image, setImage] = useState(values.uploadPhoto || null); // Store a single image
//   const [isDroping, setIsDroping] = useState(false);
//   const inputRef = useRef();

//   const setStepValueCallback = useCallback(setStepValue, []);

//   useEffect(() => {
//     setStepValueCallback("uploadPhoto", image); // Store the single image
//   }, [image, setStepValueCallback]);

//   function selectFiles() { 
//     inputRef.current.click();
//   }

//   function onFileSelect(e) {
//     const files = e.target.files;
//     if (files.length === 0) return;

//     const file = files[0]; // Get the first selected file
//     if (file.type.split("/")[0] !== "image") return; // Check if it's an image

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       setImage({
//         name: file.name,
//         url: event.target.result,
//       });
//     };
//     reader.readAsDataURL(file);
//   }

//   function onDragOver(e) {
//     e.preventDefault();
//     setIsDroping(true);
//     e.dataTransfer.dropEffect = "copy";
//   }

//   function onDragLeave(e) {
//     e.preventDefault();
//     setIsDroping(false);
//   }

//   function onDrop(e) {
//     e.preventDefault();
//     setIsDroping(false);
//     const files = e.dataTransfer.files;
//     onFileSelect({ target: { files } });
//   }

//   function deleteImage() {
//     setImage(null);
//   }

//   return (
//     <div className="card">
//       <div className="top">
//         <p>
//           Upload and showcase your image with uniqueness ensured - no
//           duplicates allowed.
//         </p>
//         <Alert sx={{mt:2}} severity="warning">Only one image allowed here. you can upload multiple images after property listing</Alert>
//       </div>
//       <div
//         className={`drag-area ${isDroping ? "active" : ""}`}
//         onDragOver={onDragOver}
//         onDragLeave={onDragLeave}
//         onDrop={onDrop}
//       >
//         <Box textAlign={"center"}>
//           <Icon icon={"ion:image-outline"} style={{ fontSize: "50px" }} />

//           <Box display={"flex"} alignItems={"center"} textAlign={"center"}>
//             {isDroping ? (
//               <span className="select">Drop image here</span>
//             ) : (
//               <>
//                 Drag & drop image here or{" "}
//                 <span className="select" role="button" onClick={selectFiles}>
//                   Browse
//                 </span>
//                 <input
//                   type="file"
//                   name="file"
//                   className="file"
//                   ref={inputRef}
//                   onChange={onFileSelect}
//                   accept="image/*" // Add this to restrict file types to images
//                 />
//               </>
//             )}
//           </Box>
//         </Box>
//       </div>
//       <div className="container">
//         {image && (
//           <div className="image">
//             <span className="delete" onClick={deleteImage}>
//               &times;
//             </span>
//             <img src={image.url} alt={image.name} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageUpload;

import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
import { Icon } from "@iconify/react";
import { Alert, Box } from "@mui/material";

const ImageUpload = ({ setStepValue, values }) => {
  const [images, setImages] = useState(values.uploadPhoto ? [values.uploadPhoto] : []); // Store the single image as an array
  const [isDroping, setIsDroping] = useState(false);
  const inputRef = useRef();

  const setStepValueCallback = useCallback(setStepValue, []);

  useEffect(() => {
    setStepValueCallback("uploadPhoto", images.length > 0 ? images[0] : null); // Store the single image
  }, [images, setStepValueCallback]);

  function selectFiles() {
    inputRef.current.click();
  }

  function onFileSelect(e) {
    const files = e.target.files;
    if (files.length === 0) return;

    const file = files[0]; // Get the first selected file
    if (file.type.split("/")[0] !== "image") return; // Check if it's an image

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageObject = {
        name: file.name,
        url: event.target.result,
      };
      setImages([imageObject]);
    };
    reader.readAsDataURL(file);
  }

  function onDragOver(e) {
    e.preventDefault();
    setIsDroping(true);
    e.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(e) {
    e.preventDefault();
    setIsDroping(false);
  }

  function onDrop(e) {
    e.preventDefault();
    setIsDroping(false);
    const files = e.dataTransfer.files;
    if (files.length === 0) return;

    const file = files[0]; // Get the first dropped file
    if (file.type.split("/")[0] !== "image") return; // Check if it's an image

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageObject = {
        name: file.name,
        url: event.target.result,
      };
      setImages([imageObject]);
    };
    reader.readAsDataURL(file);
  }

  function deleteImage() {
    setImages([]);
  }

  return (
    <div className="card">
      <div className="top">
        <p>
          Upload and showcase your image with uniqueness ensured - no
          duplicates allowed.
        </p>
        <Alert sx={{ mt: 2 }} severity="warning">Only one image allowed here.</Alert>
      </div>
      <div
        className={`drag-area ${isDroping ? "active" : ""}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <Box
          textAlign={"center"}
          role="button"
          sx={{ cursor: "pointer" }}
          onClick={selectFiles}
        >
          <Icon icon={"ic:twotone-cloud-upload"} style={{ fontSize: "50px" }} />

          <Box display={"flex"} alignItems={"center"} textAlign={"center"}>
            {isDroping ? (
              <span className="select">Drop image here</span>
            ) : (
              <>
                Drag & drop image here or{" "}
                <span className="select" >
                  Browse
                </span>
                <input
                  type="file"
                  name="file"
                  className="file"
                  ref={inputRef}
                  onChange={onFileSelect}
                  accept="image/*" // Add this to restrict file types to images
                />
              </>
            )}
          </Box>
        </Box>
      </div>
      <div className="container">
        {images.length > 0 && (
          <div className="image">
            <span className="delete" onClick={deleteImage}>
              &times;
            </span>
            <img src={images[0].url} alt={images[0].name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;

