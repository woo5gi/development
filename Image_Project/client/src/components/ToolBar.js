import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

const ToolBar = () => {
  const [me, setMe] = useContext(AuthContext);

  const logoutHandler = async () => {
    try {
      // AuthContext 에서 세션보내줌
      await axios.patch("/users/logout");
      setMe();
      toast.success("로그아웃!");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#9051D1" }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecorationLine: "none" }}>
              <span style={{ color: "white" }}>BORA</span>
            </Link>
          </Typography>
          <Button color="inherit">
            {me ? (
              <span
                onClick={logoutHandler}
                style={{ float: "right", cursor: "pointer" }}
              >
                로그아웃({me.name})
              </span>
            ) : (
              <>
                <Link to="/auth/login">
                  <span
                    style={{ float: "right", marginRight: 15, color: "white" }}
                  >
                    로그인
                  </span>
                </Link>
                <Link to="/auth/register">
                  <span
                    style={{ float: "right", marginRight: 15, color: "white" }}
                  >
                    회원가입
                  </span>
                </Link>
              </>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </div>

    /* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */
  );
};
export default ToolBar;
