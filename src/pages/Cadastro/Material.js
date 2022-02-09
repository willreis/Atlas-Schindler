import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { IconContext } from "react-icons/lib";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinFill } from "react-icons/ri";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export default function Material() {
  var url = "Material";

  //Modal const
  const [show, setShow] = useState(false);
  const [showModalPut, setShowModalPut] = useState(false);

  //GET
  const [user, setUser] = useState([]);

  useEffect(() => {
    Api.get(`${url}`)
      .then((response) => {
        console.log(response);
        setUser(response.data);
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error);
        alert("Ops! Ocorreu um erro:", error);
      });
  }, []);

  //POST
  const [materialId, setMaterialId] = useState();
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

  //Delete
  async function handleDeleteMaterial(materialId) {
    try {
      await Api.delete(`/${url}/${materialId}`);
      setUser(user.filter((material) => material.materialId !== materialId));
      alert("Deletado com sucesso");
    } catch (err) {
      alert("erro ao deletar caso, tente novamente");
      console.log(err);
    }
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

  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Material</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <Button variant="success" onClick={() => setShow(true)}>
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 paddingTop20Mobile">
              <table class="table table-striped table-bordered">
                <thead>
                  <tr className="text-center">
                    <th scope="col">Código Material</th>
                    <th scope="col">Nome Material</th>
                    <th scope="col">Localização</th>
                    <th scope="col">Comprimento</th>
                    <th scope="col">Largura</th>
                    <th scope="col">Espessura</th>
                    <th scope="col">Unidade de Medida</th>
                    <th scope="col">Mínimo Estoque</th>
                    <th scope="col">Máximo</th>
                    <th scope="col">Editar / Excluir</th>
                  </tr>
                </thead>

                <tbody>
                  {user.map((material, index) => (
                    <tr>
                      <td Style="display:none" key={index}></td>
                      <td Style="display: none">{material.materialId}</td>
                      <td>{material.codigo}</td>
                      <td>{material.nome}</td>
                      <td>{material.localizacao}</td>
                      <td>{material.comprimento}</td>
                      <td>{material.largura}</td>
                      <td>{material.espessura}</td>
                      <td>{material.unidade}</td>
                      <td>{material.minimoDeEstoque}</td>
                      <td>{material.maximoDeEstoque}</td>
                      <td className="text-center icons-table">
                        <span
                          Style="cursor:pointer"
                          onClick={() => {
                            funcaoAbrirModal(material);
                          }}
                        >
                          <VscEdit />
                        </span>
                        <span
                          Style="cursor:pointer"
                          onClick={() =>
                            handleDeleteMaterial(material.materialId)
                          }
                        >
                          <RiDeleteBinFill />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              Cadastro de Produtos
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
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Cadastro de Produtos
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
      </IconContext.Provider>
    </>
  );
}
