import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { AiFillSave } from "react-icons/ai";
import Swal from "sweetalert2/dist/sweetalert2.js";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import Modal from "react-bootstrap/Modal";
import Api from "../../services/Api";

export default function RecebimentoArmazem() {
  const [gondolaVazia, setGondolaVazia] = useState();
  const [showModalPut, setShowModalPut] = useState(false);
  const [show, setShow] = useState(false);
  const [idUser, setIdUser] = useState(null);

  //Endpoints Swagger
  const [get, setGet] = useState([]);
  const [recebimentoArmazemId, setRecebimentoArmazemId] = useState();
  const [notaFiscal, setNotaFiscal] = useState();
  const [codMaterial, setCodMaterial] = useState();
  const [quantidadeEtiqueta, setQuantidadeEtiqueta] = useState();
  const [ordemDeCompra, setOrdemDeCompra] = useState();
  const [posicao, setPosicao] = useState();
  const [lote, setLote] = useState();
  const [observacao, setObservacao] = useState();
  const [fornecedor, setFornecedor] = useState();
  const [getModalPut, setGetModalPut] = useState([]);

  const columns = [
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "recebimentoArmazemId",
      text: "ID",
      hidden: false,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "notaFiscal",
      text: "Nota Fiscal",
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "codMaterial",
      text: "Código Material",
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "quantidadeEtiqueta",
      text: "Qtd. Etiqueta",
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "ordemDeCompra",
      text: "Ordem Compra",
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "posicao",
      text: "Posição",
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "lote",
      text: "Lote",
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "observacao",
      text: "Observação",
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "fornecedor",
      text: "Fornecedor",
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "editar",
      text: "Editar / Deletar",
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id={row.recebimentoArmazemId}
              Style="cursor:pointer"
              onClick={() => {
                funcaoAbrirModal(row);
              }}
              data-toggle="tooltip"
              data-placement="left"
              title="Editar"
            >
              <VscEdit />
            </span>

            <span
              className="spanTabela"
              id={row.recebimentoArmazemId}
              Style="cursor:pointer"
              onClick={() => handleDeleteModal(row.recebimentoArmazemId)}
              data-toggle="tooltip"
              data-placement="left"
              title="Deletar"
            >
              <RiDeleteBinFill />
            </span>
          </>
        );
      },
    },
  ];

  //Paginação
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

  const [user, setUser] = useState([]);

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

  function funcaoAbrirModal(row) {
    setShowModalPut(true);
    console.log("TEXTO:", row.recebimentoArmazemId);
    Api.get(`RecebimentoArmazem/${row.recebimentoArmazemId}`, {
      recebimentoArmazemId,
      notaFiscal,
      codMaterial,
      quantidadeEtiqueta,
      ordemDeCompra,
      posicao,
      lote,
      observacao,
      fornecedor,
    })
      .then(() => {
        setRecebimentoArmazemId(row.recebimentoArmazemId);
        setNotaFiscal(row.notaFiscal);
        setCodMaterial(row.codMaterial);
        setQuantidadeEtiqueta(row.quantidadeEtiqueta);
        setOrdemDeCompra(row.ordemDeCompra);
        setPosicao(row.posicao);
        setLote(row.lote);
        setObservacao(row.observacao);
        setFornecedor(row.fornecedor);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }

  function handlePut(row) {
    Api.put(`/RecebimentoArmazem/${row.recebimentoArmazemId}`, {
      recebimentoArmazemId,
      notaFiscal,
      codMaterial,
      quantidadeEtiqueta,
      ordemDeCompra,
      posicao,
      lote,
      observacao,
      fornecedor,
    })
      .then(() => {
        setRecebimentoArmazemId(recebimentoArmazemId);
        setNotaFiscal();
        setCodMaterial();
        setQuantidadeEtiqueta();
        setOrdemDeCompra();
        setPosicao();
        setLote();
        setObservacao();
        setFornecedor();
        alert("Put efetuado com sucesso!");
      })
      .catch((error) => {
        alert("Erro put: ", error);
      });
  }

  function handleDeleteModal(idUser) {
    console.log("id: ", idUser);

    Swal.fire({
      title: "Você tem certeza disso?",
      text: "Não será possível reverter esta ação!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, pode deletar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Api.delete(`/RecebimentoArmazem/${idUser}`);
        Swal.fire(
          "Deletado!",
          "Seu arquivo foi deletado com sucesso!",
          "success"
        ).then(() => {
          window.location.reload();
        });
      }
    });
  }

  useEffect(() => {
    Api.get("RecebimentoArmazem/")
      .then((response) => {
        setGet(response.data);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });

    Api.get("/Gondola/GondolasVazias/")
      .then((response) => {
        setGondolaVazia(response.data);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  function cadastrarMaterial() {
    Api.post(`RecebimentoArmazem/`, {
      codMaterial,
      fornecedor,
      lote,
      notaFiscal,
      observacao,
      ordemDeCompra,
      posicao,
      quantidadeEtiqueta,
      recebimentoArmazemId,
    })
      .then((response) => {
        console.log("aaa: ", response.data);
        console.log("cadastro sucesso");
        Swal.fire({
          icon: "success",
          title: "Sucesso",
          text: "Processo cadastrado com sucesso",
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:" + error);
        alert("Ops! Ocorreu um erro" + error);
      });
  }

  function gondolasVazias() {
    Swal.fire({
      title: "Gondolas Vazias",
      html:
        "<p class='pSweetAlert'>Total: <span>" + gondolaVazia + "</span><p>",
      text: "Gondolas Vazias",
      icon: "info",
    });
  }

  function resetMesa() {
    Api.post("RecebimentoArmazem/ResetMesa")
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Sucesso",
          text: "Mesas Resetadas com sucesso",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("selecionado");
      console.log(row.recebimentoArmazemId);
      setIdUser(row.recebimentoArmazemId);
    },
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#000", size: "1.6rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Recebimento Armazém</h2>
              </div>
            </div>
          </div>
          <div className="container mb4rem">
            <form>
              <div class="row">
                <div class="col-md-3 mt-3">
                  <label>Nota Fiscal</label>
                  <input
                    type="text"
                    class="form-control"
                    value={notaFiscal}
                    onChange={(e) => setNotaFiscal(e.target.value)}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Código do Material</label>
                  <input
                    type="number"
                    class="form-control"
                    value={codMaterial}
                    onChange={(e) => setCodMaterial(parseInt(e.target.value))}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Quantidade Etiqueta</label>
                  <input
                    type="number"
                    class="form-control"
                    value={quantidadeEtiqueta}
                    onChange={(e) =>
                      setQuantidadeEtiqueta(parseInt(e.target.value))
                    }
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Ordem de Compra</label>
                  <input
                    type="number"
                    class="form-control"
                    value={ordemDeCompra}
                    onChange={(e) => setOrdemDeCompra(parseInt(e.target.value))}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Posição</label>
                  <input
                    type="number"
                    class="form-control"
                    value={posicao}
                    onChange={(e) => setPosicao(parseInt(e.target.value))}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Lote</label>
                  <input
                    type="number"
                    class="form-control"
                    value={lote}
                    onChange={(e) => setLote(parseInt(e.target.value))}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Observação</label>
                  <input
                    type="text"
                    class="form-control"
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Fornecedor</label>
                  <input
                    type="text"
                    class="form-control"
                    value={fornecedor}
                    onChange={(e) => setFornecedor(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="row botoesOrdemProducao" Style="margin: 0;">
            <div className="col-md-3">
              <Button variant="success" onClick={(e) => resetMesa()}>
                Reset de Mesa
              </Button>
            </div>
            <div className="col-md-3">
              <Button variant="success" onClick={() => cadastrarMaterial()}>
                Realizar Entrada de Material
              </Button>
            </div>
            <div className="col-md-3">
              <Button
                variant="success"
                id="btnCancelarRelacao"
                onClick={() => gondolasVazias()}
              >
                Qtd. Gôndolas Vazias
              </Button>
            </div>
            <div className="col-md-3">
              <Button variant="success">Limpar</Button>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 tabelaUsuario">
              <BootstrapTable
                keyField="recebimentoArmazemId"
                data={get}
                columns={columns}
                striped={true}
                selectRow={selectRow}
                filter={filterFactory()}
                pagination={paginationFactory(options)}
              />
            </div>
          </div>
        </div>
        {/* Modal Put */}

        <Modal
          size="lg"
          show={showModalPut}
          onHide={() => setShowModalPut(false)}
          dialogClassName="modal-100w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Editar Dados do Recebimento Armazém
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="formCadastro" id="formCadastro">
              <div className="container">
                <form onSubmit={handleRegister}>
                  <div class="row">
                    <div class="col-md-3 mt-3" Style="display:none">
                      <label>Id</label>
                      <input
                        type="number"
                        class="form-control"
                        value={recebimentoArmazemId}
                        onChange={(e) =>
                          setRecebimentoArmazemId(parseInt(e.target.value))
                        }
                      />
                    </div>
                    <div class="col-md-3 mt-3">
                      <label>Nota Fiscal</label>
                      <input
                        type="text"
                        class="form-control"
                        value={notaFiscal}
                        onChange={(e) => setNotaFiscal(e.target.value)}
                      />
                    </div>
                    <div class="col-md-3 mt-3">
                      <label>Código do Material</label>
                      <input
                        type="number"
                        class="form-control"
                        value={codMaterial}
                        onChange={(e) =>
                          setCodMaterial(parseInt(e.target.value))
                        }
                      />
                    </div>
                    <div class="col-md-3 mt-3">
                      <label>Quantidade Etiqueta</label>
                      <input
                        type="number"
                        class="form-control"
                        value={quantidadeEtiqueta}
                        onChange={(e) =>
                          setQuantidadeEtiqueta(parseInt(e.target.value))
                        }
                      />
                    </div>
                    <div class="col-md-3 mt-3">
                      <label>Ordem de Compra</label>
                      <input
                        type="number"
                        class="form-control"
                        value={ordemDeCompra}
                        onChange={(e) =>
                          setOrdemDeCompra(parseInt(e.target.value))
                        }
                      />
                    </div>
                    <div class="col-md-3 mt-3">
                      <label>Posição</label>
                      <input
                        type="number"
                        class="form-control"
                        value={posicao}
                        onChange={(e) => setPosicao(parseInt(e.target.value))}
                      />
                    </div>
                    <div class="col-md-3 mt-3">
                      <label>Lote</label>
                      <input
                        type="number"
                        class="form-control"
                        value={lote}
                        onChange={(e) => setLote(parseInt(e.target.value))}
                      />
                    </div>
                    <div class="col-md-3 mt-3">
                      <label>Observação</label>
                      <input
                        type="text"
                        class="form-control"
                        value={observacao}
                        onChange={(e) => setObservacao(e.target.value)}
                      />
                    </div>
                    <div class="col-md-3 mt-3">
                      <label>Fornecedor</label>
                      <input
                        type="text"
                        class="form-control"
                        value={fornecedor}
                        onChange={(e) => setFornecedor(e.target.value)}
                      />
                    </div>
                    <div className="col-md-3 offset-md-9 col-sm-6 mt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        Style="width: 100%; height: 36px"
                        // className="align-self-baseline"
                        onClick={(param) => {
                          handlePut(param.recebimentoArmazemId);
                        }}
                      >
                        Salvar
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </IconContext.Provider>
    </>
  );
}
