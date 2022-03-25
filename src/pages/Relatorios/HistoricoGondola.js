import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export const HistoricoGondola = () => {

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
            numeroDaGondola: 87142,
            origem: "P07",
            destino: 5703,
            material: 3913,
            dataInicio: "17/05/2022",
            dataFim: "14/06/2022",
        },
        {
            numeroDaGondola: 257142,
            origem: "P08",
            destino: 4403,
            material: 3812,
            dataInicio: "15/08/2022",
            dataFim: "15/09/2022",
        },
        {
            numeroDaGondola: 77141,
            origem: "P11",
            destino: 4703,
            material: 3711,
            dataInicio: "18/02/2023",
            dataFim: "13/03/2023",
        },
    ];

    const columns = [
        {
            dataField: "numeroDaGondola",
            text: "Número da Gôndola",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Número da Gôndola",
            }),
        },
        {
            dataField: "origem",
            text: "Origem",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Origem",
            }),
        },
        {
            dataField: "destino",
            text: "Destino",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Destino",
            }),
        },
        {
            dataField: "material",
            text: "Material",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Material",
            }),
        },
        {
            dataField: "dataInicio",
            text: "Data Início",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Data Início",
            }),
        },
        {
            dataField: "dataFim",
            text: "Data Fim",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Data Fim",
            }),
        },
    ];

    return (
        <>
            <div className="paddingContainer">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="tituloInterno">
                            <h2 className="titulosPrincipais">Histórico de Gôndola</h2>
                        </div>
                    </div>
                </div>
                <form>
                    <div class="row">
                        <div class="col-md-2 col-sm-12 mt-3">
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