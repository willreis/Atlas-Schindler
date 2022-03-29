import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "react-bootstrap";
import BarChart from "../../components/libraries/BarChart";
import { Data } from "../../components/libraries/Data";
// import Api from '../../services/Api/';

export const AnaliseFalhas = () => {

    const [userDataState, setUserDataState] = useState({
        labels: Data.map((data) => data.numbersBelow),
        datasets: [
            {
                label: "Atlas Schindler Chart",
                data: Data.map((data) => data.value),
                backgroundColor: [
                    'red',
                    'orange',
                    'yellow',
                    'green',
                    'blue',
                    'purple',
                ],
                borderColor: "#000",
                borderWidth: 2,
            },
        ],
    });

    //********** SINTAXE GET GRÁFICO **********
    // const urlAnaliseFalhas = 'EsperarEnpoint';
    // const [getAnaliseFalhas, setGetAnaliseFalhas] = useState([]);

    // useEffect(() => {
    //     Api.get(`${urlAnaliseFalhas}`)
    //         .then((response) => {
    //             setGetAnaliseFalhas(
    //                 response.data.map((paramget) => {
    //                     return {
    //                         elementoEndpoint1: paramget.elementoEndpoint1,
    //                         elementoEndpoint2: paramget.elementoEndpoint2,
    //                     }
    //                 }))
    //         })
    //         .catch((error) => {
    //             alert("Erro Get: ", error);
    //         })
    // }, []);

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

                {/*Gráficos*/}
                <div Style='display: flex; justify-content: center; margin: 3rem 0 2rem 0'>
                    <div style={{ width: 700 }}>
                        <BarChart chartData={userDataState} />
                    </div>
                </div>

                {/*Tabela*/}
                <div className="tituloBoxProd">
                    <div className="row">
                        <div className="col-md-6 tabelaUsuario mx-auto">
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