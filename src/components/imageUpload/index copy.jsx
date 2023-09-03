import React, { useCallback, useEffect, useRef, useState } from "react";
import "./style.css";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";

const ImageUpload = ({ setStepValue, values }) => {
  const [images, setImages] = useState(values.uploadPhoto || []);
  const [isDroping, setIsDroping] = useState(false);
  const inputRef = useRef();

  const setStepValueCallback = useCallback(setStepValue, []);

  useEffect(() => {
    setStepValueCallback("uploadPhoto", images);
  }, [images, setStepValueCallback]);

  function selectFiles() {
    inputRef.current.click();
  }

 
  function onFileSelect(e) {
    const files = e.target.files;
    if (files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;

      const reader = new FileReader();
      reader.onload = (event) => {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: event.target.result,
          },
        ]);
      };
      reader.readAsDataURL(files[i]);
    }
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
    onFileSelect({ target: { files } });
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  }

  return (
    <div className="card">
      <div className="top">
        <p>
          Upload and showcase your images with uniqueness ensured - no
          duplicates allowed.
        </p>
      </div>
      <div
        className={`drag-area ${isDroping ? "active" : ""}`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop} // Changed from onDrag to onDrop
      >
        <Box textAlign={"center"}>
          <Icon icon={"ion:image-outline"} style={{ fontSize: "50px" }} />

          <Box display={"flex"} alignItems={"center"} textAlign={"center"}>
            {isDroping ? (
              <span className="select">Drop image here</span>
            ) : (
              <>
                Drag & drop image here or{" "}
                <span className="select" role="button" onClick={selectFiles}>
                  Browse
                </span>
                <input
                  type="file"
                  name="file"
                  className="file"
                  ref={inputRef}
                  onChange={onFileSelect}
                  accept="image/*" 
                />
              </>
            )}
          </Box>
        </Box>
      </div>
      <div className="container">
        {images.map((img, index) => (
          <div className="image" key={index}>
            <span className="delete" onClick={() => deleteImage(index)}>
              &times;
            </span>
            <img
              src={img.url}
              alt={img.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUpload;
