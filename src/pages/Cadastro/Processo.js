import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { IconContext } from "react-icons/lib";
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

import axios from "axios";

export default class Processo extends React.Component {
  state = {
    processos: [],
  };

  componentDidMount() {
    axios.get(`http://192.168.11.58:90/api/Processo`).then((res) => {
      const processos = res.data;
      this.setState({ processos });
    });
  }

  render() {
    const products = [
      {
        nome: "Puncionadeira",
        ordenacao: 1,
        opcoes: <IoOptionsSharp />,
      },
    ];
    const columns = [
      {
        dataField: "nome",
        text: "Nome",
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
                {/* <BootstrapTable
                  keyField="processoId"
                  hover
                  striped
                  data={products}
                  columns={columns}
                /> */}

                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Nome</th>
                      <th scope="col">Ordenação</th>
                      <th scope="col">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.processos.map((processo) => (
                      <tr>
                        <td>{processo.nome}</td>
                        <td>{processo.processoId}</td>
                        <td>{processo.ordenacao}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
}
