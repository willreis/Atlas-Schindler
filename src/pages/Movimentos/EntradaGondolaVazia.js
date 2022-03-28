import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export default function EntradaGondolaVazia() {
  return (
    <>
      <div className="paddingContainer">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="tituloInterno">
              <h2 className="titulosPrincipais">Retornar Gôndola ao Armazém</h2>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div class="row">
            <div className="col-md-3">
                <label for="mesaEg">Mesa</label>
                <input id="mesaEg" type="text" class="form-control" />
            </div>
            <div className="col-md-3">
              <label for="posicaoGondola">Posição Gôndola (Origem)</label>
              <input id="posicaoGondola" type="text" class="form-control" />
            </div>
            <div className="col-md-3 alinharBottom">
              <Button variant="success" className="btnEnviarRetornarGondola">
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
