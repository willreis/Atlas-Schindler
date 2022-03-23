import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import Modal from "react-bootstrap/Modal";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Api from "../../services/Api";

export default function DetalhesProdPuncionadeira() {

    //Paginação - paginationFactory
    const customTotal = (from, to, size) => (
        <span>
            Mostrando de {from} a {to} do total de {size} Resultados
        </span>
    );

    //Paginação - paginationFactory
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
        ], // A numeric array is also available. the purpose of above example is custom the text
    };

    //Passando os dados na mão!
    const products = [
        {
            item: 111,
            codigoDoMaterial: 222,
            quantidade: 3333,
            programa: 4444,
            comprimento: 666,
            largura: 777,
            status: 88,
            op: 99,
            ovm: 10,
            sequencia: 11
        },
        {
            item: 111,
            codigoDoMaterial: 222,
            quantidade: 3333,
            programa: 4444,
            comprimento: 666,
            largura: 777,
            status: 88,
            op: 99,
            ovm: 10,
            sequencia: 11
        },
    ]

    const columns = [
        {
            dataField: "item",
            text: "Item",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
        },
        {
            dataField: "codigoDoMaterial",
            text: "Código do Material",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
        },
        {
            dataField: "quantidade",
            text: "Quantidade",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
        },
        {
            dataField: "programa",
            text: "Programa",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
        },
        {
            dataField: "comprimento",
            text: "Comprimento",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
        },
        {
            dataField: "largura",
            text: "Largura",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
        },
        {
            dataField: "status",
            text: "Status",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
        },
        {
            dataField: "op",
            text: "OP",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
        },
        {
            dataField: "ovm",
            text: "OVM",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
        },
        {
            dataField: "sequencia",
            text: "Sequência",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
        },
    ];

    const [getProducao, setGetProducao] = useState([]);
    const urlProducao = 'Producao';

    useEffect(() => {
        Api.get(`${urlProducao}`)
            .then((response) => {
                setGetProducao(
                    response.data.map((producao) => {
                        return {
                        }
                    }))
            })
            .catch((error) => {
                alert("Erro Get Producao:", error);
            })
    }, []);

    return (
        <>
            <div className="paddingContainer">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div className="tituloInterno">
                            <h2 className="titulosPrincipais">Detalhes da Produção - Puncionadeira (P3)</h2>
                        </div>
                    </div>
                </div>

                {/*Tabela*/}
                <div Style='margin-top: 2rem'>
                    <div className="row">
                        <div className="col-md-12 tabelaUsuario" Style='margin-top: 1rem;'>
                            <BootstrapTable
                                keyField="ordemProducaoElementoId"
                                hover
                                striped
                                data={products}
                                // selectRow={selectRow}
                                columns={columns}
                                filter={filterFactory()}
                                pagination={paginationFactory(options)}
                            />
                        </div>
                    </div>
                </div>

                <form>
                    <div class="row">
                        <div class='row'>
                            <div class="col-md-3 col-sm-12 mt-3">
                                <label>Ordem</label>
                                <input
                                    type="number"
                                    class="form-control"
                                // Value={ordemProducao.la}
                                // onChange={(e) => setLa(parseInt(e.target.value))}
                                // readOnly
                                />
                            </div>
                            <div class="col-md-3 col-sm-12 mt-3">
                                <label>Título</label>
                                <input
                                    type="number"
                                    class="form-control"
                                // Value={ordemProducao.ordem}
                                // onChange={(e) => setOrdem(parseInt(e.target.value))}
                                />
                            </div>
                            <div class="col-md-3 col-sm-12 mt-3">
                                <label>Família</label>
                                <input
                                    type="number"
                                    class="form-control"
                                // Value={ordemProducao.status}
                                // onChange={(e) => setStatus(e.target.value)}
                                />
                            </div>
                            <div class="col-md-3 col-sm-12 mt-3">
                                <label>Semana</label>
                                <input
                                    type="number"
                                    class="form-control"
                                // Value={ordemProducao.verificada}
                                // onChange={(e) => setStatus(e.target.value)}
                                />
                            </div>
                        </div>
                        <div class='row'>
                            <div class="col-md-3 col-sm-12 mt-3">
                                <label>Número VG</label>
                                <input
                                    type="number"
                                    class="form-control"
                                // Value={ordemProducao.titulo}
                                // onChange={(e) => setTitulo(e.target.value)}
                                />
                            </div>
                            <div class="col-md-3 col-sm-12 mt-3">
                                <label>Mensagem de Priorização</label>
                                <input
                                    type="text"
                                    class="form-control"
                                // Value={ordemProducao.familia}
                                // onChange={(e) => setFamilia(e.target.value)}
                                />
                            </div>
                            <div class="col-md-3 col-sm-12 mt-3">
                                <label>Aviso do Administrador</label>
                                <input
                                    type="text"
                                    class="form-control"
                                // Value={ordemProducao.semana}
                                // onChange={(e) => setSemana(parseInt(e.target.value))}
                                />
                            </div>
                            <div class="col-md-3 col-sm-12 mt-3">
                                <label>Semana Atual</label>
                                <input
                                    type="number"
                                    class="form-control"
                                // Value={ordemProducao.semana}
                                // onChange={(e) => setSemana(parseInt(e.target.value))}
                                />
                            </div>
                            <div Style='display:flex; justify-content: space-evenly'>
                                <div class="col-md-3 col-sm-12" Style="margin-top: 30px">
                                    <Button variant="success" Style="width:220px!important; height: 46px; font-size: 14px">
                                        Chamar Gôndola Entrada
                                    </Button>
                                </div>
                                <div class="col-md-3 col-sm-12" Style="margin-top: 30px">
                                    <Button variant="success" Style="width:220px!important; height: 46px; font-size: 14px">
                                        Chamar Gôndola Saída
                                    </Button>
                                </div>
                                <div class="col-md-3 col-sm-12" Style="margin-top: 30px">
                                    <Button variant="success" Style="width:220px!important; height: 46px; font-size: 14px">
                                        Devolver Gôndola Entrada
                                    </Button>
                                </div>
                                <div class="col-md-3 col-sm-12" Style="margin-top: 30px">
                                    <Button variant="success" Style="width:220px!important; height: 46px; font-size: 14px">
                                        Agrupar Lista
                                    </Button>
                                </div>
                            </div>
                            <div Style='display:flex; justify-content: space-between'>
                                <div class="col-md-2 col-sm-12" Style="margin-top: 30px">
                                    <Button variant="success" Style="width:220px!important; height: 46px; font-size: 14px">
                                        Iniciar Produção
                                    </Button>
                                </div>
                                <div class="col-md-2 col-sm-12" Style="margin-top: 30px">
                                    <Button variant="success" Style="width:220px!important; height: 46px; font-size: 14px">
                                        Imprimir
                                    </Button>
                                </div>
                                <div class="col-md-2 col-sm-12" Style="margin-top: 30px">
                                    <Button variant="success" Style="width:220px!important; height: 46px; font-size: 14px">
                                        Encerrar Ordem com Erro
                                    </Button>
                                </div>
                                <div class="col-md-2 col-sm-12" Style="margin-top: 30px">
                                    <Button variant="success" Style="width:220px!important; height: 46px; font-size: 14px">
                                        Cancelar
                                    </Button>
                                </div>
                                <div class="col-md-2 col-sm-12" Style="margin-top: 30px">
                                    <Button variant="success" Style="width:220px!important; height: 46px; font-size: 14px">
                                        Finalizar Produção
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}