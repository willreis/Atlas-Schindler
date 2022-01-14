import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { IconContext } from "react-icons/lib";
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

function CadastroUsuariosTabelas() {
  const products = [
    {
      matricula: 1212,
      nome: "José",
      cargo: 1100,
      gruposAcesso: 1100,
      opcoes: <IoOptionsSharp />,
    },
    {
      matricula: 3434,
      nome: "José",
      cargo: 2200,
      gruposAcesso: 2200,
      opcoes: <IoOptionsSharp />,
    },
    {
      matricula: 5656,
      nome: "João",
      cargo: 3300,
      gruposAcesso: 3300,
      opcoes: <IoOptionsSharp />,
    },
    {
      matricula: 7878,
      nome: "João",
      cargo: 4400,
      gruposAcesso: 4400,
      opcoes: <IoOptionsSharp />,
    },
  ];

  const columns = [
    {
      dataField: "matricula", //dataField é cada Coluna. São as propriedade do Array de objetos 'products' mas só no Código.
      text: "Matrícula", //text é o th(table head). Nome de cada Coluna. Vai aparecer na tela.
    },
    {
      dataField: "nome",
      text: "Nome",
    },
    {
      dataField: "cargo",
      text: "Cargo",
    },
    {
      dataField: "gruposAcesso",
      text: "Grupo de Acesso",
    },
    {
      dataField: "opcoes",
      text: "Opções",
    },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Cadastro de usuários</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div Style="text-align: right">
                <Button variant="success">Cadastrar</Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <BootstrapTable
                keyField="matricula"
                hover
                striped
                data={products}
                columns={columns}
              />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default CadastroUsuariosTabelas;
