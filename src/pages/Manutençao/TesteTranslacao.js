import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

export default function TesteTranslacao() {

    return (
        <>
            <div className="paddingContainer">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="tituloInterno">
                            <h2 className="titulosPrincipais">
                                Teste de Translação
                            </h2>
                        </div>
                    </div>
                </div>

                <form className="formPadrao configuracaoTrabalho containerTesteTranslacao">
                    <div className="col-md-12 col-sm-12">
                        <div className="tituloInternoTesteTranslacao">
                            <h2>
                                Coordenadas
                            </h2>
                        </div>
                    </div>
                    <div class="row" className='containerTesteTranslacaoCima'>
                        <div class="col-md-3">
                            <label for="coordenadax">Coordenada X</label>
                            <select id="coordenadax">
                                <option>Escolha uma opção abaixo</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="coordenaday">Coordenada Y</label>
                            <select id="coordenaday">
                                <option>Escolha uma opção abaixo</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <label for="lado">Lado</label>
                            <select id="lado">
                                <option>Escolha uma opção abaixo</option>
                            </select>
                        </div>
                    </div>
                    <div class='row' className='containerTesteTranslacaoBaixo'>
                        <div class='col-md-2'>
                            <Button variant='success' className='buttonTesteTranslacao'>Enviar</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}