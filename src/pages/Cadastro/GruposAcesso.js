import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import BootstrapTable from "react-bootstrap-table-next";
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
  const [telaId, setTelaId] = useState()
  const [nome, setNome] = useState()

  // const telaId = localStorage.getItem('telaId');
  // const telaNome = localStorage.getItem('nome')

  //GET
  const [user, setUser] = useState([]);

  //Get Tela:
  const columnsSemPermissao = [
    {
      text: "Telas Sem Permissão!",
      dataField: "telas",
    },
  ];

  const [productsSemPermissao, setProductsSemPermissao] = useState([])

  function funcaoAbrirModal(usuario) {
    setShowModal(true)
    console.log("funcaoAbrirModal ativada!!!!!!!!!!!!!")

    Api.get('Tela/', {
      telaId,
      nome
    })
      .then((response) => {
        console.log(response)
        setProductsSemPermissao(response.data.map((t) => {
          return { telas: t.nome, ...t }
        }))
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }

  function onClickLinhaTabela() {

    Api.get('Tela/', {
      telaId,
    })
      .then(() => {
        const idDaLinha = document.getElementById(telaId);
        console.log('Linha da Tabela: ', idDaLinha);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }

  function Enviar() {

  }

  function Trazer() {

  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  const columns = [
    {
      text: "Telas Permitidas!",
      dataField: "telas",
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

  var url = "GrupoDeAcesso";

  //Modal const
  const [show, setShow] = useState(false);

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
  }, []);

  // POST
  const [nomeDoGrupo, setNomeDoGrupo] = useState();
  const [descricaoDoGrupo, setDescricaoDoGrupo] = useState();
  const [usuarios, setUsuarios] = useState(null);
  const [telas, setTelas] = useState(null);
  const [quantidadeTelasPermitidas, setQuantidadeTelasPermitidas] = useState();
  const [quantidadeDeUsuarios, setQuantidadeDeUsuarios] = useState();

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

  function createPost() {
    Api.post(`/${url}`, {
      nomeDoGrupo,
      descricaoDoGrupo,
      usuarios,
      telas,
      quantidadeTelasPermitidas,
      quantidadeDeUsuarios,
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
  async function handleDeleteMaquina(grupoDeAcessoId) {
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
                    funcaoAbrirModal(props.usuario)
                  }}                >
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
                      <th scope="col">Descrição</th>
                      <th scope="col">Qtd Telas Permitidas</th>
                      <th scope="col">Qtd De Usuarios</th>
                      <th scope="col">Editar / Excluir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((grupo, index) => (
                      <tr>
                        <td Style="display:none" key={index}></td>
                        <td Style="display:none">{grupo.grupoDeAcessoId}</td>
                        <td>{grupo.nomeDoGrupo}</td>
                        <td>{grupo.descricaoDoGrupo}</td>
                        <td>{grupo.quantidadeTelasPermitidas}</td>
                        <td>{grupo.quantidadeDeUsuarios}</td>
                        <td className="text-center icons-table">
                          <span
                            Style="cursor:pointer"
                            // onClick={() => pegarId(maquina.maquinaId)}
                            alt="Editar"
                          >
                            <VscEdit />
                          </span>

                          <span
                            Style="cursor:pointer"
                            onClick={() =>
                              handleDeleteMaquina(grupo.grupoDeAcessoId)
                            }
                            alt="Deletar"
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
                      />
                    </div>
                    <div className="col-6">
                      <label>Descrição</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Descrição"
                      />
                    </div>
                  </div>

                  <div className="row" Style='margin-top: 1rem; margin-bottom: 1rem'>
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
                  <div className="row mt-3" >
                    <div className="col-5 ultimaTabela" onClick={onClickLinhaTabela}>
                      <BootstrapTable
                        keyField="id"
                        data={productsSemPermissao}
                        columns={columnsSemPermissao}
                        bordered={false}
                      />
                    </div>

                    <div className="col-2 text-center" >
                      <div Style='border: 1px solid black; padding: 6px; border-radius: 1rem; margin-top: 4rem; cursor: pointer'>
                        <TiArrowForward onClick={Enviar} />
                      </div>
                      <div Style='border: 1px solid black; padding: 6px; border-radius: 1rem; margin-top: 2rem; cursor: pointer;'>
                        <TiArrowBack onClick={Trazer} />
                      </div>
                    </div>

                    {/*2ª Quadrado*/}
                    <div className="col-5">
                      <BootstrapTable
                        keyField="id"
                        data={products}
                        columns={columns}
                        bordered={false}
                      />
                    </div>

                    <div className='row mt-4'>
                      <div className='col-6'>
                        <Button variant='secondary'>
                          Voltar
                        </Button>
                      </div>
                      <div className='col-6' Style='text-align:right'>
                        <Button variant='success'>
                          Salvar
                        </Button>
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
