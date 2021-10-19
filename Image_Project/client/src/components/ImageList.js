import React, {
  useContext,
  useEffect,
  useRef,
  useCallback,
  useState,
} from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { ImageContext } from "../context/ImageContext";
import "./ImageList.css";

import { makeStyles } from "@material-ui/core/styles";

import { CardContent, CardMedia, Card, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",

    width: 350,
  },
  content: {
    flex: "1 0 auto",
    textDecoration: "none",
  },
  cover: {
    width: 210,
    height: 210,
  },
}));

const ImageList = () => {
  const {
    images,
    isPublic,
    setIsPublic,
    imageLoading,
    imageError,
    setImageUrl,
  } = useContext(ImageContext);
  const [me] = useContext(AuthContext);
  const elementRef = useRef(null);
  const [isList, setIsList] = useState(true);
  const classes = useStyles();

  const loaderMoreImages = useCallback(() => {
    if (images.length === 0 || imageLoading) return;
    const lastImageId = images[images.length - 1]._id;
    setImageUrl(`${isPublic ? "" : "/users/me"}/images?lastid=${lastImageId}`);
  }, [images, imageLoading, isPublic, setImageUrl]);

  useEffect(() => {
    if (!elementRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      console.log("intersection", entry.isIntersecting);
      if (entry.isIntersecting) loaderMoreImages();
    });
    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [loaderMoreImages]);

  const imgList = images.map((image, index) => (
    // <Grid item xs={12} sm={6} md={4}>
    <Link
      key={image.key}
      to={`/images/${image._id}`}
      ref={index + 5 === images.length ? elementRef : undefined}
    >
      {isList ? (
        <Card className={classes.root}>
          <CardMedia
            alt={image.originalFileName}
            className={classes.cover}
            image={`http://localhost:5000/uploads/${image.key}`}
            title={image.originalFileName}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography
                variant="subtitle1"
                display="block"
                gutterBottom
                style={{ textDecoration: "none" }}
              >
                {image.originalFileName}
              </Typography>
              <Typography variant="overline" color="textSecondary">
                {image.user.name} - {image.createdAt}
              </Typography>
            </CardContent>
          </div>
        </Card>
      ) : (
        <div className="imgTopic">
          <img
            className="imagestyle"
            alt=""
            src={`http://localhost:5000/uploads/${image.key}`}
          />
          <div className="CaptionStyle">
            <Typography variant="subtitle2" gutterBottom>
              {image.originalFileName}
            </Typography>
            <Typography variant="caption" gutterBottom>
              {image.user.name} - {image.createdAt}
            </Typography>
          </div>
        </div>
      )}
    </Link>
  ));
  return (
    <div>
      <h3 style={{ display: "inline-block", marginRight: 10 }}>
        Image List ({isPublic ? "공개" : "개인"} 사진)
      </h3>
      {me && (
        <button onClick={() => setIsPublic(!isPublic)}>
          {(isPublic ? "개인" : "공개") + " 사진 보기"}
        </button>
      )}

      <button onClick={() => setIsList(!isList)}>
        {(isList ? "타일" : "리스트") + "보기"}
      </button>

      <div className="image-list-container">{imgList}</div>
      {imageError && <div>Error...</div>}
      {imageLoading && <div>Loading...</div>}
      {!imageLoading && (
        <button onClick={loaderMoreImages}>Load More Images</button>
      )}
    </div>
  );
};

export default ImageList;
