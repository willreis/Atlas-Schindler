import React from "react";
import atlasLogo from "../../assets/img/atlas_logo.png";
import { Link } from 'react-router-dom';

function Pagina404() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="boxTextNotFound">
                <p className="text404">404</p>
                <p className="textNotFound">
                    Pagina não encontrada 
                </p>
                <p className="textNotFound">
                    Por favor <Link className="link" to="/cadastro/usuario" >clique aqui</Link> e volte para a
                    pagina Home
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
