import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { IconContext } from "react-icons/lib";
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

function OcupacaoArmazem() {
  const products = [
    {
      codigoMaterial: 123456,
      nomeMaterial: 123,
      qtdPeca: 1212,
      qtdKg: 4321,
      unidadeMedida: 9999,
      qtdGondolas: 8888,
      porcentagemOcupacao: 9898,
    },
    {
      codigoMaterial: 123456,
      nomeMaterial: 123,
      qtdPeca: 1212,
      qtdKg: 4321,
      unidadeMedida: 9999,
      qtdGondolas: 8888,
      porcentagemOcupacao: 9898,
    },
    {
      codigoMaterial: 123456,
      nomeMaterial: 123,
      qtdPeca: 1212,
      qtdKg: 4321,
      unidadeMedida: 9999,
      qtdGondolas: 8888,
      porcentagemOcupacao: 9898,
    },
  ];

  const columns = [
    {
      dataField: "codigoMaterial",
      text: "Código do Material",
    },
    {
      dataField: "nomeMaterial",
      text: "Nome do Material",
    },
    {
      dataField: "qtdPeca",
      text: "Quantidade (Pç)",
    },
    {
      dataField: "qtdKg",
      text: "Quantidade (Kg)",
    },
    {
      dataField: "unidadeMedida",
      text: "Unidade de Medida",
    },
    {
      dataField: "qtdGondolas",
      text: "Quantidade de Gondolas",
    },
    {
      dataField: "porcentagemOcupacao",
      text: "Porcentagem de Ocupação",
    },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "green", size: "1.4rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Ocupação do Armazém</h2>
              </div>
            </div>
          </div>
          <form className="row g-3 formPadrao" action="">
            <div className="col-md-3 col-sm-6">
              <label>Qtd. Gôndolas Vazias</label>
              <input type="text" />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Gôndolas com Material</label>
              <input type="text" />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Gôndolas em Produção</label>
              <input type="text" />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Qtd. Total Gondolas</label>
              <input type="text" />
            </div>
          </form>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div Style="text-align: center" className="textTable mt-3">
                <BootstrapTable
                  keyField="nomeGrupo"
                  hover
                  striped
                  data={products}
                  columns={columns}
                />
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default OcupacaoArmazem;
