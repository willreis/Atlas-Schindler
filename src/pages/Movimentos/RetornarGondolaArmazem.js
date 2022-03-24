import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export default function LancarSaidaGondola() {

    return (
        <>
            <div className="paddingContainer">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="tituloInterno">
                            <h2 className="titulosPrincipais">Retornar Gôndola ao Armazém</h2>
                        </div>
                    </div>
                </div>

                <div className="container twoButtons" >
                    <div class="row">
                        <div className='col-md-6' Style='margin-top: -24px'>
                            <p>Mesa (Origem)</p>
                            <div>
                                <input type="text" class="form-control" Style='width: 160px; height: 50px; ' />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <Button variant="success" Style='width: 160px; height: 50px'>Enviar</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}