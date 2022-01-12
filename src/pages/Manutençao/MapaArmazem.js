import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { IconContext } from 'react-icons/lib'
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from 'react-bootstrap';

function MapaArmazem() {

    const products = [
        { 0: 'X=1', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=2', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=3', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=4', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=5', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=6', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=7', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=8', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=9', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=10', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=11', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
        { 0: 'X=12', 1: <IoOptionsSharp />, 2: <IoOptionsSharp />, 3: <IoOptionsSharp />, 4: <IoOptionsSharp />, 5: <IoOptionsSharp />, 6: <IoOptionsSharp />, 7: <IoOptionsSharp />, 8: <IoOptionsSharp />, 9: <IoOptionsSharp />, 10: <IoOptionsSharp />, 11: <IoOptionsSharp />, 12: <IoOptionsSharp />, 13: <IoOptionsSharp />, 14: <IoOptionsSharp />, 15: <IoOptionsSharp />, 16: <IoOptionsSharp />, 17: <IoOptionsSharp />, 18: <IoOptionsSharp />, 19: <IoOptionsSharp />, 20: <IoOptionsSharp />, 21: <IoOptionsSharp />, 22: <IoOptionsSharp />, 23: <IoOptionsSharp />, 24: <IoOptionsSharp />, 25: <IoOptionsSharp />, 26: <IoOptionsSharp />, },
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
        {
            dataField: '3',
            text: '3'
        },
        {
            dataField: '4',
            text: '4'
        },
        {
            dataField: '5',
            text: '5'
        },
        {
            dataField: '6',
            text: '6'
        },
        {
            dataField: '7',
            text: '7'
        },
        {
            dataField: '8',
            text: '8'
        },
        {
            dataField: '9',
            text: '9'
        },
        {
            dataField: '10',
            text: '10'
        },
        {
            dataField: '11',
            text: '11'
        },
        {
            dataField: '12',
            text: '12'
        },
        {
            dataField: '13',
            text: '13'
        },
        {
            dataField: '14',
            text: '14'
        },
        {
            dataField: '15',
            text: '15'
        },
        {
            dataField: '16',
            text: '16'
        },
        {
            dataField: '17',
            text: '17'
        },
        {
            dataField: '18',
            text: '18'
        },
        {
            dataField: '19',
            text: '19'
        },
        {
            dataField: '20',
            text: '20'
        },
        {
            dataField: '21',
            text: '21'
        },
        {
            dataField: '22',
            text: '22'
        },
        {
            dataField: '23',
            text: '23'
        },
        {
            dataField: '24',
            text: '24'
        },
        {
            dataField: '25',
            text: '25'
        },
        {
            dataField: '26',
            text: '26'
        },
    ]

    return (
        <>
            <IconContext.Provider value={{ color: '#555', size: '1.4rem' }}>
                <div Style='background-color: #f8f8f8; margin: 4rem; padding: 2rem; border-radius: 2rem;'>
                    <div className='tituloInterno'>
                        <h2 Style='color:#555;'>Mapa do Armazém</h2>
                    </div>

                    <div className='tituloInterno' Style='display: flex; align-items: center'>
                        <h4>Produto</h4>
                        <select Style='background-color: rgb(248, 247, 155); border: 1px solid #000; border-radius: 10px; outline:none; width: 300px; padding: 5px; margin: 0 2rem 0 0.4rem'>
                            <option></option>
                            <option>aaa</option>
                            <option>bbb</option>
                            <option>ccc</option>
                        </select>
                        <Button variant="secondary">   Todas</Button>
                    </div>

                    <div Style='display: flex; justify-content: space-between; margin-bottom: 1rem'>
                        <div>
                            <Button variant="success">Lado Esquerdo</Button>
                            <Button variant="success" Style="margin-left: 1rem" >Lado Direito</Button>
                        </div>
                        <div>
                            <Button variant="success" Style="margin-right: 1rem">Legenda</Button>
                            <Button variant="success">Estados</Button>
                        </div>
                    </div>

                    <div Style='text-align: center' className="textTable">
                        <BootstrapTable keyField='nomeGrupo' hover striped data={products} columns={columns} />
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default MapaArmazem