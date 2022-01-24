import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export default function CadastroMaquina() {

  const [nome, setNome] = useState(['D1']);
  const [processo, setProcesso] = useState(['Dobradeira']);
  const [statusCad, setStatusCad] = useState([true]);
  const [ordenacao, setOrdenacao] = useState([1]);
  const [tempoMedio, setTempoMedio] = useState([12]);

  function handleRegister(e) {
    e.preventDefault();
  }

  function createPost() {
    Api.post('/Maquina', {
      nome, processo, statusCad, ordenacao, tempoMedio
    })
      .then((response) => {
        setNome(response.data)
        setProcesso(response.data)
        setStatusCad(response.data)
        setOrdenacao(response.data)
        setTempoMedio(response.data)
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error)
        alert("Ops! Ocorreu um erro!!!:", error)
      })
  }

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

          <form className="row g-3 formPadrao" onSubmit={handleRegister}>
            <div className="col-md-4 col-sm-6">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Processo</label>
              <input
                type="text"
                name="processo"
                value={processo}
                onChange={e => setProcesso(e.target.value)}
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Status</label>
              <input
                type="boolean"
                name="status"
                value={statusCad}
                onChange={e => setStatusCad(e.target.value)}
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Ordenacao</label>
              <input
                type="number"
                name="ordenacao"
                value={ordenacao}
                onChange={e => setOrdenacao(parseInt(e.target.value))}
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Tempo Médio</label>
              <input
                type="number"
                name="tempoMedio"
                value={tempoMedio}
                onChange={e => setStatusCad(parseInt(e.target.value))}
              />
            </div>

            <div className="col-md-4 col-sm-6 btnCol">
              <Button
                type="submit"
                variant="success"
                className="align-self-baseline"
                onClick={createPost}
              >
                Cadastrar
              </Button>
            </div>
          </form>
        </div>
      </IconContext.Provider>
    </>
  )
}