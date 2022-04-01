import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { IconContext } from "react-icons/lib";
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";

function MapaArmazem() {
  const products = [
    {
      0: "X=1",
      1: <IoOptionsSharp />,
      2: <IoOptionsSharp />,
      3: <IoOptionsSharp />,
      4: <IoOptionsSharp />,
      5: <IoOptionsSharp />,
      6: <IoOptionsSharp />,
      7: <IoOptionsSharp />,
      8: <IoOptionsSharp />,
      9: <IoOptionsSharp />,
      10: <IoOptionsSharp />,
      11: <IoOptionsSharp />,
      12: <IoOptionsSharp />,
      13: <IoOptionsSharp />,
      14: <IoOptionsSharp />,
      15: <IoOptionsSharp />,
      16: <IoOptionsSharp />,
      17: <IoOptionsSharp />,
      18: <IoOptionsSharp />,
      19: <IoOptionsSharp />,
      20: <IoOptionsSharp />,
      21: <IoOptionsSharp />,
      22: <IoOptionsSharp />,
      23: <IoOptionsSharp />,
      24: <IoOptionsSharp />,
      25: <IoOptionsSharp />,
      26: <IoOptionsSharp />,
    },
    {
      0: "X=2",
      1: <IoOptionsSharp />,
      2: <IoOptionsSharp />,
      3: <IoOptionsSharp />,
      4: <IoOptionsSharp />,
      5: <IoOptionsSharp />,
      6: <IoOptionsSharp />,
      7: <IoOptionsSharp />,
      8: <IoOptionsSharp />,
      9: <IoOptionsSharp />,
      10: <IoOptionsSharp />,
      11: <IoOptionsSharp />,
      12: <IoOptionsSharp />,
      13: <IoOptionsSharp />,
      14: <IoOptionsSharp />,
      15: <IoOptionsSharp />,
      16: <IoOptionsSharp />,
      17: <IoOptionsSharp />,
      18: <IoOptionsSharp />,
      19: <IoOptionsSharp />,
      20: <IoOptionsSharp />,
      21: <IoOptionsSharp />,
      22: <IoOptionsSharp />,
      23: <IoOptionsSharp />,
      24: <IoOptionsSharp />,
      25: <IoOptionsSharp />,
      26: <IoOptionsSharp />,
    },
    {
      0: "X=3",
      1: <IoOptionsSharp />,
      2: <IoOptionsSharp />,
      3: <IoOptionsSharp />,
      4: <IoOptionsSharp />,
      5: <IoOptionsSharp />,
      6: <IoOptionsSharp />,
      7: <IoOptionsSharp />,
      8: <IoOptionsSharp />,
      9: <IoOptionsSharp />,
      10: <IoOptionsSharp />,
      11: <IoOptionsSharp />,
      12: <IoOptionsSharp />,
      13: <IoOptionsSharp />,
      14: <IoOptionsSharp />,
      15: <IoOptionsSharp />,
      16: <IoOptionsSharp />,
      17: <IoOptionsSharp />,
      18: <IoOptionsSharp />,
      19: <IoOptionsSharp />,
      20: <IoOptionsSharp />,
      21: <IoOptionsSharp />,
      22: <IoOptionsSharp />,
      23: <IoOptionsSharp />,
      24: <IoOptionsSharp />,
      25: <IoOptionsSharp />,
      26: <IoOptionsSharp />,
    },
    {
      0: "X=4",
      1: <IoOptionsSharp />,
      2: <IoOptionsSharp />,
      3: <IoOptionsSharp />,
      4: <IoOptionsSharp />,
      5: <IoOptionsSharp />,
      6: <IoOptionsSharp />,
      7: <IoOptionsSharp />,
      8: <IoOptionsSharp />,
      9: <IoOptionsSharp />,
      10: <IoOptionsSharp />,
      11: <IoOptionsSharp />,
      12: <IoOptionsSharp />,
      13: <IoOptionsSharp />,
      14: <IoOptionsSharp />,
      15: <IoOptionsSharp />,
      16: <IoOptionsSharp />,
      17: <IoOptionsSharp />,
      18: <IoOptionsSharp />,
      19: <IoOptionsSharp />,
      20: <IoOptionsSharp />,
      21: <IoOptionsSharp />,
      22: <IoOptionsSharp />,
      23: <IoOptionsSharp />,
      24: <IoOptionsSharp />,
      25: <IoOptionsSharp />,
      26: <IoOptionsSharp />,
    },
    {
      0: "X=5",
      1: <IoOptionsSharp />,
      2: <IoOptionsSharp />,
      3: <IoOptionsSharp />,
      4: <IoOptionsSharp />,
      5: <IoOptionsSharp />,
      6: <IoOptionsSharp />,
      7: <IoOptionsSharp />,
      8: <IoOptionsSharp />,
      9: <IoOptionsSharp />,
      10: <IoOptionsSharp />,
      11: <IoOptionsSharp />,
      12: <IoOptionsSharp />,
      13: <IoOptionsSharp />,
      14: <IoOptionsSharp />,
      15: <IoOptionsSharp />,
      16: <IoOptionsSharp />,
      17: <IoOptionsSharp />,
      18: <IoOptionsSharp />,
      19: <IoOptionsSharp />,
      20: <IoOptionsSharp />,
      21: <IoOptionsSharp />,
      22: <IoOptionsSharp />,
      23: <IoOptionsSharp />,
      24: <IoOptionsSharp />,
      25: <IoOptionsSharp />,
      26: <IoOptionsSharp />,
    },
    {
      0: "X=6",
      1: <IoOptionsSharp />,
      2: <IoOptionsSharp />,
      3: <IoOptionsSharp />,
      4: <IoOptionsSharp />,
      5: <IoOptionsSharp />,
      6: <IoOptionsSharp />,
      7: <IoOptionsSharp />,
      8: <IoOptionsSharp />,
      9: <IoOptionsSharp />,
      10: <IoOptionsSharp />,
      11: <IoOptionsSharp />,
      12: <IoOptionsSharp />,
      13: <IoOptionsSharp />,
      14: <IoOptionsSharp />,
      15: <IoOptionsSharp />,
      16: <IoOptionsSharp />,
      17: <IoOptionsSharp />,
      18: <IoOptionsSharp />,
      19: <IoOptionsSharp />,
      20: <IoOptionsSharp />,
      21: <IoOptionsSharp />,
      22: <IoOptionsSharp />,
      23: <IoOptionsSharp />,
      24: <IoOptionsSharp />,
      25: <IoOptionsSharp />,
      26: <IoOptionsSharp />,
    },
    {
      0: "X=7",
      1: <IoOptionsSharp />,
      2: <IoOptionsSharp />,
      3: <IoOptionsSharp />,
      4: <IoOptionsSharp />,
      5: <IoOptionsSharp />,
      6: <IoOptionsSharp />,
      7: <IoOptionsSharp />,
      8: <IoOptionsSharp />,
      9: <IoOptionsSharp />,
      10: <IoOptionsSharp />,
      11: <IoOptionsSharp />,
      12: <IoOptionsSharp />,
      13: <IoOptionsSharp />,
      14: <IoOptionsSharp />,
      15: <IoOptionsSharp />,
      16: <IoOptionsSharp />,
      17: <IoOptionsSharp />,
      18: <IoOptionsSharp />,
      19: <IoOptionsSharp />,
      20: <IoOptionsSharp />,
      21: <IoOptionsSharp />,
      22: <IoOptionsSharp />,
      23: <IoOptionsSharp />,
      24: <IoOptionsSharp />,
      25: <IoOptionsSharp />,
      26: <IoOptionsSharp />,
    },
    {
      0: "X=8",
      1: <IoOptionsSharp />,
      2: <IoOptionsSharp />,
      3: <IoOptionsSharp />,
      4: <IoOptionsSharp />,
      5: <IoOptionsSharp />,
      6: <IoOptionsSharp />,
      7: <IoOptionsSharp />,
      8: <IoOptionsSharp />,
      9: <IoOptionsSharp />,
      10: <IoOptionsSharp />,
      11: <IoOptionsSharp />,
      12: <IoOptionsSharp />,
      13: <IoOptionsSharp />,
      14: <IoOptionsSharp />,
      15: <IoOptionsSharp />,
      16: <IoOptionsSharp />,
      17: <IoOptionsSharp />,
      18: <IoOptionsSharp />,
      19: <IoOptionsSharp />,
      20: <IoOptionsSharp />,
      21: <IoOptionsSharp />,
      22: <IoOptionsSharp />,
      23: <IoOptionsSharp />,
      24: <IoOptionsSharp />,
      25: <IoOptionsSharp />,
      26: <IoOptionsSharp />,
    },
    {
      0: "X=9",
      1: <IoOptionsSharp />,
      2: <IoOptionsSharp />,
      3: <IoOptionsSharp />,
      4: <IoOptionsSharp />,
      5: <IoOptionsSharp />,
      6: <IoOptionsSharp />,
      7: <IoOptionsSharp />,
      8: <IoOptionsSharp />,
      9: <IoOptionsSharp />,
      10: <IoOptionsSharp />,
      11: <IoOptionsSharp />,
      12: <IoOptionsSharp />,
      13: <IoOptionsSharp />,
      14: <IoOptionsSharp />,
      15: <IoOptionsSharp />,
      16: <IoOptionsSharp />,
      17: <IoOptionsSharp />,
      18: <IoOptionsSharp />,
      19: <IoOptionsSharp />,
      20: <IoOptionsSharp />,
      21: <IoOptionsSharp />,
      22: <IoOptionsSharp />,
      23: <IoOptionsSharp />,
      24: <IoOptionsSharp />,
      25: <IoOptionsSharp />,
      26: <IoOptionsSharp />,
    },
    {
      0: "X=10",
      1: <IoOptionsSharp />,
      2: <IoOptionsSharp />,
      3: <IoOptionsSharp />,
      4: <IoOptionsSharp />,
      5: <IoOptionsSharp />,
      6: <IoOptionsSharp />,
      7: <IoOptionsSharp />,
      8: <IoOptionsSharp />,
      9: <IoOptionsSharp />,
      10: <IoOptionsSharp />,
      11: <IoOptionsSharp />,
      12: <IoOptionsSharp />,
      13: <IoOptionsSharp />,
      14: <IoOptionsSharp />,
      15: <IoOptionsSharp />,
      16: <IoOptionsSharp />,
      17: <IoOptionsSharp />,
      18: <IoOptionsSharp />,
      19: <IoOptionsSharp />,
      20: <IoOptionsSharp />,
      21: <IoOptionsSharp />,
      22: <IoOptionsSharp />,
      23: <IoOptionsSharp />,
      24: <IoOptionsSharp />,
      25: <IoOptionsSharp />,
      26: <IoOptionsSharp />,
    },
    {
      0: "X=11",
      1: <IoOptionsSharp />,
      2: <IoOptionsSharp />,
      3: <IoOptionsSharp />,
      4: <IoOptionsSharp />,
      5: <IoOptionsSharp />,
      6: <IoOptionsSharp />,
      7: <IoOptionsSharp />,
      8: <IoOptionsSharp />,
      9: <IoOptionsSharp />,
      10: <IoOptionsSharp />,
      11: <IoOptionsSharp />,
      12: <IoOptionsSharp />,
      13: <IoOptionsSharp />,
      14: <IoOptionsSharp />,
      15: <IoOptionsSharp />,
      16: <IoOptionsSharp />,
      17: <IoOptionsSharp />,
      18: <IoOptionsSharp />,
      19: <IoOptionsSharp />,
      20: <IoOptionsSharp />,
      21: <IoOptionsSharp />,
      22: <IoOptionsSharp />,
      23: <IoOptionsSharp />,
      24: <IoOptionsSharp />,
      25: <IoOptionsSharp />,
      26: <IoOptionsSharp />,
    },
    {
      0: "X=12",
      1: "",
      2: <IoOptionsSharp />,
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10:"",
      11:"",
      12:"",
      13:"",
      14:"",
      15:"",
      16:"",
      17:"",
      18:"",
      19:"",
      20:"",
      21:"",
      22:"",
      23:"",
      24:"",
      25:"",
      26:"",
    },
  ];

  const columns = [
    {
      dataField: "0",
      text: "X/Y",
    },
    {
      dataField: "1", //dataField é oq vai estar por trás de cada Coluna. Ele pega as propriedades do Array de objetos 'products' mas só no Código.
      text: "1", //text é o th(table head). Nome de cada Coluna. Vai aparecer na tela.
    },
    {
      dataField: "2",
      text: "2",
    },
    {
      dataField: "3",
      text: "3",
    },
    {
      dataField: "4",
      text: "4",
    },
    {
      dataField: "5",
      text: "5",
    },
    {
      dataField: "6",
      text: "6",
    },
    {
      dataField: "7",
      text: "7",
    },
    {
      dataField: "8",
      text: "8",
    },
    {
      dataField: "9",
      text: "9",
    },
    {
      dataField: "10",
      text: "10",
    },
    {
      dataField: "11",
      text: "11",
    },
    {
      dataField: "12",
      text: "12",
    },
    {
      dataField: "13",
      text: "13",
    },
    {
      dataField: "14",
      text: "14",
    },
    {
      dataField: "15",
      text: "15",
    },
    {
      dataField: "16",
      text: "16",
    },
    {
      dataField: "17",
      text: "17",
    },
    {
      dataField: "18",
      text: "18",
    },
    {
      dataField: "19",
      text: "19",
    },
    {
      dataField: "20",
      text: "20",
    },
    {
      dataField: "21",
      text: "21",
    },
    {
      dataField: "22",
      text: "22",
    },
    {
      dataField: "23",
      text: "23",
    },
    {
      dataField: "24",
      text: "24",
    },
    {
      dataField: "25",
      text: "25",
    },
    {
      dataField: "26",
      text: "26",
    },
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "#555", size: "1.4rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Mapa do Armazém</h2>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <form className="row g-3 formPadrao" action="">
              <div className="col-md-3 col-sm-6">
                <label>Número da Gôndola</label>
                <select Style="">
                  <option></option>
                  <option>aaa</option>
                  <option>bbb</option>
                  <option>ccc</option>
                </select>
              </div>
              <div className="col-md-3" Style="position: relative">
                <Button variant="primary" Style="position: absolute; bottom:0">Buscar Todas</Button>
              </div>
            </form>
          </div>
          <div className="row mt-4">
            <div className="col-md-12 col-sm-12" >
              <div class="armazemBotoes">
                <Button variant="success" Style="width:200px">Lado Esquerdo</Button>
                <Button variant="success" Style="width:200px">Lado Direito</Button>

                <Button variant="success" Style="width:200px">Legenda</Button>
                <Button variant="success" Style="width:200px;">Estados</Button>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-12 col-sm-12">
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
          </div>
        </div>
      </IconContext.Provider >
    </>
  );
}

export default MapaArmazem;
