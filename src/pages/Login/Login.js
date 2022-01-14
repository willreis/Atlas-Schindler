import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import atlasLogo from "../../assets/img/atlas_logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="logoAtlaslogin">
              <img src={atlasLogo} alt="atlas-logo" Style="width:30%" />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="loginBox">
              <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group size="lg" controlId="password" Style="margin-top: 10px;">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button Style="margin-top: 20px"
                  block
                  size="lg"
                  type="submit"
                  disabled={!validateForm()}
                >
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;
