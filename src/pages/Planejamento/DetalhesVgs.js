import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { Button } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import { AiFillSave } from "react-icons/ai";
import { MdKeyboardReturn } from "react-icons/md";
import BootstrapTable from "react-bootstrap-table-next";
import DynamicTree from "react-dynamic-animated-tree";
import { Link } from "react-router-dom";

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

var data = [
  {
    title: "1345789",
    id: "1",
    childNodes: [],
  },
  {
    title: "1348900",
    id: "2",
    childNodes: [],
  },
];

export default function DetalhesVgs() {
  const [node, setSelectedNode] = useState();

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
            <div className="col-md-4 col-sm-12">
              <div className="boxVgs">
                <DynamicTree
                  key="root"
                  id="root"
                  data={[...data]}
                  title="134568"
                  onClick={(node) => setSelectedNode(node)}
                />
              </div>
              <div className="boxMesas mt-3">
                <form action="">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="mesaEntrada">Mesa Entrada</label>
                      <input
                        id="mesaEntrada"
                        type="text"
                        class="form-control"
                        value="312"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="mesaSaida">Mesa Saída</label>
                      <input
                        id="mesaSaida"
                        type="text"
                        class="form-control"
                        value="245"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="row">
                <form>
                  <div className="row">
                    <div className="col">
                      <label htmlFor="gondolaFisica">Gondola Física</label>
                      <input
                        id="gondolaFisica"
                        type="text"
                        class="form-control"
                        value="312"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="maquinaAtual">Máquina Atual</label>
                      <input
                        id="maquinaAtual"
                        type="text"
                        class="form-control"
                        value="245"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="vgInput">VG</label>
                      <input
                        id="vgInput"
                        type="text"
                        class="form-control"
                        value="134066"
                      />
                    </div>
                    <div className="col">
                      <label htmlFor="statusInput">Status</label>
                      <input
                        id="statusInput"
                        type="text"
                        class="form-control"
                        value="ERRO"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col">
                      <label htmlFor="statusInput">Problema Relado</label>
                      <input
                        id="statusInput"
                        type="text"
                        class="form-control"
                        value="Problema 55143"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col">
                      <label htmlFor="avisoAdmInput">
                        Aviso do Administrador
                      </label>
                      <input
                        id="avisoAdmInput"
                        type="text"
                        class="form-control"
                        value="Aviso 11466"
                      />
                    </div>
                  </div>
                  <div className="row mt-4">
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
                  <div className="row mt-5">
                    <div className="btnsDetalhesVgs">
                      <Link to="/planejamento/ordensproducao?ordemProducaoElementoId=203">
                        <Button className="botaoImportar" variant="primary">
                          <MdKeyboardReturn Style="color:#fff!important; width:220px!important" />
                          Voltar
                        </Button>
                      </Link>
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