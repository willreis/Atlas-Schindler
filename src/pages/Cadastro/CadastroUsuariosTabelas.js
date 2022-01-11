import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import ButtonComponentBootstrap from '../../components/ButtonComponentBootstrap'
import { IconContext } from 'react-icons/lib'
import { IoOptionsSharp } from "react-icons/io5";





function CadastroUsuariosTabelas() {
         
    const products = [
        { matricula: 1212, nome: 'José', cargo: 1100, gruposAcesso: 1100, opcoes: <IoOptionsSharp /> },
        { matricula: 3434, nome: "José", cargo: 2200, gruposAcesso: 2200, opcoes: <IoOptionsSharp /> },
        { matricula: 5656, nome: "João", cargo: 3300, gruposAcesso: 3300, opcoes: <IoOptionsSharp /> },
        { matricula: 7878, nome: "João", cargo: 4400, gruposAcesso: 4400, opcoes: <IoOptionsSharp /> },
    ];

    const columns = [
        {
            dataField: 'matricula',                           //dataField é cada Coluna. São as propriedade do Array de objetos 'products' mas só no Código.
            text: 'Matrícula'                                 //text é o th(table head). Nome de cada Coluna. Vai aparecer na tela. 
        }, {
            dataField: 'nome',
            text: 'Nome'
        }, {
            dataField: 'cargo',
            text: 'Cargo'
        }, {
            dataField: 'gruposAcesso',
            text: 'Grupo de Acesso'
        }, {
            dataField: 'opcoes',
            text: 'Opções'
        }
    ];
    
    

    return (
        <>
            <IconContext.Provider value={{ color: '#3cde3c', size: '1.6rem' }}>
                <div Style='background-color: #f8f8f8; margin: 4rem; padding: 2rem; border-radius: 2rem;'>
                    <div Style='display: flex; justify-content: space-between; margin: 2rem 3rem 0 3rem'>
                        <div>
                            <h2 Style='color:#555;'>Cadastro de usuários</h2>
                        </div>
                        <div>
                            <ButtonComponentBootstrap/>
                        </div>
                    </div>
                    <div Style='margin: 1rem 3rem 3rem 3rem; text-align: center' >
                        <BootstrapTable keyField='matricula' hover striped data={products} columns={columns} />
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default CadastroUsuariosTabelas