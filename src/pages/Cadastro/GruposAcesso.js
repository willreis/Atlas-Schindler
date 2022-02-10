import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
// import BootstrapTable from "react-bootstrap-table-next";
// import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

// import Api from "../../services/Api";

export default function GruposAcesso() {
 
  return (
    <>
      <IconContext.Provider value={{ color: "#000000", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-6">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Grupo de Acesso</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 paddingTop20Mobile">
              
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
