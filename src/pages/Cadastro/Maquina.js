import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";

import { Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import Api from "../../services/Api";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

export default function Maquina() {
  var url = "Maquina";
  var urlProcesso = "Processo";

  //Modal
  const [show, setShow] = useState(false);
  const [showModalPut, setShowModalPut] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const fecharModal = () => setModalDelete(false);

  //Get
  const [user, setUser] = useState([]);
  const [user2, setUser2] = useState([]);
  const [idUser, setIdUser] = useState(null);

  const [maquinaGet, setMaquinaGet] = useState([]);

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
        setMaquinaGet(
          response.data.map((maquina) => {
            return {
              maquinaId: maquina.maquinaId,
              nome: maquina.nome,
              processoId: maquina.processoId,
              processo: maquina.processo.nome,
              status: maquina.status ? "Ativo" : "Inativo",
              ordenacao: maquina.ordenacao,
              tempoMedioProducao: maquina.tempoMedioProducao,
              editar: maquina.maquinaId,
            };
          })
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro111!:", error);
        alert("Ops! Ocorreu um erro111!:", error);
      });

    Api.get(`${urlProcesso}`)
      .then((response) => {
        console.log(response);
        setUser2(response.data);
      })
      .catch((error) => {
        console.log("Não foi possivel carregar a lista", error);
        alert("Não foi possivel carregar a lista", error);
      });
  }, []);

  const columns = [
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "maquinaId",
      text: "ID",
      sort: true,
      hidden: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "nome",
      text: "Nome",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Nome",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "processo",
      text: "Processo",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Processo",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "status",
      text: "Status",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "ordenacao",
      text: "Ordenação",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "tempoMedioProducao",
      text: "Tempo Médio de Produção",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "editar",
      isDummyField: true,
      text: "Editar / Excluir",
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id={row.maquinaId}
              Style="cursor:pointer"
              onClick={() => {
                funcaoAbrirModal(row);
              }}
            >
              <VscEdit />
            </span>

            <span
              className="spanTabela"
              id={row.maquinaId}
              Style="cursor:pointer"
              onClick={() => handleDeleteModal(row.maquinaId)}
            >
              <RiDeleteBinFill />
            </span>
          </>
        );
      },
    },
  ];

  //POST
  const [maquinaId, setMaquinaId] = useState();
  const [nome, setNome] = useState();
  const [processoId, setProcessoId] = useState();
  const [processo, setProcesso] = useState();
  const [status, setStatus] = useState();
  const [ordenacao, setOrdenacao] = useState();
  const [tempoMedioProducao, setTempoMedioProducao] = useState();

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

  function createPost() {
    Api.post(`${url}`, {
      nome,
      processoId,
      processo,
      status,
      ordenacao,
      tempoMedioProducao,
    })
      .then((response) => {
        console.log(response.data);
        alert("Cadastro Efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //Delete
  async function handleDeleteMaquina(idUser) {
    try {
      Api.delete(`/${url}/${idUser}`);
      console.log("delete id", idUser);

      setModalDelete(false);
      alert("Deletado com sucesso");
      window.location.reload();
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }

  function handleDeleteModal(maquinaId) {
    console.log("Modal Delete aberto!");
    console.log("delete id", maquinaId);
    setModalDelete(true);
  }

  ///////PUT
  function handlePut() {
    Api.put(`${url}/${maquinaId}`, {
      maquinaId,
      nome,
      processoId,
      processo:{
        nome
      },
      status,
      ordenacao,
      tempoMedioProducao,
    })
      .then((response) => {
        setMaquinaId(maquinaId);
        setNome();
        setProcessoId();
        setProcesso();
        setStatus();
        setOrdenacao();
        setTempoMedioProducao();

        console.log("Esse é o console do Put: ", response);
        alert("Alterações Efetuadas com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }

  function funcaoAbrirModal(row) {
    setShowModalPut(true);

    Api.get(`${url}/${row.maquinaId}`, {
      maquinaId,
      nome,
      processoId,
      processo,
      status,
      ordenacao,
      tempoMedioProducao,
    })
      .then(() => {
        setMaquinaId(row.maquinaId);
        setNome(row.nome);
        setProcessoId(row.processoId);
        setProcesso(row.processo);
        setStatus(row.status);
        setOrdenacao(row.ordenacao);
        setTempoMedioProducao(row.tempoMedioProducao);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro1:", error);
        alert("Ops! Ocorreu um erro1:", error);
      });
  }

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("selecionado");
      console.log(row.maquinaId);
      setIdUser(row.maquinaId);
    },
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Maquina</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <Button
                  className="botaoCadastrar"
                  variant="success"
                  onClick={() => setShow(true)}
                >
                  <HiPlus Style="color:#fff!important" />
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 tabelaUsuario">
              <BootstrapTable
                keyField="maquinaId"
                data={maquinaGet}
                columns={columns}
                striped={true}
                selectRow={selectRow}
                filter={filterFactory()}
              />
            </div>
          </div>
        </div>

        {/* Modal Cadastro */}
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Cadastro de Maquina
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
              <form className="g-3 formPadrao" onSubmit={handleRegister}>
                <div className="row">
                  <div className="col-md-4 col-sm-6">
                    <label>Nome</label>
                    <input
                      type="text"
                      name="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <label>Processo</label>

                    <select
                      type="number"
                      id="processos"
                      name={processo}
                      value={processoId}
                      onChange={(e) => {
                        setProcessoId(parseInt(e.target.value));
                      }}
                    >
                      <option>Escolha uma opção</option>
                      {user2.map((processo) => (
                        <option
                          name={processo.nome}
                          value={processo.processoId}
                        >
                          {processo.nome}
                        </option>
                      ))}
                      ;
                    </select>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <label>Status</label>
                    <select
                      name="status"
                      value={status}
                      onChange={(e) => setStatus(!status)}
                    >
                      <option>Escolha</option>
                      <option name="ativo" value="true">
                        Ativo
                      </option>
                      <option name="inativo" value="false">
                        Inativo
                      </option>
                    </select>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <label>Ordenacao</label>
                    <input
                      type="number"
                      name="ordenacao"
                      value={ordenacao}
                      onChange={(e) => setOrdenacao(parseFloat(e.target.value))}
                    />
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <label>Tempo Médio</label>
                    <input
                      type="number"
                      name="tempoMedio"
                      value={tempoMedioProducao}
                      onChange={(e) =>
                        setTempoMedioProducao(parseFloat(e.target.value))
                      }
                    />
                  </div>
                  <div className="col-md-4 col-sm-12 btnCol">
                    <Button
                      type="submit"
                      variant="success"
                      className="align-self-baseline"
                      onClick={createPost}
                    >
                      Cadastrar
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>

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
              Cadastro de Maquina
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
              <form className="g-3 formPadrao" onSubmit={handleRegister}>
                <div className="row">
                  <div className="col-md-4 col-sm-6" Style="display:none">
                    <label>Id</label>
                    <input
                      name="maquinaId"
                      value={maquinaId}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <label>Nome</label>
                    <input
                      type="text"
                      name="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <label>Processo</label>

                    <select
                      type="number"
                      id="processos"
                      name={processo}
                      value={processoId}
                      onChange={(e) => {
                        setProcessoId(parseInt(e.target.value));
                      }}
                    >
                      <option>Escolha uma opção</option>
                      {user2.map((processo) => (
                        <option
                          name={processo.nome}
                          value={processo.processoId}
                        >
                          {processo.nome}
                        </option>
                      ))}
                      ;
                    </select>
                  </div>

                  <div className="col-md-4 col-sm-6">
                    <label>Status</label>
                    <select
                      name="status"
                      value={status}
                      onChange={(e) => setStatus(!status)}
                    >
                      <option>Escolha</option>
                      <option name="ativo" value="true">
                        Ativo
                      </option>
                      <option name="inativo" value="false">
                        Inativo
                      </option>
                    </select>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <label>Ordenacao</label>
                    <input
                      type="number"
                      name="ordenacao"
                      value={ordenacao}
                      onChange={(e) => setOrdenacao(parseFloat(e.target.value))}
                    />
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <label>Tempo Médio</label>
                    <input
                      type="number"
                      name="tempoMedio"
                      value={tempoMedioProducao}
                      onChange={(e) =>
                        setTempoMedioProducao(parseFloat(e.target.value))
                      }
                    />
                  </div>
                  <div className="col-md-4 col-sm-12 btnCol">
                    <Button
                      type="submit"
                      variant="success"
                      className="align-self-baseline"
                      onClick={(maquina) => {
                        handlePut(maquina.maquinaId);
                      }}
                    >
                      Salvar
                    </Button>
                  </div>
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
                        onClick={() => handleDeleteMaquina(idUser)}
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
