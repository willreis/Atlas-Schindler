import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import makeAnimated from 'react-select/animated';
import Api from "../../services/Api";

export default function GruposAcesso() {
  //Modal const
  const [show, setShow] = useState(false);

  //GET
  const [user, setUser] = useState([]);

  useEffect(() => {
    Api.get("/GrupoDeAcesso")
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });

      Api.get("/Usuario")
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
  const [nomeDoGrupo, setNomeDoGrupo] = useState();
  const [descricaoDoGrupo, setDescricaoDoGrupo] = useState();
  const [usuarios, setUsuarios] = useState(null);
  const [telas, setTelas] = useState(null)
  const [quantidadeTelasPermitidas, setQuantidadeTelasPermitidas] = useState();
  const [quantidadeDeUsuarios, setQuantidadeDeUsuarios] = useState();

  function handleRegister(e) {
    e.preventDefault();
    handleRegister(user);
  }

  function createPost() {
    Api.post("/GrupoDeAcesso", {
      nomeDoGrupo,
      descricaoDoGrupo,
      usuarios,
      telas,
      quantidadeTelasPermitidas,
      quantidadeDeUsuarios,
    })
      .then((response) => {
        setNomeDoGrupo(response.data);
        setDescricaoDoGrupo(response.data);
        setUsuarios(response.data);
        setTelas(response.data);
        setQuantidadeTelasPermitidas(response.data);
        setQuantidadeDeUsuarios(response.data);
        alert('Cadastro efetuado com sucesso!');
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //Delete
  var url = 'Maquina';

  async function handleDeleteMaquina(grupoDeAcessoId) {
    try {
      await Api.delete(`/${url}/${grupoDeAcessoId}`);
      await Api.delete(`/GrupoDeAcesso/${grupoDeAcessoId}`, {});
      setUser(user.filter((grupo) => grupo.grupoDeAcessoId !== grupoDeAcessoId));
      alert("Deletado com sucesso")
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Grupo de Acesso</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div Style="text-align: right">
                <Button variant="success" onClick={() => setShow(true)}>
                  Cadastrar
                </Button>
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
                      <th scope="col">Descrição</th>
                      <th scope="col">Qtd Telas Permitidas</th>
                      <th scope="col">Qtd De Usuarios</th>
                      <th scope="col">Editar / Excluir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((grupo) => (
                      <tr>
                        <td key={grupo.grupoDeAcessoId} Style="display:none">
                          {grupo.grupoDeAcessoId}
                        </td>
                        <td>{grupo.nomeDoGrupo}</td>
                        <td>{grupo.descricaoDoGrupo}</td>
                        <td>{grupo.quantidadeTelasPermitidas}</td>
                        <td>{grupo.quantidadeDeUsuarios}</td>
                        <td className="text-center icons-table">
                          <span
                            Style="cursor:pointer"
                            // onClick={() => pegarId(maquina.maquinaId)}
                            alt="Editar"
                          >
                            <VscEdit />
                          </span>

                          <span
                            Style="cursor:pointer"
                            onClick={() =>
                              handleDeleteMaquina(grupo.grupoDeAcessoId)
                            }
                            alt="Deletar"
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
              Cadastro de Grupo de Acesso
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
                  <label>Nome do Grupo</label>
                  <input
                    type="text"
                    name="nomeDoGrupo"
                    value={nomeDoGrupo}
                    onChange={(e) => setNomeDoGrupo(e.target.value)}
                  />
                </div>
                <div className="col-md-4 col-sm-6">
                  <label>Descrição do Grupo</label>
                  <input
                    type="text"
                    name="descricaoDoGrupo"
                    value={descricaoDoGrupo}
                    onChange={(e) => setDescricaoDoGrupo(e.target.value)}
                  />
                </div>
                <div className="col-md-4 col-sm-6">
                  <label>Usuarios</label>
                  <select name="usuarios" id=""></select>
                  <option value="">Selecione o Usuário</option>
                  <option value="">Selecione o Usuário</option>
                  <option value="">Selecione o Usuário</option>
                </div>

                <div className="col-md-4 col-sm-6">
                  <label>QTD de Telas Permitidas</label>
                  <input
                    type="number"
                    name="quantidadeTelasPermitidas"
                    value={quantidadeTelasPermitidas}
                    onChange={(e) =>
                      setQuantidadeTelasPermitidas(parseInt(e.target.value))
                    }
                  />
                </div>
               <div className="col-md-4 col-sm-6">
                  <label>QTD Usuarios Permitidos</label>
                  <input
                    type="number"
                    name="quantidadeDeUsuarios"
                    value={quantidadeDeUsuarios}
                    onChange={(e) =>
                      setQuantidadeDeUsuarios(parseInt(e.target.value))
                    }
                  />
                </div>

                <div className="col-md-4 col-sm-6 btnCol">
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
