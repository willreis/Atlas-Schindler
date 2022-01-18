import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";

import axios from "axios";

export default class CadastroProcesso extends React.Component {
  state = {
    processos: [],
  };

  componentDidMount() {
    axios.get(`http://192.168.11.58:90/api/Processo`).then((res) => {
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
              <div className="col-md-12 col-sm-12">
                <div className="tituloInterno">
                  <h2 Style="color:#555;">Cadastro de Processo</h2>
                </div>
              </div>
            </div>
            <form className="row g-3 formPadrao" action="">
              <div className="col-md-3 col-sm-6">
                <label>Número da Gôndola</label>
                <input type="text" />
              </div>
              <div className="col-md-3 col-sm-6">
                <label>Código do Material</label>
                <input type="text" />
              </div>
              <div className="col-md-3 col-sm-6">
                <label>Código do Material</label>
                <input type="text" />
              </div>
              <div className="col-md-3 col-sm-6 btnCol">
                <Button variant="success" className="align-self-baseline">
                  Pesquisar
                </Button>
              </div>
            </form>
          </div>
        </IconContext.Provider>
      </>
    );
  }
}
