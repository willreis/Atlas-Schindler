import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { IconContext } from "react-icons/lib";
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

function Maquina() {
  const products = [
    {
      nome: "D1",
      processo: "Dobradeira",
      status: "Ativo",
      ordenacao: 1,
      tempoMedioProducao: 12,
      opcoes: <IoOptionsSharp />,
    },
    {
      nome: "L1",
      processo: "Laser",
      status: "Ativo",
      ordenacao: 3,
      tempoMedioProducao: 15,
      opcoes: <IoOptionsSharp />,
    },
    {
      nome: "D1",
      processo: "Dobradeira",
      status: "Ativo",
      ordenacao: 1,
      tempoMedioProducao: 12,
      opcoes: <IoOptionsSharp />,
    },
  ];

  const columns = [
    {
      dataField: "nome",
      text: "Nome",
    },
    {
      dataField: "processo",
      text: "Processo",
    },
    {
      dataField: "status",
      text: "Status",
    },
    {
      dataField: "ordenacao",
      text: "Ordenação",
    },
    {
      dataField: "tempoMedioProducao",
      text: "Tempo Médio de Produção",
    },
    {
      dataField: "opcoes",
      text: "Opções/Editar",
    },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Maquina</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <Button variant="success">Cadastrar</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 paddingTop20Mobile">
              <div Style="text-align: center" className="textTable">
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
          <div className="row paddingTop30">
            <div className="col-md-6">
              <Button variant="secondary">Voltar</Button>
            </div>
            <div className="col-md-6 paddingTop20Mobile">
              <div className="alignButtons">
                <Button variant="success">Salvar</Button>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Maquina;
