import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export default function ConfiguracaoEstacaoTrabalho() {

    const urlMesa = 'Mesa';
    const urlImpressora = 'Impressora';
    const urlMaquina = 'Maquina';

    const [getMesa, setGetMesa] = useState([]);
    const [getImpressora, setGetImpressora] = useState([]);
    const [getMaquina, setGetMaquina] = useState([]);

    useEffect(() => {
        Api.get(`${urlMesa}`)
            .then((response) => {
                setGetMesa(
                    response.data.map((get) => {
                        console.log("Dados Mesa:", get);
                        return {
                            mesaId: get.mesaId,
                            nome: get.nome,
                            gondolaId: get.gondolaId,
                            carro: get.carro,
                            falha: get.falha,
                            etapa: get.etapa
                        }
                    }))
            })
            .catch((error) => { alert("Erro:", error) })

        Api.get(`${urlImpressora}`)
            .then((response) => {
                setGetImpressora(
                    response.data.map((get) => {
                        console.log("Dados Impressora:", get);
                        return {
                            impressoraId: get.impressoraId,
                            nome: get.nome
                        }
                    }))
            })
            .catch((error) => {
                alert("Erro Get Impressora:", error);
            })

        Api.get(`${urlMaquina}`)
            .then((response) => {
                setGetMaquina(
                    response.data.map((get) => {
                        console.log("Dados Máquina:", get);
                        return {
                            maquinaId: get.maquinaId,
                            nome: get.nome
                        }
                    }))
            })
            .catch((error) => {
                alert("Erro get Máquina:", error);
            })
    }, []);

    var mesaEntradaVar = document.getElementById('mesaEntrada');
    var mesaSaidaVar = document.getElementById('mesaSaida');
    var buttonConfigurarVar = document.getElementById('buttonConfigurar');

    function validadacaoMesa() {
        if (mesaEntradaVar.value === mesaSaidaVar.value) {
            alert("Mesa de Entrada deve ser diferente de Mesa de Saída.");
            buttonConfigurarVar.classList.add("disabled");
        } else {
            buttonConfigurarVar.classList.remove("disabled");
        }
    }

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
                            <label for='maquina'>Maquina</label>
                            <select id='maquina' type="text" class="form-control">
                                <option >Escolha uma opção abaixo</option>
                                {getMaquina.map((mapSelectOptions) => (
                                    <option value={mapSelectOptions.maquinaId}>
                                        {mapSelectOptions.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="col-md-3 mt-3">
                            <label for='impressora'>Impressora</label>
                            <select id='impressora' type="text" class="form-control">
                                <option>Escolha uma opção abaixo</option>
                                {getImpressora.map((mapSelectOptions) => (
                                    <option value={mapSelectOptions.impressoraId}>
                                        {mapSelectOptions.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="col-md-3 mt-3">
                            <label for='mesaEntrada'>Mesa de Entrada</label>
                            <select id='mesaEntrada' type="text" class="form-control" onChange={validadacaoMesa}>
                                <option>Escolha uma opção abaixo</option>
                                {getMesa.map((mapSelectOptions) => (
                                    <option value={mapSelectOptions.mesaId}>
                                        {mapSelectOptions.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div class="col-md-3 mt-3">
                            <label for='mesaSaida'>Mesa de Saída</label>
                            <select id='mesaSaida' type="text" class="form-control" onChange={validadacaoMesa}>
                                <option>Escolha uma opção abaixo</option>
                                {getMesa.map((mapSelectOptions) => (
                                    <option value={mapSelectOptions.mesaId}>
                                        {mapSelectOptions.nome}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div
                        className="row botoesOrdemProducao"
                    >
                        <div className="col-md-3 mt-5">
                            <Button id='buttonConfigurar' variant="success" Style="width: 140px">Configurar</Button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
