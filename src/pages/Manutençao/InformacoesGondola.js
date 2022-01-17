import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { IconContext } from "react-icons/lib";
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

function InformacoesGondola() {
  const products = [
    {
      numeroGondola: 123456,
      codigoMaterial: 123,
      ordem: 1212,
      localizacao: 4321,
      quantidadePç: 9999,
      quantidadeKg: 8888,
      vg: 9898,
      statusGondola: 9090,
      opcoes: <IoOptionsSharp />,
    },
    {
      numeroGondola: 123456,
      codigoMaterial: 123,
      ordem: 1212,
      localizacao: 4321,
      quantidadePç: 9999,
      quantidadeKg: 8888,
      vg: 9898,
      statusGondola: 9090,
      opcoes: <IoOptionsSharp />,
    },
    {
      numeroGondola: 123456,
      codigoMaterial: 123,
      ordem: 1212,
      localizacao: 4321,
      quantidadePç: 9999,
      quantidadeKg: 8888,
      vg: 9898,
      statusGondola: 9090,
      opcoes: <IoOptionsSharp />,
    },
    {
      numeroGondola: 123456,
      codigoMaterial: 123,
      ordem: 1212,
      localizacao: 4321,
      quantidadePç: 9999,
      quantidadeKg: 8888,
      vg: 9898,
      statusGondola: 9090,
      opcoes: <IoOptionsSharp />,
    },
    {
      numeroGondola: 123456,
      codigoMaterial: 123,
      ordem: 1212,
      localizacao: 4321,
      quantidadePç: 9999,
      quantidadeKg: 8888,
      vg: 9898,
      statusGondola: 9090,
      opcoes: <IoOptionsSharp />,
    },
  ];

  const columns = [
    {
      dataField: "numeroGondola",
      text: "Número da Gôndola",
    },
    {
      dataField: "codigoMaterial", //dataField é oq vai estar por trás de cada Coluna. Ele pega as propriedades do Array de objetos 'products' mas só no Código.
      text: "Código do Material", //text é o th(table head). Nome de cada Coluna. Vai aparecer na tela.
    },
    {
      dataField: "ordem",
      text: "Ordem",
    },
    {
      dataField: "localizacao",
      text: "Localização",
    },
    {
      dataField: "quantidadePç",
      text: "Quantidade (Pç)",
    },
    {
      dataField: "quantidadeKg",
      text: "Quantidade (Kg)",
    },
    {
      dataField: "vg",
      text: "VG",
    },
    {
      dataField: "statusGondola",
      text: "Status da Gôndola",
    },
    {
      dataField: "opcoes",
      text: "Opções (Editar)",
    },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "green", size: "1.4rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Informações da Gôndola</h2>
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

export default InformacoesGondola;
