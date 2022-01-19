import React, { useState } from "react";
// import { useHistory } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
// import Api from "../../services/Api"

export default function CadastroUsuariosCampos() {
  const [nome, setNome] = useState("");

//   const history = useHistory();

  async function handleCadastroUsuario(e){
    e.preventDefault();

    const data = {
        nome,
    
    };

    try{
        console.log(data);
        // await Api.post('incidents', data, {
            
        // })
        // history.push('/profile');
    } catch (err){
        alert("Erro ao cadastrar caso, tente novamente");
    }

  }

  return (
    <div Style="display:flex; justify-content:center; align-items: center">
      <div className="tituloInterno">
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Cadastro de Usuários</h2>
              </div>
            </div>
          </div>
          <form className="row g-3 formPadrao" action="" onSubmit={handleCadastroUsuario}>
            <div className="col-md-6 col-sm-6">
              <label>Nome</label>
              <input type="text" name="nome" id="nome" value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            {/* <div className="col-md-3 col-sm-6">
              <label>Matricula</label>
              <input type="text" name="matricula" id="matricula" />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Data Cadastro</label>
              <input type="text" name="dataCadastro" id="dataCadastro" />
            </div>
            <div className="col-md-6 col-sm-6">
              <label>Cargo</label>
              <input type="text" name="cargo" id="cargo" />
            </div>
            <div className="col-md-6 col-sm-12">
              <label>Senha</label>
              <input type="text" name="senha" id="senha" />
            </div>
            <div className="col-md-6 col-sm-12">
              <label for="grupoAcesso">Grupo de Acesso</label>
              <select id="grupoAcesso" class="form-select">
                <option selected>Escolha um Grupo</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="col-md-6 col-sm-12" Style="position: relative">
              <div className="form-check form-group form-switch statusBtnBox">
                <label className="form-check-label" for="status">
                  Status
                </label>
                <input
                  class="form-check-input statusBtn"
                  type="checkbox"
                  role="switch"
                  id="status"
                />
              </div>
            </div> */}
            <div className="row cadUsuarioBtnBox">
              <div className="col-md-4 text-center mt-5">
                <Button variant="primary">Voltar</Button>
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4 text-center mt-5">
                <Button variant="success">Salvar</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
