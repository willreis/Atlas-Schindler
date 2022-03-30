import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { IconContext } from "react-icons/lib";
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

function OcupacaoArmazem() {
  const products = [
    {
      codigoMaterial: 123456,
      nomeMaterial: 123,
      qtdPeca: 1212,
      qtdKg: 4321,
      unidadeMedida: 9999,
      qtdGondolas: 8888,
      porcentagemOcupacao: 9898,
    },
    {
      codigoMaterial: 123456,
      nomeMaterial: 123,
      qtdPeca: 1212,
      qtdKg: 4321,
      unidadeMedida: 9999,
      qtdGondolas: 8888,
      porcentagemOcupacao: 9898,
    },
    {
      codigoMaterial: 123456,
      nomeMaterial: 123,
      qtdPeca: 1212,
      qtdKg: 4321,
      unidadeMedida: 9999,
      qtdGondolas: 8888,
      porcentagemOcupacao: 9898,
    },
  ];

  const columns = [
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
      dataField: "nomeMaterial",
      text: "Nome do Material",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Ordenação",
      }),
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "qtdPeca",
      text: "Quantidade (Pç)",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Ordenação",
      }),
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "qtdKg",
      text: "Quantidade (Kg)",
      sort: true,
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "unidadeMedida",
      text: "Unidade de Medida",
      sort: true,
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "qtdGondolas",
      text: "Quantidade de Gondolas",
      sort: true,
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "porcentagemOcupacao",
      text: "Porcentagem de Ocupação",
      sort: true,
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
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
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <>
      <IconContext.Provider value={{ color: "green", size: "1.4rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <div className="tituloInterno">
                  <h2 className="titulosPrincipais">Ocupação do Armazém</h2>
                </div>
              </div>
            </div>
          </div>
          <form className="row g-3 formPadrao" action="">
            <div className="col-md-3 col-sm-6">
              <label>Qtd. Gôndolas Vazias</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Gôndolas com Material</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Gôndolas em Produção</label>
              <input type="text" className="form-control"/>
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Qtd. Total Gondolas</label>
              <input type="text" className="form-control"/>
            </div>
          </form>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="textTable mt-3">
                <BootstrapTable
                  keyField="nomeGrupo"
                  hover
                  striped
                  data={products}
                  columns={columns}
                  filter={filterFactory()}
                  pagination={paginationFactory(options)}
                />
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default OcupacaoArmazem;
