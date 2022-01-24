import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import Modal from "react-bootstrap/Modal";
import Api from "../../services/Api";

export default function Usuarios() {
  //Modal const
  const [show, setShow] = useState(false);

//POST
const [nome, setNome] = useState("");

//   const history = useHistory();

  async function handleCadastroUsuario(e){
    e.preventDefault();

    const data = {
        nome,
    
    };

    try{
        console.log(data);
        // await Api.post('incidents', data, {
            
        // })
        // history.push('/profile');
    } catch (err){
        alert("Erro ao cadastrar caso, tente novamente");
    }

  }

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

  return (
    <>
      <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
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
                  <tr>
                    <th scope="col">Matricula</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Grupo de Acesso</th>
                    <th scope="col">Opções/Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((usuario) => (
                    <tr>
                      <td Style="display:none">{usuario.usuarioId}</td>
                      <td>{usuario.matricula}</td>
                      <td>{usuario.nome}</td>
                      <td>{usuario.cargo}</td>
                      <td>{usuario.nomeDoGrupo}</td>
                      <td>
                        <span>
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

        {/* Modal */}
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Cadastro de Usuarios
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
              <form
                className="row g-3 formPadrao"
                action=""
                onSubmit={handleCadastroUsuario}
              >
                <div className="col-md-6 col-sm-6">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
              <label>Matricula</label>
              <input type="text" name="matricula" id="matricula" />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Data Cadastro</label>
              <input type="text" name="dataCadastro" id="dataCadastro" />
            </div>
            <div className="col-md-6 col-sm-6">
              <label>Cargo</label>
              <input type="text" name="cargo" id="cargo" />
            </div>
            <div className="col-md-6 col-sm-12">
              <label>Senha</label>
              <input type="text" name="senha" id="senha" />
            </div>
            <div className="col-md-6 col-sm-12">
              <label for="grupoAcesso">Grupo de Acesso</label>
              <select id="grupoAcesso" class="form-select">
                <option selected>Escolha um Grupo</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="col-md-6 col-sm-12" Style="position: relative">
              <div className="form-check form-group form-switch statusBtnBox">
                <label className="form-check-label" for="status">
                  Status
                </label>
                <input
                  class="form-check-input statusBtn"
                  type="checkbox"
                  role="switch"
                  id="status"
                />
              </div>
            </div>
                <div className="row cadUsuarioBtnBox">
                  <div className="col-md-4 text-center mt-5">
                    <Button variant="primary">Voltar</Button>
                  </div>
                  <div className="col-md-4"></div>
                  <div className="col-md-4 text-center mt-5">
                    <Button variant="success">Salvar</Button>
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
