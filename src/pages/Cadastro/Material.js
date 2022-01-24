import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons/lib";
import { GrEdit } from "react-icons/gr";
import { Button } from "react-bootstrap";
import Api from '../../services/Api';

export default function Material() {

  const [user, setUser] = useState([])

  useEffect(() => {
    Api.get('/Material')
      .then((response) => {
        console.log(response)
        setUser(response.data)
      })
      .catch((error) => {
        console.log("Ops! Ocorreu um erro:", error)
        alert("Ops! Ocorreu um erro:", error)
      })
  }, [])

  
  return (
    <>
      <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Material</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <Link to='/Cadastro/CadastroProduto'><Button variant="success">Cadastrar</Button></Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 paddingTop20Mobile">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Código Material</th>
                    <th scope="col">Nome Material</th>
                    <th scope="col">Armazenamento</th>
                    <th scope="col">Comprimento</th>
                    <th scope="col">Largura</th>
                    <th scope="col">Espessura</th>
                    <th scope="col">Unidade de Medida</th>
                    <th scope="col">Mínimo Estoque</th>
                    <th scope="col">Máximo</th>
                    <th scope="col">Opções/Editar</th>
                  </tr>
                </thead>

                <tbody>
                  {user.map((material) => (
                    <tr>
                      <td Style='display: none'>{material.materialId}</td>
                      <td>{material.codigo}</td>
                      <td>{material.nome}</td>
                      <td>{material.localizacao}</td>
                      <td>{material.comprimento}</td>
                      <td>{material.largura}</td>
                      <td>{material.espessura}</td>
                      <td>{material.unidade}</td>
                      <td>{material.minimoDeEstoque}</td>
                      <td>{material.maximoDeEstoque}</td>
                      <td><span><GrEdit /></span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}