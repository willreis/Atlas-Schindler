import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { IconContext } from "react-icons/lib";
import { VscEdit } from 'react-icons/vsc';
import { RiDeleteBinFill } from 'react-icons/ri';

function OcupacaoArmazem() {
    const products = [
        {
            item: 123456,
            titulo: 123,
            familia: 1212,
            quantidade: 4321,
            roteiro1: 8888,
            roteiro2: 9898,
            roteiro3: 18822,
            roteiro4: 12199,
        },
        {
            item: 123456,
            titulo: 123,
            familia: 1212,
            quantidade: 4321,
            roteiro1: 8888,
            roteiro2: 9898,
            roteiro3: 18822,
            roteiro4: 12199,
        },
        {
            item: 123456,
            titulo: 123,
            familia: 1212,
            quantidade: 4321,
            roteiro1: 8888,
            roteiro2: 9898,
            roteiro3: 18822,
            roteiro4: 12199,
        },
    ];

    const columns = [
        {
            dataField: "item",
            text: "Item",
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar por Item",
            }),
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
        },
        {
            dataField: "titulo",
            text: "Título",
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar por Título",
            }),
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
        },
        {
            dataField: "familia",
            text: "Família",
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar por Família",
            }),
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
        },
        {
            dataField: "quantidade",
            text: "Quantidade",
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar por Quantidade",
            }),
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
        },
        {
            dataField: "roteiro1",
            text: "Roteiro 1",
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar por Roteiro",
            }),
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
        },
        {
            dataField: "roteiro2",
            text: "Roteiro 2",
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar por Roteiro",
            }),
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
        },
        {
            dataField: "roteiro3",
            text: "Roteiro 3",
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar por Roteiro",
            }),
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
        },
        {
            dataField: "roteiro4",
            text: "Roteiro 4",
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar por Roteiro",
            }),
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
        },
        {
            dataField: "opcoes",
            text: "Editar / Deletar",
            sort: false,
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            formatter: (cellContent, row) => {
                return (
                    <>
                        <span
                            className="spanTabela"
                            // id={row.usuarioId}
                            Style="cursor:pointer"
                            // onClick={() => { funcaoAbrirModal(row); }}
                            data-toggle="tooltip" data-placement="left" title="Editar"
                        >
                            <VscEdit />
                        </span>
                        <button
                            className="spanTabela"
                            // id={row.usuarioId}
                            Style="cursor:pointer; border: none; background: none"
                            // onClick={() => handleDeleteModal(row.usuarioId)}
                            data-toggle="tooltip" data-placement="left" title="Deletar"
                        >
                            <RiDeleteBinFill />
                        </button>
                    </>
                );
            },
        },
    ];

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
        ], // A numeric array is also available. the purpose of above example is custom the text
    };

    return (
        <>
            <IconContext.Provider value={{ color: "#000", size: "1.4rem" }}>
                <div className="paddingContainer">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="tituloInterno">
                                <div className="tituloInterno">
                                    <h2 className="titulosPrincipais">Gerenciamento de Kanban</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-sm-12">
                            <div className="textTable mt-3">
                                <BootstrapTable
                                    keyField="nomeGrupo"
                                    hover
                                    striped
                                    columns={columns}
                                    data={products}
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

export default OcupacaoArmazem;
