import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useRef,
} from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const MainContentContext = createContext();

export const MainContentProvider = (prop) => {
  const [mainContents, setMainContents] = useState([]);
  const [myMainContents, setMyMainContents] = useState([]);
  const [isPublic, setIsPublic] = useState(false);
  const [mainContentUrl, setMainContentUrl] = useState("/mainContents");
  const [mainContentLoading, setMainContentLoading] = useState(false);
  const [mainContentError, setMainContentError] = useState(false);
  const [me] = useContext(AuthContext);
  const pastMainContentUrlRef = useRef();

  useEffect(() => {
    if (pastMainContentUrlRef.current === mainContentUrl) return;
    setMainContentLoading(true);
    axios
      .get(mainContentUrl)
      .then((result) =>
        isPublic
          ? setMainContents((prevData) => [...prevData, ...result.data])
          : setMyMainContents((prevData) => [...prevData, ...result.data])
      )
      .catch((err) => {
        console.error(err);
        setMainContentError(err);
      })
      .finally(() => {
        setMainContentLoading(false);
        pastMainContentUrlRef.current = mainContentUrl;
      });
  }, [mainContentUrl, isPublic]);
  useEffect(() => {
    if (me) {
      setTimeout(() => {
        axios
          // .get("/users/me/mainContents")
          .get("/mainContents")
          .then((result) => setMyMainContents(result.data))
          .catch((err) => console.error(err));
      }, 0);
    } else {
      setMyMainContents([]);
      setIsPublic(true);
    }
  }, [me]);

  // const loaderMoreMainContents = () => {
  //   if (mainContents.length === 0 || mainContentLoading) return;
  //   const lastMainContentId = mainContents[mainContents.length - 1]._id;
  //   setMainContentUrl(`/mainContents?lastid=${lastMainContentId}`);
  // };

  return (
    <MainContentContext.Provider
      value={{
        mainContents: isPublic ? mainContents : myMainContents,
        setMainContents,
        // : isPublic ? setMainContents : setMyMainContents,
        setMyMainContents,
        isPublic,
        setIsPublic,
        setMainContentUrl,
        mainContentLoading,
        mainContentError,
      }}
    >
      {prop.children}
    </MainContentContext.Provider>
  );
};
