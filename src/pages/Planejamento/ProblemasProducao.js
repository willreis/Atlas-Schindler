import React, { useState, useEffect } from "react";
import Api from "../../services/Api";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { IconContext } from "react-icons/lib";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";

export default function ProblemaProducao() {
  const urlProcesso = "Processo";
  const [processoId, setProcessoId] = useState();
  const [tesouraId, setTesouraId] = useState([]);
  const [tesouraNome, setTesouraNome] = useState([]);
  const [puncionadeiraId, setPuncionadeiraId] = useState([]);
  const [dobradeiraId, setDobradeiraId] = useState([]);

  const [la, setLa] = useState([]);
  const [ordem, setOrdem] = useState([]);
  const [familia, setFamilia] = useState([]);
  const [status, setStatus] = useState([]);
  const [semana, setSemana] = useState([]);
  const [titulo, setTitulo] = useState([]);
  const [motivo, setMotivo] = useState([]);
  const [origem, setOrigem] = useState([]);
  const [diasEmProducao, setDiasEmProducao] = useState([]);
  const [listaNomes, setListaNomes] = useState([]);

  //GET Problemas Producao Tesoura
  useEffect(() => {
    Api.get(`${urlProcesso}`)
      .then((response) => {
        setTesouraId(
          response.data.map((maquina) => {
            console.log("response", maquina);
          }));
      })
      .catch((error) => {
        console.log('Error!!!:', JSON.stringify(error))
      });
  }, []);

  const colunasProblemas = [
    {
      dataField: "processoId",
      text: "LA",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar LA",
      }),
    },
    {
      dataField: "nome",
      text: "Ordem",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Ordem",
      }),
    },
    {
      dataField: "ordenacao",
      text: "Família",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Família",
      }),
    },
    {
      dataField: "ordemProducao",
      text: "Status",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Status",
      }),
    },
    {
      dataField: "",
      text: "Semana",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Semana",
      }),
    },
    {
      dataField: "",
      text: "Titulo",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Título",
      }),
    },
    {
      dataField: "",
      text: "Motivo",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Motivo",
      }),
    },
    {
      dataField: "",
      text: "Origem",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Origem",
      }),
    },
    {
      dataField: "",
      text: "Dias em Produção",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Dias em Produção",
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
                  keyField='la'
                  data={tesouraId}
                  columns={colunasProblemas}
                  filter={filterFactory()}
                  hover
                  striped
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
                  keyField='la'
                  data={puncionadeiraId}
                  columns={colunasProblemas}
                  filter={filterFactory()}
                  hover
                  striped
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
                  keyField='la'
                  data={dobradeiraId}
                  columns={colunasProblemas}
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
