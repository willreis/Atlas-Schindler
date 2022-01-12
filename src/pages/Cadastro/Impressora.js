import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { IconContext } from 'react-icons/lib'
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from 'react-bootstrap';


function Impressora() {

    const products = [
        { nome: "Impressora 1", marca: "Zebra", endereco: "//servidor/impressora", area: 1, opcoes: <IoOptionsSharp /> },
        { nome: "Impressora 2", marca: "Zebra", endereco: "//servidor/impressora", area: 2, opcoes: <IoOptionsSharp /> },
        { nome: "Impressora 3", marca: "Zebra", endereco: "//servidor/impressora", area: 3, opcoes: <IoOptionsSharp /> },
        { nome: "Impressora 4", marca: "Zebra", endereco: "//servidor/impressora", area: 4, opcoes: <IoOptionsSharp /> },
        
    ];

    const columns = [
        {
            dataField: 'nome',                           //dataField é cada Coluna. São as propriedade do Array de objetos 'products' mas só no Código.
            text: 'Nome'                                 //text é o th(table head). Nome de cada Coluna. Vai aparecer na tela. 
        }, {
            dataField: 'marca',
            text: 'Marca'
        }, {
            dataField: 'endereco',
            text: 'Endereço'
        }, {
            dataField: 'area',
            text: 'Área'
        }, {
            dataField: 'opcoes',
            text: 'Opções/Editar'
        }
    ];
    return (
       
    
        
            <>
                <IconContext.Provider value={{ color: '#3cde3c', size: '1.6rem' }}>
                    <div Style='background-color: #f8f8f8; margin: 4rem; padding: 2rem; border-radius: 2rem;'>
                        <div Style='display: flex; justify-content: space-between;'>
                            <div>
                                <h2 Style='color:#555;'>Impressora</h2>
                            </div>
                            <div>
                            <Button variant="success">Cadastrar</Button>
                            </div>
                        </div>
                        <div Style='text-align: center' className="textTable">
                            <BootstrapTable keyField='nomeGrupo' hover striped data={products} columns={columns} />
                        </div>
                        <div>
                        <Button variant="secondary">Voltar</Button>
                        <Button variant="success">Salvar</Button>

                        </div>
                    </div>
                </IconContext.Provider>
            </>
        
    )
}

export default Impressora