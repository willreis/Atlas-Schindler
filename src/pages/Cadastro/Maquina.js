import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import Api from "../../services/Api";

export default function Maquina(){
//Modal const
const [show, setShow] = useState(false);

  //Get
  const [user, setUser] = useState([]);


  useEffect(() => {
    Api.get("/Maquina")
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

//POST
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
              <div className="col-md-6 col-sm-12">
                <div className="tituloInterno">
                  <h2 Style="color:#555;">Maquina</h2>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="alignButtons">
                  <Button variant="success" onClick={() => setShow(true)}>Cadastrar</Button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-sm-12 paddingTop20Mobile">
                <div Style="text-align: center" className="textTable">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Processo</th>
                        <th scope="col">Status</th>
                        <th scope="col">Ordenação</th>
                        <th scope="col">Tempo Médio Produção</th>
                        <th scope="col">Opções/Editar</th>
                      </tr>
                    </thead>

                    <tbody>
                    {user.map((maquina) => (
                    <tr>
                      <td key={maquina.maquinaId} Style="display:none"></td>
                      <td>{maquina.nome}</td>
                      <td>{maquina.processo}</td>
                      <td>{maquina.status}</td>
                      <td>{maquina.tempoMedioProducao}</td>
                      <td>
                        <span>
                          <GrEdit />
                        </span>
                      </td>
                    </tr>
                  ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row paddingTop30">
              <div className="col-md-6">
                <Button variant="secondary">Voltar</Button>
              </div>
              <div className="col-md-6 paddingTop20Mobile">
                <div className="alignButtons">
                  <Button variant="success">Salvar</Button>
                </div>
              </div>
            </div>
          </div>

                  {/* Modal */}
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Cadastro de Processo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
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
                onChange={e => setStatusCad(e.target.value) }
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Ordenacao</label>
              <input
                type="number"
                name="ordenacao"
                value={ordenacao}
                onChange={e => setOrdenacao(parseFloat(e.target.value))}
              />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Tempo Médio</label>
              <input
                type="number"
                name="tempoMedio"
                value={tempoMedio}
                onChange={e => setStatusCad(parseFloat(e.target.value))}
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
          </Modal.Body>
        </Modal>
        </IconContext.Provider>
      </>
    );
  }

