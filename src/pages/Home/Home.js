import React from "react";
import atlasLogo from "../../assets/img/atlas_logo.png";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="logoAtlasHome">
            <img src={atlasLogo} alt="atlas-logo" Style="width:30%" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="textAtlasHome">
            <p>Seja Bem Vindo!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
