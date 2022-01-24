import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export default function CadastroMaterial() {

  const [codigo, setCodigo] = useState([]);
  const [nome, setNome] = useState([]);
  const [armazenamento, setArmazenamento] = useState([]);
  const [comprimento, setComprimento] = useState([]);
  const [largura, setLargura] = useState([]);
  const [espessura, setEspessura] = useState([]);
  const [uniMedida, setUniMedida] = useState([]);
  const [minEstoque, setMinEstoque] = useState([]);
  const [maxEstoque, setMaxEstoque] = useState([]);

  function handleRegister(e) {
    e.preventDefault();
  }

  function createPost() {
    Api.post('/Material', {
     codigo, nome, armazenamento, comprimento, largura, espessura, uniMedida, minEstoque, maxEstoque
    })
      .then((response) => {
        setCodigo(response.data)
        setNome(response.data)
        setArmazenamento(response.data)
        setComprimento(response.data)
        setLargura(response.data)
        setEspessura(response.data)
        setUniMedida(response.data)
        setMinEstoque(response.data)
        setMaxEstoque(response.data)
        console.log('Cadastro efetuado com sucesso')
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro!!!:", error)
        alert("Ops! Ocorreu um erro!!!:", error)
      })
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Cadastro de Materiais</h2>
              </div>
            </div>
          </div>

          <form className="row g-3 formPadrao" onSubmit={handleRegister}>
            <div className="col-md-3 col-sm-6">
              <label>Codigo</label>
              <input
                type="text"
                name="codigo"
                value={codigo}
                onChange={e => setCodigo(e.target.value)}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Nome</label>
              <input
                type="text"
                name="nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Armazenamento</label>
              <input
                type="text"
                name="armazenamento"
                value={armazenamento}
                onChange={e => setArmazenamento(e.target.value)}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Comprimento</label>
              <input
                type="number"
                name="comprimento"
                value={comprimento}
                onChange={e => setComprimento(parseFloat(e.target.value))}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Largura</label>
              <input
                type="number"
                name="largura"
                value={largura}
                onChange={e => setLargura(parseFloat(e.target.value))}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Espessura</label>
              <input
                type="number"
                name="espessura"
                value={espessura}
                onChange={e => setEspessura(parseFloat(e.target.value))}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Unidade de Medida</label>
              <input
                type="text"
                name="uniMedida"
                value={uniMedida}
                onChange={e => setUniMedida(e.target.value)}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Mínimo Estoque</label>
              <input
                type="number"
                name="minEstoque"
                value={minEstoque}
                onChange={e => setMinEstoque(parseInt(e.target.value))}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Máximo Estoque</label>
              <input
                type="number"
                name="maxEstoque"
                value={maxEstoque}
                onChange={e => setMaxEstoque(e.target.value)}
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
      </IconContext.Provider>
    </>
  )
}