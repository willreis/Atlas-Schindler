import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import axios from 'axios';

export default function Maquina() {

  const [maquina, setMaquina] = useState([])

  const url = 'http://192.168.11.58:90/api/Maquina'

  useEffect(() => {
    axios.get(url)
      .then((response) => setMaquina(response.data))
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Maquina</h2>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="alignButtons">
                <Button variant="success">Cadastrar</Button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 col-sm-12 paddingTop20Mobile">
              <div Style="text-align: center" className="textTable">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Nome</th>
                      <th scope="col">Ordenação</th>
                      <th scope="col">Opções</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td Style='display: none'>{maquina?.maquinaId}</td>
                      <td>{maquina?.nome}</td>
                      <td>{maquina?.processo}</td>
                      <td>{maquina?.status}</td>
                      <td>{maquina?.ordenacao}</td>
                      <td>{maquina?.tempoMedioProducao}</td>
                      <td><span><GrEdit /></span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row paddingTop30">
            <div className="col-md-6">
              <Button variant="secondary">Voltar</Button>
            </div>
            <div className="col-md-6 paddingTop20Mobile">
              <div className="alignButtons">
                <Button variant="success">Salvar</Button>
              </div>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}