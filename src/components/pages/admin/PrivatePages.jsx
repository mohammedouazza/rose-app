import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";
import Login from "./Login";

function PrivatePages() {
  const loggedIn = useSelector((state) => state.admin.loggedIn);

  console.log(loggedIn);
  return <Container>{!loggedIn ? <Login /> : <LoggedIn />}</Container>;
}

export default PrivatePages;
