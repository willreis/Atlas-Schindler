import React from "react";
import atlasLogo from "../../assets/img/atlas_logo.png";
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import { FaHome } from "react-icons/fa";

function Pagina404() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="boxTextNotFound">

                <p className="text404">404</p>
                <p className="textNotFoundTitle">
                    Pagina não encontrada 
                </p>
                <p className="textNotFound">
                   <Link to="/home">
                   <Button variant="primary" className="btnVoltarHome"><FaHome/>  Voltar para Home</Button>
                   </Link>
                </p>

            </div>
          </div>

          <div className="col-md-6">
            <div className="logoAtlasArea">
              <img src={atlasLogo} alt="atlas-logo" Style="width:70%" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pagina404;
