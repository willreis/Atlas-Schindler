import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export default function Impressora() {
  var url = "Impressora";

  const [impressoraGet, setImpressoraGet] = useState([]);

  const columns = [
    {
      dataField: "nome",
      text: "Nome",
      sort: true,
    },
    {
      dataField: "marca",
      text: "Marca",
      sort: true,
    },
    {
      dataField: "endereco",
      text: "Endereço",
      sort: true,
    },
    {
      dataField: "area",
      text: "Area",
      sort: true,
    },
    {
      dataField: "editar",
      text: "Editar / Excluir",
      formatter: (cellContent, row) => {
        return (
          <>
            <span 
              className="spanTabela"
              id={row.impressoraId}
              Style="cursor:pointer"
              onClick={() => {
                funcaoAbrirModal(row);
              }}
            >
              <VscEdit />
            </span>

            <span
            className="spanTabela"
            id={row.impressoraId}
            Style="cursor:pointer"
            onClick={() => handleDeleteImpressora(row.impressoraId)}
            >
              <RiDeleteBinFill />
            </span>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
        setImpressoraGet(
          response.data.map((impressora) => {
            return {
              nome: impressora.nome,
              marca: impressora.marca,
              endereco: impressora.endereco,
              area: impressora.area,
              editar: impressora.impressoraId,
              ...impressora,
            };
          })
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  //Modal const
  const [show, setShow] = useState(false);
  const [showModalPut, setShowModalPut] = useState(false);

  //POST
  const [impressoraId, setImpressoraId] = useState();
  const [nome, setNome] = useState();
  const [marca, setMarca] = useState();
  const [endereco, setEndereco] = useState();
  const [area, setArea] = useState();

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

  function createPost() {
    Api.post(`/${url}`, {
      nome,
      marca,
      endereco,
      area,
    })
      .then((response) => {
        // setNome(response.data);
        // setMarca(response.data);
        // setEndereco(response.data);
        // setArea(response.data);
        console.log(response.data);
        alert("Impressora cadastrada com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //GET
  const [user, setUser] = useState([]);

  //Delete
  async function handleDeleteImpressora(impressoraId) {
    try {
      await Api.delete(`/${url}/${impressoraId}`);
      setUser(
        user.filter((impressora) => impressora.impressoraId !== impressoraId)
      );
      alert("Deletado com sucesso");
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }

  ///////PUT
  function handlePut() {
    Api.put(`${url}/${impressoraId}`, {
      impressoraId,
      nome,
      marca,
      endereco,
      area,
    })
      .then((response) => {
        setImpressoraId(impressoraId);
        setNome();
        setMarca();
        setEndereco();
        setArea();
        console.log("Esse é o console do Put: ", response);
        alert("Put Efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }

  function funcaoAbrirModal(impressora) {
    setShowModalPut(true);

    Api.get(`${url}/${impressora.impressoraId}`, {
      impressoraId,
      nome,
      marca,
      endereco,
      area,
    })
      .then(() => {
        setImpressoraId(impressora.impressoraId);
        setNome(impressora.nome);
        setMarca(impressora.marca);
        setEndereco(impressora.endereco);
        setArea(impressora.area);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro1:", error);
        alert("Ops! Ocorreu um erro1:", error);
      });
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
                <Button variant="success" onClick={() => setShow(true)}>
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <BootstrapTable
                keyField="id"
                data={impressoraGet}
                columns={columns}
                striped={true}
              />
            </div>
          </div>
          
        </div>

        {/* Modal Cadastro*/}
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

        {/* Modal Put*/}
        <Modal
          size="lg"
          show={showModalPut}
          onHide={() => setShowModalPut(false)}
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
                <div className="col-md-3 col-sm-6" Style="display:none">
                  <label>Id</label>
                  <input
                    type="text"
                    name="impressoraId"
                    value={impressoraId}
                    onChange={(e) => setImpressoraId(e.target.value)}
                  />
                </div>
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
                    onClick={(impressora) => {
                      handlePut(impressora.impressoraId);
                    }}
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
