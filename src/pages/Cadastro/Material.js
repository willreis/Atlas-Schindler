import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import { IconContext } from "react-icons/lib";
import { GrEdit } from "react-icons/gr";
import { Button } from "react-bootstrap";
// import Api from '../../services/Api';

export default function Material() {

  // const [codigoMaterial, setCodigoMaterial] = useState([])
  // const [nomeMaterial, setNomeMaterial] = useState([])
  // const [armazenamento, setArmazenamento] = useState([])
  // const [comprimento, setComprimento] = useState([])
  // const [largura, setLargura] = useState([])
  // const [espessura, setEspessura] = useState([])
  // const [unidadeMedida, setUnidadeMedida] = useState([])
  // const [minimoEstoque, setMinimoEstoque] = useState([])
  // const [maximo, setMaximo] = useState([])

  // state = {
  //   materiais: [],
  // };

  // componentDidMount() {
  //   Api.get('/Material').then((res) => {
  //     const materiais = res.data;
  //     this.setState({ materiais });
  //   });
  // }

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
                <Button variant="success">Cadastrar</Button>
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
                  {this.state.materiais.map((material) => (
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