import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";

function InformacoesTransevelevador() {
  return (
    <>
      <IconContext.Provider value={{ color: "green", size: "1.4rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Informações do Transelevador</h2>
              </div>
            </div>
          </div>
          <form className="row g-3 formPadrao" action="">
            <div className="col-md-3 col-sm-6">
              <label>Garfo</label>
              <input type="text" />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Status</label>
              <input type="text" />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Tipo de Movimento</label>
              <input type="text" />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Modo de Operação</label>
              <input type="text" />
            </div>
            <div className="col-md-9 col-sm-12">
              <label>Falha</label>
              <input type="text" />
            </div>
            <div className="col-md-3 col-sm-12">
              <label>Falha</label>
              <input type="text" />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Direção X</label>
              <input type="text" />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Direção Y</label>
              <input type="text" />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Direção Z</label>
              <input type="text" />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Extensão do Garfo</label>
              <input type="text" />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Destino</label>
              <input type="text" />
            </div>
            <div className="col-md-4 col-sm-6">
              <label>Origem</label>
              <input type="text" />
            </div>

            <div className="col-sm-4 col-md-4 col-lg-4 blockButtons">
              <Button variant="success">Começar Pick</Button>
              <Button variant="success">Começar Drop</Button>
            </div>

            <div className="col-sm-4 col-md-4 col-lg-6 blockButtons">
              <Button variant="success">Pick/Drop Finalizado</Button>
              <Button variant="success">Acionar Giroflex</Button>
            </div>

            <div className="col-sm-4 col-md-4 col-lg-2 blockButtons">
              <Button variant="success">Apagar Falha</Button>
              <Button variant="success">Eliminar Ordem</Button>
            </div>
          </form>
        </div>
      </IconContext.Provider >
    </>
  );
}

export default InformacoesTransevelevador;
