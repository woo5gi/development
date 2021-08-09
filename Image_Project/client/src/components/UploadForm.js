import React, { useState ,useContext} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./UploadForm.css";
import ProgressBar from "./ProgressBar";
import { ImageContext } from "../context/ImageContext";

const UploadForm = () => {
  const [images, setImages] = useContext(ImageContext);
  const defaultFileName = "이미지 파일을 업로드 해주세요"
  const [file, setFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [fileName, setFileName] = useState(defaultFileName);
  const [percent, setPercent] = useState(0);

  const imageSelectHandler = (event) => {
    const imageFile = event.target.files[0];
    setFile(imageFile);
    setFileName(imageFile.name);
    
    //이미지 미리보기
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (e) => setImgSrc(e.target.result);
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    //app.post("/upload", upload.single("image"), (req, res) => 에 보내주기
    formData.append("image", file);

    try {
      const res = await axios.post("/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (e) => {
          setPercent(Math.round((100* e.loaded) / e.total));
        },
      });
      setImages([...images, res.data])
      // console.log({ res })
      toast.success("이미지 업로드 성공");
      setTimeout(() => {
        setPercent(0);
        setFileName(defaultFileName);
        setImgSrc(null);
      }, 3000);

    } catch (err) {
      toast.error(err.message);
      setFileName(defaultFileName);
      setImgSrc(null);
      console.error( err );
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <img 
      style={{ width: 200, height: 200, objectFit: "cover" }}
      src={imgSrc} 
      className={`image-preview ${imgSrc && "image-preview-show"}`} 
      alt="" />
      <ProgressBar percent={percent} />
      <div className="file-dropper">{fileName}
        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={imageSelectHandler}
        />
      </div>
      <button type="submit" style={{ width: "100%", height: 40, borderRadius: 3, cursor:"pointer"}}>제출</button>
    </form>

  );
}
export default UploadForm;