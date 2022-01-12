import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { IconContext } from 'react-icons/lib'
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from 'react-bootstrap';

function InformacoesGondola() {

    const products = [
        { 0: 'X=1', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=2', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
    ];

    const columns = [
        {
            dataField: '0',
            text: 'X/Y'
        },
        {
            dataField: '1',                              //dataField é oq vai estar por trás de cada Coluna. Ele pega as propriedades do Array de objetos 'products' mas só no Código.
            text: '1'                                    //text é o th(table head). Nome de cada Coluna. Vai aparecer na tela. 
        },
        {
            dataField: '2',
            text: '2'
        },
    ]

    return (
        <>
            <IconContext.Provider value={{ color: '#555', size: '1.4rem' }}>
                <div Style='background-color: #f8f8f8; margin: 4rem; padding: 2rem; border-radius: 2rem;'>
                    <div className='tituloInterno'>
                        <h2 Style='color:#555;'>Informações da Gôndola</h2>
                    </div>

                    <div Style='display: flex;'>
                        <div>
                            <input type='text' Style='background-color: #ddd; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 5px;' />
                        </div>
                        <div>
                            <input type='text' Style='background-color: #ddd; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 5px;' />
                        </div>
                        <div>
                            <input type='text' Style='background-color: #ddd; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 5px;' />
                        </div>
                        <Button variant="success">Estados</Button>
                    </div>

                    <div Style='text-align: center' className="textTable">
                        <BootstrapTable keyField='nomeGrupo' hover striped data={products} columns={columns} />
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default InformacoesGondola