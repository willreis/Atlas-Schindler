import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { GrEdit } from "react-icons/gr";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Api from "../../services/Api"

export default function Processo() {

  const [user, setUser] = useState([])

  useEffect(() => {
    Api.get('/Processo')
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
                <h2 Style="color:#555;">Processo</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <Link to="/cadastro/cadastroprocesso"><Button variant="success">Cadastrar</Button></Link>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12 paddingTop20Mobile">

              <table class="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Ordenação</th>
                    <th scope="col">Opções/Editar</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map(processo => (
                    <tr>
                      <td key={processo.processoId} Style="display:none">{processo.processoId}</td>
                      <td>{processo.nome}</td>
                      <td>{processo.ordenacao}</td>
                      <td><span><GrEdit /></span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row paddingTop30">
            <div className="col-md-6 col-sm-12">
              <Button variant="secondary">Voltar</Button>
            </div>
            <div className="col-md-6 col-sm-12 paddingTop20Mobile">
              <div className="alignButtons">
                <Button variant="success">Salvar</Button>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  )
}