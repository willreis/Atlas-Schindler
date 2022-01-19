import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";
import axios from "axios";

export default function CadastroProcesso() {
  const [data, setData] = useState({
    nome: "",
    ordenacao: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      nome: data.nome,
      ordenacao: data.ordenacao
    };
    axios.post("http://192.168.11.58:90/api/Processo", userData).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
    });
  // const [nome, setNome] = useState("");
  // const [ordenacao, setOrdenacao] = useState("");

  // const navigate = useNavigate();

  // async function handleRegister(e) {
  //   e.preventDefault();

  //   console.log(nome, ordenacao);

  //   axios.post("http://192.168.11.58:90/api/Processo", { nome, ordenacao })
  //   .then((response) => console.log(response))
  //   .catch((error) => console.log(error));

  // }

  return (
    <>
      <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Cadastro de Processo</h2>
              </div>
            </div>
          </div>

          <form className="row g-3 formPadrao" onSubmit={handleSubmit}>
            <div className="col-md-3 col-sm-6">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={data.nome}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Ordenação</label>
              <input
                type="text"
                name="ordenacao"
                value={data.ordenacao}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-3 col-sm-6 btnCol">
              <Button
                type="submit"
                variant="success"
                className="align-self-baseline"
              >
                Cadastrar
              </Button>
            </div>
          </form>
        </div>
      </IconContext.Provider>
    </>
  );
}
}