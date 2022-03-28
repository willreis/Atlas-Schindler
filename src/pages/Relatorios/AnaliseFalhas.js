import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "react-bootstrap";
import { Bar } from 'react-chartjs-2';

export const AnaliseFalhas = () => {

    const state = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }

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
            quantidadeDeOcorrencias: 122,
            descricaoDasOcorrencias: "Cabo Solto",
        },
        {
            quantidadeDeOcorrencias: 345,
            descricaoDasOcorrencias: "Fim de Curso Elevação",
        },
        {
            quantidadeDeOcorrencias: 750,
            descricaoDasOcorrencias: "Proteção de Freio",
        },
    ];

    const columns = [
        {
            dataField: "quantidadeDeOcorrencias",
            text: "Quantidade de Ocorrências",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Quantidade de Ocorrências",
            }),
        },
        {
            dataField: "descricaoDasOcorrencias",
            text: "Descrição das Ocorrências",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Descrição das Ocorrências",
            }),
        },
    ];

    return (
        <>
            <div className="paddingContainer">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="tituloInterno">
                            <h2 className="titulosPrincipais">Análise de Falhas</h2>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-2 col-sm-12 mt-3">
                            <label for='dataInicio'>Data Início</label>
                            <input id='dataInicio' type="date" className="form-control"
                            // Value={ordemProducao.la}
                            // onChange={(e) => setLa(parseInt(e.target.value))}
                            // readOnly
                            />
                        </div>
                        <div className="col-md-2 col-sm-12 mt-3">
                            <label for='dataFim'>Data Fim</label>
                            <input id='dataFim' type="date" className="form-control"
                            // Value={ordemProducao.la}
                            // onChange={(e) => setLa(parseInt(e.target.value))}
                            // readOnly
                            />
                        </div>
                        <div className="col-md-2 col-sm-12 mt-40 alinharBottom">
                            <Button variant="success" className="btnAbrirProducao" Style='width: 200px'>
                                Gerar
                            </Button>
                        </div>
                    </div>
                </form>

                {/*Gráfico*/}
                <div>
                    <Bar
                        data={state}
                        options={{
                            title: {
                                display: true,
                                text: 'Average Rainfall per month',
                                fontSize: 20
                            },
                            legend: {
                                display: true,
                                position: 'right'
                            }
                        }}
                    />
                </div>

                {/*Tabela*/}
                <div className="mt-4 tituloBoxProd">
                    <div className="row">
                        <div className="mt-5 col-md-6 tabelaUsuario mx-auto">
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
                    <div className="col-md-2 col-sm-12 mt-40 alinharBottom">
                        <Button variant="secondary" className="btnAbrirProducao" Style='width: 200px; background-color: #999'>
                            Exportar PDF
                        </Button>
                    </div>
                    <div className="col-md-2 col-sm-12 mt-40 alinharBottom">
                        <Button variant="secondary" className="btnAbrirProducao" Style='width: 200px; background-color: #999'>
                            Exportar Excel
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}