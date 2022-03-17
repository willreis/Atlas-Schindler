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

  const [user, setUser] = useState();
  const [getKanban, setGetKanban] = useState([]);
  const [la, setLa] = useState();
  const [item, setItem] = useState([]);
  const [familia, setFamilia] = useState();
  const [quantidade, setQuantidade] = useState();
  const [roteiro1, setRoteiro1] = useState()
  const [roteiro2, setRoteiro2] = useState()
  const [roteiro3, setRoteiro3] = useState()
  const [roteiro4, setRoteiro4] = useState()

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

 

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
      dataField: "ordenacao",
      text: "Ordenacao",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
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

  useEffect(() => {
    Api.get(`OrdemProducao/`)
    .then((response) => {
      console.log('aaaaaaaa', response.data)
      setGetKanban(response.data.map((kanban) => {
        return {
          la: kanban.la,
          ordem: kanban.ordem,
          familia: kanban.familia,
          semana: kanban.semana,
          titulo: kanban.titulo,
          origem: kanban.origem,
          ordenacao: kanban.ordenacao,
        };
      }))
    })
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="container-fluid margin-bottom50">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="tituloInterno">
                <h2
                  className="titulosPrincipais"
                  Style="margin-top: 30px!important;"
                >
                  Gerenciamento De Kanban
                </h2>
              </div>
            </div>
          </div>

          <div className="ordemProducaoBox">
            <div className="row">
              <div className="col-md-12">
                <BootstrapTable
                  keyField="la"
                  data={getKanban}
                  columns={colunasPendentes}
                  filter={filterFactory()}
                  hover
                  striped
                />
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
