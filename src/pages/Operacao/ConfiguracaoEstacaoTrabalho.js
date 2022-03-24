import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Api from "../../services/Api";

export default function ConfiguracaoEstacaoTrabalho() {
  const urlMesa = "Mesa";
  const urlImpressora = "Impressora";
  const urlMaquina = "Maquina";

  const [impressoraId, setImpressoraId] = useState();
  const [impressoraNome, setImpressoraNome] = useState();
  const [maquinaId, setMaquinaId] = useState();
  const [maquinaNome, setMaquinaNome] = useState();
  const [mesaEntradaId, setMesEntradaId] = useState();
  const [mesaEntradaNome, setMesaEntradaNome] = useState();
  const [mesaSaidaId, setMesaSaidaId] = useState();
  const [mesaSaidaNome, setMesaSaidaNome] = useState();
  const [getMesa, setGetMesa] = useState([]);
  const [getImpressora, setGetImpressora] = useState([]);
  const [getMaquina, setGetMaquina] = useState([]);

  useEffect(() => {
    Api.get(`${urlMesa}`)
      .then((response) => {
        setGetMesa(
          response.data.map((get) => {
            return {
              mesaId: get.mesaId,
              nome: get.nome,
              gondolaId: get.gondolaId,
              carro: get.carro,
              falha: get.falha,
              etapa: get.etapa,
            };
          })
        );
      })
      .catch((error) => {
        alert("Erro:", error);
      });

    Api.get(`${urlImpressora}`)
      .then((response) => {
        setGetImpressora(
          response.data.map((get) => {
            return {
              impressoraId: get.impressoraId,
              nome: get.nome,
            };
          })
        );
      })
      .catch((error) => {
        alert("Erro Get Impressora:", error);
      });

    Api.get(`${urlMaquina}`)
      .then((response) => {
        setGetMaquina(
          response.data.map((get) => {
            return {
              maquinaId: get.maquinaId,
              nome: get.nome,
            };
          })
        );
      })
      .catch((error) => {
        alert("Erro get Máquina:", error);
      });
  }, []);

  var mesaEntradaVar = document.getElementById("mesaEntrada");
  var mesaSaidaVar = document.getElementById("mesaSaida");
  var buttonConfigurarVar = document.getElementById("buttonConfigurar");

  function validadacaoMesa() {
    if (mesaEntradaVar.value === mesaSaidaVar.value) {
      alert("Mesa de Entrada deve ser diferente da Mesa de Saída.");
      buttonConfigurarVar.classList.add("disabled");
    } else {
      buttonConfigurarVar.classList.remove("disabled");
    }
  }

  function handleConfigurar() {
    document.cookie =
      "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    var storeImpressora = document.getElementById("impressora");
    var storeMaquina = document.getElementById("maquina");
    var storeMesaSaida = document.getElementById("mesaSaida");
    var storeMesaEntrada = document.getElementById("mesaEntrada");

    var impressoraNome =
      storeImpressora.options[storeImpressora.selectedIndex].text;
    var idImpressora =
      storeImpressora.options[storeImpressora.selectedIndex].value;

    var maquinaNome = storeMaquina.options[storeMaquina.selectedIndex].text;
    var idMaquina = storeMaquina.options[storeMaquina.selectedIndex].value;

    var mesaEntradaNome =
    storeMesaEntrada.options[storeMesaEntrada.selectedIndex].text;
    var IdMesaEntrada =
    storeMesaEntrada.options[storeMesaEntrada.selectedIndex].value;

    var mesaSaidaNome =
    storeMesaSaida.options[storeMesaSaida.selectedIndex].text;
    var idMesaSaidaNome =
    storeMesaSaida.options[storeMesaSaida.selectedIndex].value;

    var data = new Date(2999, 0, 1);
    data = data.toGMTString();
    // Cria o cookie
    document.cookie = `nomeImpressora=${impressoraNome}; expires=${data}; path=/`;
    document.cookie = `IdImpressora=${idImpressora}; expires=${data}; path=/`;
    document.cookie = `IdMaquina=${idMaquina}; expires=${data}; path=/`;
    document.cookie = `NomeMaquina=${maquinaNome}; expires=${data}; path=/`;
    document.cookie = `IdMesaEntrada=${IdMesaEntrada}; expires=${data}; path=/`;
    document.cookie = `NomeMesaEntrada=${mesaEntradaNome}; expires=${data}; path=/`;
    document.cookie = `IDMesaSaida=${idMesaSaidaNome}; expires=${data}; path=/`;
    document.cookie = `NomeMesaSaida=${mesaSaidaNome}; expires=${data}; path=/`;
  }

  // Cria uma nova data no futuro 01/01/2020

  return (
    <>
      <div className="paddingContainer">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="tituloInterno">
              <h2 className="titulosPrincipais">
                Configuração de Estação de Trabalho
              </h2>
            </div>
          </div>
        </div>

        <form className="configuracaoTrabalho">
          <div class="row">
            <div class="col-md-3 mt-3">
              <label for="maquina">Maquina</label>
              <select
                id="maquina"
                type="text"
                value={maquinaId}
                class="form-control"
              >
                <option>Escolha uma opção abaixo</option>
                {getMaquina.map((mapSelectOptions) => (
                  <option value={mapSelectOptions.maquinaId}>
                    {mapSelectOptions.nome}
                  </option>
                ))}
              </select>
            </div>
            <div class="col-md-3 mt-3">
              <label for="impressora">Impressora</label>
              <select
                id="impressora"
                type="text"
                class="form-control"
                value={impressoraId}
                name={impressoraNome}
              >
                <option>Escolha uma opção abaixo</option>
                {getImpressora.map((mapSelectOptions) => (
                  <option value={mapSelectOptions.impressoraId}>
                    {mapSelectOptions.nome}
                  </option>
                ))}
              </select>
            </div>
            <div class="col-md-3 mt-3">
              <label for="mesaEntrada">Mesa de Entrada</label>
              <select
                id="mesaEntrada"
                type="text"
                class="form-control"
                value={mesaEntradaId}
                name={mesaEntradaNome}
                onChange={validadacaoMesa}
              >
                <option>Escolha uma opção abaixo</option>
                {getMesa.map((mapSelectOptions) => (
                  <option value={mapSelectOptions.mesaId}>
                    {mapSelectOptions.nome}
                  </option>
                ))}
              </select>
            </div>
            <div class="col-md-3 mt-3">
              <label for="mesaSaida">Mesa de Saída</label>
              <select
                id="mesaSaida"
                type="text"
                class="form-control"
                value={mesaSaidaId}
                onChange={validadacaoMesa}
              >
                <option>Escolha uma opção abaixo</option>
                {getMesa.map((mapSelectOptions) => (
                  <option value={mapSelectOptions.mesaId}>
                    {mapSelectOptions.nome}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row botoesOrdemProducao">
            <div className="col-md-3 mt-5">
              <Button
                id="buttonConfigurar"
                variant="success"
                Style="width: 140px"
                onClick={() => {
                  handleConfigurar();
                }}
              >
                Configurar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
