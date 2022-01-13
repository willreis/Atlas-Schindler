import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { IconContext } from 'react-icons/lib'
import { Button } from 'react-bootstrap';


function InformacoesTransevelevador() {
    return (
        <>
            <IconContext.Provider value={{ color: 'green', size: '1.4rem' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className='tituloInterno' Style='margin: 1rem 4rem 1rem 4rem; padding: 1rem; margin-top: 3rem'>
                                <h2 Style='color:#555;'>Informações da Gôndola</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <h5>Garfo</h5>
                            <input type='text' Style='background-color: #fff; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 6px ' />
                        </div>
                        <div className="col-md-3">
                            <h5>Status</h5>
                            <input type='text' Style='background-color: #fff; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 6px' />
                        </div>
                        <div className="col-md-3">
                            <h5>Tipo de Movimento</h5>
                            <select Style='border: 1px solid #555; border-radius: 1rem; outline:none; padding: 6px; width: 100%'>
                                <option></option>
                                <option>45678</option>
                                <option>41252</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <h5>Modo de Operação</h5>
                            <select Style='width: 100%; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 6px'>
                                <option></option>
                                <option>45678</option>
                                <option>41252</option>
                            </select>
                        </div>
                    </div>

                </div>



                <div>
                    <Button variant="primary">Teste</Button>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default InformacoesTransevelevador
