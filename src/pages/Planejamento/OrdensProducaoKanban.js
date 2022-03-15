import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { IconContext } from "react-icons/lib";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import Api from "../../services/Api";

export default function OrdensProducaoKanban() {

  const urlKanban = 'Kanban';

  const [la, setLa] = useState();
  const [tabelas, setTabelas] = useState([]);
  const [ordem, setOrdem] = useState();
  const [familia, setFamilia] = useState();
  const [status, setStatus] = useState();
  const [semana, setSemana] = useState();
  const [titulo, setTitulo] = useState();
  const [motivo, setMotivo] = useState();
  const [origem, setOrigem] = useState();
  const [diasEmProducao, setDiasEmProducao] = useState();

  useEffect(() => {
    Api.get(`${urlKanban}`)
      .then((response) => {
        setTabelas(
          response.data.map((param) => {
            console.log('Chegou aqui:', param);
            return {

            }
          })
        )
      })
      .catch((error) => {
        alert("Error", JSON.stringify(error));
      })
  }, []);

  const colunasPendentes = [
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
        placeholder: "Filtrar Família",
      }),
    },
    {
      dataField: "status",
      text: "Status",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Status",
      }),
    },
    {
      dataField: "semana",
      text: "Semana",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Semana",
      }),
    },
    {
      dataField: "titulo",
      text: "Titulo",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Título",
      }),
    },
    {
      dataField: "origem",
      text: "Origem",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Origem",
      }),
    },
    {
      dataField: "ordenacao",
      text: "Ordenação",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Ordenação",
      }),
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
              data-toggle="tooltip" data-placement="left" title="Editar"
            >
              <VscEdit />
            </span>
            <button
              className="spanTabela"
              id=""
              Style="cursor:pointer; border: none; background: none"
              data-toggle="tooltip" data-placement="left" title="Deletar"
            >
              <RiDeleteBinFill />
            </button>
          </>
        );
      },
    },
  ];
  const productsPendentes = [
    {
      la: 101544,
      ordem: 7000158,
      familia: "Urgente",
      status: 542345,
      semana: 135,
      titulo: "COP Coroa",
      origem: "SAP",
      ordenacao: 10,
      opcoes: "Detalhes",
    },
    {
      la: 101544,
      ordem: 7000158,
      familia: "Urgente",
      status: 542345,
      semana: 135,
      titulo: "COP Coroa",
      origem: "SAP",
      ordenacao: 10,
      opcoes: "Detalhes",
    },
    {
      la: 101544,
      ordem: 7000158,
      familia: "Urgente",
      status: 542345,
      semana: 135,
      titulo: "COP Coroa",
      origem: "SAP",
      ordenacao: 10,
      opcoes: "Detalhes",
    },
  ];


  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="container-fluid margin-bottom50">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais" Style="margin-top: 30px!important;">Ordens De Produção Kanban</h2>
              </div>
            </div>
          </div>

          {/* Produtos Pendentes */}
          <div className="ordemProducaoBox">
            <div className="row">
              <div className="col-md-12">
                <p>Pendentes</p>
                <BootstrapTable
                  keyField="matricula"
                  hover
                  striped
                  data={productsPendentes}
                  columns={colunasPendentes}
                  filter={filterFactory()}
                />
              </div>
            </div>
          </div>

          {/* Produtos Customizada */}
          <div className="ordemProducaoBox">
            <div className="row">
              <div className="col-md-12">
                <p>Customizada</p>
                <BootstrapTable
                  keyField="matricula"
                  hover
                  striped
                  data={productsPendentes}
                  columns={colunasPendentes}
                  filter={filterFactory()}
                />
              </div>
            </div>
          </div>


          {/* Produtos Kanban */}
          <div className="ordemProducaoBox">
            <div className="row">
              <div className="col-md-12">
                <p>Kanban</p>
                <BootstrapTable
                  keyField="matricula"
                  hover
                  striped
                  data={productsPendentes}
                  columns={colunasPendentes}
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
