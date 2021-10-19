import React, { useState, useContext, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./UploadForm.css";
import ProgressBar from "./ProgressBar";
import { ImageContext } from "../context/ImageContext";

// 디자인
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const UploadForm = () => {
  const { setImages, setMyImages } = useContext(ImageContext);
  const [files, setFiles] = useState(null);
  const [previews, setPreviews] = useState([]);
  const [percent, setPercent] = useState([]);
  const [isPublic, setIsPublic] = useState(true);
  const [isLoading] = useState(false);
  const inputRef = useRef();

  const imageSelectHandler = async (event) => {
    const imageFiles = event.target.files;
    setFiles(imageFiles);

    const imagePreviews = await Promise.all(
      [...imageFiles].map(async (imageFile) => {
        return new Promise((resolve, reject) => {
          try {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(imageFile);
            fileReader.onload = (e) =>
              resolve({ imgSrc: e.target.result, fileName: imageFile.name });
          } catch (err) {
            reject(err);
          }
        });
      })
    );

    setPreviews(imagePreviews);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let file of files) formData.append("image", file);
    formData.append("public", isPublic);
    try {
      const res = await axios.post("/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (e) => {
          setPercent(Math.round((100 * e.loaded) / e.total));
        },
      });
      if (isPublic) setImages((prevData) => [...res.data, ...prevData]);
      setMyImages((prevData) => [...res.data, ...prevData]);
      toast.success("이미지 업로드 성공!");
      setTimeout(() => {
        setPercent([]);
        setPreviews([]);
        inputRef.current.value = null;
      }, 1000);
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
      setPercent([]);
      setPreviews([]);
      inputRef.current.value = null;
    }
  };

  const previewImages = previews.map((preview, index) => (
    <div key={index}>
      <img
        style={{ width: 200, height: 200, objectFit: "cover" }}
        src={preview.imgSrc}
        alt=""
        className={`image-preview ${preview.imgSrc && "image-preview-show"}`}
      />
      <ProgressBar percent={percent} />
    </div>
  ));

  const fileName =
    previews.length === 0
      ? "이미지 파일을 업로드 해주세요."
      : previews.reduce(
          (previous, current) => previous + `${current.fileName},`,
          ""
        );

  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {previewImages}
      </div>
      <div className="file-dropper">
        {fileName}
        <input
          ref={(ref) => (inputRef.current = ref)}
          id="image"
          type="file"
          multiple
          accept="image/*"
          onChange={imageSelectHandler}
        />
      </div>
      {/* <input
        type="checkbox"
        id="public-check"
        value={!isPublic}
        onChange={() => setIsPublic(!isPublic)}
      /> */}
      {/* <label htmlFor="public-check">{isPublic ? "공개" : "개인"}</label> */}
      <FormControlLabel
        control={
          <Switch
            color="primary"
            checked={!isPublic}
            onChange={() => setIsPublic(!isPublic)}
            id="public-check"
          />
        }
        label={isPublic ? "공개 사진" : "개인 사진"}
      />

      <button
        type="submit"
        disabled={isLoading}
        style={{
          width: "100%",
          height: 40,
          borderRadius: 3,
          cursor: "pointer",
        }}
      >
        제출
      </button>
    </form>
  );
};

export default UploadForm;
