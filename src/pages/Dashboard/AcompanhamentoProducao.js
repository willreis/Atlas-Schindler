import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

export default function AcompanhamentoProducao() {
  const columns = [
    {
      dataField: "p",
      text: "P",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "ordem",
      text: "Ordem",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "vg",
      text: "VG",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "sem",
      text: "SEM",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
    {
      dataField: "diasFila",
      text: "Dias na Fila",
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      sort: true,
    },
  ];

  const products = [
    {
      p: 1,
      ordem: "P3",
      vg: 666,
      sem: "Urgente",
      diasFila: 10,
    },
    {
      p: 1,
      ordem: "P3",
      vg: 666,
      sem: "Urgente",
      diasFila: 10,
    },
    {
      p: 1,
      ordem: "P3",
      vg: 666,
      sem: "Urgente",
      diasFila: 10,
    },
  ];

  return (
    <>
      <div className="paddingContainer">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="tituloInterno">
              <h2 className="titulosPrincipais">Acompanhamento de Produção</h2>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12 col-sm-12">
            <p className="tituloMaquinas">Tesoura</p>
            <div className="row">
              <div className="col-md-6">
                <p className="tituloMaquinasInterno">Tesoura 1</p>
                <div className="tabelaAcompanhamento">
                  <BootstrapTable
                    keyField="ordemProducaoElementoId"
                    hover
                    striped
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <p className="tituloMaquinasInterno">Tesoura 2</p>
                <div className="tabelaAcompanhamento">
                  <BootstrapTable
                    keyField="ordemProducaoElementoId"
                    hover
                    striped
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row" Style="margin: 40px 0">
            <hr />
          </div>
          <div className="col-md-12 col-sm-12">
            <p className="tituloMaquinas">Dobradeira</p>
            <div className="row">
              <div className="col-md-6">
                <p className="tituloMaquinasInterno">Dobradeira 1</p>
                <div className="tabelaAcompanhamento">
                  <BootstrapTable
                    keyField="ordemProducaoElementoId"
                    hover
                    striped
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <p className="tituloMaquinasInterno">Dobradeira 2</p>
                <div className="tabelaAcompanhamento">
                  <BootstrapTable
                    keyField="ordemProducaoElementoId"
                    hover
                    striped
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row" Style="margin: 40px 0">
            <hr />
          </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <p className="tituloMaquinas">Puncionadeira</p>
            <div className="row">
              <div className="col-md-6">
                <p className="tituloMaquinasInterno">Puncionadeira 1</p>
                <div className="tabelaAcompanhamento">
                  <BootstrapTable
                    keyField="ordemProducaoElementoId"
                    hover
                    striped
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <p className="tituloMaquinasInterno">Puncionadeira 2</p>
                <div className="tabelaAcompanhamento">
                  <BootstrapTable
                    keyField="ordemProducaoElementoId"
                    hover
                    striped
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row" Style="margin: 40px 0">
            <hr />
          </div>
          <div className="col-md-12 col-sm-12 mb-5">
            <p className="tituloMaquinas">Laser</p>
            <div className="row">
              <div className="col-md-6">
                <p className="tituloMaquinasInterno">Laser 1</p>
                <div className="tabelaAcompanhamento">
                  <BootstrapTable
                    keyField="ordemProducaoElementoId"
                    hover
                    striped
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <p className="tituloMaquinasInterno">Laser 2</p>
                <div className="tabelaAcompanhamento">
                  <BootstrapTable
                    keyField="ordemProducaoElementoId"
                    hover
                    striped
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
