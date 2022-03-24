import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import Modal from "react-bootstrap/Modal";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { BiCommentDetail } from "react-icons/bi";
import { RiDeleteBinFill } from "react-icons/ri";
import { AiFillSave } from "react-icons/ai";
import { MdKeyboardReturn } from "react-icons/md";
import { Link } from "react-router-dom";
import Api from "../../services/Api";

export default function Producao() {
  //Paginação - paginationFactory
  const customTotal = (from, to, size) => (
    <span>
      Mostrando de {from} a {to} do total de {size} Resultados
    </span>
  );

  //Paginação - paginationFactory
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

  //Passando os dados na mão!
  const products = [
    {
      filaDeProducaoMaquina: 1,
      ordem: "P3",
      titulo: "15/03/2022",
      semana: "20/03/2022",
      vg: 666,
      prioridade: "Urgente",
      diasEmProducao: 10,
    },
    {
      filaDeProducaoMaquina: 1,
      ordem: "P3",
      titulo: "15/03/2022",
      semana: "20/03/2022",
      vg: 666,
      prioridade: "Urgente2",
      diasEmProducao: 10,
    },
  ];

  const columns = [
    {
      dataField: "filaDeProducaoMaquina",
      text: "Fila de Produção Máquina",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "ordem",
      text: "Ordem",
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
      dataField: "semana",
      text: "Semana",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "vg",
      text: "VG",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "prioridade",
      text: "Prioridade",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "diasEmProducao",
      text: "Dias em Produção",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "editar",
      isDummyField: true,
      text: "Opções (Editar)",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id={row.ordemProducaoElementoId}
              Style="cursor:pointer"
              // onClick={() => { funcaoAbrirModal(row) }}
              data-toggle="tooltip"
              data-placement="left"
              title="Detalhes"
            >
              <Link to="/operacao/detalhesprodpuncionadeira">
                <BiCommentDetail />
              </Link>
            </span>
            <button
              className="spanTabela"
              id={row.ordemProducaoElementoId}
              Style="cursor:pointer; border: none; background: none"
              // onClick={() => handleDeleteModal(row.ordemProducaoElementoId)}
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

  // const [producaoId, setProducaoId] = useState();
  // const [nome, setNome] = useState();
  // const [ordem, setOrdem] = useState();
  // const [titulo, setTitulo] = useState();
  // const [semana, setSemana] = useState();
  // const [semanaAtual, setSemanaAtual] = useState();
  // const [vg, setVg] = useState();
  // const [mensagemPriorizacao, setMensagemPriorizacao] = useState();
  // const [avisoDoAdministrador, setAvisoDoAdministrador] = useState();
  // const [ordensCustomizadas, setOrdensCustomizadas] = useState();
  // const [ordensKanban, setOrdensKanban] = useState();
  const [getProducao, setGetProducao] = useState([]);
  const urlProducao = "Producao";

  useEffect(() => {
    Api.get(`${urlProducao}`)
      .then((response) => {
        setGetProducao(
          response.data.map((producao) => {
            console.log("Dados producao:", producao);
            return {
              producaoId: producao.producaoId,
              nome: producao.nome,
              ordem: producao.ordem,
              titulo: producao.titulo,
              semana: producao.semana,
              semanaAtual: producao.semanaAtual,
              vg: producao.vg,
              mensagemPriorizacao: producao.mensagemPriorizacao,
              avisoDoAdministrador: producao.avisoDoAdministrador,
              ordensCustomizadas: producao.ordensCustomizadas,
              ordensKanban: producao.ordensKanban,
            };
          })
        );
      })
      .catch((error) => {
        alert("Erro Get: ", error);
      });
  }, []);

  //var nomeMaquina = cookie.get('Nome Maquina');

  var cookiePg = document.cookie.split(";").reduce((cookies, cookie) => {
    const [name, value] = cookie.split("=").map((c) => c.trim());
    cookies[name] = value;
    return cookies;
  }, {});

  console.log("Cookie!!!", cookiePg.NomeMaquina);
  var nomeMaquina = cookiePg.NomeMaquina;
  var idMaquina = cookiePg.IDMaquina;

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Produção</h2>
              </div>
            </div>
          </div>
          <form>
            <div class="row">
              <div className="ordemProducaoBox mb-3 text-center">
                <h3>Maquina: {nomeMaquina}</h3>
              </div>
              <div class="row">
                <div class="col-md-3 col-sm-12 mt-3">
                  <label>Ordem</label>
                  <input
                    type="number"
                    class="form-control"
                    // Value={ordemProducao.la}
                    // onChange={(e) => setLa(parseInt(e.target.value))}
                    // readOnly
                  />
                </div>
                <div class="col-md-3 col-sm-12 mt-3">
                  <label>Título</label>
                  <input
                    type="text"
                    class="form-control"
                    // Value={ordemProducao.ordem}
                    // onChange={(e) => setOrdem(parseInt(e.target.value))}
                  />
                </div>
                <div class="col-md-3 col-sm-12 mt-3">
                  <label>Semana</label>
                  <input
                    type="number"
                    class="form-control"
                    // Value={ordemProducao.status}
                    // onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
                <div class="col-md-3 col-sm-12 mt-3">
                  <label>Semana Atual</label>
                  <input
                    type="number"
                    class="form-control"
                    // Value={ordemProducao.verificada}
                    // onChange={(e) => setStatus(e.target.value)}
                  />
                </div>

                <div class="col-md-3 col-sm-12 mt-3">
                  <label>VG</label>
                  <input
                    type="number"
                    class="form-control"
                    // Value={ordemProducao.titulo}
                    // onChange={(e) => setTitulo(e.target.value)}
                  />
                </div>
                <div class="col-md-3 col-sm-12 mt-3">
                  <label>Mensagem de Priorização</label>
                  <input
                    type="text"
                    class="form-control"
                    // Value={ordemProducao.familia}
                    // onChange={(e) => setFamilia(e.target.value)}
                  />
                </div>
                <div class="col-md-3 col-sm-12 mt-3">
                  <label>Aviso do Administrador</label>
                  <input
                    type="text"
                    class="form-control"
                    // Value={ordemProducao.semana}
                    // onChange={(e) => setSemana(parseInt(e.target.value))}
                  />
                </div>
                <div
                  class="col-md-3 col-sm-12 mt-40 alinharBottom"
                  
                >
                  <Button variant="success" className="btnAbrirProducao">
                    Abrir
                  </Button>
                </div>
              </div>
            </div>
          </form>
          {/*Tabela*/}
          <div className="mt-5 tituloBoxProd">
            <div className="row">
              <div className="col-md-12 tabelaUsuario">
                <p>Customizado</p>
                <BootstrapTable
                  keyField="ordemProducaoElementoId"
                  hover
                  striped
                  data={getProducao}
                  // selectRow={selectRow}
                  columns={columns}
                  filter={filterFactory()}
                  pagination={paginationFactory(options)}
                />
              </div>
            </div>
            <div className="row mt-5 tituloBoxProd">
              <div className="col-md-12 tabelaUsuario">
                <p>Ordens Kanban</p>

                <BootstrapTable
                  keyField="ordemProducaoElementoId"
                  hover
                  striped
                  data={getProducao}
                  // selectRow={selectRow}
                  columns={columns}
                  filter={filterFactory()}
                  pagination={paginationFactory(options)}
                  Style="margin-top: 1rem;"
                />
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
