import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

export default function Processo() {
  var url = "Processo";

  //Modal const
  const [show, setShow] = useState(false);
  const [showModalPut, setShowModalPut] = useState(false);

  //Get
  const [user, setUser] = useState([]);

  const [processoGet, setprocessoGet] = useState([]);

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
        setprocessoGet(
          response.data.map((processo) => {
            return {
              nome: processo.nome,
              ordenacao: processo.ordenacao,
              editar: processo.processoId,
              ...processo,
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
      dataField: "nome",
      text: "Nome",
      sort: true,
      filter: textFilter({
        placeholder: 'Filtrar por Nome',
      })
    },
    {
      dataField: "ordenacao",
      text: "Ordenação",
      sort: true,
      filter: textFilter({
        placeholder: 'Filtrar por Ordenação',
      })
    },
    {
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
              onClick={() => handleDeleteProcesso(row.processoId)}
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
        // setNome(response.data);
        // setOrdenacao(response.data);
        console.log(response.data);
        alert("Processo cadastrado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //Delete
  async function handleDeleteProcesso(processoId) {
    try {
      await Api.delete(`/${url}/${processoId}`);
      console.log('delete ID', processoId)
      setUser(user.filter((processo) => processo.processoId !== processoId));
      alert("Deletado com sucesso");
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
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
        console.log('get feito', row.processoId)
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



  return (
    <>
      <IconContext.Provider value={{ color: "#000", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Processo</h2>
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
            <div className="col-md-12">

              <BootstrapTable
                keyField="id"
                data={processoGet}
                columns={columns}
                striped={true}
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
      </IconContext.Provider>
    </>
  );
}
