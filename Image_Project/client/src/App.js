import React from "react";
import UploadForm from "./components/UploadForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageList from "./components/ImageList";

const App = () => {
  return (
    <>
      <h2>사진첩</h2>
      <ToastContainer />
      <UploadForm />
    <ImageList/>
    </>
  );
}

export default App;
