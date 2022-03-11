import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { IconContext } from "react-icons/lib";
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

function InformacoesGondola() {
  const products = [
    {
      numeroGondola: 123456,
      codigoMaterial: 123,
      ordem: 1212,
      localizacao: 4321,
      quantidadePç: 9999,
      quantidadeKg: 8888,
      vg: 9898,
      statusGondola: 9090,
      opcoes: <IoOptionsSharp />,
    },
    {
      numeroGondola: 123456,
      codigoMaterial: 123,
      ordem: 1212,
      localizacao: 4321,
      quantidadePç: 9999,
      quantidadeKg: 8888,
      vg: 9898,
      statusGondola: 9090,
      opcoes: <IoOptionsSharp />,
    },
    {
      numeroGondola: 123456,
      codigoMaterial: 123,
      ordem: 1212,
      localizacao: 4321,
      quantidadePç: 9999,
      quantidadeKg: 8888,
      vg: 9898,
      statusGondola: 9090,
      opcoes: <IoOptionsSharp />,
    },
    {
      numeroGondola: 123456,
      codigoMaterial: 123,
      ordem: 1212,
      localizacao: 4321,
      quantidadePç: 9999,
      quantidadeKg: 8888,
      vg: 9898,
      statusGondola: 9090,
      opcoes: <IoOptionsSharp />,
    },
    {
      numeroGondola: 123456,
      codigoMaterial: 123,
      ordem: 1212,
      localizacao: 4321,
      quantidadePç: 9999,
      quantidadeKg: 8888,
      vg: 9898,
      statusGondola: 9090,
      opcoes: <IoOptionsSharp />,
    },
  ];

  const columns = [
    {
      dataField: "numeroGondola",
      text: "Número da Gôndola",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Ordenação",
      }),
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "codigoMaterial", 
      text: "Código do Material",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Ordenação",
      }),
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "ordem",
      text: "Ordem",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Ordenação",
      }),
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "localizacao",
      text: "Localização",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Ordenação",
      }),
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "quantidadePç",
      text: "Quantidade (Pç)",
      sort: true,
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "quantidadeKg",
      text: "Quantidade (Kg)",
      sort: true,
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "vg",
      text: "VG",
      sort: true,
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "statusGondola",
      text: "Status da Gôndola",
      sort: true,
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "editar",
      isDummyField: true,
      text: "Editar / Deletar",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id=""
              Style="cursor:pointer"
              data-toggle="tooltip"
              data-placement="left"
              title="Editar"
            >
              <VscEdit />
            </span>
            <button
              className="spanTabela"
              id=""
              Style="cursor:pointer; border: none; background: none"
              data-toggle="tooltip"
              data-placement="left"
              title="Deletar"
            >
              <RiDeleteBinFill />
            </button>
          </>
        );
      },
    },
  ];

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
    ],
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Informações da Gôndola</h2>
              </div>
            </div>
          </div>
          <form className="row g-3 formPadrao" action="">
            <div className="col-md-3 col-sm-6">
              <label>Número da Gôndola</label>
              <input type="text" />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Código do Material</label>
              <input type="text" />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Código do Material</label>
              <input type="text" />
            </div>
            <div className="col-md-3 col-sm-6 btnCol">
              <Button variant="success" className="align-self-baseline">
                Pesquisar
              </Button>
            </div>
          </form>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div Style="text-align: center" className="textTable mt-3">
                <BootstrapTable
                  keyField="nomeGrupo"
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

      </IconContext.Provider>
    </>
  );
}

export default InformacoesGondola;
