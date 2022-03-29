import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { ImArrowDown } from "react-icons/im";
import { ImArrowUp } from "react-icons/im";
import { FaMinus } from "react-icons/fa";

export default function AcompanhamentoProdKanban() {

  const produtosAcompProdKanban = [
    {
      item: 111,
      ordem: 123,
      titulo: 'Demonstração 1',
      família: 'Dem Máquina p1',
      diasEmProducao: 1,
      statusAtual: 'danger'
    },
    {
      item: 222,
      ordem: 456,
      titulo: 'Demonstração 2',
      família: 'Dem Máquina p2',
      diasEmProducao: 2,
      statusAtual: 'warning'
    },
    {
      item: 333,
      ordem: 789,
      titulo: 'Demonstração 3',
      família: 'Dem Máquina p3',
      diasEmProducao: 3,
      statusAtual: 'ok'
    },
    {
      item: 444,
      ordem: 321,
      titulo: 'Demonstração 4',
      família: 'Dem Máquina p4',
      diasEmProducao: 4,
      statusAtual: 'danger'
    },
    {
      item: 555,
      ordem: 654,
      titulo: 'Demonstração 5',
      família: 'Dem Máquina p5',
      diasEmProducao: 5,
      statusAtual: 'warning'
    },
    {
      item: 666,
      ordem: 987,
      titulo: 'Demonstração 6',
      família: 'Dem Máquina p6',
      diasEmProducao: 6,
      statusAtual: 'ok'
    },
  ]

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

        {produtosAcompProdKanban.map((paramMap, index) => (
          <div className="row" key={index}>
            <div className={`col-md-12 acompanhamentoEstoqueRow ${paramMap.statusAtual}`}>
              <div>Item: {paramMap.item}</div>
              <div>Ordem: {paramMap.ordem}</div>
              <div>Título: {paramMap.titulo}</div>
              <div>Família: {paramMap.familia}</div>
              <div>Dias em produção: {paramMap.diasEmProducao}</div>
              <div><ImArrowDown /></div>
            </div>
          </div>
        ))}
      </div>
    </IconContext.Provider>
  );
}