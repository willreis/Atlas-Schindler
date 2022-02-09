import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export default function Maquina() {
  var url = "Maquina";
  var urlProcesso = "Processo";

  //Modal const
  const [show, setShow] = useState(false);
  const [showModalPut, setShowModalPut] = useState(false);

  //Get
  const [user, setUser] = useState([]);
  const [user2, setUser2] = useState([]);

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
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
        alert("Máquina cadastrado com sucesso!");
        alert("Cadastro Efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //Delete
  async function handleDeleteMaquina(maquinaId) {
    try {
      await Api.delete(`/${url}/${maquinaId}`);
      setUser(user.filter((maquina) => maquina.maquinaId !== maquinaId));
      alert("Deletado com sucesso");
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
      console.log(err);
    }
  }

  ///////PUT
  function handlePut() {
    Api.put(`${url}/${maquinaId}`, {
      maquinaId,
      nome,
      processoId,
      processo,
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
        alert("Put Efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }

  function funcaoAbrirModal(maquina) {
    setShowModalPut(true);

    Api.get(`${url}/${maquina.maquinaId}`, {
      maquinaId,
      nome,
      processoId,
      processo,
      status,
      ordenacao,
      tempoMedioProducao,
    })
      .then(() => {
        setMaquinaId(maquina.maquinaId);
        setNome(maquina.nome);
        setProcessoId(maquina.processoId);
        setProcesso(maquina.processo);
        setStatus(maquina.status);
        setOrdenacao(maquina.ordenacao);
        setTempoMedioProducao(maquina.tempoMedioProducao);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro1:", error);
        alert("Ops! Ocorreu um erro1:", error);
      });
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Maquina</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <Button variant="success" onClick={() => setShow(true)}>
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12 paddingTop20Mobile">
              <div className="textTable">
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Nome</th>
                      <th scope="col">Processo</th>
                      <th scope="col">Status</th>
                      <th scope="col">Ordenação</th>
                      <th scope="col">Tempo Médio Produção</th>
                      <th scope="col">Editar / Excluir</th>
                    </tr>
                  </thead>

                  <tbody>
                    {user.map((maquina, index) => (
                      <tr>
                        <td Style="display:none" key={index}></td>
                        <td Style="display:none">{maquina.maquinaId}</td>
                        <td>{maquina.nome}</td>
                        <td>{maquina.processoId}</td>
                        <td>{maquina.status ? "Ativo" : "Inativo"}</td>
                        <td>{maquina.ordenacao}</td>
                        <td>{maquina.tempoMedioProducao}</td>
                        <td className="text-center icons-table">
                          <span
                            Style="cursor:pointer"
                            onClick={() => {
                              funcaoAbrirModal(maquina);
                            }}
                          >
                            <VscEdit />
                          </span>

                          <span
                            Style="cursor:pointer"
                            onClick={() =>
                              handleDeleteMaquina(maquina.maquinaId)
                            }
                          >
                            <RiDeleteBinFill />
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row paddingTop30">
            <div className="col-md-6">
              <Button variant="secondary">Voltar</Button>
            </div>
            <div className="col-md-6 paddingTop20Mobile">
              <div className="alignButtons">
                <Button variant="success">Salvar</Button>
              </div>
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
      </IconContext.Provider>
    </>
  );
}
