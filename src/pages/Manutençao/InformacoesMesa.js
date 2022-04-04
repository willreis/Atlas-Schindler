import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export default function InformacoesMesa() {
  const [getMesa, setGetMesa] = useState([]);
  const [idUser, setIdUser] = useState();
  const [user, setUser] = useState();
  const [mesaId, setMesaId] = useState();
  const [nome, setNome] = useState();
  const [carro, setCarro] = useState();
  const [falha, setFalha] = useState();
  const [etapa, setEtapa] = useState();
  const [gondolaId, setGondolaId] = useState();
  const [showModalPut, setShowModalPut] = useState(false);
  const url = "Mesa";

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
    ], // A numeric array is also available. the purpose of above example is custom the text
  };
  const columns = [
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "mesaId",
      text: "mesaId",
      hidden: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "nome",
      text: "Nome",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Nome",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "gondolaId",
      text: "Gondola Id",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar gondola",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "carro",
      text: "Carro",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Carro",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "falha",
      text: "Falha",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Falha",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "etapa",
      text: "Etapa",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar por Etapa",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "14px" },
      dataField: "editar",
      text: "Editar / Deletar",
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id={row.mesaId}
              Style="cursor:pointer"
              onClick={() => {
                funcaoAbrirModal(row);
              }}
              data-toggle="tooltip"
              data-placement="left"
              title="Editar"
            >
              <VscEdit />
            </span>
          </>
        );
      },
    },
  ];

  function funcaoAbrirModal(row) {
    setShowModalPut(true);
    console.log("ID :", row.mesaId);
    Api.get(`${url}/${row.mesaId}`, {
      mesaId,
      nome,
      gondolaId,
      carro,
      falha,
      etapa,
    })
      .then(() => {
        console.log("get feito", row.mesaId);
        setMesaId(row.mesaId);
        setNome(row.nome);
        setGondolaId(row.gondolaId);
        setCarro(row.carro);
        setFalha(row.falha);
        setEtapa(row.etapa);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro1:", error);
        alert("Ops! Ocorreu um erro1:", error);
      });
  }

  function handlePut() {
    Api.put(`${url}/${mesaId}`, {
      mesaId,
      nome,
      gondolaId,
      carro,
      falha,
      etapa,
    })
      .then(() => {
        setMesaId(mesaId);
        setNome(nome);
        setGondolaId();
        setCarro(carro);
        setFalha(falha);
        setEtapa(etapa);

        Swal.fire({
          icon: "success",
          title: "Sucesso",
          text: "Gondola alterada com sucesso",
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }

  useEffect(() => {
    Api.get(`${url}`).then((response) => {
      console.log("get: ", response.data);

      setGetMesa(
        response.data.map((mesa) => {
          return {
            mesaId: mesa.mesaId,
            nome: mesa.nome,
            gondolaId: mesa.gondolaId,
            carro: mesa.carro,
            falha: mesa.falha,
            etapa: mesa.etapa,
          };
        })
      );
      console.log("getMesa: ", getMesa);
    });
  }, []);

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("selecionado");
      console.log(row.mesaId);
      setIdUser(row.mesaId);
    },
  };
  return (
    <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
      <div className="paddingContainer">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="tituloInterno">
              <h2 className="titulosPrincipais">Informações da Mesa</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 tabelaUsuario">
            <BootstrapTable
              keyField="mesaId"
              data={getMesa}
              columns={columns}
              striped={true}
              selectRow={selectRow}
              filter={filterFactory()}
              pagination={paginationFactory(options)}
            />
          </div>
        </div>
      </div>

      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        show={showModalPut}
        onHide={() => setShowModalPut(false)}
        centered
      >
        <Modal.Body>
          <div className="row mt-3">
            <div className="col-md-12 infoLocalizacao">
              <label for="gondola">Gôndola</label>
              <input
                id="gondolaId"
                type="number"
                name="gondolaId"
                value={gondolaId}
                onChange={(e) => setGondolaId(parseInt(e.target.value))}
                Gôndola
              />
            </div>
            <div className="col-md-12 mt-3 mb-3">
              <Button
                Style="width: 100%; height: 36px"
                variant="primary"
                onClick={(mesa) => {
                  handlePut(mesa.mesaId);
                }}
              >
                Salvar
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </IconContext.Provider>
  );
}
