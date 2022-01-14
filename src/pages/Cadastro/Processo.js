import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { IconContext } from "react-icons/lib";
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

function Processo() {
  const products = [
    { nome: "Puncionadeira", ordenacao: 1, opcoes: <IoOptionsSharp /> },
    { nome: "Dobradeira", ordenacao: 2, opcoes: <IoOptionsSharp /> },
  ];

  const columns = [
    {
      dataField: "nome", //dataField é cada Coluna. São as propriedade do Array de objetos 'products' mas só no Código.
      text: "Nome", //text é o th(table head). Nome de cada Coluna. Vai aparecer na tela.
    },
    {
      dataField: "ordenacao",
      text: "Ordenação",
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
                <h2 Style="color:#555;">Processo</h2>
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
              <BootstrapTable
                keyField="matricula"
                hover
                striped
                data={products}
                columns={columns}
              />
            </div>
          </div>
          <div className="row paddingTop30">
            <div className="col-md-6 col-sm-12">
              <Button variant="secondary">Voltar</Button>
            </div>
            <div className="col-md-6 col-sm-12 paddingTop20Mobile">
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

export default Processo;
