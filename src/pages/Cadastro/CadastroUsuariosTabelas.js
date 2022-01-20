import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";

import { Link } from "react-router-dom";
import Api from "../../services/Api"

export default class CadastroUsuariosTabelas extends React.Component {
  state = {
    usuarios: [],
  };

  componentDidMount() {
    Api.get('/Usuario').then((res) => {
      const usuarios = res.data;
      this.setState({ usuarios });
    });
  }


render () {
  
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
                <Link to="/cadastro/cadastrousuariocampos"></Link><Button variant="success">Cadastrar</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <table class="table table-striped table-bordered">
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
                    {this.state.usuarios.map((usuario) => (
                      <tr>
                        <td Style="display:none">{usuario.usuarioId}</td>
                        <td>{usuario.matricula}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.cargo}</td>
                        <td>{usuario.nomeDoGrupo}</td>
                        <td><span><GrEdit/></span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

}