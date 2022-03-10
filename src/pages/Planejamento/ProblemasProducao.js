import React, { useState, useEffect } from "react";
import Api from '../../services/Api';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { IconContext } from "react-icons/lib";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";

export default function ProblemaProducao() {
  // const [getProblemas, setGetProblemas] = useState();

  const urlProcesso = 'Processo';
  const [tesouraId, setTesouraId] = useState([]);
  const [puncionadeiraId, setPuncionadeiraId] = useState([]);
  const [dobradeiraId, setDobradeiraId] = useState([]);

  const [la, setLa] = useState();
  const [ordem, setOrdem] = useState();
  const [familia, setFamilia] = useState();
  const [status, setStatus] = useState();
  const [semana, setSemana] = useState();
  const [titulo, setTitulo] = useState();
  const [motivo, setMotivo] = useState();
  const [origem, setOrigem] = useState();
  const [origem2, setOrigem2] = useState();

  //GET Problemas Producao Tesoura
  useEffect(() => {
    Api.get(`${urlProcesso}`)
      // let tesouraNome = urlProcesso.filter((tesouraN) => tesouraN.nome === 'Tesoura')
      .then((response) => {
        console.log('asasa', response.data);
        // setTesouraId(tesouraNome);
      })
      .catch((error) => {
        console.log("Error:", error);
      }, []);
  })

  const colunasProblemas = [
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
      dataField: "motivo",
      text: "Motivo",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Motivo",
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
      dataField: "diasEmProducao",
      text: "Origem",
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
      status: "Erro",
      semana: 135,
      titulo: "COP Coroa",
      motivo: 79989,
      origem: "SAP",
      diasEmProducao: 243,
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
                <h2
                  className="titulosPrincipais"
                  Style="margin-top: 30px!important;"
                >
                  Problemas de Produção
                </h2>
              </div>
            </div>
          </div>

          {/* Produtos Pendentes */}
          <div className="ordemProducaoBox">
            <div className="row">
              <div className="col-md-12">
                <p>Tesoura</p>
                <BootstrapTable
                  keyField={tesouraId}
                  hover
                  striped
                  data={productsPendentes}
                  columns={colunasProblemas}
                  filter={filterFactory()}
                />
              </div>
            </div>
          </div>

          {/* Produtos Customizada */}
          <div className="ordemProducaoBox">
            <div className="row">
              <div className="col-md-12">
                <p>Puncionadeira</p>
                <BootstrapTable
                  keyField={puncionadeiraId}
                  hover
                  striped
                  data={productsPendentes}
                  columns={colunasProblemas}
                  filter={filterFactory()}
                />
              </div>
            </div>
          </div>

          {/* Produtos Kanban */}
          <div className="ordemProducaoBox">
            <div className="row">
              <div className="col-md-12">
                <p>Dobradeira</p>
                <BootstrapTable
                  keyField={dobradeiraId}
                  hover
                  striped
                  data={productsPendentes}
                  columns={colunasProblemas}
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
