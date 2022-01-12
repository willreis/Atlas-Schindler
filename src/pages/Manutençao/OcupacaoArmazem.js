import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { IconContext } from 'react-icons/lib'
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from 'react-bootstrap';

function OcupacaoArmazem() {

    const products = [
        { codigoMaterial: 123456, nomeMaterial: 123, qtdPeca: 1212, qtdKg: 4321, unidadeMedida: 9999, qtdGondolas: 8888, porcentagemOcupacao: 9898},
        { codigoMaterial: 123456, nomeMaterial: 123, qtdPeca: 1212, qtdKg: 4321, unidadeMedida: 9999, qtdGondolas: 8888, porcentagemOcupacao: 9898},
        { codigoMaterial: 123456, nomeMaterial: 123, qtdPeca: 1212, qtdKg: 4321, unidadeMedida: 9999, qtdGondolas: 8888, porcentagemOcupacao: 9898},
        
    ];

    const columns = [
        {
            dataField: 'codigoMaterial',
            text: 'Código do Material'
        },
        {
            dataField: 'nomeMaterial',
            text: 'Nome do Material'
        },
        {
            dataField: 'qtdPeca',
            text: 'Quantidade (Pç)'
        },
        {
            dataField: 'qtdKg',
            text: 'Quantidade (Kg)'
        },
        {
            dataField: 'unidadeMedida',
            text: 'Unidade de Medida'
        },
        {
            dataField: 'qtdGondolas',
            text: 'Quantidade de Gondolas'
        },
        {
            dataField: 'porcentagemOcupacao',
            text: 'Porcentagem de Ocupação'
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
                        <h5>Qtd. Gôndolas Vazias</h5>
                        <input type='text' Style='background-color: #fff; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 6px ' />
                    </div>
                    <div>
                        <h5>Gôndolas com Material</h5>
                        <input type='text' Style='background-color: #fff; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 6px' />
                    </div>
                    <div>
                        <h5>Gôndolas em Produção</h5>
                        <input type='text' Style='background-color: #fff; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 6px' />
                    </div>
                    <div>
                    <h5>Qtd. Total Gondolas</h5>
                        <input type='text' Style='background-color: #fff; border: 1px solid #555; border-radius: 1rem; outline:none; padding: 6px' />
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

export default OcupacaoArmazem