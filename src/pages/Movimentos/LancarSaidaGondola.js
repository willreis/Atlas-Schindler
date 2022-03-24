import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { BiCommentDetail } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import Api from "../../services/Api";

export default function LancarSaidaGondola() {

    //Paginação
    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total">
            Mostrando de {from} a {to} do total de {size} Resultados
        </span>
    );

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
            dataField: "numeroDaGondola",
            text: "Número da Gôndola",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Gôndola",
            }),
        },
        {
            dataField: "localizacao",
            text: "Localização",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Localização",
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
            dataField: "ordemDeProducao",
            text: "Ordem de Produção",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Ordem de Produção",
            }),
        },
        {
            dataField: "opcoes",
            isDummyField: true,
            text: "Opções",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            formatter: (cellContent, row) => {
                return (
                    <>
                        <span
                            className="spanTabela"
                            id={row.la}
                            Style="cursor:pointer"
                            // onClick={() => detalhesOrdemProducao(row.la)}
                            data-toggle="tooltip" data-placement="left" title="Movimentar"
                        >
                            <BiCommentDetail />
                        </span>
                    </>
                );
            },
        },
    ];

    //Passando os dados na mão!
    const products = [
        {
            numeroDaGondola: 1,
            localizacao: "P3",
            material: "15/03/2022",
            peso: "20/03/2022",
            ordemDeProducao: 666,
        },
        {
            numeroDaGondola: 2,
            localizacao: "P4",
            material: "05/04/2022",
            peso: "25/05/2022",
            ordemDeProducao: 777,
        },
    ]

    return (
        <>
            <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
                <div className="paddingContainer">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="tituloInterno">
                                <h2 className="titulosPrincipais">Lançar Saída Gôndola</h2>
                            </div>
                        </div>
                    </div>

                    <div className="container mb4rem">
                        <form>
                            <div class="row" Style='display: flex; align-items: center'>
                                <div className='col-md-1'>
                                    <label>Número da Gôndola</label>
                                </div>
                                <div className='col-md-1'>
                                    <input type="number" class="form-control" />
                                </div>
                                <div className='col-md-1'>
                                    <label>Código do Material</label>
                                </div>
                                <div className='col-md-1'>
                                    <input type="number" class="form-control" />
                                </div>
                                <div className='col-md-1'>
                                    <Button variant="success">Gerar</Button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 tabelaUsuario">
                                <BootstrapTable
                                    keyField="la"
                                    hover
                                    striped
                                    data={products}
                                    columns={columns}
                                    // selectRow={selectRow}
                                    filter={filterFactory()}
                                    pagination={paginationFactory(options)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}