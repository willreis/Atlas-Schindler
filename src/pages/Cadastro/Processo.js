import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";

import { Button } from "react-bootstrap";
import Api from "../../services/Api";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

export default function Processo() {

  const [modalDelete, setModalDelete] = useState(false);

  const fecharModal = () => setModalDelete(false);

  var url = "Processo";

  //Modal const
  const [show, setShow] = useState(false);
  const [showModalPut, setShowModalPut] = useState(false);

  //Get
  const [user, setUser] = useState([]);
  const [idUser, setIdUser] = useState(null);

  const [processoGet, setprocessoGet] = useState([]);

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
        setprocessoGet(
          response.data.map((processo) => {
            return {
              processoId: processo.processoId,
              nome: processo.nome,
              ordenacao: processo.ordenacao,
              editar: processo.processoId,
              
            };
          })
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  const columns = [
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "processoId",
      text: "ID",
      hidden: true
      
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "nome",
      text: "Nome",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Nome",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "ordenacao",
      text: "Ordenação",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Ordenação",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "editar",
      text: "Editar / Excluir",
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id={row.processoId}
              Style="cursor:pointer"
              onClick={() => {
                funcaoAbrirModal(row);
              }}
            >
              <VscEdit />
            </span>

            <span
              className="spanTabela"
              id={row.processoId}
              Style="cursor:pointer"
              onClick={() => handleDeleteModal(row.processoId)}
            >
              <RiDeleteBinFill />
            </span>
          </>
        );
      },
    },
  ];

  // POST
  const [processoId, setProcessoId] = useState();
  const [nome, setNome] = useState();
  const [ordenacao, setOrdenacao] = useState();

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }
  

  function createPost() {
    Api.post(`${url}`, {
      nome,
      ordenacao,
    })
      .then((response) => {
        console.log(response.data);
        alert("Processo cadastrado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  ///////PUT
  function funcaoAbrirModal(row) {
    setShowModalPut(true);
    Api.get(`${url}/${row.processoId}`, {
      processoId,
      nome,
      ordenacao,
    })

      .then(() => {
        console.log("get feito", row.processoId);
        setProcessoId(row.processoId);
        setNome(row.nome);
        setOrdenacao(row.ordenacao);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro1:", error);
        alert("Ops! Ocorreu um erro1:", error);
      });
  }

  function handlePut() {
    Api.put(`${url}/${processoId}`, {
      processoId, //Os Estados para editar.
      nome,
      ordenacao,
    })
      .then((response) => {
        setProcessoId(processoId);
        setNome();
        setOrdenacao();
        console.log("Esse é o console do Put: ", response);
        alert("Put Efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }

  //Delete
  function handleDeleteProcesso(idUser) {
    try {
      Api.delete(`/${url}/${idUser}`);
      console.log('delete id', idUser)
      
      setModalDelete(false);
      alert("Deletado com sucesso");
      window.location.reload();
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }

  //Abre o Modal no ícone de lixeira.
  function handleDeleteModal(processoId) {
    console.log("Modal Delete aberto!");
    console.log('delete id', processoId)
    setModalDelete(true);
  }

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("selecionado");
      console.log(row.processoId);
      setIdUser(row.processoId);
    },
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000", size: "1.6rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Processo</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <Button
                  className="botaoCadastrar"
                  variant="success"
                  onClick={() => setShow(true)}
                >
                  <HiPlus Style="color:#fff!important" />Cadastrar
                </Button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 tabelaUsuario">
              <BootstrapTable
                keyField="processoId"
                data={processoGet}
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
              Cadastro de Processo
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
              <form className="row g-3 formPadrao" onSubmit={handleRegister}>
                <div className="col-md-5 col-sm-6">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="col-md-5 col-sm-6">
                  <label>Ordenação</label>
                  <input
                    type="number"
                    name="ordenacao"
                    value={ordenacao}
                    onChange={(e) => setOrdenacao(parseInt(e.target.value))}
                  />
                </div>

                <div className="col-md-2 col-sm-6 btnCol">
                  <Button
                    type="submit"
                    variant="success"
                    className="align-self-baseline"
                    onClick={createPost}
                  >
                    Salvar
                  </Button>
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
                <div className="col-md-5 col-sm-6" Style="display:none">
                  <label>Id</label>
                  <input
                    name="processoId"
                    value={processoId}
                    onChange={(e) => setProcessoId(e.target.value)}
                  />
                </div>
                <div className="col-md-5 col-sm-6">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="col-md-5 col-sm-6">
                  <label>Ordenação</label>
                  <input
                    type="number"
                    name="ordenacao"
                    value={ordenacao}
                    onChange={(e) => setOrdenacao(parseInt(e.target.value))}
                  />
                </div>

                <div className="col-md-2 col-sm-6 btnCol">
                  <Button
                    type="submit"
                    variant="success"
                    className="align-self-baseline"
                    onClick={(processo) => {
                      handlePut(processo.processoId);
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
            <h3 Style="position: absolute; left: 30%;">
              Atenção!
            </h3>
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
                      <Button variant="primary" onClick={() => handleDeleteProcesso(idUser)}>
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
