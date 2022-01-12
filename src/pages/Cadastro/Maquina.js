import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { IconContext } from 'react-icons/lib'
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from 'react-bootstrap';


function Maquina() {
    const products = [
        { nome: 'D1', processo: "Dobradeira", status: "Ativo", ordenacao: 1, tempoMedioProducao: 12, opcoes: <IoOptionsSharp /> },
        { nome: 'L1', processo: "Laser", status: "Ativo", ordenacao: 3, tempoMedioProducao: 15, opcoes: <IoOptionsSharp /> },
        { nome: 'D1', processo: "Dobradeira", status: "Ativo", ordenacao: 1, tempoMedioProducao: 12, opcoes: <IoOptionsSharp /> }

    ];

    const columns = [
        {
            dataField: 'nome',
            text: 'Nome'
        },
        {
            dataField: 'processo',
            text: 'Processo'
        },
        {
            dataField: 'status',
            text: 'Status'
        },
        {
            dataField: 'ordenacao',
            text: 'Ordenação'
        },
        {
            dataField: 'tempoMedioProducao',
            text: 'Tempo Médio de Produção'
        },
        {
            dataField: 'opcoes',
            text: 'Opções/Editar'
        }
    ]

    return (
        <>
            <IconContext.Provider value={{ color: '#3cde3c', size: '1.6rem' }}>
                <div Style='background-color: #f8f8f8; margin: 4rem; padding: 2rem; border-radius: 2rem;'>
                    <div Style='display: flex; justify-content: space-between; margin: 2rem 3rem 0 3rem'>
                        <div>
                            <h2 Style='color:#555;'>Maquina</h2>
                        </div>
                        <div>
                            <Button variant="success">Salvar</Button>
                        </div>
                    </div>
                    <div className="textTable" Style='margin: 1rem 3rem 3rem 3rem; text-align: center' >
                        <BootstrapTable keyField='matricula' hover striped data={products} columns={columns} />
                    </div>
                    <div Style='display:flex;width: 100%; justify-content: space-between; padding: 0 3rem;'>
                        <Button variant="secondary">Voltar</Button>
                        <Button variant="success">Salvar</Button>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Maquina