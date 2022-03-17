import React from 'react';
import { Switch, Route, Routes } from 'react-router-dom';

import Usuarios from './pages/Cadastro/Usuarios'
import GruposAcesso from './pages/Cadastro/GruposAcesso'
import Impressora from './pages/Cadastro/Impressora'
import Processo from './pages/Cadastro/Processo'
import Maquina from './pages/Cadastro/Maquina'
import Material from './pages/Cadastro/Material'

//Páginas Internas cadastro
import MotivoProblema from './pages/Cadastro/MotivoProblema'
import NovoEditarMaterial from './pages/Cadastro/NovoEditarMaterial'
import ImportacaoOrdemProducao from './pages/Planejamento/ImportacaoOrdemProducao'
import OrdensProducao from './pages/Planejamento/OrdensProducao'
import OrdensProducaoKanban from './pages/Planejamento/OrdensProducaoKanban'
import ProblemasProducao from './pages/Planejamento/ProblemasProducao'

//Páginas Internas Planejamento
import DetalhesItemProducao from './pages/Planejamento/DetalhesItemProducao'
import DetalhesVgs from './pages/Planejamento/DetalhesVgs'
import GerenciamentoKanban from './pages/Planejamento/GerenciamentoKanban'

import MapaDePosicoes from './pages/Manutençao/MapaArmazem'
import InformacoesGondola from './pages/Manutençao/InformacoesGondola'
import OcupacaoArmazem from './pages/Manutençao/OcupacaoArmazem'
import InformacoesTranselevador from './pages/Manutençao/InformacoesTranselevador'

//Páginas Internas Manutencao
import Alarmes from './pages/Manutençao/Alarmes'
import GerenciamentoKanbanManutencao from './pages/Manutençao/GerenciamentoKanbanManutencao'
import InformacoesLocalizacao from './pages/Manutençao/InformacoesLocalizacao'
import InformacoesMesa from './pages/Manutençao/InformacoesMesa'
import TesteTranslacao from './pages/Manutençao/TesteTranslacao'
import Producao from './pages/Operacao/Producao'
import RecebimentoArmazem from './pages/Operacao/RecebimentoArmazem'
import ConfiguracaoEstacaoTrabalho from './pages/Operacao/ConfiguracaoEstacaoTrabalho'

//Páginas Internas Operacao
import DetalhesProdPuncionadeira from './pages/Operacao/DetalhesProdPuncionadeira'
import DetalhesProducao from './pages/Operacao/DetalhesProducao'

import ListaMovimentos from './pages/Movimentos/ListaMovimentos'
import LancarSaidaGondola from './pages/Movimentos/LancarSaidaGondola'
import RetornarGondolaArmazem from './pages/Movimentos/RetornarGondolaArmazem'
import EntradaGondolaVazia from './pages/Movimentos/EntradaGondolaVazia'
import EnviarComandosPlc from './pages/Movimentos/EnviarComandosPlc'

import AcompanhamentoProducao from './pages/Dashboard/AcompanhamentoProducao'
import AcompanhamentoEstoque from './pages/Dashboard/AcompanhamentoEstoque'
import AcompanhamentoFabrica from './pages/Dashboard/AcompanhamentoFabrica'
import AcompanhamentoProdKanban from './pages/Dashboard/AcompanhamentoProdKanban'
import AcompanhamentoProdProduto from './pages/Dashboard/AcompanhamentoProdProduto'

import DadosProducao from './pages/Relatorios/DadosProducao'
import HistoricoMovimentacao from './pages/Relatorios/HistoricoMovimentacao'
import EstoqueMaterial from './pages/Relatorios/EstoqueMaterial'
import HistoricoGondola from './pages/Relatorios/HistoricoGondola'
import EncerramentoOrdem from './pages/Relatorios/EncerramentoOrdem'
import HistoricoEntradaMaterial from './pages/Relatorios/HistoricoEntradaMaterial'
import ProducaoMaquina from './pages/Relatorios/ProducaoMaquina'
import AnaliseFalhas from './pages/Relatorios/AnaliseFalhas'

import Pagina404 from './pages/404/404';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';


function Rotas(props) {
    return (
        <div {...props}>
            <div>
                    <Route path='/cadastro/usuarios' component={Usuarios}></Route>
                    <Route path='/cadastro/gruposdeacesso' component={GruposAcesso}></Route>
                    <Route path='/cadastro/impressora' component={Impressora}></Route>
                    <Route path='/cadastro/processo' component={Processo}></Route>
                    <Route path='/cadastro/maquina' component={Maquina}></Route>
                    <Route path='/cadastro/material' component={Material}></Route>
                    {/*Esses Route path='' abaixo das págs Internas ñ tem o Link to='' ainda*/}
                    <Route path='/cadastro/motivoproblema' component={MotivoProblema}></Route>
                    <Route path='/cadastro/novoeditarmaterial' component={NovoEditarMaterial}></Route>
                    <Route path='/planejamento/importacaoordemproducao' component={ImportacaoOrdemProducao}></Route>
                    <Route path='/planejamento/ordensproducao' component={OrdensProducao}></Route>
                    <Route path='/planejamento/ordensproducaokanban' component={OrdensProducaoKanban}></Route>
                    <Route path='/planejamento/problemasproducao' component={ProblemasProducao }></Route>
                    {/*Esses Route path='' abaixo das págs Internas ñ tem o Link to='' ainda*/}
                    <Route path='/planejamento/detalhesitemproducao' component={DetalhesItemProducao }></Route>
                    <Route path='/planejamento/detalhesvgs' component={DetalhesVgs }></Route>
                    <Route path='/planejamento/gerenciamentokanban' component={GerenciamentoKanban }></Route>
                    <Route path='/manutencao/mapadeposicoes' component={MapaDePosicoes }></Route>
                    <Route path='/manutencao/informacoesgondola' component={InformacoesGondola }></Route>
                    <Route path='/manutencao/ocupacaodoarmazem' component={OcupacaoArmazem }></Route>
                    <Route path='/manutencao/informacoesdotranselevador' component={InformacoesTranselevador }></Route>
                    {/*Esses Route path='' abaixo das págs Internas ñ tem o Link to='' ainda*/}
                    <Route path='/manutencao/alarmes' component={Alarmes }></Route>
                    <Route path='/manutencao/gerenciamentokanbanmanutencao' component={GerenciamentoKanbanManutencao }></Route>
                    <Route path='/manutencao/informacoeslocalizacao' component={InformacoesLocalizacao }></Route>
                    <Route path='/manutencao/informacoesmesa' component={InformacoesMesa }></Route>
                    <Route path='/manutencao/testetranslacao' component={TesteTranslacao }></Route>
                    <Route path='/operacao/producao' component={Producao }></Route>
                    <Route path='/operacao/recebimentoarmazem' component={RecebimentoArmazem }></Route>
                    <Route path='/operacao/configuracao' component={ConfiguracaoEstacaoTrabalho }></Route>
                    {/*Esses Route path='' abaixo das págs Internas ñ tem o Link to='' ainda*/}
                    <Route path='/operacao/detalhesprodpuncionadeira' component={DetalhesProdPuncionadeira }></Route>
                    <Route path='/operacao/detalhesproducao' component={DetalhesProducao }></Route>
                    <Route path='/movimentos/filademovimentos' component={ListaMovimentos }></Route>
                    <Route path='/movimentos/movimentomesadesaida' component={LancarSaidaGondola }></Route>
                    <Route path='/movimentos/movimentoparaarmazem' component={RetornarGondolaArmazem }></Route>
                    <Route path='/movimentos/entradagondolavazia' component={EntradaGondolaVazia }></Route>
                    <Route path='/movimentos/enviarcomandos' component={EnviarComandosPlc }></Route>
                    <Route path='/dashboard/acompanhamentodeproducao' component={AcompanhamentoProducao }></Route>
                    <Route path='/dashboard/acompanhamentodeestoque' component={AcompanhamentoEstoque }></Route>
                    <Route path='/dashboard/acompanhametodefabrica' component={AcompanhamentoFabrica }></Route>
                    <Route path='/dashboard/acompanhamentodeproducaokanban' component={AcompanhamentoProdKanban }></Route>
                    <Route path='/dashboard/acompanhamentodeproducaoproduto' component={AcompanhamentoProdProduto }></Route>
                    <Route path='/relatorios/historicodeordemproducao' component={DadosProducao }></Route>
                    <Route path='/relatorios/historicodemovimentacao' component={HistoricoMovimentacao }></Route>
                    <Route path='/relatorios/estoquedeproduto' component={EstoqueMaterial }></Route>
                    <Route path='/relatorios/historicodegondola' component={HistoricoGondola }></Route>
                    <Route path='/relatorios/encerramentodeordemproducao' component={EncerramentoOrdem }></Route>
                    <Route path='/relatorios/historicodeentradaproduto' component={HistoricoEntradaMaterial }></Route>
                    <Route path='/relatorios/producaopormaquina' component={ProducaoMaquina }></Route>
                    <Route path='/relatorios/analisedefalhas' component={AnaliseFalhas }></Route>
                    <Route path='*' component={Pagina404 }></Route>
                    <Route path='/home' component={Home }></Route>
            </div>
        </div >
    )
}

export default Rotas