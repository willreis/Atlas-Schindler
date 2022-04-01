import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { VscEdit } from 'react-icons/vsc';
import { IconContext } from "react-icons/lib";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";
import Swal from 'sweetalert2/dist/sweetalert2.js';

function InformacoesLocalizacao() {

    const [getLocalizacao, setGetLocalizacao] = useState([]);               //Estado do get ([])
    const [localizacaoId, setLocalizacaoId] = useState();
    const [nome, setNome] = useState();
    const [gondolaId, setGondolaId] = useState();
    const [status, setStatus] = useState();
    const urlGet = 'Localizacao';

    //GET PRINCIPAL!
    useEffect(() => {
        Api.get(`${urlGet}`)
            .then((response) => {
                setGetLocalizacao(
                    response.data.map((get) => {
                        return {
                            localizacaoId: get.localizacaoId,
                            nome: get.nome,
                            gondolaId: get.gondolaId,
                            status: get.status,
                        };
                    }))
            }).catch((error) => {
                alert("Erro: ", error);
            })
    }, [])


    //Trazendo dados para o campo do modal já Populado da linha clicada.
    function funcaoAbrirModalPut(row) {
        setModalPut(true);

        Api.get(`${urlGet}/${row.localizacaoId}`, {
            localizacaoId,
            nome,
            gondolaId,
            status,
        }).then(() => {
            setLocalizacaoId(row.localizacaoId);
            setNome(row.nome);
            setGondolaId(row.gondolaId);
            setStatus(row.status);
        }).catch((error) => {
            alert("Erro: ", error);
        })
    }

    //PUT. Passo os valores do Endpoint no Get go Modal e no Put, porém, só oq eu vou editar eu passo vazio ().
    function handlePut() {
        Api.put(`${urlGet}/${localizacaoId}`, {
            localizacaoId,
            nome,
            gondolaId,
            status,
        }).then(() => {
            setLocalizacaoId(localizacaoId);
            setNome(nome);
            setGondolaId();
            setStatus(status);
            Swal.fire({
                icon: 'success',
                title: 'Sucesso',
                text: 'Processo editado com sucesso!',
            }).then(() => {
                window.location.reload();
            });
        }).catch((error) => {
            alert("Erro Put: ", error);
            console.log("Erro Put: ", error);
        })
    }

    const [modalPut, setModalPut] = useState(false);

    //paginationFactory (Essa parte tem que ficar acima para ñ dar branco na tela)
    const customTotal = (from, to, size) => (
        <span>
            Mostrando de {from} a {to} do total de {size} Resultados
        </span>
    );

    //paginationFactory
    const options = {
        paginationSize: 4,
        pageStartIndex: 0,
        //alwaysShowAllBtns: true, // Always show next and previous button
        withFirstAndLast: false, // Hide the going to First and Last page button
        hideSizePerPage: true, // Hide the sizePerPage dropdown always
        hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: "Primeiro",
        prePageText: "Voltar",
        nextPageText: "Próxima",
        lastPageText: "Última",
        nextPageTitle: "Primeira Página",
        prePageTitle: "Pre page",
        firstPageTitle: "Próxima Página",
        lastPageTitle: "Última Página",
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [
            {
                text: "10",
                value: 10,
            },
            {
                text: "All",
            },
        ],
    };

    const columns = [
        {
            dataField: "localizacaoId",
            text: "Localização",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Localização",
            }),
        },
        {
            dataField: "nome",
            text: "Nome",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Gôndola",
            }),
        },
        {
            dataField: "gondolaId",
            text: "Gôndola",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Status da Localização",
            }),
        },
        {
            dataField: "status",
            text: "Status",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Status",
            }),
        },
        {
            dataField: "opcoes",
            text: "Opções",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            formatter: (cellContent, row) => {
                return (
                    <>
                        <span
                            className="spanTabela"
                            id={row.impressoraId}
                            Style="cursor:pointer"
                            onClick={() => { funcaoAbrirModalPut(row) }}
                            data-toggle="tooltip" data-placement="left" title="Editar"
                        >
                            <VscEdit />
                        </span>
                    </>
                );
            },
        },
    ];

    return (
        <>
            <IconContext.Provider value={{ color: "#000", size: "1.6rem" }}>
                <div className="paddingContainer">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="tituloInterno">
                                <h2 className="titulosPrincipais">Informações da Localização</h2>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 tituloBoxProd">
                        <div className="row">
                            <div className="col-md-12 tabelaUsuario">
                                <BootstrapTable
                                    keyField="localizacaoId"
                                    hover
                                    striped
                                    columns={columns}
                                    data={getLocalizacao}
                                    // selectRow={selectRow}
                                    filter={filterFactory()}
                                    pagination={paginationFactory(options)}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Modal Put */}
                    <Modal
                        size="sm"
                        aria-labelledby="contained-modal-title-vcenter"
                        show={modalPut}
                        onHide={() => setModalPut(false)}
                        centered
                    >

                        <Modal.Body>
                            <div className="row mt-3">
                                <div className='col-md-12 infoLocalizacao'>
                                    <label for='gondola'>Gôndola</label>
                                    <input
                                        id='gondolaId'
                                        type='number'
                                        name="gondolaId"
                                        value={gondolaId}
                                        onChange={(e) => setGondolaId(parseInt(e.target.value))}
                                        Gôndola
                                    />
                                </div>
                                <div className='col-md-12 mt-3 mb-3'>
                                    <Button
                                        Style='width: 100%; height: 36px'
                                        variant='primary'
                                        onClick={(infoPut) => {
                                            handlePut(infoPut.localizacaoId)
                                        }}
                                    >Salvar</Button>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default InformacoesLocalizacao;