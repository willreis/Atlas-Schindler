import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";
import Api from "../../services/Api";
import Modal from "react-bootstrap/Modal";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

export default function Usuarios() {

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

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  //Modal const
  const [show, setShow] = useState(false);
  const [showModalPut, setShowModalPut] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const fecharModal = () => setModalDelete(false);

  const [usuarioGet, setUsuarioGet] = useState([]);
  //*GET
  const [user, setUser] = useState([]);
  ///Get Grupo de Acesso
  const [userGrupoAcesso, setUserGrupoAcesso] = useState([]);
  // POST
  const [usuarioId, setUsuarioId] = useState();
  const [idUser, setIdUser] = useState(null);
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [matricula, setMatricula] = useState();
  const [cargo, setCargo] = useState();
  const [eMail, setEmail] = useState();
  const [grupoDeAcesso, setGrupoDeAcesso] = useState([]);
  const [grupoDeAcessoId, setGrupoDeAcessoId] = useState();
  const [status, setStatus] = useState();

  const columns = [
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "usuarioId",
      text: "id usuario",
      hidden: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "matricula",
      text: "Matricula",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Matricula",
      }),
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
      dataField: "cargo",
      text: "Cargo",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Cargo",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "eMail",
      text: "Email",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "senha",
      text: "Senha",
      sort: true,
      hidden: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "grupoDeAcesso",
      text: "Grupo De Acesso",
      sort: true,
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
      dataField: "dataDeCadastro",
      text: "Data de Cadastro",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "editar",
      isDummyField: true,
      text: "Editar / Deletar",
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id={row.usuarioId}
              Style="cursor:pointer"
              onClick={() => { funcaoAbrirModal(row); }}
              data-toggle="tooltip" data-placement="left" title="Editar"
            >
              <VscEdit />
            </span>
            <button
              className="spanTabela"
              id={row.usuarioId}
              Style="cursor:pointer; border: none; background: none"
              onClick={() => handleDeleteModal(row.usuarioId)}
              data-toggle="tooltip" data-placement="left" title="Deletar"
            >
              <RiDeleteBinFill />
            </button>
          </>
        );
      },
    },
  ];

  var url = "Usuario";

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        setUsuarioGet(
          response.data.map((usuario) => {
            return {
              usuarioId: usuario.usuarioId,
              matricula: usuario.matricula,
              nome: usuario.nome,
              cargo: usuario.cargo,
              eMail: usuario.eMail,
              senha: usuario.senha,
              grupoDeAcesso: usuario.grupoDeAcesso.nomeDoGrupo,
              status: usuario.status ? "Ativo" : "Inativo",
              dataDeCadastro: usuario.dataDeCadastro,
              editar: usuario.usuarioId,
            };
          })
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro1:", error);
        alert("Ops! Ocorreu um erro:", error);
      });

    Api.get("/GrupoDeAcesso")
      .then((response) => {
        setUserGrupoAcesso(response.data);
        const resultadoNome = userGrupoAcesso.map((nome) => nome.nomeDoGrupo);
        const resultadoId = userGrupoAcesso.map((nome) => nome.grupoDeAcessoId);
        console.log("resultadoNome!!!:", resultadoNome);
        console.log("resultadoId!!!:", resultadoId);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  function handleRegister(e) {
    handleRegister(user);
    // e.preventDefault();
  }

  function createPost() {
    Api.post(`/${url}/`, {
      senha,
      matricula,
      nome,
      cargo,
      eMail,
      grupoDeAcesso: {
        grupoDeAcessoId,
      },
      status,
    })
      .then((response) => {
        console.log(response.data);
        alert("Cadastro Efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:" + error);
        alert("Ops! Ocorreu um erro" + error);
      });
  }

  //Delete
  function handleDeleteUsuario(idUser) {
    try {
      Api.delete(`/${url}/${idUser}`);
      console.log("delete id", idUser);

      setModalDelete(false);
      alert("Deletado com sucesso");
      window.location.reload();
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente");
    }
  }

  function handleDeleteModal(usuarioId) {
    console.log("Modal Delete aberto!");
    console.log("delete id", usuarioId);
    setModalDelete(true);
  }

  function handlePut() {
    Api.put(`${url}/${usuarioId}`, {
      usuarioId,
      senha,
      matricula,
      nome,
      cargo,
      eMail,
      grupoDeAcesso: {
        grupoDeAcessoId,
      },
      status,
    })
      .then((response) => {
        setUsuarioId(usuarioId);
        setSenha();
        setNome();
        setMatricula();
        setCargo();
        setEmail();
        setGrupoDeAcesso();
        setStatus();
        console.log("Esse é o console do Put: ", response);
        alert("Alterações efetuadas com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }

  function funcaoAbrirModal(row) {
    setShowModalPut(true);
    Api.get(`${url}/${row.usuarioId}`, {
      usuarioId,
      senha,
      matricula,
      nome,
      cargo,
      eMail,
      grupoDeAcesso: {
        grupoDeAcessoId,
      },
      status,
    })
      .then(() => {
        setUsuarioId(row.usuarioId);
        setSenha(row.senha);
        setNome(row.nome);
        setMatricula(row.matricula);
        setCargo(row.cargo);
        setEmail(row.eMail);
        setGrupoDeAcesso(row.grupoDeAcesso.nomeDoGrupo);
        setStatus(row.status);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: ", error);
        alert("Ops! Ocorreu um erro: ", error);
      });
  }

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("selecionado");
      console.log(row.usuarioId);
      setIdUser(row.usuarioId);
    },
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div id="divPai">
          <div className="paddingContainer margin-0">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="tituloInterno">
                  <h2 className="titulosPrincipais">Cadastro de Usuários</h2>
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
                  keyField="usuarioId"
                  data={usuarioGet}
                  columns={columns}
                  selectRow={selectRow}
                  striped={true}
                  filter={filterFactory()}
                  pagination={paginationFactory(options)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal de Cadastro*/}
        <Modal
          Style="margin-top: 100px; margin-left: 500px"
          size="lg"
          show={show}
          onHide={() =>
            setShow(false)
          } /*false possibilita fechar. True ñ deixa fechar*/
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
              <form className="row g-3 formPadrao" onSubmit={handleRegister}>
                <div className="col-md-6 col-sm-6">
                  <label>Matricula</label>
                  <input
                    type="text"
                    name="matricula"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <label>Cargo</label>
                  <input
                    type="text"
                    name="cargo"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={eMail}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <label>Grupo De Acesso</label>
                  <select
                    type="number"
                    id="grupoDeAcessoId"
                    name=""
                    value={grupoDeAcessoId}
                    onChange={(e) => {
                      setGrupoDeAcessoId(parseInt(e.target.value));
                    }}
                  >
                    <option>Escolha uma opção</option>
                    {userGrupoAcesso.map((nome) => (
                      <option
                        name={nome.nomeDoGrupo}
                        value={nome.grupoDeAcessoId}
                      >
                        {nome.nomeDoGrupo}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Senha</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        type={showPassword ? "text" : "password"}
                        name="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        Style="border-right: none;"
                      />
                      <div className="input-group-addon iconEye">
                        <i
                          onClick={togglePassword}
                          className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"
                            }`}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <label>Status</label>
                  <select
                    name="status"
                    value={status}
                    onChange={() => setStatus(!status)}
                  >
                    <option>Escolha uma opção</option>
                    <option name="ativo" value={true}>
                      Ativo
                    </option>
                    <option name="inativo" value={false}>
                      Inativo
                    </option>
                  </select>
                </div>
                <div className="col-md-2 col-sm-6">
                  <Button
                    type="submit"
                    variant="success"
                    className="align-self-baseline"
                    onClick={createPost}
                    Style="margin-top:24px"
                  >
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>

        {/* Modal do PUT*/}
        <Modal
          size="lg"
          show={showModalPut}
          onHide={() => setShowModalPut(false)}
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
              <form className="row g-3 formPadrao" onSubmit={handlePut}>
                <div className="col-md-6 col-sm-6">
                  <label>Matricula</label>
                  <input
                    type="text"
                    name="matricula"
                    value={matricula}
                    onChange={(e) => setMatricula(e.target.value)}
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <label>Cargo</label>
                  <input
                    type="text"
                    name="cargo"
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                  />
                </div>
                <div className="col-md-6 col-sm-6">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={eMail}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <label>Grupo De Acesso</label>
                  <select
                    type="number"
                    id="grupoDeAcessoId"
                    name=""
                    value={grupoDeAcesso}
                    onChange={(e) => {
                      setGrupoDeAcessoId(parseInt(e.target.value));
                    }}
                    required
                  >
                    <option value="">Escolha uma opção</option>
                    {userGrupoAcesso.map((nome) => (
                      <option
                        name={nome.nomeDoGrupo}
                        value={nome.grupoDeAcessoId}
                      >
                        {nome.nomeDoGrupo}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Senha</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        type={showPassword ? "text" : "password"}
                        name="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        Style="border-right: none;"
                      />
                      <div className="input-group-addon iconEye">
                        <i
                          onClick={togglePassword}
                          className={`fa ${showPassword ? "fa-eye" : "fa-eye-slash"
                            }`}
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6">
                  <label>Status</label>
                  <select
                    name="status"
                    value={status}
                    onChange={() => setStatus(!status)}
                    required
                  >
                    <option value="">Escolha uma opção</option>
                    <option name="ativo" value={true}>
                      Ativo
                    </option>
                    <option name="inativo" value={false}>
                      Inativo
                    </option>
                  </select>
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
                        onClick={() => handleDeleteUsuario(idUser)}
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
