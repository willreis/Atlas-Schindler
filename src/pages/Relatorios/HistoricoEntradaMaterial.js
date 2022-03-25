import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export const HistoricoEntradaMaterial = () => {

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

    // Passando os dados na mão!
    const products = [
        {
            ordem: 77141,
            titulo: "P110",
            familia: 4703,
            material: 3713,
            dataDeEncerramento: "18/02/2023",
        },
        {
            ordem: 45141,
            titulo: "P133",
            familia: 3703,
            material: 4311,
            dataDeEncerramento: "19/02/2023",
        },
        {
            ordem: 2232141,
            titulo: "P123",
            familia: 2203,
            material: 1211,
            dataDeEncerramento: "20/02/2023",
        },
    ];

    const columns = [
        {
            dataField: "ordem",
            text: "Ordem",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Ordem",
            }),
        },
        {
            dataField: "titulo",
            text: "Título",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Título",
            }),
        },
        {
            dataField: "familia",
            text: "Família",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Família",
            }),
        },
        {
            dataField: "dataDeEncerramento",
            text: "Data de Encerramento",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Data de Encerramento",
            }),
        },
    ];

    return (
        <>
            <div className="paddingContainer">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="tituloInterno">
                            <h2 className="titulosPrincipais">Histórico de Entrada Material</h2>
                        </div>
                    </div>
                </div>
                <form>
                    <div class="row">
                        <div class="col-md-3 col-sm-12 mt-3">
                            <label for='material'>Material</label>
                            <input id='material' type="text" class="form-control"
                            // Value={ordemProducao.la}
                            // onChange={(e) => setLa(parseInt(e.target.value))}
                            // readOnly
                            />
                        </div>
                        <div class="col-md-3 col-sm-12 mt-3">
                            <label for='numeroGondola'>Número da Gôndola</label>
                            <input id='numeroGondola' type="number" class="form-control"
                            // Value={ordemProducao.la}
                            // onChange={(e) => setLa(parseInt(e.target.value))}
                            // readOnly
                            />
                        </div>
                        <div class="col-md-2 col-sm-12 mt-3">
                            <label for='dataInicio'>Data Início</label>
                            <input id='dataInicio' type="date" class="form-control"
                            // Value={ordemProducao.la}
                            // onChange={(e) => setLa(parseInt(e.target.value))}
                            // readOnly
                            />
                        </div>
                        <div class="col-md-2 col-sm-12 mt-3">
                            <label for='dataFim'>Data Fim</label>
                            <input id='dataFim' type="date" class="form-control"
                            // Value={ordemProducao.la}
                            // onChange={(e) => setLa(parseInt(e.target.value))}
                            // readOnly
                            />
                        </div>
                        <div class="col-md-2 col-sm-12 mt-40 alinharBottom">
                            <Button variant="success" className="btnAbrirProducao" Style='width: 200px'>
                                Gerar
                            </Button>
                        </div>
                    </div>
                </form>
                {/*Tabela*/}
                <div className="mt-4 tituloBoxProd">
                    <div className="row">
                        <div className="col-md-12 tabelaUsuario">
                            <BootstrapTable
                                keyField="inserirUmKeyfieldDepois"
                                hover
                                striped
                                columns={columns}
                                data={products}
                                // selectRow={selectRow}
                                filter={filterFactory()}
                                pagination={paginationFactory(options)}
                            />
                        </div>
                    </div>
                </div>
                {/*2 botões*/}
                <div className="row" Style='display: flex; justify-content: flex-end'>
                    <div class="col-md-2 col-sm-12 mt-40 alinharBottom">
                        <Button variant="secondary" className="btnAbrirProducao" Style='width: 200px; background-color: #999'>
                            Exportar PDF
                        </Button>
                    </div>
                    <div class="col-md-2 col-sm-12 mt-40 alinharBottom">
                        <Button variant="secondary" className="btnAbrirProducao" Style='width: 200px; background-color: #999'>
                            Exportar Excel
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}