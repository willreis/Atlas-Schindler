import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { AiFillSave } from "react-icons/ai";
import Api from "../../services/Api";

export default function RecebimentoArmazem() {
    return (
        <>
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
                                    type="number"
                                    class="form-control"
                                //defaultValue={ordemProducao.la}
                                //onChange={(e) => setLa(parseInt(e.target.value))}
                                />
                            </div>
                            <div class="col-md-3 mt-3">
                                <label>Código do Material</label>
                                <input
                                    type="number"
                                    class="form-control"
                                //defaultValue={ordemProducao.ordem}
                                //onChange={(e) => setOrdem(parseInt(e.target.value))}

                                />
                            </div>
                            <div class="col-md-3 mt-3">
                                <label>Quantidade Etiqueta</label>
                                <input
                                    type="text"
                                    class="form-control"
                                //defaultValue={ordemProducao.status}
                                //onChange={(e) => setStatus(e.target.value)}

                                />
                            </div>
                            <div class="col-md-3 mt-3">
                                <label>Ordem de Compra</label>
                                <input
                                    class="form-control"
                                //defaultValue={ordemProducao.verificada}
                                //onChange={(e) => setStatus(e.target.value)}

                                />
                            </div>
                            <div class="col-md-3 mt-3">
                                <label>Posição</label>
                                <input
                                    type="text"
                                    class="form-control"
                                //defaultValue={ordemProducao.titulo}
                                //onChange={(e) => setTitulo(e.target.value)}
                                />
                            </div>
                            <div class="col-md-3 mt-3">
                                <label>Lote</label>
                                <input
                                    type="text"
                                    class="form-control"
                                //defaultValue={ordemProducao.familia}
                                //onChange={(e) => setFamilia(e.target.value)}
                                />
                            </div>
                            <div class="col-md-3 mt-3">
                                <label>Observação</label>
                                <input
                                    type="number"
                                    class="form-control"
                                //defaultValue={ordemProducao.semana}
                                //onChange={(e) => setSemana(parseInt(e.target.value))}
                                />
                            </div>
                            <div class="col-md-3 mt-3">
                                <label>Fornecedor</label>
                                <input
                                    type="text"
                                    class="form-control"
                                //defaultValue={ordemProducao.origem}
                                //onChange={(e) => setOrigem(e.target.value)}
                                />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="row botoesOrdemProducao" Style='margin: 0;'>
                    <div className="col-md-3">
                        <Button variant="success">Reset de Mesa</Button>
                    </div>
                    <div className="col-md-3">
                        <Button variant="success">Realizar Entrada de Material</Button>
                    </div>
                    <div className="col-md-3">
                        <Button variant="success" id="btnCancelarRelacao">
                            Qtd. Gôndolas Vazias
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button variant="success">Limpar</Button>
                    </div>
                </div>
            </div>
        </>
    );
}
