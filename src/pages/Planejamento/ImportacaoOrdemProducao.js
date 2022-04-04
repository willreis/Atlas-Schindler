import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Modal from "react-bootstrap/Modal";
import Api from "../../services/Api";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaFileImport } from "react-icons/fa";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { BiCommentDetail } from "react-icons/bi";
import swal from 'sweetalert';
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function ImportacaoOrdemProducao() {
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

  const [la, setLa] = useState(null);
  const [idUser, setIdUser] = useState(null);
  const [show, setShow] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [ordemProdGet, setOrdemProdGet] = useState([]);
  const [user, setUser] = useState();
  const [file, setFile] = useState({});
  const url = "OrdemProducao";

  const fecharModal = () => setModalDelete(false);

  const columns = [
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
        placeholder: "Filtrar Familia",
      }),
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
      dataField: "editar",
      isDummyField: true,
      text: "Opções / Deletar",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id={row.la}
              Style="cursor:pointer"
              onClick={() => detalhesOrdemProducao(row.la)}
              data-toggle="tooltip"
              data-placement="left"
              title="Detalhes"
            >
              <BiCommentDetail />
            </span>
            <button
              className="spanTabela"
              id={row.la}
              Style="cursor:pointer; border: none; background: none"
              onClick={() => handleDeleteUsuario(row.la)}
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

  function handleDeleteImportacao(idUser) {
    try {
      Api.delete(`/${url}/${idUser}`);
      console.log("delete id la:", idUser);
      setModalDelete(false);
      Swal.fire({
        icon: "success",
        title: "Sucesso",
        text: "Processo deletado com sucesso",
      }).then(() => {
        window.location.reload();
      });
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }

  function handleDeleteUsuario(la) {
    console.log("Modal Delete aberto!");
    console.log("id modal", la);
    setModalDelete(true);
  }

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("selecionado");
      console.log(row.la);
      setIdUser(row.la);
    },
  };

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        setOrdemProdGet(
          response.data.map((importOr) => {
            return {
              la: importOr.la,
              ordem: importOr.ordem,
              familia: importOr.familia,
              status: importOr.status,
              semana: importOr.semana,
              titulo: importOr.titulo,
              origem: importOr.origem,
              editar: importOr.la,
            };
          })
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  function detalhesOrdemProducao(row) {
    localStorage.setItem("id", row);
    localStorage.getItem("id");
    var storageId = localStorage.getItem("id");
    window.location.href =
      "http://localhost:3000/planejamento/ordensproducao?ordemProducaoElementoId=" +
      row;
  }

  function handleChange(event) {
    setFile(event.target.files);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://192.168.11.94:90/api/OrdemProducao";
    const formData = new FormData();

    for (var i = 0; i < file.length; i++) {
      formData.append(`xml[${i}]`, file[i])
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    Api.post(url, formData, config).then((response) => {
      console.log(response.data);
      console.log('nome: ', file)
      swal("Enviado com Sucesso", "", "success")
        .then(() => {
          window.location.assign('importacaoordemproducao');
        });
    });
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="paddingContainer">
          <form
            className="row"
            id="frmupload"
            name="frmupload"
            method="post"
            enctype="multipart/form-data"
            onSubmit={handleSubmit}
          //action="http://192.168.11.94:90/api/OrdemProducao"
          >
            <div className="row">
              <div className="col-md-6 col-lg-6 col-sm-12">
                <div className="tituloInterno">
                  <h2 className="titulosPrincipais">
                    Importação de Ordem Produção
                  </h2>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 paddingTop20 inlineFlex">
                <div className="form-group">
                  <input
                    type="file"
                    class="form-control-"
                    id="filexml"
                    name="filexml"
                    aria-describedby="filexmlinfo"
                    onChange={handleChange}
                    multiple
                  />
                  <small
                    id="filexmlinfo"
                    className="form-text text-muted"
                    Style="display:block"
                  >
                    Obs: Enviar somente arquivos no formato <i>.xml</i>
                  </small>
                </div>
                <Button
                  type="submit"
                  className="botaoImportar"
                  variant="success"
                //onClick={() => uploadXml()}
                >
                  <FaFileImport Style="color:#fff!important; width:220px!important" />
                  Importar
                </Button>
              </div>
            </div>
          </form>

          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 mt-4 tabelaUsuario">
                <BootstrapTable
                  keyField="la"
                  hover
                  striped
                  data={ordemProdGet}
                  columns={columns}
                  selectRow={selectRow}
                  filter={filterFactory()}
                  pagination={paginationFactory(options)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal importar arquivo */}
        <Modal
          Style="margin-top: 100px; margin-left: 500px"
          size="lg"
          show={show}
          onHide={() => setShow(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Cadastro de Usuarios</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
              <p>Vou ser um modal de Cadastro bora CODAR!</p>
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
                  <p>Deseja Realmente Excluir?</p>
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
                        onClick={() => handleDeleteImportacao(idUser)}
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