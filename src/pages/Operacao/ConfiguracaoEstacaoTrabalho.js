import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { AiFillSave } from "react-icons/ai";
import Api from "../../services/Api";

export default function ConfiguracaoEstacaoTrabalho() {
    return (
        <>
            <div className="paddingContainer">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="tituloInterno">
                            <h2 className="titulosPrincipais">
                                Configuração de Estação de Trabalho
                            </h2>
                        </div>
                    </div>
                </div>

                <form>
                    <div class="row">
                        <div class="col-md-3 mt-3">
                            <label>Maquina</label>
                            <input
                                type="text"
                                class="form-control"
                            //defaultValue={ordemProducao.la}
                            //onChange={(e) => setLa(parseInt(e.target.value))}
                            />
                        </div>
                        <div class="col-md-3 mt-3">
                            <label>Impressora</label>
                            <input
                                type="text"
                                class="form-control"
                            //defaultValue={ordemProducao.ordem}
                            //onChange={(e) => setOrdem(parseInt(e.target.value))}
                            />
                        </div>
                        <div class="col-md-3 mt-3">
                            <label>Mesa de Entrada</label>
                            <input
                                type="text"
                                class="form-control"
                            //defaultValue={ordemProducao.status}
                            //onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                        <div class="col-md-3 mt-3">
                            <label>Mesa de Saída</label>
                            <input
                                class="form-control"
                            //defaultValue={ordemProducao.verificada}
                            //onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                    </div>
                    <div
                        className="row botoesOrdemProducao"
                    >
                        <div className="col-md-3 mt-5">
                            <Button variant="success" Style="width: 140px">Configurar</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
