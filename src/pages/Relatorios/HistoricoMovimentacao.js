import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export const HistoricoMovimentacao = () => {

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
            gondola: 132,
            origem: "P3",
            destino: 690,
            material: 900,
            peso: 11,
            dataInicio: "15/03/2022",
            dataFim: "20/05/2022",
        },
        {
            gondola: 133,
            origem: "P4",
            destino: 689,
            material: 901,
            peso: 20,
            dataInicio: "16/04/2022",
            dataFim: "21/05/2022",
        },
        {
            gondola: 134,
            origem: "P5",
            destino: 688,
            material: 902,
            peso: 422,
            dataInicio: "17/05/2022",
            dataFim: "22/06/2022",
        },
        {
            gondola: 134,
            origem: "P5",
            destino: 688,
            material: 902,
            peso: 422,
            dataInicio: "17/05/2022",
            dataFim: "22/06/2022",
        },
        {
            gondola: 134,
            origem: "P5",
            destino: 688,
            material: 902,
            peso: 422,
            dataInicio: "17/05/2022",
            dataFim: "22/06/2022",
        },
        {
            gondola: 134,
            origem: "P5",
            destino: 688,
            material: 902,
            peso: 422,
            dataInicio: "17/05/2022",
            dataFim: "22/06/2022",
        },
        {
            gondola: 134,
            origem: "P5",
            destino: 688,
            material: 902,
            peso: 422,
            dataInicio: "17/05/2022",
            dataFim: "22/06/2022",
        },
        {
            gondola: 134,
            origem: "P5",
            destino: 688,
            material: 902,
            peso: 422,
            dataInicio: "17/05/2022",
            dataFim: "22/06/2022",
        },
        {
            gondola: 134,
            origem: "P5",
            destino: 688,
            material: 902,
            peso: 422,
            dataInicio: "17/05/2022",
            dataFim: "22/06/2022",
        },
        {
            gondola: 134,
            origem: "P5",
            destino: 688,
            material: 902,
            peso: 422,
            dataInicio: "17/05/2022",
            dataFim: "22/06/2022",
        },
        {
            gondola: 134,
            origem: "P5",
            destino: 688,
            material: 902,
            peso: 422,
            dataInicio: "17/05/2022",
            dataFim: "22/06/2022",
        },
    ];

    const columns = [
        {
            dataField: "gondola",
            text: "Gôndola",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Gôndola",
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
            dataField: "peso",
            text: "Peso",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Peso",
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
                            <h2 className="titulosPrincipais">Histórico de Movimentação</h2>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="row">
                        <div className="col-md-3 col-sm-12 mt-3">
                            <label for='data'>Data</label>
                            <input id='data' type="date" className="form-control"
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