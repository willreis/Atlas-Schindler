import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { ImArrowDown } from "react-icons/im";
import { ImArrowUp } from "react-icons/im";
import { FaMinus } from "react-icons/fa";

export default function AcompanhamentoEstoque() {
  return (
    <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
      <div className="paddingContainer">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="tituloInterno">
              <h2 className="titulosPrincipais">Acompanhamento de Estoque</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 acompanhamentoEstoqueRow bgVermelho">
            <div>COD: 26713</div>
            <div>Quantidade: 30 pçs</div>
            <div>Sem Movimentação: 25 dias</div>
            <div>
              <ImArrowDown />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 acompanhamentoEstoqueRow bgVermelho">
            <div>COD: 26790</div>
            <div>Quantidade: 40 pçs</div>
            <div>Sem Movimentação: 12 dias</div>
            <div>
              <ImArrowDown />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 acompanhamentoEstoqueRow bgAmarelo">
            <div>COD: 26850</div>
            <div>Quantidade: 60 pçs</div>
            <div>Sem Movimentação: 15 dias</div>
            <div>
              <FaMinus />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 acompanhamentoEstoqueRow bgAmarelo">
            <div>Id: 45</div>
            <div>COD: 27390</div>
            <div>Quantidade: 80 pçs</div>
            <div>Sem Movimentação: 9 dias</div>
            <div>
              <FaMinus />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 acompanhamentoEstoqueRow bgAzul">
            <div>COD: 32658</div>
            <div>Quantidade: 120 pçs</div>
            <div>Sem Movimentação: 30 dias</div>
            <div>
              <ImArrowUp />
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}