import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { ImArrowDown } from "react-icons/im";
import { ImArrowUp } from "react-icons/im";
import { FaMinus } from "react-icons/fa";

export default function AcompanhamentoProdKanban() {
  return (
    <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
      <div className="paddingContainer">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="tituloInterno">
              <h2 className="titulosPrincipais">Acompanhamento de Produção Kanban</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 acompanhamentoEstoqueRow bgVermelho">
            <div>Item: 10101</div>
            <div>Ordem: 101</div>
            <div>Título: Demonstração</div>
            <div>Família: Dem Máquina P3</div>
            <div>Dias em produção: 3</div>
            <div>
              <ImArrowDown />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 acompanhamentoEstoqueRow bgVermelho">
            <div>Item: 10101</div>
            <div>Ordem: 101</div>
            <div>Título: Demonstração</div>
            <div>Família: Dem Máquina P3</div>
            <div>Dias em produção: 3</div>
            <div>
              <ImArrowDown />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 acompanhamentoEstoqueRow bgAmarelo">
            <div>Item: 10101</div>
            <div>Ordem: 101</div>
            <div>Título: Demonstração</div>
            <div>Família: Dem Máquina P3</div>
            <div>Dias em produção: 3</div>
            <div>
              <ImArrowUp />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 acompanhamentoEstoqueRow bgAzul">
            <div>Item: 10101</div>
            <div>Ordem: 101</div>
            <div>Título: Demonstração</div>
            <div>Família: Dem Máquina P3</div>
            <div>Dias em produção: 3</div>
            <div>
              <ImArrowUp />
            </div>
          </div>
        </div>
        
        
        
        
      </div>
    </IconContext.Provider>
  );
}