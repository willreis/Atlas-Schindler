import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { AiFillSave } from "react-icons/ai";
import { MdKeyboardReturn } from "react-icons/md";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import cellEditFactory from "react-bootstrap-table2-editor";
import Api from "../../services/Api";
import { Link } from "react-router-dom";

function OrdensProducao() {
  const url = "OrdemProducaoElemento";
  const [getOrdem, setGetOrdem] = useState([]);
  const [getOrdemById, setGetOrdemById] = useState([]);

  const [showModalPut, setShowModalPut] = useState();

  const [ordemProducaoElementoId, setOrdemProducaoElementoId] = useState();
  const [la, setLa] = useState();
  const [vg, setVg] = useState();
  const [item, setItem] = useState();
  const [codMaterial, setCodMaterial] = useState();
  const [material, setMaterial] = useState();
  const [quantidade, setQuantidade] = useState();
  const [programa, setPrograma] = useState();
  const [comprimento, setComprimento] = useState();
  const [largura, setLargura] = useState();
  const [op, setOp] = useState();
  const [ovm, setOvm] = useState();
  const [roteiro1, setRoteiro1] = useState();
  const [roteiro2, setRoteiro2] = useState();
  const [roteiro3, setRoteiro3] = useState();
  const [roteiro4, setRoteiro4] = useState();
  const [sequencia, setSequencia] = useState();
  const [tipoDeEstoque, setTipoDeEstoque] = useState();
  const [gondola, setGondola] = useState();
  const [roteiro, setRoteiro] = useState();
  const [ordem, setOrdem] = useState();
  const [statusId, setStatusId] = useState(0);
  const [status, setStatus] = useState();
  const [titulo, setTitulo] = useState();
  const [familia, setFamilia] = useState();
  const [semana, setSemana] = useState();
  const [origem, setOrigem] = useState();
  const [ordenacao, setOrdenacao] = useState();
  const [verificada, setVerificada] = useState();
  const [dataImportacao, setDataImportacao] = useState();
  const [dataInicio, setDataInicio] = useState();
  const [dataFim, setDataFim] = useState();
  const [ordemProducaoElementos, setOrdemProducaoElementos] = useState([]);

  const [getLaHeader, setGetLaHeader] = useState({});

  const [ordemProducao, setOrdemProducao] = useState({});

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
  const [user, setUser] = useState();
  const [idUser, setIdUser] = useState(null);
  const [show, setShow] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const fecharModal = () => setModalDelete(false);

  //Pegando o ID da LA via URL
  var baseUrl = window.location.href;
  var ordemLaGet = baseUrl.substring(baseUrl.lastIndexOf("=") + 1);

  const columns = [
    {
      dataField: "ordemProducaoElementoId",
      text: "Ordem Id",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    },
    {
      dataField: "vg",
      text: "VG",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar VG",
      }),
    },
    {
      dataField: "item",
      text: "Item",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Item",
      }),
    },
    {
      dataField: "codMaterial",
      text: "Cod.Material",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Cód.Material",
      }),
    },
    {
      dataField: "material",
      text: "Material",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "quantidade",
      text: "Quantidade",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "programa",
      text: "Programa",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "comprimento",
      text: "Comprimento",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "largura",
      text: "Largura",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "op",
      text: "Op",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "ovm",
      text: "OVM",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "roteiro1",
      text: "Roteiro 1",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "roteiro2",
      text: "Roteiro 2",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "roteiro3",
      text: "Roteiro 3",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "roteiro4",
      text: "Roteiro 4",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "sequencia",
      text: "Sequência",
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
              id={row.ordemProducaoElementoId}
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
            <button
              className="spanTabela"
              id={row.ordemProducaoElementoId}
              Style="cursor:pointer; border: none; background: none"
              onClick={() => handleDeleteModal(row.ordemProducaoElementoId)}
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

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

  ///Modal PUT
  function funcaoAbrirModal(row) {
    setShowModalPut(true);
    Api.get(`OrdemProducaoElemento/GetById/${row.ordemProducaoElementoId}`, {
      ordemProducaoElementoId,
      la,
      vg,
      item,
      codMaterial,
      material,
      quantidade,
      programa,
      comprimento,
      largura,
      op,
      ovm,
      roteiro1,
      roteiro2,
      roteiro3,
      roteiro4,
      sequencia,
      tipoDeEstoque,
      gondola,
      roteiro,
    }).then(() => {
      console.log("Get Feito: ", row.ordemProducaoElementoId);
      setOrdemProducaoElementoId(row.ordemProducaoElementoId);
      setLa(row.la);
      setVg(row.vg);
      setItem(row.item);
      setCodMaterial(row.codMaterial);
      setMaterial(row.material);
      setQuantidade(row.quantidade);
      setPrograma(row.programa);
      setComprimento(row.comprimento);
      setLargura(row.largura);
      setOp(row.op);
      setOvm(row.ovm);
      setRoteiro1(row.roteiro1);
      setRoteiro2(row.roteiro2);
      setRoteiro3(row.roteiro3);
      setRoteiro4(row.roteiro4);
      setSequencia(row.sequencia);
      setTipoDeEstoque(row.tipoDeEstoque);
      setGondola(row.gondola);
      setRoteiro(row.roteiro);
    });
  }

  //Criar Relação Automatica
  function criarRelacaoAutomatica() {
    console.log("mostrar o LA: ", ordemLaGet);

    Api.post(`OrdemProducaoLote/CriarRelacaoAutomatica/`, ordemLaGet)
      .then((response) => {
        console.log(response.data);
        alert("Processo Efetuado com sucesso!");
        window.location.assign(
          `/planejamento/ordensproducao?ordemProducaoElementoId=${ordemLaGet}`
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //Verificar Relação
  function verificarRelacao() {
    console.log("mostrar o LA: ", ordemLaGet);

    Api.post(`OrdemProducaoLote/VerificarRelacao?LA=${ordemLaGet}`)
      .then((response) => {
        console.log(response.data);
        alert("Processo Efetuado com sucesso!");
        window.location.assign(
          `/planejamento/ordensproducao?ordemProducaoElementoId=${ordemLaGet}`
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //Criar Relação Única
  function criarRelacaoUnica() {
    Api.post(`OrdemProducaoLote/CriarRelacaoUnica`, ordemLaGet)
      .then((response) => {
        console.log(response.data);
        alert("Processo Efetuado com sucesso!");
        window.location.assign(
          `/planejamento/ordensproducao?ordemProducaoElementoId=${ordemLaGet}`
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //Cancelar Relação
  function cancelarRelacao() {
    Api.put(`OrdemProducaoLote/CancelarRelacao/${ordemLaGet}`, {
      la,
    })
      .then((response) => {
        setLa(la);
        console.log("Esse é o console do Put: ", response);
        alert("Alteração Efetuado com sucesso!");
        window.location.assign(
          `/planejamento/ordensproducao?ordemProducaoElementoId=${ordemLaGet}`
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }

  //PUT Informações Header
  function putHeader() {
    Api.put(`OrdemProducao/${ordemLaGet}`, {
      la: getLaHeader.la,
      ordem: getLaHeader.ordem,
      statusId: getLaHeader.statusId,
      titulo: getLaHeader.titulo,
      familia,
      semana,
      origem,
      ordenacao,
      dataImportacao: getLaHeader.dataImportacao,
      dataInicio: getLaHeader.dataInicio,
      dataFim: getLaHeader.dataFim,
    })
      .then((response) => {
        setLa(response.la);
        setOrdem(response.ordem);
        setStatusId(response.statusId);
        setTitulo(response.titulo);
        setFamilia(response.familia);
        setSemana(response.semana);
        setOrigem(response.origem);
        setOrdenacao(response.ordenacao);
        setDataImportacao(response.dataImportacao);
        setDataInicio(response.dataInicio);
        setDataFim(response.dataFim);
        alert("Dados editados com sucesso!");

        // window.location.assign(
        //   `/planejamento/ordensproducao?ordemProducaoElementoId=${ordemLaGet}`
        // );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro Header: " + error);
        alert("Ops! Ocorreu um erro Header: " + error);
      });
  }

  //GET
  useEffect(() => {
    Api.get(`OrdemProducao/${ordemLaGet}`)

      .then((response) => {
        //Input Data Fim
        var data = new Date(response.data.dataFim);
        var dataFimForm = data.toLocaleDateString();

        //Input Data Inicio
        var dataInicio = new Date(response.data.dataInicio);
        var dataInicioForm = dataInicio.toLocaleDateString();

        var obj = {
          la: response.data.la,
          ordem: response.data.ordem,
          status: response.data.statusId,
          titulo: response.data.titulo,
          familia: response.data.familia,
          semana: response.data.semana,
          origem: response.data.origem,
          ordenacao: response.data.ordenacao,
          verificada: response.data.verificada ? "Verficada" : "Não Verificada",
          dataImportacao: response.data.dataImportacao,
          dataInicio: response.data.dataInicio,
          dataFim: response.data.dataFim,
        };
        setGetLaHeader(obj);
        setOrdemProducao(obj);
        if (response.data.verificada) {
          var btn = document.querySelector("#btnCancelarRelacao");
          var btnCancelRel = document.querySelector("#btnVerificarRelacao");

          btn.classList.add("disabled");
          btnCancelRel.classList.add("disabled");
        } else {
          console.log("Não tem Relação");
        }

        console.log("verficaaaado: ", response.data.verificada);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro1:", error);
        alert("Ops! Ocorreu um erro1:", error);
      });

    Api.get(`OrdemProducaoElemento/GetByLa/${ordemLaGet}`).then((response) => {
      console.log("get elementooooo: ", response.data[0].vg);

      if (response.data[0].vg === 0) {
        var btn = document.querySelector("#btnCancelarRelacao");
        var btnCancelRel = document.querySelector("#btnVerificarRelacao");
        btnCancelRel.classList.add("disabled");
        btn.classList.add("disabled");
      } else {
        console.log("tem Vg setada");
      }

      setGetOrdem(
        response.data.map((ordemGet) => {
          return {
            ordemProducaoElementoId: ordemGet.ordemProducaoElementoId,
            la: ordemGet.la,
            vg: ordemGet.vg,
            item: ordemGet.item,
            codMaterial: ordemGet.codMaterial,
            material: ordemGet.material,
            quantidade: ordemGet.quantidade,
            programa: ordemGet.programa,
            comprimento: ordemGet.comprimento,
            largura: ordemGet.largura,
            op: ordemGet.op,
            ovm: ordemGet.ovm,
            roteiro1: ordemGet.roteiro1,
            roteiro2: ordemGet.roteiro2,
            roteiro3: ordemGet.roteiro3,
            roteiro4: ordemGet.roteiro4,
            sequencia: ordemGet.sequencia,
            tipoDeEstoque: ordemGet.tipoDeEstoque,
            gondola: ordemGet.gondola,
            roteiro: ordemGet.roteiro,
          };
        })
      );
    });
  }, []);

  //PUT da Tabela
  function handlePut() {
    Api.put(`OrdemProducaoElemento/${ordemProducaoElementoId}`, {
      ordemProducaoElementoId,
      la,
      vg,
      item,
      codMaterial,
      material,
      quantidade,
      programa,
      comprimento,
      largura,
      op,
      ovm,
      roteiro1,
      roteiro2,
      roteiro3,
      roteiro4,
      sequencia,
      tipoDeEstoque,
      gondola,
      roteiro,
    })
      .then((response) => {
        setOrdemProducaoElementoId(ordemProducaoElementoId);
        setLa(la);
        setVg(vg);
        setItem();
        setCodMaterial();
        setMaterial();
        setQuantidade();
        setPrograma();
        setComprimento();
        setLargura();
        setOp();
        setOvm();
        setRoteiro1();
        setRoteiro2();
        setRoteiro3();
        setRoteiro4();
        setSequencia();
        setTipoDeEstoque();
        setGondola();
        setRoteiro();

        alert("Alteração Efetuada com sucesso!");
        window.location.assign(
          `/planejamento/ordensproducao?ordemProducaoElementoId=${ordemLaGet}`
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro2: " + error);
        alert("Ops! Ocorreu um erro2: " + error);
      });
  }

  //Delete
  function handleDeleteModal(ordemProducaoElementoId) {
    console.log("handleDeleteModal delete id ", ordemProducaoElementoId);
    setModalDelete(true);
  }

  function handleDeleteOrdemProducao(idUser) {
    console.log("handleDeleteOrdemProducao delete id ", idUser);
    try {
      Api.delete(`/${url}/${idUser}`);
      alert("delete id passo 1", idUser);
      setModalDelete(false);

      window.location.reload();
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("selecionado");
      console.log(row.ordemProducaoElementoId);
      setIdUser(row.ordemProducaoElementoId);
    },
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Ordens de Produção</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12" Style="margin-top: 1.6rem">
              <div className="alignButtons">
                <Link to="/planejamento/importacaoordemproducao">
                  <Button
                    className="botaoImportar"
                    variant="primary"
                    onClick={() => setShow(true)}
                  >
                    <MdKeyboardReturn Style="color:#fff!important; width:220px!important" />
                    Voltar
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <form onSubmit={handleRegister}>
            <div class="row">
              <div class="col-md-3 mt-3">
                <label>LA</label>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={ordemProducao.la}
                  onChange={(e) => setLa(parseInt(e.target.value))}
                  readOnly
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Ordem</label>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={ordemProducao.ordem}
                  onChange={(e) => setOrdem(parseInt(e.target.value))}
                  readOnly
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Status</label>
                <input
                  type="text"
                  class="form-control"
                  defaultValue={ordemProducao.status}
                  onChange={(e) => setStatus(e.target.value)}
                  readOnly
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Verificado</label>
                <input
                  class="form-control"
                  defaultValue={ordemProducao.verificada}
                  onChange={(e) => setStatus(e.target.value)}
                  readOnly
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Título</label>
                <input
                  type="text"
                  class="form-control"
                  defaultValue={ordemProducao.titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Família</label>
                <input
                  type="text"
                  class="form-control"
                  defaultValue={ordemProducao.familia}
                  onChange={(e) => setFamilia(e.target.value)}
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Semana</label>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={ordemProducao.semana}
                  onChange={(e) => setSemana(parseInt(e.target.value))}
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Origem</label>
                <input
                  type="text"
                  class="form-control"
                  defaultValue={ordemProducao.origem}
                  onChange={(e) => setOrigem(e.target.value)}
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>ordenação</label>
                <input
                  type="number"
                  class="form-control"
                  defaultValue={ordemProducao.ordenacao}
                  onChange={(e) => setOrdenacao(parseInt(e.target.value))}
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Data Início</label>
                <input
                  id="dataInicio"
                  type="text"
                  class="form-control"
                  value={ordemProducao.dataInicio}
                  onChange={(e) => setDataInicio(parseInt(e.target.value))}
                  readOnly
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Data Fim</label>
                <input
                  id="dataFim"
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  value={ordemProducao.dataFim}
                  onChange={(e) => setDataFim(parseInt(e.target.value))}
                  readOnly
                />
              </div>
            </div>
            <div className="col-md-12 col-sm-12" Style="margin-top: -2.4rem">
              <div className="alignButtons">
                <Button
                  className="botaoImportar"
                  variant="success"
                  onClick={() => putHeader(ordemLaGet)}
                >
                  <AiFillSave Style="color:#fff!important; width:220px!important" />
                  Salvar
                </Button>
              </div>
            </div>
          </form>
        </div>
        <div className="section tabelaOrdem">
          <div className="row" Style="margin: 0; padding: 0">
            <div className="col-md-12 tabelaUsuario">
              <BootstrapTable
                keyField="ordemProducaoElementoId"
                hover
                striped
                data={getOrdem}
                selectRow={selectRow}
                columns={columns}
                filter={filterFactory()}
                pagination={paginationFactory(options)}
                Style="margin-bottom: 2rem"
              />
            </div>
          </div>
        </div>

        <div className="container mb150">
          <div className="row botoesOrdemProducao">
            <div className="col-md-4 mt-3">
              <Button
                variant="success"
                value={ordemLaGet}
                onClick={(e) => criarRelacaoAutomatica(ordemLaGet)}
              >
                Criar Relação Automática
              </Button>
            </div>
            <div className="col-md-4 mt-3">
              <Button
                variant="success"
                onClick={(e) => criarRelacaoUnica(ordemLaGet)}
              >
                Criar Relação Única
              </Button>
            </div>
            <div className="col-md-4 mt-3">
              <Button
                variant="success"
                id="btnCancelarRelacao"
                onClick={(e) => cancelarRelacao(ordemLaGet)}
              >
                Cancelar Relação
              </Button>
            </div>
            <div className="col-md-4 mt-3">
              <Button
                variant="success"
                onClick={(e) => verificarRelacao(ordemLaGet)}
                id="btnVerificarRelacao"
              >
                Verificar Relação
              </Button>
            </div>
            <div className="col-md-4 mt-3">
              <Button variant="success">Imprimir</Button>
            </div>
            <div className="col-md-4 mt-3">
            <Link to="/planejamento/detalhesvgs">
              <Button variant="success">Detalhes da VG</Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Modal Put Tabela */}
        <Modal
          size="lg"
          show={showModalPut}
          onHide={() => setShowModalPut(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>Detalhes do Item de Produção</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
              <form className="row g-3 formPadrao" onSubmit={handlePut}>
                <div className="col-md-3 col-sm-6">
                  <label>VG</label>
                  <input
                    type="number"
                    name="vg"
                    value={vg}
                    onChange={(e) => setVg(parseInt(e.target.value))}
                  />
                </div>

                <div className="col-md-3 col-sm-6">
                  <label>Item</label>
                  <input
                    type="number"
                    name="item"
                    value={item}
                    onChange={(e) => setItem(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Cod. Material</label>
                  <input
                    type="number"
                    name="codMaterial"
                    value={codMaterial}
                    onChange={(e) => setCodMaterial(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Material</label>
                  <input
                    type="text"
                    name="material"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Quantidade</label>
                  <input
                    type="number"
                    name="quantidade"
                    value={quantidade}
                    onChange={(e) => setQuantidade(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Programa</label>
                  <input
                    type="number"
                    name="programa"
                    value={programa}
                    onChange={(e) => setPrograma(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Comprimento</label>
                  <input
                    type="number"
                    name="comprimento"
                    value={comprimento}
                    onChange={(e) => setComprimento(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Largura</label>
                  <input
                    type="number"
                    name="largura"
                    value={largura}
                    onChange={(e) => setLargura(parseInt(e.target.value))}
                  />
                </div>

                <div className="col-md-3 col-sm-6">
                  <label>OP</label>
                  <input
                    type="number"
                    name="op"
                    value={op}
                    onChange={(e) => setOp(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>OVM</label>
                  <input
                    type="number"
                    name="ovm"
                    value={ovm}
                    onChange={(e) => setOvm(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Roteiro 1</label>
                  <input
                    type="text"
                    name="roteiro1"
                    value={roteiro1}
                    onChange={(e) => setRoteiro1(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Roteiro 2</label>
                  <input
                    type="text"
                    name="roteiro2"
                    value={roteiro2}
                    onChange={(e) => setRoteiro2(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Roteiro 3</label>
                  <input
                    type="text"
                    name="roteiro3"
                    value={roteiro3}
                    onChange={(e) => setRoteiro3(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Roteiro 4</label>
                  <input
                    type="text"
                    name="roteiro4"
                    value={roteiro4}
                    onChange={(e) => setRoteiro4(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Sequência</label>
                  <input
                    type="number"
                    name="sequencia"
                    value={sequencia}
                    onChange={(e) => setSequencia(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Tipo de Estoque</label>
                  <input
                    type="number"
                    name="tipoDeEstoque"
                    value={tipoDeEstoque}
                    onChange={(e) => setTipoDeEstoque(parseInt(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Gondola</label>
                  <input
                    type="string"
                    name="gondola"
                    value={gondola}
                    onChange={(e) => setGondola(e.target.value)}
                  />
                </div>
                <div className="col-md-2 col-sm-6">
                  <Button
                    type="submit"
                    variant="success"
                    className="align-self-baseline"
                    onClick={(usuario) => {
                      handlePut(usuario.usuarioId);
                    }}
                    Style="margin-top: 24px"
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
                        onClick={() => handleDeleteOrdemProducao(idUser)}
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

export default OrdensProducao;
