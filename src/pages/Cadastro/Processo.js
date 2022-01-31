import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import { GrEdit } from "react-icons/gr";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";


export default function Processo() {
  //Modal const
  const [show, setShow] = useState(false);
  //Get
  const [user, setUser] = useState([]);

  useEffect(() => {
    Api.get("/Processo")
      .then((response) => {
        console.log(response);
        setUser(response.data);
        
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  // POST
  const [nome, setNome] = useState([]);
  const [ordenacao, setOrdenacao] = useState([]);

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

  function createPost() {
    Api.post("/Processo", {
      nome,
      ordenacao,
    })
      .then((response) => {
        setNome(response.data);
        setOrdenacao(response.data);
        alert("Processo cadastrado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Processo</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <Button variant="success" onClick={() => setShow(true)}>
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12 paddingTop20Mobile">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr className="text-center">
                    <th scope="col">Nome</th>
                    <th scope="col">Ordenação</th>
                    <th scope="col">Opções/Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((processo) => (
                    <tr>
                      <td Style="display:none" key={processo.processoId} >
                        {processo.processoId}
                      </td>
                      <td>{processo.nome}</td>
                      <td>{processo.ordenacao}</td>
                      <td className="text-center">
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
          <div className="row paddingTop30">
            <div className="col-md-6 col-sm-12">
              <Button variant="secondary">Voltar</Button>
            </div>
            <div className="col-md-6 col-sm-12 paddingTop20Mobile">
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
                <div className="col-md-5 col-sm-6">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="col-md-5 col-sm-6">
                  <label>Ordenação</label>
                  <input
                    type="number"
                    name="ordenacao"
                    value={ordenacao}
                    onChange={(e) => setOrdenacao(parseInt(e.target.value))}
                  />
                </div>

                <div className="col-md-2 col-sm-6 btnCol">
                  <Button
                    type="submit"
                    variant="success"
                    className="align-self-baseline"
                    onClick={createPost}
                  >
                    Salvar
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
