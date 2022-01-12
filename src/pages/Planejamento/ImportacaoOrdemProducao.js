import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ButtonComponentBootstrap from '../../components/ButtonComponentBootstrap'
import { IconContext } from 'react-icons/lib'
import { IoOptionsSharp } from "react-icons/io5";

function ImportacaoOrdemProducao() {
    const products = [
        {codMaterial: '10102', nomeMaterial: "Chapa 100 x 200", armazenamento: "Armazém", comprimento: '18m', largura: "17cm", espessura: "5cm", unidadeMedida: "Kg", opcoes:<IoOptionsSharp /> },
        {codMaterial: '10102', nomeMaterial: "Chapa 100 x 200", armazenamento: "Armazém", comprimento: '18m', largura: "17cm", espessura: "5cm", unidadeMedida: "Kg", opcoes:<IoOptionsSharp /> },
        {codMaterial: '10102', nomeMaterial: "Chapa 100 x 200", armazenamento: "Armazém", comprimento: '18m', largura: "17cm", espessura: "5cm", unidadeMedida: "Kg", opcoes:<IoOptionsSharp /> },
        {codMaterial: '10102', nomeMaterial: "Chapa 100 x 200", armazenamento: "Armazém", comprimento: '18m', largura: "17cm", espessura: "5cm", unidadeMedida: "Kg", opcoes:<IoOptionsSharp /> },
        {codMaterial: '10102', nomeMaterial: "Chapa 100 x 200", armazenamento: "Armazém", comprimento: '18m', largura: "17cm", espessura: "5cm", unidadeMedida: "Kg", opcoes:<IoOptionsSharp /> },
        {codMaterial: '10102', nomeMaterial: "Chapa 100 x 200", armazenamento: "Armazém", comprimento: '18m', largura: "17cm", espessura: "5cm", unidadeMedida: "Kg", opcoes:<IoOptionsSharp /> }
        
    ];

    const columns = [
        {
            dataField: 'codMaterial',
            text: 'Código Material'
        },
        {
            dataField: 'nomeMaterial',
            text: 'Nome Material'
        },
        {
            dataField: 'armazenamento',
            text: 'Armazenamento'
        },
        {
            dataField: 'comprimento',
            text : 'Comprimento'
        },
        {
            dataField: 'largura',
            text: 'Largura'
        },
        {
            dataField: 'espessura',
            text: 'Espessura'
        },
        {
            dataField: 'unidadeMedida',
            text: 'Unidade de Medida'
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
                            <h2 Style='color:#555;'>Importação de Ordem Produção</h2>
                        </div>
                        <div>
                            <ButtonComponentBootstrap/>
                        </div>
                    </div>
                    <div className="textTable" Style='margin: 1rem 3rem 3rem 3rem; text-align: center' >
                        <BootstrapTable keyField='matricula' hover striped data={products} columns={columns} />
                    </div>
                   
                </div>
            </IconContext.Provider>
        </>
    )
}

export default ImportacaoOrdemProducao