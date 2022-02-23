import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { HiPlus } from "react-icons/hi";
import BootstrapTable from "react-bootstrap-table-next";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";

export default function Material() {

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

  const [modalDelete, setModalDelete] = useState(false);
  const fecharModal = () => setModalDelete(false);
  const [idUser, setIdUser] = useState(false);
  var url = "Material";

  const [materialGet, setMaterialGet] = useState([]);

  const columns = [
    {
      dataField: "materialId",
      hidden: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "12px" },
      dataField: "codigo",
      text: "Cod. Material",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Código",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "12px" },
      dataField: "nome",
      text: "Nome",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Nome",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "12px" },
      dataField: "localizacao",
      text: "Localização",
      sort: true,
      filter: textFilter({
        placeholder: "Filtrar Localização",
      }),
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "12px" },
      dataField: "comprimento",
      text: "Comprimento",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "12px" },
      dataField: "largura",
      text: "Largura",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "12px" },
      dataField: "espessura",
      text: "Espessura",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "12px" },
      dataField: "unidade",
      text: "Uni. Medida",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "12px" },
      dataField: "minimoDeEstoque",
      text: "Mín. de Estoque",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "12px" },
      dataField: "maximoDeEstoque",
      text: "Máx. de Estoque",
      sort: true,
    },
    {
      headerAlign: "center",
      headerStyle: { backgroundColor: "rgb(151 151 151)", fontSize: "12px" },
      dataField: "editar",
      text: "Editar / Excluir",
      formatter: (cellContent, row) => {
        return (
          <>
            <span
              className="spanTabela"
              id={row.materialId}
              Style="cursor:pointer"
              onClick={() => {
                funcaoAbrirModal(row);
              }}
            >
              <VscEdit />
            </span>

            <span
              className="spanTabela"
              id={row.materialId}
              Style="cursor:pointer"
              onClick={() => handleDeleteModal(row.materialId)}
            >
              <RiDeleteBinFill />
            </span>
          </>
        );
      },
    },
  ];

  //GET
  const [user, setUser] = useState([]);
  const [materialId, setMaterialId] = useState();

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
        setMaterialGet(
          response.data.map((material) => {
            return {
              materialId: material.materialId,
              nome: material.nome,
              marca: material.marca,
              endereco: material.endereco,
              area: material.area,
              editar: material.materialId,
              ...material,
            };
          })
        );
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  //Modal const
  const [show, setShow] = useState(false);
  const [showModalPut, setShowModalPut] = useState(false);

  //POST
  const [codigo, setCodigo] = useState();
  const [nome, setNome] = useState();
  const [localizacao, setLocalizacao] = useState();
  const [comprimento, setComprimento] = useState();
  const [largura, setLargura] = useState();
  const [espessura, setEspessura] = useState();
  const [unidade, setUnidade] = useState();
  const [minimoDeEstoque, setMinimoDeEstoque] = useState();
  const [maximoDeEstoque, setMaximoDeEstoque] = useState();

  function handleRegister(e) {
    // e.preventDefault();
    handleRegister(user);
  }

  function createPost() {
    Api.post(`/${url}`, {
      codigo,
      nome,
      localizacao,
      comprimento,
      largura,
      espessura,
      unidade,
      minimoDeEstoque,
      maximoDeEstoque,
    })
      .then((response) => {
        console.log(response.data);
        alert("Material Cadastrado Com Sucesso");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error);
        alert("Ops! Ocorreu um erro!!!:", error);
      });
  }

  ///////PUT
  function handlePut() {
    Api.put(`${url}/${materialId}`, {
      materialId,
      codigo,
      nome,
      localizacao,
      comprimento,
      largura,
      espessura,
      unidade,
      minimoDeEstoque,
      maximoDeEstoque,
    })
      .then((response) => {
        setMaterialId(materialId);
        setCodigo();
        setNome();
        setLocalizacao();
        setComprimento();
        setLargura();
        setEspessura();
        setUnidade();
        setMinimoDeEstoque();
        setMaximoDeEstoque();
        console.log("Esse é o console do Put: ", response);
        alert("Alteração Efetuada com sucesso!");
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro: " + error);
        alert("Ops! Ocorreu um erro: " + error);
      });
  }

  function funcaoAbrirModal(material) {
    setShowModalPut(true);

    Api.get(`${url}/${material.materialId}`, {
      materialId,
      codigo,
      nome,
      localizacao,
      comprimento,
      largura,
      espessura,
      unidade,
      minimoDeEstoque,
      maximoDeEstoque,
    })
      .then(() => {
        setMaterialId(material.materialId);
        setNome(material.nome);
        setCodigo(material.codigo);
        setLocalizacao(material.localizacao);
        setComprimento(material.comprimento);
        setLargura(material.largura);
        setEspessura(material.espessura);
        setUnidade(material.unidade);
        setMinimoDeEstoque(material.minimoDeEstoque);
        setMaximoDeEstoque(material.maximoDeEstoque);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro1:", error);
        alert("Ops! Ocorreu um erro1:", error);
      });
  }

  //Delete
  function handleDeleteMaterial(idUser) {
    try {
      Api.delete(`/${url}/${idUser}`);
      console.log('delete id', idUser)

      setModalDelete(false);
      alert("Deletado com sucesso");
      window.location.reload();
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
    }
  }

  function handleDeleteModal(materialId) {
    console.log("Modal Delete aberto!");
    console.log('delete id', materialId)
    setModalDelete(true);
  }


  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    onSelect: (row) => {
      console.log("selecionado");
      console.log(row.materialId);
      setIdUser(row.materialId);
    },
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 className="titulosPrincipais">Material</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <Button
                  className="botaoCadastrar"
                  variant="success"
                  onClick={() => setShow(true)}
                >
                  <HiPlus Style="color:#fff!important" />Cadastrar
                </Button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 tabelaUsuario">
              <BootstrapTable
                keyField="materialId"
                data={materialGet}
                columns={columns}
                striped={true}
                selectRow={selectRow}
                filter={filterFactory()}
                pagination={paginationFactory(options)}
              />
            </div>
          </div>
        </div>

        {/* Modal Cadastro */}
        <Modal
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Cadastrar Dados
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
              <form className="row g-3 formPadrao" onSubmit={handleRegister}>
                <div className="col-md-3 col-sm-6">
                  <label>Codigo</label>
                  <input
                    type="text"
                    name="codigo"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Localizacao</label>
                  <input
                    type="text"
                    name="localizacao"
                    value={localizacao}
                    onChange={(e) => setLocalizacao(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Comprimento</label>
                  <input
                    type="number"
                    name="comprimento"
                    value={comprimento}
                    onChange={(e) => setComprimento(parseFloat(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Largura</label>
                  <input
                    type="number"
                    name="largura"
                    value={largura}
                    onChange={(e) => setLargura(parseFloat(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Espessura</label>
                  <input
                    type="number"
                    name="espessura"
                    value={espessura}
                    onChange={(e) => setEspessura(parseFloat(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Unidade de Medida</label>
                  <input
                    type="text"
                    name="unidade"
                    value={unidade}
                    onChange={(e) => setUnidade(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Mínimo Estoque</label>
                  <input
                    type="number"
                    name="minimoDeEstoque"
                    value={minimoDeEstoque}
                    onChange={(e) =>
                      setMinimoDeEstoque(parseInt(e.target.value))
                    }
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Máximo Estoque</label>
                  <input
                    type="number"
                    name="maximoDeEstoque"
                    value={maximoDeEstoque}
                    onChange={(e) =>
                      setMaximoDeEstoque(parseInt(e.target.value))
                    }
                  />
                </div>

                <div className="col-md-3 col-sm-6 btnCol">
                  <Button
                    type="submit"
                    variant="success"
                    className="align-self-baseline"
                    onClick={createPost}
                  >
                    Cadastrar
                  </Button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>

        {/* Modal Put */}
        <Modal
          size="lg"
          show={showModalPut}
          onHide={() => setShowModalPut(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Editar Dados
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              className="formCadastro"
              id="formCadastro"
              Style="margin-bottom: 30px"
            >
              <form className="row g-3 formPadrao" onSubmit={handleRegister}>
                <div className="col-md-3 col-sm-6" Style="display: none">
                  <label>Id</label>
                  <input
                    name="materialId"
                    value={materialId}
                    onChange={(e) => setMaterialId(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Codigo</label>
                  <input
                    type="text"
                    name="codigo"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Localizacao</label>
                  <input
                    type="text"
                    name="localizacao"
                    value={localizacao}
                    onChange={(e) => setLocalizacao(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Comprimento</label>
                  <input
                    type="number"
                    name="comprimento"
                    value={comprimento}
                    onChange={(e) => setComprimento(parseFloat(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Largura</label>
                  <input
                    type="number"
                    name="largura"
                    value={largura}
                    onChange={(e) => setLargura(parseFloat(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Espessura</label>
                  <input
                    type="number"
                    name="espessura"
                    value={espessura}
                    onChange={(e) => setEspessura(parseFloat(e.target.value))}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Unidade de Medida</label>
                  <input
                    type="text"
                    name="unidade"
                    value={unidade}
                    onChange={(e) => setUnidade(e.target.value)}
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Mínimo Estoque</label>
                  <input
                    type="number"
                    name="minimoDeEstoque"
                    value={minimoDeEstoque}
                    onChange={(e) =>
                      setMinimoDeEstoque(parseInt(e.target.value))
                    }
                  />
                </div>
                <div className="col-md-3 col-sm-6">
                  <label>Máximo Estoque</label>
                  <input
                    type="number"
                    name="maximoDeEstoque"
                    value={maximoDeEstoque}
                    onChange={(e) =>
                      setMaximoDeEstoque(parseInt(e.target.value))
                    }
                  />
                </div>

                <div className="col-md-3 col-sm-6 btnCol">
                  <Button
                    type="submit"
                    variant="success"
                    className="align-self-baseline"
                    onClick={(material) => {
                      handlePut(material.materialId);
                    }}
                  >
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>

        {/* Modal Delete */}
        <Modal
          size="sm"
          aria-labelledby="contained-modal-title-vcenter"
          show={modalDelete}
          onHide={() => setModalDelete(false)}
          centered
        >
          <Modal.Header closeButton Style="position:relative">
            <h3 Style="position: absolute; left: 30%;">
              Atenção!
            </h3>
          </Modal.Header>
          <Modal.Body>
            <div Style="margin-bottom: 30px; text-align: center">
              <div className="row">
                <div className="col-12">
                  <p>Deseja Realmente Excluir!</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6">
                      <Button variant="danger" onClick={fecharModal}>
                        Não
                      </Button>
                    </div>
                    <div className="col-6">
                      <Button variant="primary" onClick={() => handleDeleteMaterial(idUser)}>
                        Sim
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </IconContext.Provider>
    </>
  );
}
