import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

export default function ListaMovimentos() {
  //Paginação
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Mostrando de {from} a {to} do total de {size} Resultados
    </span>
  );
  const options = {
    paginationSize: 4,
    pageStartIndex: 0,
    //alwaysShowAllBtns: true, // Always show next and previous button
    withFirstAndLast: false, // Hide the going to First and Last page button
    hideSizePerPage: true, // Hide the sizePerPage dropdown always
    hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: "Primeiro",
    prePageText: "Voltar",
    nextPageText: "Próxima",
    lastPageText: "Última",
    nextPageTitle: "Primeira Página",
    prePageTitle: "Pre page",
    firstPageTitle: "Próxima Página",
    lastPageTitle: "Última Página",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  const [modalDelete, setModalDelete] = useState(false);

  const fecharModal = () => setModalDelete(false);

  //Delete
  function handleDeleteProcesso(idUser) {
    try {
      //Api.delete(`/${url}/${idUser}`);
      console.log("delete id", idUser);

      setModalDelete(false);
      alert("Deletado com sucesso");
      window.location.reload();
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }

  //Modal const
  const [show, setShow] = useState(false);
  const [showModalPut, setShowModalPut] = useState(false);

  //Get
  const [idUser, setIdUser] = useState(null);

  const products = [
    {
      id: 1,
      status: "Pendente",
      gondola: 365,
      origem: 305,
      destino: 587,
      localizacao: 334,
      dataHora: "21/03/2022 - 15:50",
      material: 26752,
    },
    {
      id: 2,
      status: "Pendente",
      gondola: 365,
      origem: 305,
      destino: 587,
      localizacao: 334,
      dataHora: "21/03/2022 - 15:50",
      material: 26752,
    },
    {
      id: 3,
      status: "Pendente",
      gondola: 365,
      origem: 305,
      destino: 587,
      localizacao: 334,
      dataHora: "21/03/2022 - 15:50",
      material: 26752,
    },
  ];

  const columns = [
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "id",
      text: "ID",
      filter: textFilter({
        placeholder: "Filtrar por ID",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "status",
      text: "Status",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Status",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "gondola",
      text: "Gôndola",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Gôndola",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "origem",
      text: "Origem",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Origem",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "destino",
      text: "Destino",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Destino",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "localizacao",
      text: "Localização Atual",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Localização",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "dataHora",
      text: "Data Hora",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "material",
      text: "Material",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "editar",
      text: "Editar / Deletar",
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id={row.processoId}
              Style="cursor:pointer"
              //onClick={() => { funcaoAbrirModal(row) }}
              data-toggle="tooltip"
              data-placement="left"
              title="Editar"
            >
              <VscEdit />
            </span>

            <span
              className="spanTabela"
              id={row.processoId}
              Style="cursor:pointer"
              onClick={() => handleDeleteModal(row.processoId)}
              data-toggle="tooltip"
              data-placement="left"
              title="Deletar"
            >
              <RiDeleteBinFill />
            </span>
          </>
        );
      },
    },
  ];

  //Abre o Modal no ícone de lixeira.
  function handleDeleteModal(processoId) {
    console.log("Modal Delete aberto!");
    console.log("delete id", processoId);
    setModalDelete(true);
  }

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("selecionado");
      console.log(row.processoId);
      setIdUser(row.processoId);
    },
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000", size: "1.6rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Lista de Movimentos</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 tabelaUsuario">
              <BootstrapTable
                keyField="processoId"
                data={products}
                columns={columns}
                striped={true}
                selectRow={selectRow}
                filter={filterFactory()}
                pagination={paginationFactory(options)}
              />
            </div>
          </div>
        </div>

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
                      <Button
                        variant="primary"
                        onClick={() => handleDeleteProcesso(idUser)}
                      >
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
