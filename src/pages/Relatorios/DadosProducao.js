import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export const DadosProducao = () => {

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
            ordem: 132,
            nomedaMaquina: "P3",
            dataInicioDoProcesso: "15/03/2022",
            dataFimDoProcesso: "20/03/2022",
        },
        {
            ordem: 564,
            nomedaMaquina: "P4",
            dataInicioDoProcesso: "17/03/2022",
            dataFimDoProcesso: "22/04/2022",
        },
        {
            ordem: 897,
            nomedaMaquina: "P5",
            dataInicioDoProcesso: "07/08/2022",
            dataFimDoProcesso: "04/09/2022",
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
            dataField: "nomedaMaquina",
            text: "Nome da Máquina",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Máquina",
            }),
        },
        {
            dataField: "dataInicioDoProcesso",
            text: "Data Início do Processo",
            headerAlign: "center",
            headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
            sort: true,
            filter: textFilter({
                placeholder: "Filtrar Data Início",
            }),
        },
        {
            dataField: "dataFimDoProcesso",
            text: "Data Fim do Processo",
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
                            <h2 className="titulosPrincipais">Dados de Produção</h2>
                        </div>
                    </div>
                </div>
                <form>
                    <div class="row">
                        <div class="col-md-3 col-sm-12 mt-3">
                            <label for='dataHoraInicio'>Data/Hora Início</label>
                            <input id='dataHoraInicio' type="date" class="form-control"
                            // Value={ordemProducao.la}
                            // onChange={(e) => setLa(parseInt(e.target.value))}
                            // readOnly
                            />
                        </div>
                        <div class="col-md-3 col-sm-12 mt-3">
                            <label for='dataHoraFim'>Data/Hora Fim</label>
                            <input id='dataHoraFim' type="date" class="form-control"
                            // Value={ordemProducao.ordem}
                            // onChange={(e) => setOrdem(parseInt(e.target.value))}
                            />
                        </div>
                        <div class="col-md-3 col-sm-12 mt-3">
                            <label for='ordem'>Ordem</label>
                            <input id='ordem' type="text" class="form-control"
                            // Value={ordemProducao.status}
                            // onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 col-sm-12 mt-3">
                            <label for='item'>Item</label>
                            <input id='item' type="text" class="form-control"
                            // Value={ordemProducao.verificada}
                            // onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                        <div class="col-md-3 col-sm-12 mt-3">
                            <label for='ovm'>OVM</label>
                            <input id='ovm' type="text" class="form-control"
                            // Value={ordemProducao.titulo}
                            // onChange={(e) => setTitulo(e.target.value)}
                            />
                        </div>
                        <div class="col-md-3 col-sm-12 mt-3">
                            <label for='op'>OP</label>
                            <input id='op' type="text" class="form-control"
                            // Value={ordemProducao.familia}
                            // onChange={(e) => setFamilia(e.target.value)}
                            />
                        </div>
                        <div class="col-md-3 col-sm-12 mt-40 alinharBottom" Style='display: flex; justify-content: flex-end'>
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