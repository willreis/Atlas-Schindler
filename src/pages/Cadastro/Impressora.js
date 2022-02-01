import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export default function Impressora() {
  //Modal const
  const [show, setShow] = useState(false);

  //POST
  const [nome, setNome] = useState([]);
  const [marca, setMarca] = useState([]);
  const [endereco, setEndereco] = useState([]);
  const [area, setArea] = useState([]);

  function handleRegister(e) {
    // e.preventDefault();
  }

  function createPost() {
    Api.post("/Impressora", {
      nome,
      marca,
      endereco,
      area,
    })
      .then((response) => {
        setNome(response.data);
        setMarca(response.data);
        setEndereco(response.data);
        setArea(response.data);
        alert("Impressora cadastrada com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //GET
  const [user, setUser] = useState([]);

  useEffect(() => {
    Api.get("/Impressora")
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  //Delete
  async function handleDeleteImpressora(impressoraId) {
    try {
      await Api.delete(`/Impressora/${impressoraId}`, {});
      setUser(user.filter((impressora) => impressora.impressoraId !== impressoraId));
      alert("Deletado com sucesso")
      
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }


  return (
    <>
      <IconContext.Provider value={{ color: "#000", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Impressora</h2>
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
              <div className="textTable">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Nome</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Endereço</th>
                      <th scope="col">Area</th>
                      <th scope="col">Opções/Editar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((impressora) => (
                      <tr>
                        <td key={impressora.impressoraId} Style="display:none">
                          {impressora.impressoraId}
                        </td>
                        <td>{impressora.nome}</td>
                        <td>{impressora.marca}</td>
                        <td>{impressora.endereco}</td>
                        <td>{impressora.area}</td>
                        <td className="text-center icons-table">
                        <span
                          Style="cursor:pointer"
                          // onClick={() => pegarId(impressora.impressoraId)}
                        >
                          <VscEdit />
                        </span>

                        <span
                          Style="cursor:pointer"
                          onClick={() =>
                            handleDeleteImpressora(impressora.impressoraId)
                          }
                        >
                          <RiDeleteBinFill />
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
              Cadastro de Impressora
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
              <form className="row g-3 formPadrao" onSubmit={handleRegister}>
                <div className="col-md-3 col-sm-6">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Marca</label>
                  <input
                    type="text"
                    name="marca"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Endereço</label>
                  <input
                    type="text"
                    name="endereco"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Área</label>
                  <input
                    type="text"
                    name="area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                  />
                </div>

                <div className="col-md-12 col-sm-6" Style="text-align:right">
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
