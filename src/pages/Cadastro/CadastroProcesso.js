import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "react-icons/lib";
import { Button } from "react-bootstrap";
import Api from '../../services/Api';

export default function CadastroProcesso() {

  const [nome, setNome] = useState('');
  const [ordenacao, setOrdenacao] = useState('')

  function handleRegister(e) {
    e.preventDefault();

    const data = {
      nome,
      ordenacao
    };

    try {
      console.log(data)
    } catch (err) {
      alert('Erro no cadastro, tente novamente');
    }
  }

  // Api.post('/Cadastro', processoCadastro)
  //   .then(res => {
  //     console.log(res);
  //     console.log(res.data);
  //   })
  // console.log(processoCadastro);

  return (
    <>
      <IconContext.Provider value={{ color: "#3cde3c", size: "1.6rem" }}>
        <div className="container paddingContainer">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="tituloInterno">
                <h2 Style="color:#555;">Cadastro de Processo</h2>
              </div>
            </div>
          </div>

          <form className="row g-3 formPadrao" action="" onSubmit={handleRegister}>
            <div className="col-md-3 col-sm-6">
              <label>Nome</label>
              <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div className="col-md-3 col-sm-6">
              <label>Ordenação</label>
              <input type="text" name="ordenacao" value={ordenacao} onChange={e => setOrdenacao(e.target.value)} />
            </div>

            <div className="col-md-3 col-sm-6 btnCol">
              <Button type="submit" variant="success" className="align-self-baseline">
                Cadastrar
              </Button>
            </div>
          </form>
        </div>
      </IconContext.Provider>
    </>
  )
}