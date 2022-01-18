import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { IoOptionsSharp } from "react-icons/io5";
import { GrEdit } from "react-icons/gr";
import { Button } from "react-bootstrap";

import Api from "../../services/Api"


export default class Processo extends React.Component {
  state = {
    processos: [],
  };

  componentDidMount() {
    Api.get('/Processo').then((res) => {
      const processos = res.data;
      this.setState({ processos });
    });
  }

  render() {
    
    return (
      <>
        <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
          <div className="container paddingContainer">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="tituloInterno">
                  <h2 Style="color:#555;">Processo</h2>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="alignButtons">
                  <Button variant="success">Cadastrar</Button>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 col-sm-12 paddingTop20Mobile">
                
                <table class="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Nome</th>
                      <th scope="col">Ordenação</th>
                      <th scope="col">Opções/Editar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.processos.map((processo) => (
                      <tr>
                        <td Style="display:none">{processo.processoId}</td>
                        <td>{processo.nome}</td>
                        <td>{processo.ordenacao}</td>
                        <td><span><GrEdit/></span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row paddingTop30">
              <div className="col-md-6 col-sm-12">
                <Button variant="secondary">Voltar</Button>
              </div>
              <div className="col-md-6 col-sm-12 paddingTop20Mobile">
                <div className="alignButtons">
                  <Button variant="success">Salvar</Button>
                </div>
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </>
    );
  }
}
