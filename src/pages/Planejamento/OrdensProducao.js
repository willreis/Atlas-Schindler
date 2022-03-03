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
  const [getOrdem, setGetOrdem] = useState([]);
  const [getOrdemById, setGetOrdemById] = useState([]);

  const [showModalPut, setShowModalPut] = useState();

  const [ordemProducaoElementosId, setOrdemProducaoElementosId] = useState();
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
  const [statusId, setStatusId] = useState();
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

  const [show, setShow] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const fecharModal = () => setModalDelete(false);

  //Pegando o ID da LA via URL
  var baseUrl = window.location.href;
  var ordemIdGet = baseUrl.substring(baseUrl.lastIndexOf("=") + 1);

  const products = [
    {
      vg: 101544,
      item: 7000158,
      codigoMaterial: 42343,
      material: 542345,
      quantidade: 135,
      programa: 0,
      comprimento: 23,
      largura: 10,
      op: 5436456,
      ovm: 8765,
      roteiro1: "T1",
      roteiro2: "",
      roteiro3: "",
      roteiro4: "D1",
      sequencia: 344,
    },
    {
      vg: 101678,
      item: 7000876,
      codigoMaterial: 234556,
      material: 23456,
      quantidade: 4345,
      programa: 0,
      comprimento: 43,
      largura: 14,
      op: 967896,
      ovm: 65443,
      roteiro1: "T1",
      roteiro2: "T2",
      roteiro3: "",
      roteiro4: "D1",
      sequencia: 346,
    },
    {
      vg: 101678,
      item: 7000876,
      codigoMaterial: 234556,
      material: 23456,
      quantidade: 4345,
      programa: 0,
      comprimento: 43,
      largura: 14,
      op: 967896,
      ovm: 65443,
      roteiro1: "T1",
      roteiro2: "T2",
      roteiro3: "",
      roteiro4: "D1",
      sequencia: 346,
    },
  ];

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
      text: "Editar / Excluir",
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
            >
              <VscEdit />
            </span>

            <button
              className="spanTabela"
              id=""
              Style="cursor:pointer; border: none; background: none"
              onClick={() => handleDeleteUsuario(row.ordemProducaoElementoId)}
            >
              <RiDeleteBinFill />
            </button>
          </>
        );
      },
    },
  ];

  function funcaoAbrirModal() {
    setShowModalPut(true);
  }

  //GET
  useEffect(() => {
    Api.get(`OrdemProducao/${ordemIdGet}`)
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
          verificada: response.data.verificada,
          dataImportacao: response.data.dataImportacao,
          dataInicio: dataInicioForm,
          dataFim: dataFimForm,
        };
        setOrdemProducao(obj);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });

    Api.get("OrdemProducaoElemento/GetByLa/53").then((response) => {
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

  //PUT
  function handlePut() {
    Api.put(`#`, {
      ordemProducaoElementosId,
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
        setOrdemProducaoElementosId(ordemProducaoElementosId);
        setLa();
        setVg();
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
        console.log("Esse é o console do Put: ", response);
        alert("Alteração Efetuada com sucesso!");
      })
      .catch((error) => {
        console.log("Rooooooteeeeiroooo", roteiro);
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }

  //Delete
  function handleDeleteUsuario() {
    console.log("Modal Delete aberto!");
    setModalDelete(true);
  }

  function sucessoDelete() {
    alert("Deletado com sucesso!");
    setModalDelete(false);
  }

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("selecionado");
      console.log(row.ordemProducaoElementoId);
      setOrdemProducaoElementosId(row.ordemProducaoElementosId);
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
            <div className="col-md-6 col-sm-12">
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
                <Button
                  className="botaoImportar"
                  variant="success"
                  onClick={() => setShow(true)}
                >
                  <AiFillSave Style="color:#fff!important; width:220px!important" />
                  Salvar
                </Button>
              </div>
            </div>
          </div>

          <form>
            <div class="row">
              <div class="col-md-3 mt-3">
                <label>LA</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  value={ordemProducao.la}
                  readOnly
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Ordem</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  value={ordemProducao.ordem}
                  readOnly
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Status</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  value={ordemProducao.status}
                  readOnly
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Título</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  value={ordemProducao.titulo}
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Família</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  value={ordemProducao.familia}
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Semana</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  value={ordemProducao.semana}
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Origem</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  value={ordemProducao.origem}
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Ordenação</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  value={ordemProducao.ordenacao}
                />
              </div>
              <div class="col-md-3 mt-3">
                <label>Data Início</label>
                <input
                  id="dataInicio"
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  value={ordemProducao.dataInicio}
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
                  readOnly
                />
              </div>
            </div>
          </form>
        </div>
        <div className="section tabelaOrdem">
          <div className="row" Style="margin: 0; padding: 0">
            <div className="col-md-12">
              <BootstrapTable
                keyField="ordemProducaoElementosId"
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

        <div className="container">
          <div className="row botoesOrdemProducao">
            <div className="col-md-4 mt-3">
              <Button variant="success">Criar Relação Automática</Button>
            </div>
            <div className="col-md-4 mt-3">
              <Button variant="success">Criar Relação Única</Button>
            </div>
            <div className="col-md-4 mt-3">
              <Button variant="success">Cancelar Relação</Button>
            </div>
            <div className="col-md-4 mt-3">
              <Button variant="success">Verificar</Button>
            </div>
            <div className="col-md-4 mt-3">
              <Button variant="success">Imprimir</Button>
            </div>
            <div className="col-md-4 mt-3">
              <Button variant="success">Detalhes da VG</Button>
            </div>
          </div>
        </div>

        {/* Modal importar arquivo */}
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
                  <label>ID</label>
                  <input
                    type="number"
                    name="id"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>LA</label>
                  <input
                    type="number"
                    name="la"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Gôndola</label>
                  <input
                    type="text"
                    name="gondola"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Item</label>
                  <input
                    type="number"
                    name="item"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Quantidade</label>
                  <input
                    type="number"
                    name="quantidade"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Sequência</label>
                  <input
                    type="number"
                    name="sequencia"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Roteiro</label>
                  <input
                    type="number"
                    name="roteiro"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Comprimento</label>
                  <input
                    type="number"
                    name="comprimento"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Largura</label>
                  <input
                    type="number"
                    name="largura"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Programa CNC</label>
                  <input
                    type="number"
                    name="programa"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Cód. Material</label>
                  <input
                    type="number"
                    name="material"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>OP</label>
                  <input
                    type="number"
                    name="op"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>OVM</label>
                  <input
                    type="number"
                    name="ovm"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Tipo de estoque</label>
                  <input
                    type="number"
                    name="tipoDeEstoque"
                    value=""
                    //onChange={(e) => setMatricula(e.target.value)}
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
                      <Button variant="primary" onClick={sucessoDelete}>
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
