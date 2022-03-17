import React, { useState, useEffect } from "react";
import Api from "../../services/Api";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { IconContext } from "react-icons/lib";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { BiCommentDetail } from "react-icons/bi";

export default function ProblemaProducao() {
  const urlProcesso = "Processo";
  const [processoId, setProcessoId] = useState();
  const [tesouraId, setTesouraId] = useState([]);
  const [nome, setNome] = useState([]);
  const [tabelas, setTabelas] = useState([]);
  const [tesouraNome, setTesouraNome] = useState([]);
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
  const [ordemProcesso, setOrdemProcesso] = useState([]);
  const [listaNomes, setListaNomes] = useState([]);
  const [nomeMaquinas, setNomesMaquina] = useState([]);


  useEffect(() => {
    getProcessos();
  }, []);

  // ------------------------------------------------------------------------//
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
      dataField: "detalhes",
      text: "Detalhes",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      formatter: (cellContent, row) => {
        return (
          <>
            <button
              className="spanTabela"
              id={row.la}
              Style="cursor:pointer; border: none; background: none"
              // onClick={() => handleDeleteUsuario(row.la)}
              data-toggle="tooltip" data-placement="left" title="Detalhes"
            >
              <BiCommentDetail />
            </button>
          </>
        );
      }
    },
  ];
  // ------------------------------------------------------------------------//
  const getProcessos = (e) => {
    Api.get(`${urlProcesso}`)

      .then((response) => {
        var ordem = response.data.map((maquina) => {
          return {
            processoId: maquina.processoId,
            nome: maquina.nome,
            ordenacao: maquina.ordenacao,
            ordemProducao: maquina.ordemProducao,
          };
        });
        console.log("aqui", ordem.map((tabela) => tabela).flat());

        var tabelas = ordem.map((tabela) => tabela).flat()
        var maquinas = ordem.map((o) => o.ordemProducao).flat()

        setTabelas(ordem.map((tabela) => tabela).flat());
        setTesouraId(ordem.map((o) => o.ordemProducao).flat());
        // setNome(ordem.map((i) => i.nome).flat());
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

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

          {tabelas.map((n) => (
            <div key={processoId} className="ordemProducaoBox">
              <div className="row">
                <div className="col-md-12">
                  <p>{n.nome}</p>
                  <BootstrapTable
                    keyField="la"
                    data={n.ordemProducao}
                    columns={colunasProblemas}
                    filter={filterFactory()}
                    hover
                    striped
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </IconContext.Provider>
    </>
  );
}
