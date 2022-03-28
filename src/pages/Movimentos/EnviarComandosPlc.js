import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

function EnviarComandosPlc() {
  return (
    <>
      <div className="paddingContainer">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="tituloInterno">
              <h2 className="titulosPrincipais">Enviar Comandos ao PLC</h2>
            </div>
          </div>
        </div>

        <form className="inputEnviarComando">
          <div className="row">
            <div className="col-md-3 col-sm-12 mt-4">
              <div>
                <label for="origemProcesso">Origem Processo</label>
              </div>
              <select id="origemProcesso">
                <option>Escolha uma opção abaixo</option>
                <option value="aaa">aaa</option>
                <option value="bbb">bbb</option>
                <option value="cc">ccc</option>
              </select>
            </div>

            <div className="col-md-3 col-sm-12 mt-4">
              <div>
                <label for="destinoProcesso">Destino Processo</label>
              </div>
              <select id="destinoProcesso" Style="">
                <option>Escolha uma opção abaixo</option>
                <option value="aaa">aaa</option>
                <option value="bbb">bbb</option>
                <option value="cc">ccc</option>
              </select>
            </div>

            <div className="col-md-3 col-sm-12 mt-4">
              <div>
                <label for="tipo">Tipo</label>
              </div>
              <input
                id="tipo"
                type="text"
                className="form-control"
                // Value={ordemProducao.la}
                // onChange={(e) => setLa(parseInt(e.target.value))}
                // readOnly
              />
            </div>

            <div className="col-md-3 col-sm-12 mt-4">
              <div>
                <label for="origem">Origem</label>
              </div>
              <select id="origem">
                <option>Escolha uma opção abaixo</option>
                <option value="aaa">aaa</option>
                <option value="bbb">bbb</option>
                <option value="cc">ccc</option>
              </select>
            </div>

            <div className="col-md-3 col-sm-12 mt-4">
              <div>
                <label for="atual">Atual</label>
              </div>
              <select id="atual">
                <option>Escolha uma opção abaixo</option>
                <option value="aaa">aaa</option>
                <option value="bbb">bbb</option>
                <option value="cc">ccc</option>
              </select>
            </div>

            <div className="col-md-3 col-sm-12 mt-4">
              <div>
                <label for="destino">Destino</label>
              </div>
              <select id="destino">
                <option>Escolha uma opção abaixo</option>
                <option value="aaa">aaa</option>
                <option value="bbb">bbb</option>
                <option value="cc">ccc</option>
              </select>
            </div>

            <div className="col-md-3 col-sm-12 mt-4">
              <div>
                <label for="status">Status</label>
              </div>
              <input
                id="status"
                type="text"
                className="form-control"
                // Value={ordemProducao.la}
                // onChange={(e) => setLa(parseInt(e.target.value))}
                // readOnly
              />
            </div>

            <div className="col-md-3 col-sm-12 mt-4">
              <div>
                <label for="gondola">Gôndola</label>
              </div>
              <input
                id="gondola"
                type="text"
                className="form-control"
                // Value={ordemProducao.la}
                // onChange={(e) => setLa(parseInt(e.target.value))}
                // readOnly
              />
            </div>
          </div>
          <div
            className="row mt-5"
            Style="display: flex; justify-content: flex-end"
          >
            <div className="col-md-2 col-sm-12 mt-40 alinharBottom">
              <Button
                variant="secondary"
                className="btnAbrirProducao"
                Style="width: 200px; background-color: #999"
              >
                Resetar Paletizador
              </Button>
            </div>
            <div className="col-md-2 col-sm-12 mt-40 alinharBottom">
              <Button
                variant="secondary"
                className="btnAbrirProducao"
                Style="width: 200px; background-color: #999"
              >
                Limpar
              </Button>
            </div>
            <div className="col-md-2 col-sm-12 mt-40 alinharBottom">
              <Button
                variant="success"
                className="btnAbrirProducao"
                Style="width: 200px"
              >
                Enviar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EnviarComandosPlc;
