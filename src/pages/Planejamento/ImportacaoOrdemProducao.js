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
import { FaFileImport } from "react-icons/fa";

function ImportacaoOrdemProducao() {
  const [show, setShow] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const fecharModal = () => setModalDelete(false);

  const products = [
    {
      la: 101544,
      ordem: 7000158,
      familia: "Urgente",
      status: "Pendente",
      semana: 135,
      titulo: "COP Coroa",
      origem: "SAP",
      opcoes: "colocar aqui id",
      filter: textFilter({
        placeholder: "Filtrar LA",
      }),
    },
    {
      la: 101564,
      ordem: 7000159,
      familia: "Médio",
      status: "Pendente",
      semana: 136,
      titulo: "QAP Solido",
      origem: "SAP",
      opcoes: "colocar aqui id",
    },
    {
      la: 101576,
      ordem: 7000160,
      familia: "Baixo",
      status: "Pendente",
      semana: 137,
      titulo: "OPP Cordão",
      origem: "SAP",
      opcoes: "colocar aqui id",
    },
  ];

  const columns = [
    {
      dataField: "la",
      text: "LA",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar LA",
      }),
    },
    {
      dataField: "ordem",
      text: "Ordem",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Ordem",
      }),
    },
    {
      dataField: "familia",
      text: "Família",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Familia",
      }),
    },
    {
      dataField: "status",
      text: "Status",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "semana",
      text: "Semana",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "titulo",
      text: "Título",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "origem",
      text: "Origem",
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
  
  /****************Função de Abrir e de Deletar**/
  function handleDeleteUsuario() {
    console.log("Modal Delete aberto!");
    setModalDelete(true);
  }

  //Deixa de existir lá...
  function sucessoDelete() {
    alert("Deletado com sucesso!");
    setModalDelete(false);
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">
                  Importação de Ordem Produção
                </h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <form
                  id="frmupload"
                  name="frmupload"
                  method="post"
                  enctype="multipart/form-data"
                  action="http://192.168.11.94:90/api/OrdemProducao"
                >
                  <input type="file" id="filexml" name="filexml" />
                  <Button
                    type="submit"
                    className="botaoImportar"
                    variant="success"
                    // onClick={() => setShow(true)}
                  >
                    <FaFileImport Style="color:#fff!important; width:220px!important" />
                    Importar Arquivo
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <BootstrapTable
                  keyField="matricula"
                  hover
                  striped
                  data={products}
                  columns={columns}
                  filter={filterFactory()}
                />
              </div>
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

export default ImportacaoOrdemProducao;
