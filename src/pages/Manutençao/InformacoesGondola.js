import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { IconContext } from 'react-icons/lib'
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from 'react-bootstrap';

function InformacoesGondola() {

    const products = [
        { numeroGondola: 123456, codigoMaterial: 123, ordem: 1212, localizacao: 4321, quantidadePç: 9999, quantidadeKg: 8888, vg: 9898, statusGondola: 9090, opcoes: <IoOptionsSharp /> },
        { numeroGondola: 123456, codigoMaterial: 123, ordem: 1212, localizacao: 4321, quantidadePç: 9999, quantidadeKg: 8888, vg: 9898, statusGondola: 9090, opcoes: <IoOptionsSharp /> },
        { numeroGondola: 123456, codigoMaterial: 123, ordem: 1212, localizacao: 4321, quantidadePç: 9999, quantidadeKg: 8888, vg: 9898, statusGondola: 9090, opcoes: <IoOptionsSharp /> },
        { numeroGondola: 123456, codigoMaterial: 123, ordem: 1212, localizacao: 4321, quantidadePç: 9999, quantidadeKg: 8888, vg: 9898, statusGondola: 9090, opcoes: <IoOptionsSharp /> },
        { numeroGondola: 123456, codigoMaterial: 123, ordem: 1212, localizacao: 4321, quantidadePç: 9999, quantidadeKg: 8888, vg: 9898, statusGondola: 9090, opcoes: <IoOptionsSharp /> },
    ];

    const columns = [
        {
            dataField: 'numeroGondola',
            text: 'Número da Gôndola'
        },
        {
            dataField: 'codigoMaterial',                                  //dataField é oq vai estar por trás de cada Coluna. Ele pega as propriedades do Array de objetos 'products' mas só no Código.
            text: 'Código do Material'                                    //text é o th(table head). Nome de cada Coluna. Vai aparecer na tela. 
        },
        {
            dataField: 'ordem',
            text: 'Ordem'
        },
        {
            dataField: 'localizacao',
            text: 'Localização'
        },
        {
            dataField: 'quantidadePç',
            text: 'Quantidade (Pç)'
        },
        {
            dataField: 'quantidadeKg',
            text: 'Quantidade (Kg)'
        },
        {
            dataField: 'vg',
            text: 'VG'
        },
        {
            dataField: 'statusGondola',
            text: 'Status da Gôndola'
        },
        {
            dataField: 'opcoes',
            text: 'Opções (Editar)'
        },
    ]

    return (
        <>
            <IconContext.Provider value={{ color: 'green', size: '1.4rem' }}>
                <div className='tituloInterno' Style='margin: 1rem 4rem 1rem 4rem; padding: 1rem; margin-top: 3rem'>
                    <h2 Style='color:#555;'>Informações da Gôndola</h2>
                </div>

                <div Style='background-color: #f8f8f8; margin: 1rem 4rem 1rem 4rem; padding: 2rem 2rem 1rem 2rem; border-radius: 2rem;'>
                    <div Style='display: flex; justify-content: space-between; align-items: flex-end;  margin-bottom: 2rem;'>
                        <div>
                            <h5>Número da Gôndola</h5>
                            <input type='text' Style='background-color: #fff; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 6px ' />
                        </div>
                        <div>
                            <h5>Código do Material</h5>
                            <input type='text' Style='background-color: #fff; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 6px' />
                        </div>
                        <div>
                            <h5>Ordem</h5>
                            <input type='text' Style='background-color: #fff; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 6px' />
                        </div>
                        <div>
                            <Button variant="success">Pesquisar</Button>
                        </div>
                    </div>
                </div>

                <div Style='background-color: #f8f8f8; margin: 1rem 4rem 1rem 4rem; padding: 2rem; border-radius: 2rem;'>
                    <div Style='text-align: center' className="textTable">
                        <BootstrapTable keyField='nomeGrupo' hover striped data={products} columns={columns} />
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default InformacoesGondola