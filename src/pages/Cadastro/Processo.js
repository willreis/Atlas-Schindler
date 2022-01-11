import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ButtonComponentBootstrap from '../../components/ButtonComponentBootstrap'
import { IconContext } from 'react-icons/lib'
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from 'react-bootstrap';

function Processo() {
    const products = [
        { nome: "Puncionadeira", ordenacao: 1, opcoes: <IoOptionsSharp /> },
        { nome: "Dobradeira", ordenacao: 2, opcoes: <IoOptionsSharp /> },
        
    ];

    const columns = [
        {
            dataField: 'nome',                           //dataField é cada Coluna. São as propriedade do Array de objetos 'products' mas só no Código.
            text: 'Nome'                                 //text é o th(table head). Nome de cada Coluna. Vai aparecer na tela. 
        }, {
            dataField: 'ordenacao',
            text: 'Ordenação'
        }, {
            dataField: 'opcoes',
            text: 'Opções/Editar'
        }
    ];

    return (
        <>
        <IconContext.Provider value={{ color: '#3cde3c', size: '1.6rem' }}>
            <div Style='background-color: #f8f8f8; margin: 4rem; padding: 2rem; border-radius: 2rem;'>
                <div Style='display: flex; justify-content: space-between; margin: 2rem 3rem 0 3rem'>
                    <div>
                        <h2 Style='color:#555;'>Processo</h2>
                    </div>
                    <div>
                        <ButtonComponentBootstrap/>
                    </div>
                </div>
                <div Style='margin: 1rem 3rem 3rem 3rem; text-align: center' >
                    <BootstrapTable keyField='matricula' hover striped data={products} columns={columns} />
                </div>
                <div Style='display:flex;width: 100%; justify-content: space-between; padding: 0 3rem;'>
                    <Button variant="primary">Voltar</Button>
                    <Button variant="success">Salvar</Button>
                </div>
            </div>
        </IconContext.Provider>
    </>
    )
}

export default Processo