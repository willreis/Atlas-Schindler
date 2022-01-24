import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import Modal from "react-bootstrap/Modal";
import BootstrapTable from "react-bootstrap-table-next";
import { IconContext } from "react-icons/lib";
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";
import Api from  "../../services/Api";


export default function GruposAcesso() {
  //Modal const
  const [show, setShow] = useState(false);

  //Get
  const [user, setUser] = useState([]);


  // POST
  const [nome, setNome] = useState([]);
  const [descGrupo, setDescGrupo] = useState([]);
  const [qtdTelas, setQtdTelas] = useState([]);
  const [qtdUsuarios, setQtdUsuarios] = useState([]);

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

  function createPost() {
    Api.post("/Processo", {
      nome,
      descGrupo,
      qtdTelas,
      qtdUsuarios
    })
      .then((response) => {
        setNome(response.data);
        setDescGrupo(response.data);
        setQtdTelas(response.data);
        setQtdUsuarios(response.data);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  const products = [
    {
      nomeGrupo: "Grupo Admin",
      descricaoGrupo: "Usuários administradores",
      qtdTelasPermitidas: 3,
      qtdUsuarios: 2,
      opcoes: <IoOptionsSharp />,
    },
    {
      nomeGrupo: "Grupo Admin",
      descricaoGrupo: "Usuários administradores",
      qtdTelasPermitidas: 2,
      qtdUsuarios: 2,
      opcoes: <IoOptionsSharp />,
    },
    {
      nomeGrupo: "Grupo Admin",
      descricaoGrupo: "Usuários administradores",
      qtdTelasPermitidas: 5,
      qtdUsuarios: 2,
      opcoes: <IoOptionsSharp />,
    },
    {
      nomeGrupo: "Grupo Admin",
      descricaoGrupo: "Usuários administradores",
      qtdTelasPermitidas: 6,
      qtdUsuarios: 2,
      opcoes: <IoOptionsSharp />,
    },
    {
      nomeGrupo: "Grupo Admin",
      descricaoGrupo: "Usuários administradores",
      qtdTelasPermitidas: 2,
      qtdUsuarios: 2,
      opcoes: <IoOptionsSharp />,
    },
    {
      nomeGrupo: "Grupo Admin",
      descricaoGrupo: "Usuários administradores",
      qtdTelasPermitidas: 7,
      qtdUsuarios: 2,
      opcoes: <IoOptionsSharp />,
    },
    {
      nomeGrupo: "Grupo Admin",
      descricaoGrupo: "Usuários administradores",
      qtdTelasPermitidas: 9,
      qtdUsuarios: 2,
      opcoes: <IoOptionsSharp />,
    },
    {
      nomeGrupo: "Grupo Admin",
      descricaoGrupo: "Usuários administradores",
      qtdTelasPermitidas: 1,
      qtdUsuarios: 2,
      opcoes: <IoOptionsSharp />,
    },
  ];

  const columns = [
    {
      dataField: "nomeGrupo", //dataField é cada Coluna. São as propriedade do Array de objetos 'products' mas só no Código.
      text: "Nome do Grupo", //text é o th(table head). Nome de cada Coluna. Vai aparecer na tela.
    },
    {
      dataField: "descricaoGrupo",
      text: "Descrição do Grupo",
    },
    {
      dataField: "qtdTelasPermitidas",
      text: "Qnt Telas Permitidas",
    },
    {
      dataField: "qtdUsuarios",
      text: "Quantidade de Usuários",
    },
    {
      dataField: "opcoes",
      text: "Opções/Editar",
    },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Grupo de Acesso</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div Style="text-align: right">
                <Button variant="success" onClick={() => setShow(true)}>Cadastrar</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div Style="text-align: center" className="textTable">
                <BootstrapTable
                  keyField="nomeGrupo"
                  hover
                  striped
                  data={products}
                  columns={columns}
                />
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
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="col-md-4 col-sm-6">
                  <label>Descrição do Grupo</label>
                  <input
                    type="text"
                    name="descGrupo"
                    value={descGrupo}
                    onChange={(e) => setDescGrupo((e.target.value))}
                  />
                </div>
                <div className="col-md-4 col-sm-6">
                  <label>QTD de Telas Permitidas</label>
                  <input
                    type="number"
                    name="qtdTelas"
                    value={qtdTelas}
                    onChange={(e) => setQtdTelas(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-4 col-sm-6">
                  <label>QTD Usuarios Permitidos</label>
                  <input
                    type="number"
                    name="qtdUsuarios"
                    value={qtdUsuarios}
                    onChange={(e) => setQtdUsuarios(parseInt(e.target.value))}
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
