import React from "react";
import { Route, Switch } from "react-router-dom";

//Cadastro
import Usuarios from "./pages/Cadastro/Usuarios";
import GruposAcesso from "./pages/Cadastro/GruposAcesso";
import Impressora from "./pages/Cadastro/Impressora";
import Processo from "./pages/Cadastro/Processo";
import Maquina from "./pages/Cadastro/Maquina";
import Material from "./pages/Cadastro/Material";
import MotivoProblema from "./pages/Cadastro/MotivoProblema";
import NovoEditarMaterial from "./pages/Cadastro/NovoEditarMaterial";

//Planejamento
import ImportacaoOrdemProducao from "./pages/Planejamento/ImportacaoOrdemProducao";
import OrdensParaProducao from "./pages/Planejamento/OrdensParaProducao";
import OrdensProducao from "./pages/Planejamento/OrdensProducao";
import OrdensProducaoKanban from "./pages/Planejamento/OrdensProducaoKanban";
import ProblemasProducao from "./pages/Planejamento/ProblemasProducao";
import DetalhesItemProducao from "./pages/Planejamento/DetalhesItemProducao";
import DetalhesVgs from "./pages/Planejamento/DetalhesVgs";
import GerenciamentoKanban from "./pages/Planejamento/GerenciamentoKanban";

//Manutenção
import MapaDePosicoes from "./pages/Manutençao/MapaArmazem";
import InformacoesGondola from "./pages/Manutençao/InformacoesGondola";
import OcupacaoArmazem from "./pages/Manutençao/OcupacaoArmazem";
import InformacoesTranselevador from "./pages/Manutençao/InformacoesTranselevador";
import Alarmes from "./pages/Manutençao/Alarmes";
import GerenciamentoKanbanManutencao from "./pages/Manutençao/GerenciamentoKanbanManutencao";
import InformacoesLocalizacao from "./pages/Manutençao/InformacoesLocalizacao";
import InformacoesMesa from "./pages/Manutençao/InformacoesMesa";
import TesteTranslacao from "./pages/Manutençao/TesteTranslacao";

//Produção
import Producao from "./pages/Operacao/Producao";
import RecebimentoArmazem from "./pages/Operacao/RecebimentoArmazem";
import ConfiguracaoEstacaoTrabalho from "./pages/Operacao/ConfiguracaoEstacaoTrabalho";
import DetalhesProdPuncionadeira from "./pages/Operacao/DetalhesProdPuncionadeira";
import DetalhesProducao from "./pages/Operacao/DetalhesProducao";

//Movimentos
import ListaMovimentos from "./pages/Movimentos/ListaMovimentos";
import LancarSaidaGondola from "./pages/Movimentos/LancarSaidaGondola";
import RetornarGondolaArmazem from "./pages/Movimentos/RetornarGondolaArmazem";
import EntradaGondolaVazia from "./pages/Movimentos/EntradaGondolaVazia";
import EnviarComandosPlc from "./pages/Movimentos/EnviarComandosPlc";

//Dashboard
import AcompanhamentoProducao from "./pages/Dashboard/AcompanhamentoProducao";
import AcompanhamentoEstoque from "./pages/Dashboard/AcompanhamentoEstoque";
import AcompanhamentoFabrica from "./pages/Dashboard/AcompanhamentoFabrica";
import AcompanhamentoProdKanban from "./pages/Dashboard/AcompanhamentoProdKanban";
import AcompanhamentoProdProduto from "./pages/Dashboard/AcompanhamentoProdProduto";

//Relatórios
import { DadosProducao } from "./pages/Relatorios/DadosProducao";
import { HistoricoMovimentacao } from "./pages/Relatorios/HistoricoMovimentacao";
import { EstoqueMaterial } from "./pages/Relatorios/EstoqueMaterial";
import { HistoricoGondola } from "./pages/Relatorios/HistoricoGondola";
import { EncerramentoOrdem } from "./pages/Relatorios/EncerramentoOrdem";
import { HistoricoEntradaMaterial } from "./pages/Relatorios/HistoricoEntradaMaterial";
import { ProducaoMaquina } from "./pages/Relatorios/ProducaoMaquina";
import { AnaliseFalhas } from "./pages/Relatorios/AnaliseFalhas";

//Outros
import Pagina404 from "./pages/404/404";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function Rotas(props) {
  return (
    <div {...props}>
      <div>
        <Switch>
          {/*Cadastro*/}
          <Route path="/cadastro/usuarios" exact>
            <Usuarios />
          </Route>
          <Route path="/cadastro/gruposdeacesso" exact>
            <GruposAcesso />
          </Route>
          <Route path="/cadastro/impressora" exact>
            <Impressora />
          </Route>
          <Route path="/cadastro/processo" exact>
            <Processo />
          </Route>
          <Route path="/cadastro/maquina" exact>
            <Maquina />
          </Route>
          <Route path="/cadastro/material" exact>
            <Material />
          </Route>
          <Route path="/cadastro/motivoproblema" exact>
            <MotivoProblema />
          </Route>
          <Route path="/cadastro/novoeditarmaterial" exact>
            <NovoEditarMaterial />
          </Route>

          {/*Planejamento*/}
          <Route path="/planejamento/importacaoordemproducao" exact>
            <ImportacaoOrdemProducao />
          </Route>
          <Route path="/planejamento/ordensparaproducao" exact>
            <OrdensParaProducao />
          </Route>
          <Route path="/planejamento/ordensproducao" exact>
            <OrdensProducao />
          </Route>
          <Route path="/planejamento/ordensproducaokanban" exact>
            <OrdensProducaoKanban />
          </Route>
          <Route path="/planejamento/problemasproducao" exact>
            <ProblemasProducao />
          </Route>
          <Route path="/planejamento/detalhesitemproducao" exact>
            <DetalhesItemProducao />
          </Route>
          <Route path="/planejamento/detalhesvgs" exact>
            <DetalhesVgs />
          </Route>
          <Route path="/planejamento/gerenciamentokanban" exact>
            <GerenciamentoKanban />
          </Route>

          {/*Manutenção*/}
          <Route path="/manutencao/mapadeposicoes" exact>
            <MapaDePosicoes />
          </Route>
          <Route path="/manutencao/informacoesgondola" exact>
            <InformacoesGondola />
          </Route>
          <Route path="/manutencao/ocupacaodoarmazem" exact>
            <OcupacaoArmazem />
          </Route>
          <Route path="/manutencao/informacoesdotranselevador" exact>
            <InformacoesTranselevador />
          </Route>
          <Route path="/manutencao/alarmes" exact>
            <Alarmes />
          </Route>
          <Route path="/manutencao/gerenciamentokanbanmanutencao" exact>
            <GerenciamentoKanbanManutencao />
          </Route>
          <Route path="/manutencao/informacoeslocalizacao" exact>
            <InformacoesLocalizacao />
          </Route>
          <Route path="/manutencao/informacoesmesa" exact>
            <InformacoesMesa />
          </Route>
          <Route path="/manutencao/testetranslacao" exact>
            <TesteTranslacao />
          </Route>

          {/*Operação*/}
          <Route path="/operacao/producao" exact>
            <Producao />
          </Route>
          <Route path="/operacao/recebimentoArmazem" exact>
            <RecebimentoArmazem />
          </Route>
          <Route path="/operacao/configuracaoEstacaoTrabalho" exact>
            <ConfiguracaoEstacaoTrabalho />
          </Route>
          <Route path="/operacao/detalhesprodpuncionadeira" exact>
            <DetalhesProdPuncionadeira />
          </Route>
          <Route path="/operacao/detalhesproducao" exact>
            <DetalhesProducao />
          </Route>

          {/*Movimentos*/}
          <Route path="/movimentos/filademovimentos" exact>
            <ListaMovimentos />
          </Route>
          <Route path="/movimentos/movimentomesadesaida" exact>
            <LancarSaidaGondola />
          </Route>
          <Route path="/movimentos/movimentoparaarmazem" exact>
            <RetornarGondolaArmazem />
          </Route>
          <Route path="/movimentos/entradagondolavazia" exact>
            <EntradaGondolaVazia />
          </Route>
          <Route path="/movimentos/enviarcomandos" exact>
            <EnviarComandosPlc />
          </Route>

          {/*Dashboard*/}
          <Route path="/dashboard/acompanhamentodeproducao" exact>
            <AcompanhamentoProducao />
          </Route>
          <Route path="/dashboard/acompanhamentodeestoque" exact>
            <AcompanhamentoEstoque />
          </Route>
          <Route path="/dashboard/acompanhametodefabrica" exact>
            <AcompanhamentoFabrica />
          </Route>
          <Route path="/dashboard/acompanhamentodeproducaokanban" exact>
            <AcompanhamentoProdKanban />
          </Route>
          <Route path="/dashboard/acompanhamentodeproducaoproduto" exact>
            <AcompanhamentoProdProduto />
          </Route>

          {/*Relatórios*/}
          <Route path="/relatorios/historicodeordemproducao" exact>
            <DadosProducao />
          </Route>
          <Route path="/relatorios/historicodemovimentacao" exact>
            <HistoricoMovimentacao />
          </Route>
          <Route path="/relatorios/estoquedeproduto" exact>
            <EstoqueMaterial />
          </Route>
          <Route path="/relatorios/historicodegondola" exact>
            <HistoricoGondola />
          </Route>
          <Route path="/relatorios/encerramentodeordemproducao" exact>
            <EncerramentoOrdem />
          </Route>
          <Route path="/relatorios/historicodeentradaproduto" exact>
            <HistoricoEntradaMaterial />
          </Route>
          <Route path="/relatorios/producaopormaquina" exact>
            <ProducaoMaquina />
          </Route>
          <Route path="/relatorios/analisedefalhas" exact>
            <AnaliseFalhas />
          </Route>

          {/*Outros*/}
          <Route path="*" exact>
            <Pagina404 />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Rotas;