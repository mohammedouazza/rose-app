import React, { useState } from "react";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { loginToFirebase } from "../../../back-end/admin";
import { SET_LOGIN } from "../../../constants/admin";

function Login({ setLogin }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const loginFun = (e) => {
    e.preventDefault();
    console.log(email, password);
    setLoading(true);
    loginToFirebase(email, password)
      .then((userCredential) => {
        //console.log(userCredential);
        setLogin();
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };
  const handleEmail = (e) => {
    const newEmail = e.target.value;
    setError("");
    setEmail(newEmail);
  };
  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setError("");
    setPassword(newPassword);
  };
  return (
    <Form className="login-form col-md-6 col-lg-6 col-sm-12 col-xs-12" onSubmit={(e) => loginFun(e)}>
      {error && <Alert variant="danger" >{error}</Alert>}
      {loading && (
        <Spinner animation="border" role="status" className="rose-spinner" />
      )}
      <Form.Group className="mb-2">
        <Form.Label>Adresse email</Form.Label>
        <Form.Control
          type="email"
          required
          placeholder="Entre votre email"
          onChange={handleEmail}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control
          type="password"
          required
          placeholder="Entre votre mot de passe"
          onChange={handlePassword}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2 send-button">
        Se connecter
      </Button>
    </Form>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLogin: () => dispatch({ type: SET_LOGIN }),
  };
};
export default connect(null, mapDispatchToProps)(Login);
