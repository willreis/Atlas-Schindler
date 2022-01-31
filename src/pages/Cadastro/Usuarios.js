import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin6Fill } from 'react-icons/ri'
import Modal from "react-bootstrap/Modal";
import Api from "../../services/Api";
/*Material UI*/
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button2 from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';



export default function Usuarios() {

  /*Material UI*/
  const [open, setOpen] = React.useState(true);

  //Modal const
  const [show, setShow] = useState(false);

  const [show2, setShow2] = useState(false);


  var dataAtual = new Date().toLocaleDateString();
  var horaAtual = new Date().toLocaleTimeString();
  // let varAtivoInativo = document.getElementById('ativoInativo')

  //*GET
  const [user, setUser] = useState([]);

  useEffect(() => {
    Api.get("/Usuario")
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
  const [senha, setSenha] = useState();
  const [matricula, setMatricula] = useState();
  const [nome, setNome] = useState();
  const [cargo, setCargo] = useState();
  const [eMail, setEmail] = useState();
  const [grupoDeAcesso, setGrupoDeAcesso] = useState(null);
  const [status, setStatus] = useState(false);
  const [dataDeCadastro, setDataDeCadastro] = useState();

  function handleRegister(e) {
    //e.preventDefault();
    handleRegister(user);
  }

  function createPost() {
    Api.post("/Usuario", {
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
        setSenha(response.data);
        setNome(response.data);
        setMatricula(response.data);
        setCargo(response.data);
        setEmail(response.data);
        setGrupoDeAcesso(response.data);
        setStatus(response.data);
        setDataDeCadastro(response.data);
        console.log(response.data);
        alert("Cadastro Efetuado com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  //TESTE

  

  

  return (
    <>
      <IconContext.Provider value={{ color: "#fff", size: "1.6rem" }}>
        <div id='divPai'>
          <div className="container paddingContainer">
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
                      <th scope="col">Opções/Editar</th>

                    </tr>
                  </thead>
                  <tbody>
                    {user.map((usuario) => (
                      <tr>
                        <td Style="display:none" key={usuario.usuarioId}>{usuario.usuarioId}</td>
                        <td>{usuario.matricula}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.cargo}</td>
                        <td>{usuario.eMail}</td>
                        <td>{usuario.senha}</td>
                        <td>{usuario.grupoDeAcesso}</td>
                        <td>{usuario.status ? "Ativo" : "Inativo"}</td>
                        <td>{usuario.dataDeCadastro}</td>
                        <td Style="text-align: center">
                          <span id='spanId' Style='cursor:pointer' onClick={() => setShow2(true)}>
                            <GrEdit />
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

        {/* Modal do Bootstrap*/}
        <Modal
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
                  <label>Senha</label>
                  <input
                    type="text"
                    name="senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>

                <div className="col-md-6 col-sm-6">
                  <label>Status</label>
                  <select
                    type="text"
                    id="ativoInativo"
                    name="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option>Escolha uma opção</option>
                    <option name="ativo" value="true">
                      Ativo
                    </option>
                    <option name="inativo" value="false">
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

        {/*Modal Editar */}
        <Modal
          size="lg"
          show={show2}
          onHide={() => setShow2(false)}

        /*false possibilita fechar. True ñ deixa fechar*/
        >
          <Modal.Body>
            {/*Material UI*/}
            <Box sx={{ margin: 'auto' }}>
              <Collapse in={open}>
                <Alert
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  <div className='row'>
                    <div className='col-md-6'>
                      <Button variant='primary'><GrEdit /> Editar</Button>
                    </div>
                    <div className='col-md-6'>
                      <Button variant='danger'><RiDeleteBin6Fill /> Excluir</Button>
                    </div>
                  </div>
                </Alert>
              </Collapse>
            </Box>
          </Modal.Body>
        </Modal>
      </IconContext.Provider>
    </>
  );
}
