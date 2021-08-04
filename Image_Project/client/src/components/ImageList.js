import React, {useContext} from "react";
import { ImageContext } from "../context/ImageContext";

const ImageList = () => {
  const [images] = useContext(ImageContext);
  const imgList = images.map((image) => (
    <img
      key={image.key}
      style={{ maxWidth: '500px', margin:"auto"}}
      src={`http://localhost:5000/uploads/${image.key}`} 
      alt="사진" />
  ));

  return (
    <div>
      <h3>Image List</h3>
      {imgList}
    </div>
  );
};

export default ImageList;