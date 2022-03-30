import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { ImArrowDown } from "react-icons/im";
import { ImArrowUp } from "react-icons/im";
import { FaMinus } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";

export default function AcompanhamentoEstoque() {
  const produtos = [
    {
      id: 1,
      cod: 26713,
      qtd: 30,
      semMovi: 25,
      minEstoque: 30,
      maxEstoque: 80,
      estoqueAtual: 70,
      statusAtual: "danger",
    },
    {
      id: 2,
      cod: 45682,
      qtd: 50,
      semMovi: 12,
      minEstoque: 10,
      maxEstoque: 580,
      estoqueAtual: 370,
      statusAtual: "warning",
    },
    {
      id: 3,
      cod: 56785,
      qtd: 450,
      semMovi: 50,
      minEstoque: 30,
      maxEstoque: 560,
      estoqueAtual: 300,
      statusAtual: "ok",
    },
    {
      id: 4,
      cod: 6543,
      qtd: 34,
      semMovi: 2,
      minEstoque: 435,
      maxEstoque: 3333,
      estoqueAtual: 90,
      statusAtual: "danger",
    },
    {
      id: 5,
      cod: 6543,
      qtd: 3544,
      semMovi: 222,
      minEstoque: 454335,
      maxEstoque: 333223,
      estoqueAtual: 90,
      statusAtual: "warning",
    },
  ];

  const [show, setShow] = useState(false);
  const fecharModal = () => setShow(false);

  const [id, setId] = useState();
  const [minEstoque, setMinEstoque] = useState();
  const [maxEstoque, setMaxEstoque] = useState();
  const [estoqueAtual, setEstoqueAtual] = useState();

  function mostrarEstoque(id) {
    setShow(true);

    console.log(id);
    console.log(id.produtos.minEstoque);
  }

  return (
    <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
      <div className="paddingContainer">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="tituloInterno">
              <h2 className="titulosPrincipais">Acompanhamento de Estoque</h2>
            </div>
          </div>
        </div>
        {produtos.map((prod) => (
          <div className="row" key={prod.id}>
            <div
              id="boxAcompEstoque"
              className={`col-md-12 acompanhamentoEstoqueRow ${prod.statusAtual}`}
              onClick={() => mostrarEstoque(prod.id)}
            >
              <div>COD: {prod.cod}</div>
              <div>Quantidade: {prod.qtd} pçs</div>
              <div>Sem Movimentação: {prod.semMovi} dias</div>
              <div>
                <ImArrowDown />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal Delete */}
      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={() => setShow(false)}
        centered
      >
        <Modal.Header closeButton Style="position:relative">
          <h3 Style="position: absolute; left: 30%;">Atenção!</h3>
        </Modal.Header>
        <Modal.Body>
          <div Style="margin-bottom: 30px; text-align: center">
            <div className="row">
              <div className="col-12">
                <p>Estoque</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <div className="row">
                  <div className="col-6">
                    <ul>
                      <li>{id}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </IconContext.Provider>
  );
}
