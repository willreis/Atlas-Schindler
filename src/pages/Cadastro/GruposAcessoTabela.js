import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { IconContext } from 'react-icons/lib'
import { IoOptionsSharp } from "react-icons/io5";
import { Button } from 'react-bootstrap';



function GruposAcessoTabela() {
    const products = [
        { nomeGrupo: "Grupo Admin", descricaoGrupo: "Usuários administradores", qtdTelasPermitidas: 3, qtdUsuarios: 2, opcoes: <IoOptionsSharp /> },
        { nomeGrupo: 'Grupo Admin', descricaoGrupo: "Usuários administradores", qtdTelasPermitidas: 2, qtdUsuarios: 2, opcoes: <IoOptionsSharp /> },
        { nomeGrupo: "Grupo Admin", descricaoGrupo: "Usuários administradores", qtdTelasPermitidas: 5, qtdUsuarios: 2, opcoes: <IoOptionsSharp /> },
        { nomeGrupo: "Grupo Admin", descricaoGrupo: "Usuários administradores", qtdTelasPermitidas: 6, qtdUsuarios: 2, opcoes: <IoOptionsSharp /> },
        { nomeGrupo: "Grupo Admin", descricaoGrupo: "Usuários administradores", qtdTelasPermitidas: 2, qtdUsuarios: 2, opcoes: <IoOptionsSharp /> },
        { nomeGrupo: "Grupo Admin", descricaoGrupo: "Usuários administradores", qtdTelasPermitidas: 7, qtdUsuarios: 2, opcoes: <IoOptionsSharp /> },
        { nomeGrupo: "Grupo Admin", descricaoGrupo: "Usuários administradores", qtdTelasPermitidas: 9, qtdUsuarios: 2, opcoes: <IoOptionsSharp /> },
        { nomeGrupo: "Grupo Admin", descricaoGrupo: "Usuários administradores", qtdTelasPermitidas: 1, qtdUsuarios: 2, opcoes: <IoOptionsSharp /> },
    ];

    const columns = [
        {
            dataField: 'nomeGrupo',                           //dataField é cada Coluna. São as propriedade do Array de objetos 'products' mas só no Código.
            text: 'Nome do Grupo'                                 //text é o th(table head). Nome de cada Coluna. Vai aparecer na tela. 
        }, {
            dataField: 'descricaoGrupo',
            text: 'Descrição do Grupo'
        }, {
            dataField: 'qtdTelasPermitidas',
            text: 'Qnt Telas Permitidas'
        }, {
            dataField: 'qtdUsuarios',
            text: 'Quantidade de Usuários'
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
                        <div className='tituloInterno'>
                            <h2 Style='color:#555;'>Grupo de Acesso</h2>
                        </div>
                        <div>
                        <Button variant="success">Cadastrar</Button>
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

export default GruposAcessoTabela