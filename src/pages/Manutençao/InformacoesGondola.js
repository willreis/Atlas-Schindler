import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import { IoOptionsSharp } from "react-icons/io5";

import Api from "../../services/Api";

export default function InformacoesGondola() {
  const url = "Gondola";
  const [idUser, setIdUser] = useState(null);
  const [user, setUser] = useState();
  const [gondolaId, setGondolaId] = useState([]);
  const [gondolaGet, setGondolaGet] = useState([]);
  const [idGondola, setIdGondola] = useState();
  const [nome, setNome] = useState();
  const [codMaterial, setCodMaterial] = useState();
  const [ordem, setOrdem] = useState();
  const [statusId, setStatusId] = useState();
  const [vg, setVg] = useState();
  const [quantidadePc, setQuantidadePc] = useState();
  const [quantidadeKg, setQuantidadeKg] = useState();
  const [localizacao, setLocalizacao] = useState();
  const [modalDelete, setModalDelete] = useState(false);
  const fecharModal = () => setModalDelete(false);

  //Modal const
  const [show, setShow] = useState(false);
  const [showModalPut, setShowModalPut] = useState(false);

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        setUser(response.data);
        console.log(response);
        setGondolaGet(
          response.data.map((gondola) => {
            return {
              gondolaId: gondola.gondolaId,
              nome: gondola.nome,
              codMaterial: gondola.codMaterial,
              ordem: gondola.ordem,
              statusId: gondola.statusId,
              vg: gondola.vg,
              quantidadePc: gondola.quantidadePc,
              quantidadeKg: gondola.quantidadeKg,
              localizacao: gondola.localizacao,
            };
          })
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("selecionado");
      console.log(row.gondolaId);
      setIdUser(row.gondolaId);
    },
  };

  const columns = [
    {
      dataField: "gondolaId",
      text: "id",
      hidden: true,
    },
    {
      dataField: "gondolaId",
      text: "Número da Gôndola",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Ordenação",
      }),
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "nome",
      text: "Nome da Gôndola",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Ordenação",
      }),
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "codMaterial",
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
      dataField: "quantidadePc",
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
      dataField: "statusId",
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
              id={row.gondolaId}
              Style="cursor:pointer"
              data-toggle="tooltip"
              data-placement="left"
              title="Editar"
              onClick={() => {
                funcaoAbrirModal(row);
              }}
            >
              <VscEdit />
            </span>
            <button
              className="spanTabela"
              id={row.gondolaId}
              Style="cursor:pointer; border: none; background: none"
              data-toggle="tooltip"
              data-placement="left"
              title="Deletar"
              onClick={() => handleDeleteModal(row.gondolaId)}
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

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

  ///////PUT
  function funcaoAbrirModal(row) {
    setShowModalPut(true);
    Api.get(`${url}/${row.gondolaId}`, {
      gondolaId,
      nome,
      codMaterial,
      ordem,
      statusId,
      vg,
      quantidadePc,
      quantidadeKg,
      localizacao,
    })

      .then(() => {
        console.log("get feito", row.gondolaId);
        setGondolaId(row.gondolaId);
        setNome(row.nome);
        setCodMaterial(row.codMaterial);
        setOrdem(row.ordem);
        setStatusId(row.statusId);
        setVg(row.vg);
        setQuantidadePc(row.quantidadePc);
        setQuantidadeKg(row.quantidadeKg);
        setLocalizacao(row.localizacao);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro1:", error);
        alert("Ops! Ocorreu um erro1:", error);
      });
  }

  function handlePut() {
    Api.put(`${url}/${gondolaId}`, {
      gondolaId,
      nome,
      codMaterial,
      ordem,
      statusId,
      vg,
      quantidadePc,
      quantidadeKg,
      localizacao,
    })
      .then((response) => {
        setGondolaId(gondolaId);
        setNome();
        setCodMaterial();
        setOrdem();
        setStatusId(statusId);
        setVg();
        setQuantidadePc();
        setQuantidadeKg();
        setLocalizacao();

        console.log("Esse é o console do Put: ", response);
        alert("Alteração Efetuada com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }

  //Delete
  function handleDeleteUsuario(idUser) {
    console.log("Id Pego", idUser);
    try {
      Api.delete(`/${url}/${idUser}`);
      console.log("delete id", idUser);

      setModalDelete(false);
      alert("Deletado com sucesso");
      window.location.reload();
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente");
    }
  }

  function handleDeleteModal(gondolaId) {
    console.log("Modal Delete aberto!");
    console.log("delete id", gondolaId);
    setModalDelete(true);
  }


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
          <div className="row">
            <div className="col-md-12 col-sm-12 tabelaUsuario">
              <div Style="text-align: center" className="textTable mt-3">
                <BootstrapTable
                  keyField="gondolaId"
                  data={gondolaGet}
                  columns={columns}
                  selectRow={selectRow}
                  filter={filterFactory()}
                  hover
                  striped
                />
              </div>
            </div>
          </div>
        </div>
        {/* Modal Put */}

        <Modal
          size="lg"
          show={showModalPut}
          onHide={() => setShowModalPut(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Editar Dados
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
              <form className="row g-3 formPadrao" onSubmit={handleRegister}>
                <div className="col-md-3 col-sm-6" Style="display:none">
                  <label>Id</label>
                  <input
                    name="gondolaId"
                    value={gondolaId}
                    onChange={(e) => setGondolaId(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Nome da Gondola</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Codigo Material</label>
                  <input
                    type="number"
                    name="codMaterial"
                    value={codMaterial}
                    onChange={(e) => setCodMaterial(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Ordem</label>
                  <input
                    type="number"
                    name="ordem"
                    value={ordem}
                    onChange={(e) => setOrdem(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Localização</label>
                  <input
                    type="text"
                    name="localizacao"
                    value={localizacao}
                    onChange={(e) => setLocalizacao(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Quantidade Pç</label>
                  <input
                    type="number"
                    name="quantidadePc"
                    value={quantidadePc}
                    onChange={(e) => setQuantidadePc(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Quantidade Kg</label>
                  <input
                    type="number"
                    name="quantidadeKg"
                    value={quantidadeKg}
                    onChange={(e) => setQuantidadeKg(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Vg</label>
                  <input
                    type="number"
                    name="vg"
                    value={vg}
                    onChange={(e) => setVg(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Status Gondola</label>
                  <input
                    type="number"
                    name="statusId"
                    value={statusId}
                    onChange={(e) => setStatusId(parseInt(e.target.value))}
                  />
                </div>

                <div className="col-md-2 col-sm-6">
                  <Button
                    type="submit"
                    variant="success"
                    className="align-self-baseline"
                    onClick={(gondola) => {
                      handlePut(gondola.gondolaId);
                    }}
                  >
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>

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
                        onClick={() => handleDeleteUsuario(idUser)}
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


