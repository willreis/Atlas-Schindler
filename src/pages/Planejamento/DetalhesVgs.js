import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { AiFillSave } from "react-icons/ai";
import BootstrapTable from "react-bootstrap-table-next";

import Api from "../../services/Api";

const columns = [
  {
    dataField: "datalhesId",
    text: "Detalhes ID",
    headerAlign: "center",
    headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
  },
  {
    dataField: "maquina",
    text: "Maquina",
    headerAlign: "center",
    headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    sort: true,
  },
  {
    dataField: "dataInicio",
    text: "Data Início",
    headerAlign: "center",
    headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    sort: true,
  },
  {
    dataField: "dataFim",
    text: "Data Fim",
    headerAlign: "center",
    headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
    sort: true,
  },
];

const products = [
  {
    datalhesId: 1,
    maquina: "P3",
    dataInicio: "15/03/2022",
    dataFim: "20/03/2022",
  },
  {
    datalhesId: 2,
    maquina: "P4",
    dataInicio: "16/03/2022",
    dataFim: "21/03/2022",
  },
];

export default function DetalhesVgs() {
  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="container-fluid margin-bottom50">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="tituloInterno">
                <h2
                  className="titulosPrincipais"
                  Style="margin-top: 30px!important;"
                >
                  Detalhes das VGs
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12" Style="border:1px solid">
              <div
                className="boxVgs"
                Style="width: 180px; height: 300px; border: 1px solid #000"
              ></div>
              <div className="boxMesas">
                <form action="">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="mesaEntrada">Mesa Entrada</label>
                      <input
                        id="mesaEntrada"
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="mesaSaida">Mesa Saída</label>
                      <input id="mesaSaida" type="text" class="form-control" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-8 col-sm-12" Style="border:1px solid">
              <div className="row">
                <form>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="gondolaFisica">Gondola Física</label>
                      <input
                        id="gondolaFisica"
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="maquinaAtual">Máquina Atual</label>
                      <input
                        id="maquinaAtual"
                        type="text"
                        class="form-control"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="vgInput">VG</label>
                      <input id="vgInput" type="text" class="form-control" />
                    </div>
                    <div className="col">
                      <label htmlFor="statusInput">Status</label>
                      <input
                        id="statusInput"
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="statusInput">Problema Relado</label>
                      <input
                        id="statusInput"
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="avisoAdmInput">
                        Aviso do Administrador
                      </label>
                      <input
                        id="avisoAdmInput"
                        type="text"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <BootstrapTable
                        keyField="la"
                        hover
                        striped
                        data={products}
                        columns={columns}
                      ></BootstrapTable>
                    </div>
                  </div>
                  <div className="row">
                    <div className="btnsDetalhesVgs">
                      <Button className="botaoImportar" variant="success">
                        <AiFillSave Style="color:#fff!important; width:220px!important" />
                        Salvar
                      </Button>
                      <Button className="botaoImportar" variant="success">
                        <AiFillSave Style="color:#fff!important; width:220px!important" />
                        Salvar
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
