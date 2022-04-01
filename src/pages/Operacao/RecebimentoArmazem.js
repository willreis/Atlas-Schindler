import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { IconContext } from "react-icons/lib";
import Api from "../../services/Api";
import { AiFillDelete } from 'react-icons/ai';
import { IoSend } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';

export default function RecebimentoArmazem() {
  const [gondolaVazia, setGondolaVazia] = useState();
  const [show, setShow] = useState(false);
  //Endpoints Swagger
  const [get, setGet] = useState([]);
  const [recebimentoArmazemId, setRecebimentoArmazemId] = useState();
  const [notaFiscal, setNotaFiscal] = useState();
  const [codMaterial, setCodMaterial] = useState();
  const [quantidadeEtiqueta, setQuantidadeEtiqueta] = useState();
  const [ordemDeCompra, setOrdemDeCompra] = useState();
  const [posicao, setPosicao] = useState();
  const [lote, setLote] = useState();
  const [observacao, setObservacao] = useState();
  const [fornecedor, setFornecedor] = useState();

  function resetInputFields() {
    setNotaFiscal("")
    setCodMaterial("");
    setQuantidadeEtiqueta("");
    setOrdemDeCompra("");
    setPosicao("");
    setLote("");
    setObservacao("");
    setFornecedor("");
  }

  useEffect(() => {
    Api.get("RecebimentoArmazem/")
      .then((response) => {
        setGet(response.data);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });

    Api.get("/Gondola/GondolasVazias/")
      .then((response) => {
        setGondolaVazia(response.data);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  function cadastrarMaterial() {
    Api.post(`RecebimentoArmazem/`, {
      codMaterial,
      fornecedor,
      lote,
      notaFiscal,
      observacao,
      ordemDeCompra,
      posicao,
      quantidadeEtiqueta,
      recebimentoArmazemId,
    })
      .then((response) => {
        console.log("aaa: ", response.data);
        console.log("cadastro sucesso");
        Swal.fire({
          icon: "success",
          title: "Sucesso",
          text: "Processo cadastrado com sucesso",
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:" + error);
        alert("Ops! Ocorreu um erro" + error);
      });
  }

  function gondolasVazias() {
    Swal.fire({
      title: "Gondolas Vazias",
      html:
        "<p class='pSweetAlert'>Total: <span>" + gondolaVazia + "</span><p>",
      text: "Gondolas Vazias",
      icon: "info",
    });
  }

  function resetMesa() {
    Api.post("RecebimentoArmazem/ResetMesa")
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: "Sucesso",
          text: "Mesas Resetadas com sucesso",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF", size: "1.6rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Recebimento Armazém</h2>
              </div>
            </div>
          </div>
          <div className="container mb4rem">
            <form>
              <div class="row">
                <div class="col-md-3 mt-3">
                  <label>Nota Fiscal</label>
                  <input
                    type="text"
                    class="form-control"
                    value={notaFiscal}
                    onChange={(e) => setNotaFiscal(e.target.value)}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Código do Material</label>
                  <input
                    type="number"
                    class="form-control"
                    value={codMaterial}
                    onChange={(e) => setCodMaterial(parseInt(e.target.value))}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Quantidade Etiqueta</label>
                  <input
                    type="number"
                    class="form-control"
                    value={quantidadeEtiqueta}
                    onChange={(e) =>
                      setQuantidadeEtiqueta(parseInt(e.target.value))
                    }
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Ordem de Compra</label>
                  <input
                    type="number"
                    class="form-control"
                    value={ordemDeCompra}
                    onChange={(e) => setOrdemDeCompra(parseInt(e.target.value))}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Posição</label>
                  <input
                    type="number"
                    class="form-control"
                    value={posicao}
                    onChange={(e) => setPosicao(parseInt(e.target.value))}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Lote</label>
                  <input
                    type="number"
                    class="form-control"
                    value={lote}
                    onChange={(e) => setLote(parseInt(e.target.value))}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Observação</label>
                  <input
                    type="text"
                    class="form-control"
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                  />
                </div>
                <div class="col-md-3 mt-3">
                  <label>Fornecedor</label>
                  <input
                    type="text"
                    class="form-control"
                    value={fornecedor}
                    onChange={(e) => setFornecedor(e.target.value)}
                  />
                </div>
                <div className="col-md-3 mt-5">
                  <Button className='buttonRecebimentoArmazem' variant="success" onClick={(e) => resetMesa()}>
                    <BiReset /> Reset de Mesa
                  </Button>
                </div>
                <div className="col-md-3 mt-5">
                  <Button className='buttonRecebimentoArmazem' variant="success" id="btnCancelarRelacao" onClick={() => gondolasVazias()}>
                    <AiOutlineInfoCircle />  Qtd. Gôndolas Vazias
                  </Button>
                </div>
                <div className="col-md-3 mt-5">
                  <Button className='buttonRecebimentoArmazem' variant="danger" onClick={resetInputFields}>
                    <AiFillDelete /> Limpar
                  </Button>
                </div>
                <div className="col-md-3 mt-5">
                  <Button className='buttonRecebimentoArmazem' variant="primary" onClick={() => cadastrarMaterial()}>
                    <IoSend /> Realizar Entrada de Material
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}