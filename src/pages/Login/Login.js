import React, { useState, useEffect, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Swal2 from "sweetalert2";
import atlasLogo from "../../assets/img/atlas_logo.png";
import Api from "../../services/Api";
import { RiLoginBoxLine } from "react-icons/ri";
import StoreContext from "../../components/Store/Context";
import { useHistory } from "react-router-dom";
import "../../login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  var url = "Authentication/login";

  useEffect(() => {
    localStorage.clear();
  }, []);
  // ----------------------------------------------------------------------------------------//
  function handleSubmit(event) {
    event.preventDefault();
  }
  // ----------------------------------------------------------------------------------------//
  function postLogin() {
    Api.post(`/${url}?matricula=${email}&senha=${password}`, {})
      .then((response) => {
        if (response.data == "" || response.data == undefined) {
          Swal2.fire({
            text: "Erro De Login",
            icon: "warning",
            showConfirmButton: false,
            timer: 2500,
          });
          return;
        } else if (
          password == "" ||
          password == undefined ||
          email == "" ||
          email == undefined
        ) {
          Swal2.fire({
            text: "Usuário ou Senha não fornecidos",
            icon: "warning",
            showConfirmButton: false,
            timer: 2500,
          });
          return;
        } else {
          Swal2.fire({
            text: "Logado com sucesso",
            icon: "success",
            showConfirmButton: false,
            timer: 2500,
          });
          setToken(response.data);
          console.log(response.data);
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error.response.data);
        Swal2.fire({
          text: error.response.data,
          icon: "error",
          showConfirmButton: false,
          timer: 2500,
        });
      });
  }

  return (
    <>
      <div className="loginBg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="logoAtlaslogin">
                <img src={atlasLogo} alt="atlas-logo" Style="width:100%" />
              </div>
              <div className="loginBox">
                <Form>
                  <Form.Group size="lg" controlId="email">
                    <Form.Label>Matricula</Form.Label>
                    <Form.Control
                      autoFocus
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group
                    size="lg"
                    controlId="password"
                    Style="margin-top: 10px;"
                  >
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    block
                    size="lg"
                    type="submit"
                    onClick={postLogin}
                    className="mt-4"
                  >
                    <RiLoginBoxLine className="btnEntrarLogin" />
                    Entrar
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
