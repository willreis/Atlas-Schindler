import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import Modal from "react-bootstrap/Modal";
import { GrSubtract } from "react-icons/gr";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { Button } from "react-bootstrap";

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
      piscar: "piscarSim",
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
      piscar: "piscarNao",
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
      piscar: "piscarNao",
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
      piscar: "piscarSim",
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
      piscar: "piscarNao",
    },
    {
      id: 6,
      cod: 6543,
      qtd: 3544,
      semMovi: 222,
      minEstoque: 454335,
      maxEstoque: 333223,
      estoqueAtual: 90,
      statusAtual: "ok",
      piscar: "piscarNao",
    },
  ];

  const [show, setShow] = useState(false);
  const fecharModal = () => setShow(false);

  const [id, setId] = useState();
  const [minEstoque, setMinEstoque] = useState();
  const [maxEstoque, setMaxEstoque] = useState();
  const [estoqueAtual, setEstoqueAtual] = useState();

  const [estoque, setEstoque] = useState([]);

  function mostrarEstoque(id) {
    setShow(true);

    var produtosFilter = produtos.filter(function (produto) {
      return produto.id === id;
    });

    setEstoque(produtosFilter[0]);
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
              className={`col-md-12 acompanhamentoEstoqueRow ${prod.statusAtual} ${prod.piscar}`}
              onClick={() => mostrarEstoque(prod.id)}
            >
              <div>COD: {prod.cod}</div>
              <div>Quantidade: {prod.qtd} pçs</div>
              <div>Sem Movimentação: {prod.semMovi} dias</div>
              <div>
                {prod.statusAtual === "danger" ? (
                  <AiOutlineArrowDown />
                ) : prod.statusAtual === "warning" ? (
                  <GrSubtract />
                ) : prod.statusAtual === "ok" ? (
                  <AiOutlineArrowUp />
                ) : (
                  <p>Não tem status</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal Estoque */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={() => setShow(false)}
        centered
      >
        <Modal.Header closeButton className="modalHeaderEstoque">
          {/* <h3>Estoque</h3> */}
        </Modal.Header>
        <Modal.Body className="modalBodyEstoque">
          <div className="row" Style="text-align: center">
            <h2 className="tituloEstoqueModal">Estoque</h2>
          </div>
          <div className="text-center mb-30">
            <div className="row mt-3">
              <div className="col-12 bgBranco br-20">
                <ul className="listaEstoqueModal">
                  <li key={estoque.id}>
                    Estoque Atual: <span>{estoque.estoqueAtual}</span>
                  </li>
                  <li key={estoque.id}>
                    Estoque Mínimo: <span>{estoque.minEstoque}</span>
                  </li>
                  <li key={estoque.id}>
                    Estoque Máximo: <span>{estoque.maxEstoque}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mt-3" Style="position: relative; right:0">
              <Button
                className="botaoCadastrar"
                variant="primary"
                Style="width: 200px; position: absolute; right:0"
              >
                Enviar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </IconContext.Provider>
  );
}
