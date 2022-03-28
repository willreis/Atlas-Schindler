import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

function EnviarComandosPlc() {

    return (
        <>
            <div className="paddingContainer">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="tituloInterno">
                            <h2 className="titulosPrincipais">Enviar Comandos ao PLC</h2>
                        </div>
                    </div>
                </div>

                <form>
                    <div className="row" Style='display: flex; align-items: center'>
                        <div className='col-md-3 col-sm-12 mt-4'>
                            <div>
                                <label for='origemProcesso'>Origem Processo</label>
                            </div>
                            <select id='origemProcesso' Style='border-radius: 6px; border-color: #999; height: 70px; width: 100%'>
                                <option>Escolha uma opção abaixo</option>
                                <option value='aaa'>aaa</option>
                                <option value='bbb'>bbb</option>
                                <option value='cc'>ccc</option>
                            </select>
                        </div>

                        <div className='col-md-3 col-sm-12 mt-4'>
                            <div>
                                <label for='destinoProcesso'>Destino Processo</label>
                            </div>
                            <select id='destinoProcesso' Style='border-radius: 6px; border-color: #999; width: 100%'>
                                <option>Escolha uma opção abaixo</option>
                                <option value='aaa'>aaa</option>
                                <option value='bbb'>bbb</option>
                                <option value='cc'>ccc</option>
                            </select>
                        </div>

                        <div className='col-md-3 col-sm-12 mt-4'>
                            <div>
                                <label for='tipo'>tipo</label>
                            </div>
                            <input id='tipo' type="date" className="form-control" Style='width: 100%'
                            // Value={ordemProducao.la}
                            // onChange={(e) => setLa(parseInt(e.target.value))}
                            // readOnly
                            />
                        </div>

                        <div className='col-md-3 col-sm-12 mt-4'>
                            <div>
                                <label for='origem'>origem</label>
                            </div>
                            <select id='origem' Style='border-radius: 6px; border-color: #999; width: 100%'>
                                <option>Escolha uma opção abaixo</option>
                                <option value='aaa'>aaa</option>
                                <option value='bbb'>bbb</option>
                                <option value='cc'>ccc</option>
                            </select>
                        </div>

                        <div className='col-md-3 col-sm-12 mt-4'>
                            <div>
                                <label for='atual'>Atual</label>
                            </div>
                            <select id='atual' Style='border-radius: 6px; border-color: #999;  width: 100%'>
                                <option>Escolha uma opção abaixo</option>
                                <option value='aaa'>aaa</option>
                                <option value='bbb'>bbb</option>
                                <option value='cc'>ccc</option>
                            </select>
                        </div>

                        <div className='col-md-3 col-sm-12 mt-4'>
                            <div>
                                <label for='destino'>Destino</label>
                            </div>
                            <select id='destino' Style='border-radius: 6px; border-color: #999; width: 100%'>
                                <option>Escolha uma opção abaixo</option>
                                <option value='aaa'>aaa</option>
                                <option value='bbb'>bbb</option>
                                <option value='cc'>ccc</option>
                            </select>
                        </div>

                        <div className='col-md-3 col-sm-12 mt-4'>
                            <div>
                                <label for='status'>Status</label>
                            </div>
                            <input id='status' type="date" className="form-control" Style='width: 100%'
                            // Value={ordemProducao.la}
                            // onChange={(e) => setLa(parseInt(e.target.value))}
                            // readOnly
                            />
                        </div>

                        <div className='col-md-3 col-sm-12 mt-4'>
                            <div>
                                <label for='gondola'>Gôndola</label>
                            </div>
                            <input id='gondola' type="date" className="form-control" Style='width: 100%'
                            // Value={ordemProducao.la}
                            // onChange={(e) => setLa(parseInt(e.target.value))}
                            // readOnly
                            />
                        </div>
                    </div>
                </form>

                {/*3 botões*/}
                <div className="row mt-5" Style='display: flex; justify-content: flex-end'>
                    <div className="col-md-2 col-sm-12 mt-40 alinharBottom">
                        <Button variant="secondary" className="btnAbrirProducao" Style='width: 200px; background-color: #999'>
                            Resetar Paletizador
                        </Button>
                    </div>
                    <div className="col-md-2 col-sm-12 mt-40 alinharBottom">
                        <Button variant="secondary" className="btnAbrirProducao" Style='width: 200px; background-color: #999'>
                            Limpar
                        </Button>
                    </div>
                    <div className="col-md-2 col-sm-12 mt-40 alinharBottom">
                        <Button variant="success" className="btnAbrirProducao" Style='width: 200px'>
                            Enviar
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnviarComandosPlc;