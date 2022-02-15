import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";

import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import { TiArrowForward } from "react-icons/ti";
import { TiArrowBack } from "react-icons/ti";
import "../../../src/grupo.css";
import Api from "../../services/Api";

export default function GruposAcesso() {
  const [getTela, setGetTela] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [telaId, setTelaId] = useState();
  const [nome, setNome] = useState();
  const [idGrupo, setIdGrupo] = useState();
  const [liberarBotao, setLiberarBotao] = useState(true);
  const [telasPermitidas, setTelasPermitidas] = useState();
  const [idNaoAssociado, setIdNaoAssociado] = useState(null);
  const [idAssociado ,setIdAssociado] = useState(null);

  //GET
  const [user, setUser] = useState([]);

  //Get Tela:
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

  const [productsSemPermissao, setProductsSemPermissao] = useState([]);

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
        // filterNaoAssociados.forEach((element, index) => {
        //     //    if(element.idTipoVeiculoAssociado == "")
        //     element.telaId = (index + 1) * -1
        // });
        console.log(telasSemPermissao);
        setProductsSemPermissao(telasSemPermissao);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
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

  //////////////////////////////////////////////////////////////////////////////////////////////////
  const columns = [
    {
      text: "Telas Permitidas!",
      dataField: "telas",
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

  const products = [
    {
      telas: "Usuario",
    },
    {
      telas: "Usuario",
    },
    {
      telas: "Usuario",
    },
    {
      telas: "Usuario",
    },
  ];

  const selectRowGrupos = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      setLiberarBotao(false);
      setIdGrupo(row.grupoDeAcessoId);
      setTelasPermitidas(row.telas);
    },
  };
  var url = "GrupoDeAcesso";

  //Modal const
  const [show, setShow] = useState(false);

  //GET Grupo Acesso
  const [grupoAcessoGet, setGrupoAcessoGet] = useState([]);

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
        setGrupoAcessoGet(
          response.data.map((grupoAcesso) => {
            return {
              grupoDeAcessoId: grupoAcesso.grupoDeAcessoId,
              nomeDoGrupo: grupoAcesso.nomeDoGrupo,
              descricaoDoGrupo: grupoAcesso.descricaoDoGrupo,
              telas: grupoAcesso.telas,
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
  }, []);

  const columnsGrupoAcesso = [
    {
      dataField: "grupoDeAcessoId",
      text: "id grupo de acesso",
      hidden: true,
    },
    {
      dataField: "nomeDoGrupo",
      text: "Nome",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Nome",
      }),
    },
    {
      dataField: "descricaoDoGrupo",
      text: "Descrição",
      sort: true,
    },
    {
      dataField: "quantidadeTelasPermitidas",
      text: "Qtd. Telas Permitidas",
      sort: true,
    },
    {
      dataField: "quantidadeDeUsuarios",
      text: "Qtd. Usuários",
      sort: true,
    },
    {
      dataField: "editar",
      isDummyField: true,
      text: "Editar / Excluir",
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id={row.grupoDeAcessoId}
              Style="cursor:pointer"
              onClick={() => {
                funcaoAbrirModal(row);
              }}
            >
              <VscEdit />
            </span>

            <span
              className="spanTabela"
              id={row.grupoDeAcessoId}
              Style="cursor:pointer"
              onClick={() => handleDeleteGrupoAcesso(row.grupoDeAcessoId)}
            >
              <RiDeleteBinFill />
            </span>
          </>
        );
      },
    },
  ];

  // POST
  const [grupoDeAcessoId, setGrupoDeAcessoId] = useState();
  const [nomeDoGrupo, setNomeDoGrupo] = useState();
  const [descricaoDoGrupo, setDescricaoDoGrupo] = useState();
  const [usuarios, setUsuarios] = useState(null);
  const [telas, setTelas] = useState();
  const [quantidadeTelasPermitidas, setQuantidadeTelasPermitidas] = useState(0);
  const [quantidadeDeUsuarios, setQuantidadeDeUsuarios] = useState(0);

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

  function createPost() {
    Api.post(`/${url}`, {
      nomeDoGrupo,
      descricaoDoGrupo,
      usuarios,
      telas:[telasPermitidas],
      quantidadeTelasPermitidas,
      quantidadeDeUsuarios,
      // telas: [telasPermitidas],
    })
      .then((response) => {
        console.log(response.data);
        alert("Cadastro efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //Delete
  async function handleDeleteGrupoAcesso(grupoDeAcessoId) {
    try {
      await Api.delete(`/${url}/${grupoDeAcessoId}`);
      setUser(
        user.filter((grupo) => grupo.grupoDeAcessoId !== grupoDeAcessoId)
      );
      alert("Deletado com sucesso");
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }

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
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Grupo de Acesso</h2>
              </div>
            </div>
            <div className="col-md-6">
              <div Style="text-align: right">
                <Button
                  variant="success"
                  onClick={(props) => {
                    funcaoAbrirModal(idGrupo);
                  }}
                  disabled={liberarBotao}
                >
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <BootstrapTable
                keyField="grupoDeAcessoId"
                data={grupoAcessoGet}
                columns={columnsGrupoAcesso}
                striped={true}
                selectRow={selectRowGrupos}
                filter={filterFactory()}
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
                Cadastro de Grupo de Acesso
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <div
                className="formCadastro"
                id="formCadastro"
                Style="margin-bottom: 30px"
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

                  <div
                    className="row"
                    Style="margin-top: 1rem; margin-bottom: 1rem"
                  >
                    <div className="col-3">
                      <Button variant="success" Style="width:100%">
                        Telas
                      </Button>
                    </div>
                    <div className="col-3">
                      <Button variant="success" Style="width:100%">
                        Usuarios
                      </Button>
                    </div>
                  </div>

                  {/*1ª Quadrado*/}
                  <div className="row mt-3">
                    <div
                      className="col-5 ultimaTabela" Style="height: 200px!important"
                      onClick={onClickLinhaTabela}
                    >
                      <BootstrapTable
                        keyField="telaId"
                        data={productsSemPermissao}
                        columns={columnsSemPermissao}
                        selectRow={selectRowSemPermissao}
                        bordered={false}
                      />
                    </div>

                    <div className="col-2 text-center">
                      <div Style="border: 1px solid black; padding: 6px; border-radius: 1rem; margin-top: 4rem; cursor: pointer">
                        <TiArrowForward onClick={associarTelas} />
                      </div>
                      <div Style="border: 1px solid black; padding: 6px; border-radius: 1rem; margin-top: 2rem; cursor: pointer;">
                        <TiArrowBack onClick={desassociarTiposVeiculos} />
                      </div>
                    </div>

                    {/*2ª Quadrado*/}
                    <div className="col-5" Style="border: 1px solid green; height: 200px">
                      <BootstrapTable
                        keyField="telaId"
                        data={telasPermitidas}
                        columns={columnsPermitidas}
                        selectRow={selectRowComPermissao}
                        bordered={false}
                      />
                    </div>

                    <div className="row mt-4">
                      <div className="col-6">
                        <Button variant="secondary">Voltar</Button>
                      </div>
                      <div className="col-6" Style="text-align:right">
                        <Button variant="success" onClick={() => createPost()}>Salvar</Button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        {/* Modal */}
      </IconContext.Provider>
    </>
  );
}
