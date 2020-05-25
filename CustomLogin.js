import React from "react";
import { useHistory } from "react-router-dom";
import { Login } from "react-admin";
import { Button } from "@material-ui/core";

const ButtonSignUp = () => {
  const history = useHistory();
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => history.push("/signup")}
    >
      Sign Up
    </Button>
  );
};

const CustomLogin = () => (
  <>
    <Login />
    <div
      style={{
        position: "absolute",
        top: "1em",
        right: "1em",
        color: "#fff"
      }}
    >
      <ButtonSignUp />
    </div>
  </>
);

export default CustomLogin;
