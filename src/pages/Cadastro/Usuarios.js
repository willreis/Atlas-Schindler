import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import Api from "../../services/Api";
import Modal from "react-bootstrap/Modal";

export default function Usuarios() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  //Modal const
  const [show, setShow] = useState(false);
  const [showModalPut, setShowModalPut] = useState(false);

  const [usuarioGet, setUsuarioGet] = useState([]);
  //*GET
  const [user, setUser] = useState([]);
  ///Get Grupo de Acesso
  const [userGrupoAcesso, setUserGrupoAcesso] = useState();
  // POST
  const [usuarioId, setUsuarioId] = useState();
  const [idUser, setIdUser] = useState(null);
  const [senha, setSenha] = useState();
  const [nome, setNome] = useState();
  const [matricula, setMatricula] = useState();
  const [cargo, setCargo] = useState();
  const [eMail, setEmail] = useState();
  const [grupoDeAcesso, setGrupoDeAcesso] = useState([]);
  const [status, setStatus] = useState();
  const [dataDeCadastro, setDataDeCadastro] = useState();

  const columns = [
    {
      dataField: "usuarioId",
      text: "id usuario",
      hidden: true,
    },
    {
      dataField: "matricula",
      text: "Matricula",
      sort: true,
    },
    {
      dataField: "nome",
      text: "Nome",
      sort: true,
    },
    {
      dataField: "cargo",
      text: "Cargo",
      sort: true,
    },
    {
      dataField: "eMail",
      text: "Email",
      sort: true,
    },
    {
      dataField: "senha",
      text: "Senha",
      sort: true,
    },
    {
      dataField: "grupoDeAcesso",
      text: "Grupo De Acesso",
      sort: true,
    },
    {
      dataField: "status",
      text: "Status",
      sort: true,
    },
    {
      dataField: "dataDeCadastro",
      text: "Data de Cadastro",
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
              id={row.usuarioId}
              Style="cursor:pointer"
              onClick={() => {
                funcaoAbrirModal(row);
              }}
            >
              <VscEdit />
            </span>
            <button
              className="spanTabela"
              id={row.usuarioId}
              Style="cursor:pointer"
              onClick={() => handleDeleteUsuario(row.usuarioId)}
            >
              <RiDeleteBinFill />
            </button>
          </>
        );
      },
    },
  ];

  var dataAtual = new Date().toLocaleDateString();
  var horaAtual = new Date().toLocaleTimeString();

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
        alert("Ops! Ocorreu um erro1:", error);
      });

    Api.get(`/GrupoDeAcesso/${grupoDeAcesso}`)
      .then((response) => {
        console.log(response.data);
        setUserGrupoAcesso(response.data.grupoDeAcessoId);
        console.log('User grupo de acesso:', userGrupoAcesso)
        console.log("Grupo de acesso:", grupoDeAcesso)
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro1:", error);
        alert("Ops! Ocorreu um erro1:", error);
      });
  }, []);

  function handleRegister(e) {
    //e.preventDefault();
    handleRegister(user);
  }

  function createPost() {
    Api.post(`/${url}/`, {
      senha,
      matricula,
      nome,
      cargo,
      eMail,
      grupoDeAcesso,
      status,
      dataDeCadastro,
    })
      .then((response) => {
        console.log(response.data);
        alert("Cadastro Efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro2:" + error);
        alert("Ops! Ocorreu um erro2" + error);
      });
  }

  //Delete
  async function handleDeleteUsuario(idUser) {
    try {
      await Api.delete(`/${url}/${idUser}`);
      // setUsuarioGet(user.filter((usuario) => usuario.usuarioId !== idUser));
      alert("Deletado com sucesso");
    } catch (err) {
      console.log("iddddddddddddddddddddddddd", usuarioId);
      alert("erro ao deletar, tente novamente");
    }
  }

  function handlePut(row) {
    Api.put(`${url}/${row.usuarioId}`, {
      usuarioId, //Os Estados para editar.
      senha,
      matricula,
      nome,
      cargo,
      eMail,
      grupoDeAcesso,
      status,
      dataDeCadastro,
    })
      .then((response) => {
        setUsuarioId(row.usuarioId);
        setSenha();
        setNome();
        setMatricula();
        setCargo();
        setEmail();
        setGrupoDeAcesso();
        setStatus();
        setDataDeCadastro();
        console.log("Esse é o console do Put: ", response);
        alert("Put Efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }

  function funcaoAbrirModal(row) {
    setShowModalPut(true);
    alert("modal id: ", row.usuarioId);
    console.log("funcaoAbrirModal ativada!");

    Api.get(`${url}/${row.usuarioId}`, {
      usuarioId,
      senha,
      matricula,
      nome,
      cargo,
      eMail,
      grupoDeAcesso,
      status,
      dataDeCadastro,
    })
      .then(() => {
        setUsuarioId(row.usuarioId);
        setSenha(row.senha);
        setNome(row.nome);
        setMatricula(row.matricula);
        setCargo(row.cargo);
        setEmail(row.eMail);
        setGrupoDeAcesso(row.grupoDeAcesso);
        setStatus(row.status);
        setDataDeCadastro(row.dataDeCadastro);
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
      console.log(row.usuarioId);
      setIdUser(row.usuarioId);
    },
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div id="divPai">
          <div className="container paddingContainer margin-0">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="tituloInterno">
                  <h2 Style="color:#555;">Cadastro de usuários</h2>
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
                  keyField="usuarioId"
                  data={usuarioGet}
                  columns={columns}
                  selectRow={selectRow}
                  striped={true}
                />
              </div>
            </div>

            {/* <div className="row">
              <div className="col-md-12">
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr className="text-center">
                      <th scope="col">Matricula</th>
                      <th scope="col">Nome</th>
                      <th scope="col">Cargo</th>
                      <th scope="col">Email</th>
                      <th scope="col">Senha</th>
                      <th scope="col">Grupo de Acesso</th>
                      <th scope="col">Status</th>
                      <th scope="col">Data de Cadastro</th>
                      <th scope="col">Editar / Excluir</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((usuario, index) => (
                      <tr>
                        <td Style="display:none" key={index}></td>
                        <td>{usuario.matricula}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.cargo}</td>
                        <td>{usuario.eMail}</td>
                        <td>{usuario.senha}</td>
                        <td>{usuario.grupoDeAcesso.nomeDoGrupo}</td>
                        <td>{usuario.status ? "Ativo" : "Inativo"}</td>
                        <td>{usuario.dataDeCadastro}</td>
                        <td className="text-center icons-table">
                          <span
                            id={usuario.usuarioId}
                            Style="cursor:pointer"
                            onClick={() => {
                              funcaoAbrirModal(usuario);
                            }}
                          >
                            <VscEdit />
                          </span>
                          <span
                            Style="cursor:pointer"
                            onClick={() =>
                              handleDeleteUsuario(usuario.usuarioId)
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
            </div> */}
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
                <div className="col-md-4 col-sm-6">
                  <label>Grupo De Acesso</label>
                  <select
                    type="number"
                    id="processos"
                    name={userGrupoAcesso}
                    value={userGrupoAcesso}
                    onChange={(e) => {
                      setUserGrupoAcesso(parseInt(e.target.value));
                    }}
                  >
                    <option>Escolha uma opção</option>
                    {grupoDeAcesso.map((grupo) => (
                      <option
                        name={grupo.nomeDoGrupo}
                        value={grupo.grupoDeAcessoId}
                      >
                        {grupo.nomeDoGrupo}
                      </option>
                    ))}
                    ;
                  </select>
                </div>
                <div className="col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Senha</label>
                    <div className="input-group">
                      {" "}
                      {/*Bootstrap className para juntar*/}
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
                <div className="col-md-6 col-sm-6">
                  <label>Data Cadastro</label>
                  <input
                    type="text"
                    name="dataDeCadastro"
                    value={dataAtual + " " + horaAtual}
                    onChange={(e) => setDataDeCadastro(e.target.value)}
                  />
                </div>
                <div className="col-md-2 col-sm-6">
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

        {/* Modal do PUT*/}
        <Modal
          size="lg"
          show={showModalPut}
          onHide={() =>
            setShowModalPut(false)
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
                <td></td>
                <div className="col-md-6 col-sm-6" Style="display:none">
                  <label>Id</label>
                  <input
                    name="usuarioId"
                    value={usuarioId}
                    onChange={(e) => setUsuarioId(e.target.value)}
                  />
                </div>
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
                <div className="col-md-6 col-sm-6">
                  <label>Data Cadastro</label>
                  <input
                    type="text"
                    name="dataDeCadastro"
                    value={dataDeCadastro}
                    onChange={(e) => setDataDeCadastro(e.target.value)}
                  />
                </div>
                <div className="col-md-2 col-sm-6 btnCol">
                  <Button
                    type="submit"
                    variant="success"
                    className="align-self-baseline"
                    onClick={(usuario) => {
                      handlePut(usuario.usuarioId);
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
