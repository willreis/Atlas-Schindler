import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { IconContext } from "react-icons/lib";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import Api from "../../services/Api";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

export default function OrdensProducaoKanban() {

  const urlOrdemProducaoKanban = 'OrdemProducao';
  const [user, setUser] = useState();
  const [getKanban, setGetKanban] = useState([]);
  const [item, setItem] = useState([]);
  const [quantidade, setQuantidade] = useState();
  const [roteiro1, setRoteiro1] = useState()
  const [roteiro2, setRoteiro2] = useState()
  const [roteiro3, setRoteiro3] = useState()
  const [roteiro4, setRoteiro4] = useState()
  const [la, setLa] = useState();
  const [ordem, setOrdem] = useState();
  const [familia, setFamilia] = useState();
  const [status, setStatus] = useState();
  const [semana, setSemana] = useState();
  const [titulo, setTitulo] = useState();
  const [origem, setOrigem] = useState();
  const [ordenacao, setOrdenacao] = useState();
  const [idUser, setIdUser] = useState(null);
  const [modalDelete, setModalDelete] = useState(false);

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
              data-toggle="tooltip" data-placement="left" title="Editar"
              onClick={putGerenciamentoKanban(row.la)}
            >
              <VscEdit />
            </span>
            <button
              className="spanTabela"
              id=""
              Style="cursor:pointer; border: none; background: none"
              data-toggle="tooltip" data-placement="left" title="Deletar"
              onClick={abreDelete}
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

  function putGerenciamentoKanban() {
    Api.put(`${urlOrdemProducaoKanban}`, {
      la,
      ordem,
      familia,
      status,
      semana,
      titulo,
      origem,
      ordenacao,
    })
      .then((response) => {
        setLa(la);
        setOrdem();
        setFamilia();
        setStatus();
        setSemana();
        setTitulo();
        setOrigem();
        setOrdenacao();
        console.log("Atualizando os 7 estados", response);
      })
  }

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("Linha selecionada:", row.la);
      setIdUser(row.la);
    },
  }

  function deleteGerenciamentoKanban(idUser) {
    try {
      Api.delete(`${urlOrdemProducaoKanban}/${idUser}`);
      setModalDelete(false);
      window.location.reload();
      alert("Deletado com sucesso!");
    } catch (error) {
      alert("Não foi possível deletar:", error);
    }
  }

  function abreDelete() {
    setModalDelete(true);
  }

  function fechaDelete() {
    setModalDelete(false);
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
                  selectRow={selectRow}
                />
              </div>
            </div>
          </div>
        </div>

        {/*Modal Delete*/}
        <Modal
          show={modalDelete}
          onHide={() => setModalDelete(false)}>
          <Modal.Header>
            <Modal.Title><h3>Atenção</h3></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div Style="margin-bottom: 30px; text-align: center">
              <div className='row'>
                <div className='col-12'>
                  <h5>Deseja realmente excluir?</h5>
                </div>
              </div>
              <div className='row mt-3'>
                <div className="col-12">
                  <div className='row'>
                    <div className='col-6'>
                      <Button variant="primary" onClick={fechaDelete} Style='width: 150px; height: 40px'>Não</Button>
                    </div>
                    <div className='col-6'>
                      <Button variant="danger" onClick={() => deleteGerenciamentoKanban(idUser)} Style='width: 150px; height: 40px'>Sim</Button>
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