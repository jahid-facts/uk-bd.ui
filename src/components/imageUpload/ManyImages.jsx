import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import { getApiById } from "../../config/configAxios";
import { useParams } from "react-router-dom";

const ManyImages = ({
  setStepValue,
  values,
  oldStepValues,
  setMultipleImages,
}) => {
  const [images, setImages] = useState([]);
  const [isDropping, setIsDropping] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (oldStepValues && oldStepValues.images) {
      setImages(oldStepValues.images);
    }
  }, []);

  useEffect(() => {
    setMultipleImages(images);
  }, [images, oldStepValues]);

  const selectFiles = () => {
    inputRef.current.click();
  };

  const onFileSelect = (e) => {
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
  };

  const onDragOver = (e) => {
    e.preventDefault();
    setIsDropping(true);
    e.dataTransfer.dropEffect = "copy";
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    setIsDropping(false);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setIsDropping(false);
    const files = e.dataTransfer.files;
    onFileSelect({ target: { files } });
  };

  const deleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <div className="top">
        <p>Upload and showcase your images with uniqueness ensured.</p>
      </div>
      <div
        className={`drag-area ${isDropping ? "active" : ""}`}
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
            {isDropping ? (
              <span className="select">Drop image here</span>
            ) : (
              <>
                Drag &amp; drop image here or{" "}
                <span className="select">Browse</span>
                <input
                  type="file"
                  name="file"
                  className="file"
                  ref={inputRef}
                  onChange={onFileSelect}
                  accept="image/*"
                  multiple
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
            <img src={img.url} alt={img.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManyImages;
