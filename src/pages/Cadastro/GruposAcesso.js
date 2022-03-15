import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import { TiArrowForward } from "react-icons/ti";
import { TiArrowBack } from "react-icons/ti";
import { HiPlus } from "react-icons/hi";
import "../../../src/grupo.css";
import Api from "../../services/Api";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Row, Col, Form } from "react-bootstrap";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";


export default function GruposAcesso() {

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

  var url = "GrupoDeAcesso";

  const [getTela, setGetTela] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [telaId, setTelaId] = useState();
  const [usuarioId, seUsuarioId] = useState();
  const [nome, setNome] = useState();
  const [nomeUsuario, setNomeUsuario] = useState();
  const [idGrupo, setIdGrupo] = useState();
  const [liberarBotao, setLiberarBotao] = useState(true);
  const [telasPermitidas, setTelasPermitidas] = useState([]);
  const [idNaoAssociado, setIdNaoAssociado] = useState(null);
  const [idAssociado, setIdAssociado] = useState(null);
  const [idAssociadoUser, setIdAssociadoUser] = useState(null);
  const [mudaTabela, setMudaTabela] = useState(true);
  const [showModalCadastro, setShowModalCadastro] = useState(false);
  const [grupoDeAcessoId, setGrupoDeAcessoId] = useState();
  const [nomeDoGrupo, setNomeDoGrupo] = useState();
  const [descricaoDoGrupo, setDescricaoDoGrupo] = useState();
  const [usuariosCadastrados, setUsuarios] = useState();
  const [telas, setTelas] = useState();
  const [quantidadeTelasPermitidas, setQuantidadeTelasPermitidas] = useState(0);
  const [quantidadeDeUsuarios, setQuantidadeDeUsuarios] = useState(0);
  const [user, setUser] = useState([]);
  const [productsSemPermissao, setProductsSemPermissao] = useState([]);
  const [show, setShow] = useState(false);
  const [grupoAcessoGet, setGrupoAcessoGet] = useState([]);

  useEffect(() => {
    getGrupos();
  }, []);

  // --------------------------------------------------------------------------------------------------------------------------------//

  function funcaoAbrirModal() {
    setShowModal(true);
    Api.get(`Tela`, {
      telaId,
      nome,
    })
      .then((response) => {
        var telasSemPermissao = response.data.filter(
          (e) =>
            telasPermitidas.find((d) => d.telaId === e.telaId) == null &&
            e.telaId !== idGrupo
        );
        console.log(telasSemPermissao);
        setProductsSemPermissao(telasSemPermissao);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }
  function funcaoAbrirModalCadastro() {
    setShowModalCadastro(true);
  }
  function onClickLinhaTabela() {
    Api.get("Tela/", {
      telaId,
    })
      .then(() => {
        const idDaLinha = document.getElementById(telaId);
        console.log("Linha da Tabela: ", idDaLinha);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }
  // --------------------------------------------------------------------------------------------------------------------------------//

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }
  function createPost() {
    Api.post(`/${url}`, {
      nomeDoGrupo: nomeDoGrupo,
      descricaoDoGrupo: descricaoDoGrupo,
      telas: [],
      usuarios: [],
      quantidadeTelasPermitidas: 0,
      quantidadeDeUsuarios: 0,
    })
      .then((response) => {
        console.log(response.data);
        getGrupos();
        alert("Cadastro efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }
  function handlePut() {
    Api.put(`${url}/${idGrupo}`, {
      grupoDeAcessoId: idGrupo,
      nomeDoGrupo: nomeDoGrupo,
      descricaoDoGrupo: descricaoDoGrupo,
      telas: telasPermitidas,
      usuarios: usuariosCadastrados
    })
      .then((response) => {
        setIdGrupo(idGrupo);
        console.log("Esse é o console do Put: ", response);
        alert("Alteração Realizada com sucesso!");
        getGrupos();
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }
  async function handleDeleteGrupoAcesso(grupoDeAcessoId) {
    try {
      await Api.delete(`/${url}/${grupoDeAcessoId}`);
      setUser(
        user.filter((grupo) => grupo.grupoDeAcessoId !== grupoDeAcessoId)
      );
      alert("Deletado com sucesso");
      getGrupos();
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }
    // --------------------------------------------------------------------------------------------------------------------------------//

  const columnsSemPermissao = [
    {
      text: "telaId",
      dataField: "telas id",
      hidden: true,
    },
    {
      dataField: "nome",
      text: "Telas Sem Permissão!",
    },
  ];
  const columnsPermitidas = [
    {
      dataField: "telaId",
      text: "ID DA TELA",
      hidden: true,
    },
    {
      dataField: "nome",
      text: "Telas Permitidas!",
    },
  ];
  const columnsGrupoAcesso = [
    {
      headerAlign: 'center',
      headerStyle: { backgroundColor: 'rgb(151 151 151)', fontSize: '14px' },
      dataField: "grupoDeAcessoId",
      text: "id grupo de acesso",
      hidden: true,
    },
    {
      headerAlign: 'center',
      headerStyle: { backgroundColor: 'rgb(151 151 151)', fontSize: '14px' },
      dataField: "nomeDoGrupo",
      text: "Nome",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Nome",
      }),
    },
    {
      headerAlign: 'center',
      headerStyle: { backgroundColor: 'rgb(151 151 151)', fontSize: '14px' },
      dataField: "descricaoDoGrupo",
      text: "Descrição",
      sort: true,
    },
    {
      headerAlign: 'center',
      headerStyle: { backgroundColor: 'rgb(151 151 151)', fontSize: '14px' },
      dataField: "quantidadeTelasPermitidas",
      text: "Qtd. Telas Permitidas",
      sort: true,
    },
    {
      headerAlign: 'center',
      headerStyle: { backgroundColor: 'rgb(151 151 151)', fontSize: '14px' },
      dataField: "quantidadeDeUsuarios",
      text: "Qtd. Usuários",
      sort: true,
    },
    {
      headerAlign: 'center',
      headerStyle: { backgroundColor: 'rgb(151 151 151)', fontSize: '14px' },
      dataField: "editar",
      isDummyField: true,
      text: "Editar / Deletar",
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id={row.grupoDeAcessoId}
              Style="cursor:pointer"
              onClick={() => { funcaoAbrirModal(idGrupo) }}
              data-toggle="tooltip" data-placement="left" title="Editar"
            >
              <VscEdit />
            </span>

            <span
              className="spanTabela"
              id={row.grupoDeAcessoId}
              Style="cursor:pointer"
              onClick={() => handleDeleteGrupoAcesso(row.grupoDeAcessoId)}
              data-toggle="tooltip" data-placement="left" title="Deletar"
            >
              <RiDeleteBinFill />
            </span>
          </>
        );
      },
    },
  ];
  const usuariosPermitidos = [
    {
      dataField: "usuarioId",
      text: "ID DO USUARIO",
      hidden: true,
    },
    {
      dataField: "nome",
      text: "Usuários Permitidos!",
    },
  ];
  // --------------------------------------------------------------------------------------------------------------------------------//

  const selectRowUsuarioPermitido = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log(row);
      setIdAssociadoUser(row.usuarioId);
    },
  };
  const selectRowGrupos = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {

      setLiberarBotao(false);
      setIdGrupo(row.grupoDeAcessoId);
      setNomeDoGrupo(row.nomeDoGrupo);
      setDescricaoDoGrupo(row.descricaoDoGrupo);
      setTelasPermitidas(row.telas);
      setUsuarios(row.usuarios);
      console.log(row);

    },
  };
  const selectRowSemPermissao = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log(row);
      setIdNaoAssociado(row.telaId);
    },
  };
  const selectRowComPermissao = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log(row);
      setIdAssociado(row.telaId);
    },
  };
  // --------------------------------------------------------------------------------------------------------------------------------//

  const getGrupos = (e) => {
    Api.get(`${url}`)
      .then((response) => {
        console.log(response);
        // setUser(response.data);
        setGrupoAcessoGet(
          response.data.map((grupoAcesso) => {
            return {
              grupoDeAcessoId: grupoAcesso.grupoDeAcessoId,
              nomeDoGrupo: grupoAcesso.nomeDoGrupo,
              descricaoDoGrupo: grupoAcesso.descricaoDoGrupo,
              telas: grupoAcesso.telas,
              usuarios: grupoAcesso.usuarios,
              quantidadeTelasPermitidas: grupoAcesso.quantidadeTelasPermitidas,
              quantidadeDeUsuarios: grupoAcesso.quantidadeDeUsuarios,
            };
          })
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });

  }
  const associarTelas = (e) => {
    var findAssociados = productsSemPermissao.find(
      (e) => e.telaId === idNaoAssociado
    );
    // if (productsSemPermissao.find(e => e.telaId == idNaoAssociado) != null) {

    //     return;
    // }

    findAssociados.nome = findAssociados.nome;
    findAssociados.telaId = findAssociados.telaId;

    console.log(findAssociados);

    telasPermitidas.push(findAssociados);
    setTelasPermitidas(telasPermitidas);
    var naoAssociadosFilter = productsSemPermissao.filter(
      (e) => e.telaId !== idNaoAssociado
    );
    setProductsSemPermissao(naoAssociadosFilter);
  };
  const desassociarTiposVeiculos = (e) => {
    var findNaoAssociados = telasPermitidas.find(
      (e) => e.telaId === idAssociado
    );

    // if (dataNaoAssociados.find(e => e.idTipoVeiculo == idAssociado) != null) {

    //     return;
    // }
    findNaoAssociados.nome = findNaoAssociados.nome;
    findNaoAssociados.telaId = findNaoAssociados.telaId;

    productsSemPermissao.push(findNaoAssociados);
    setProductsSemPermissao(productsSemPermissao);
    var associadosFilter = telasPermitidas.filter(
      (e) => e.telaId !== idAssociado
    );
    setTelasPermitidas(associadosFilter);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Grupo de Acesso</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div Style="text-align: right">

                <Button
                  className="botaoCadastrar"
                  variant="success"
                  onClick={(props) => {
                    funcaoAbrirModalCadastro();
                  }}
                >
                  <HiPlus Style="color:#fff!important" />Cadastrar
                </Button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 tabelaUsuario">
              <BootstrapTable
                keyField="grupoDeAcessoId"
                data={grupoAcessoGet}
                columns={columnsGrupoAcesso}
                striped={true}
                selectRow={selectRowGrupos}
                filter={filterFactory()}
                pagination={paginationFactory(options)}
              />
            </div>
          </div>

        </div>

        <div className="cadastroGPAcesso">
          <Modal
            size="lg"
            show={showModal}
            onHide={() => setShowModal(false)}
            dialogClassName="modal-90w cadastroGPAcesso"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Edição de Grupo de Acesso
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div
                className="formCadastro"
                id="formCadastro"
                Style="margin-bottom: 30px;height:500px"
              >
                <form className="row formPadrao">
                  <div className="row">
                    <div className="col-6">
                      <label>Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        value={nomeDoGrupo}
                        onChange={(e) => setNomeDoGrupo(e.target.value)}
                      />
                    </div>
                    <div className="col-6">
                      <label>Descrição</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Descrição"
                        value={descricaoDoGrupo}
                        onChange={(e) => setDescricaoDoGrupo(e.target.value)}
                      />
                    </div>
                  </div>
                  <CustomTabs
                    headerColor="primary"
                    tabs={[
                      {
                        tabName: "Geral",
                        tabIcon: null,
                        tabContent: (
                          <GridContainer>
                            <GridItem
                              xs={12}
                              sm={12}
                              md={18}
                            >
                              {/*1ª Quadrado*/}
                              <div className="row mt-3">
                                <div
                                  className="col-5 ultimaTabela" Style="height: 300px!important"
                                  onClick={onClickLinhaTabela}
                                >
                                  <BootstrapTable
                                    bootstrap4
                                    keyField="telaId"
                                    data={productsSemPermissao}
                                    columns={columnsSemPermissao}
                                    selectRow={selectRowSemPermissao}
                                    bordered={false}
                                    hidden={!mudaTabela}
                                  />
                                </div>

                                <div className="col-2 text-center">
                                  <div Style="border: 1px solid black; padding: 6px; border-radius: 1rem; margin-top: 4rem; cursor: pointer">
                                    <TiArrowForward onClick={associarTelas} hidden={!mudaTabela} />
                                  </div>
                                  <div Style="border: 1px solid black; padding: 6px; border-radius: 1rem; margin-top: 2rem; cursor: pointer;">
                                    <TiArrowBack onClick={desassociarTiposVeiculos} hidden={!mudaTabela} />
                                  </div>
                                </div>

                                {/*2ª Quadrado*/}
                                <div className="col-5" Style="border: 1px solid green; height: 300px">
                                  <BootstrapTable
                                    bootstrap4
                                    keyField="telaId"
                                    data={telasPermitidas}
                                    columns={columnsPermitidas}
                                    selectRow={selectRowComPermissao}
                                    bordered={false}
                                    hidden={!mudaTabela}
                                  />
                                </div>
                              </div>
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                      {
                        tabName: "Direitos grupo de usuarios",
                        tabIcon: null,
                        tabContent: (
                          <GridContainer>
                            <GridItem
                              xs={12}
                              sm={12}
                              md={18}
                            >
                              {/*1ª Quadrado*/}
                              <div className="row mt-3">
                                <div className="col-5" Style="border: 1px solid green; height: 300px">
                                  <BootstrapTable
                                    bootstrap4
                                    keyField="usuarioId"
                                    data={usuariosCadastrados}
                                    columns={usuariosPermitidos}
                                    selectRow={selectRowUsuarioPermitido}
                                    bordered={false}
                                  />
                                </div>

                              </div>
                            </GridItem>
                          </GridContainer>
                        ),
                      },
                    ]}
                  />
                </form>
              </div>
              <div className="row mt-4">
                <div className="col-6" Style="text-align:right">
                  <Button variant="success" onClick={() => handlePut()}>Salvar</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
          <Modal
            size="lg"
            show={showModalCadastro}
            onHide={() => setShowModalCadastro(false)}
            dialogClassName="modal-90w cadastroGPAcesso"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Cadastro de Grupo de Acesso
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div
                className="formCadastro"
                id="formCadastro"
                Style="margin-bottom: 30px;height:150px"
              >
                <form className="row formPadrao">
                  <div className="row">
                    <div className="col-6">
                      <label>Nome</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        value={nomeDoGrupo}
                        onChange={(e) => setNomeDoGrupo(e.target.value)}
                      />
                    </div>
                    <div className="col-6">
                      <label>Descrição</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Descrição"
                        value={descricaoDoGrupo}
                        onChange={(e) => setDescricaoDoGrupo(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="row mt-4">
                <div className="col-6" Style="text-align:right">
                  <Button variant="success" onClick={() => createPost()}>Salvar</Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        {/* Modal */}
      </IconContext.Provider>
    </>
  );
}
