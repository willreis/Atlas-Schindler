import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";

import Api from '../../services/Api';

export default class CadastroProcesso extends React.Component {
  state = {
    nome: [],
    ordenacao: []
  };

  handleSubmit = event => {
    event.preventDefault();

    const processoCadastro = {
      name: this.state.name,
      ordenacao: this.state.ordenacao
    };

    Api.post('/cadastroprocesso', { processoCadastro })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    console.log(processoCadastro);
  }

  render() {
    return (
      <>
        <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
          <div className="container paddingContainer">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="tituloInterno">
                  <h2 Style="color:#555;">Cadastro de Processo</h2>
                </div>
              </div>
            </div>

            <form className="row g-3 formPadrao" action="" onSubmit={this.handleSubmit}>
              <div className="col-md-3 col-sm-6">
                <label>Nome</label>
                <input type="text" name="nome" onChange={(e) => e.target.value} />
              </div>
              <div className="col-md-3 col-sm-6">
                <label>Ordenação</label>
                <input type="text" name="ordenacao" onChange={(e) => e.target.value} />
              </div>

              <div className="col-md-3 col-sm-6 btnCol">
                <Button type="submit" variant="success" className="align-self-baseline">
                  Cadastrar
                </Button>
              </div>
            </form>
          </div>
        </IconContext.Provider>
      </>
    );
  }
}
