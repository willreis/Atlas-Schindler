import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import Modal from "react-bootstrap/Modal";

import { Button } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { AiFillSave } from "react-icons/ai";

function OrdensProducao() {
  const [show, setShow] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const fecharModal = () => setModalDelete(false);

  const products = [
    {
      vazio: "X",
      vg: 101544,
      item: 7000158,
      codigoMaterial: 42343,
      material: 542345,
      quantidade: 135,
      programa: 0,
      comprimento: 23,
      largura: 10,
      op: 5436456,
      ovm: 8765,
      roteiro1: "T1",
      roteiro2: "",
      roteiro3: "",
      roteiro4: "D1",
      sequencia: 344,
    },
    {
      vazio: "X",
      vg: 101678,
      item: 7000876,
      codigoMaterial: 234556,
      material: 23456,
      quantidade: 4345,
      programa: 0,
      comprimento: 43,
      largura: 14,
      op: 967896,
      ovm: 65443,
      roteiro1: "T1",
      roteiro2: "T2",
      roteiro3: "",
      roteiro4: "D1",
      sequencia: 346,
    },
    {
      vazio: "X",
      vg: 101678,
      item: 7000876,
      codigoMaterial: 234556,
      material: 23456,
      quantidade: 4345,
      programa: 0,
      comprimento: 43,
      largura: 14,
      op: 967896,
      ovm: 65443,
      roteiro1: "T1",
      roteiro2: "T2",
      roteiro3: "",
      roteiro4: "D1",
      sequencia: 346,
    },
  ];

  const columns = [
    {
      dataField: "vazio",
      text: "",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "vg",
      text: "VG",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar VG",
      }),
    },
    {
      dataField: "item",
      text: "Item",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Item",
      }),
    },
    {
      dataField: "codigoMaterial",
      text: "Cód.Material",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Cód.Material",
      }),
    },
    {
      dataField: "material",
      text: "Material",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "quantidade",
      text: "Quantidade",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "programa",
      text: "Programa",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "comprimento",
      text: "Comprimento",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "largura",
      text: "Largura",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "op",
      text: "Op",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "ovm",
      text: "OVM",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "roteiro1",
      text: "Roteiro 1",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "roteiro2",
      text: "Roteiro 2",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "roteiro3",
      text: "Roteiro 3",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "roteiro4",
      text: "Roteiro 4",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "sequencia",
      text: "Sequência",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "editar",
      isDummyField: true,
      text: "Editar / Excluir",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      formatter: (cellContent, row) => {
        return (
          <>
            <span className="spanTabela" id="" Style="cursor:pointer">
              <VscEdit />
            </span>
            <button
              className="spanTabela"
              id=""
              Style="cursor:pointer; border: none; background: none"
              onClick={() => handleDeleteUsuario(row.usuarioId)}
            >
              <RiDeleteBinFill />
            </button>
          </>
        );
      },
    },
  ];

  function handleDeleteUsuario() {
    console.log("Modal Delete aberto!");
    setModalDelete(true);
  }

  function sucessoDelete() {
    alert("Deletado com sucesso!");
    setModalDelete(false);
  }

  // function createPost() {
  //   Api.post(`/${url}/`, { })
  //     .then((response) => {
  //       console.log(response.data);
  //       alert("Cadastro Efetuado com sucesso!");
  //     })
  //     .catch((error) => {
  //       console.log("Ops! Ocorreu um erro2:" + error);
  //       alert("Ops! Ocorreu um erro2" + error);
  //     });
  // }

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="container-fluid paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Ordens de Produção</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <Button
                  className="botaoImportar"
                  variant="success"
                  onClick={() => setShow(true)}
                >
                  <AiFillSave Style="color:#fff!important; width:220px!important" />
                  Salvar
                </Button>
              </div>
            </div>
          </div>

          <div className="row">
            <form>
              <div class="row">
                <div class="col-3 mt-3">
                  <label>LA</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col-3 mt-3">
                  <label>Ordem</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div class="col-3 mt-3">
                  <label>Status</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col-3 mt-3">
                  <label>Título</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div class="col-2 mt-3">
                  <label>Família</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div class="col-2 mt-3">
                  <label>Semana</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div class="col-2 mt-3">
                  <label>Origem</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div class="col-2 mt-3">
                  <label>Ordenação</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div class="col-2 mt-3">
                  <label>Data Início</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
                <div class="col-2 mt-3">
                  <label>Data Fim</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="container-fluid" Style="overflow:auto">
          <div className="row mt-3">
            <div className="col-md-12">
              <BootstrapTable
                keyField="matricula"
                hover
                striped
                data={products}
                columns={columns}
                filter={filterFactory()}
                Style="width: max-content;"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row botoesOrdemProducao">
            <div className="col-2">
              <Button variant="success">Criar Relação Automática</Button>
            </div>
            <div className="col-2">
              <Button variant="success">Criar Relação Única</Button>
            </div>
            <div className="col-2">
              <Button variant="success">Cancelar Relação</Button>
            </div>
            <div className="col-2">
              <Button variant="success">Verificar</Button>
            </div>
            <div className="col-2">
              <Button variant="success">Imprimir</Button>
            </div>
            <div className="col-2">
              <Button variant="success">Detalhes da VG</Button>
            </div>
          </div>
        </div>

        {/* Modal importar arquivo */}
        <Modal
          Style="margin-top: 100px; margin-left: 500px"
          size="lg"
          show={show}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Cadastro de Usuarios</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
              <p>Vou ser um modal de Cadastro bora CODAR!</p>
            </div>
          </Modal.Body>
        </Modal>

        {/* Modal Delete */}
        <Modal
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          show={modalDelete}
          onHide={() => setModalDelete(false)}
          centered
        >
          <Modal.Header closeButton Style="position:relative">
            <h3 Style="position: absolute; left: 30%;">Atenção!</h3>
          </Modal.Header>
          <Modal.Body>
            <div Style="margin-bottom: 30px; text-align: center">
              <div className="row">
                <div className="col-12">
                  <p>Deseja Realmente Excluir!</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <Button variant="danger" onClick={fecharModal}>
                        Não
                      </Button>
                    </div>
                    <div className="col-6">
                      <Button variant="primary" onClick={sucessoDelete}>
                        Sim
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </IconContext.Provider>
    </>
  );
}

export default OrdensProducao;
