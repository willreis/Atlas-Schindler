import React from 'react';
import { Routes, Route } from 'react-router-dom';

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
                <Routes >
                    <Route path='/cadastro/usuarios' exact element={<Usuarios />}></Route>
                    <Route path='/cadastro/gruposdeacesso' exact element={<GruposAcesso />}></Route>
                    <Route path='/cadastro/impressora' exact element={<Impressora />}></Route>
                    <Route path='/cadastro/processo' exact element={<Processo />}></Route>
                    <Route path='/cadastro/maquina' exact element={<Maquina />}></Route>
                    <Route path='/cadastro/material' exact element={<Material />}></Route>
                    {/*Esses Route path='' abaixo das págs Internas ñ tem o Link to='' ainda*/}

                    <Route path='/cadastro/motivoproblema' exact element={<MotivoProblema />}></Route>
                    <Route path='/cadastro/novoeditarmaterial' exact element={<NovoEditarMaterial />}></Route>

                    <Route path='/planejamento/importacaoordemproducao' exact element={<ImportacaoOrdemProducao />}></Route>
                    <Route path='/planejamento/ordensproducao' exact element={<OrdensProducao />}></Route>
                    <Route path='/planejamento/ordensproducaokanban' exact element={<OrdensProducaoKanban />}></Route>
                    <Route path='/planejamento/problemasproducao' exact element={<ProblemasProducao />}></Route>
                    {/*Esses Route path='' abaixo das págs Internas ñ tem o Link to='' ainda*/}
                    <Route path='/planejamento/detalhesitemproducao' exact element={<DetalhesItemProducao />}></Route>
                    <Route path='/planejamento/detalhesvgs' exact element={<DetalhesVgs />}></Route>
                    <Route path='/planejamento/gerenciamentokanban' exact element={<GerenciamentoKanban />}></Route>

                    <Route path='/manutencao/mapadeposicoes' exact element={<MapaDePosicoes />}></Route>
                    <Route path='/manutencao/informacoesgondola' exact element={<InformacoesGondola />}></Route>
                    <Route path='/manutencao/ocupacaodoarmazem' exact element={<OcupacaoArmazem />}></Route>
                    <Route path='/manutencao/informacoesdotranselevador' exact element={<InformacoesTranselevador />}></Route>
                    {/*Esses Route path='' abaixo das págs Internas ñ tem o Link to='' ainda*/}
                    <Route path='/manutencao/alarmes' exact element={<Alarmes />}></Route>
                    <Route path='/manutencao/gerenciamentokanbanmanutencao' exact element={<GerenciamentoKanbanManutencao />}></Route>
                    <Route path='/manutencao/informacoeslocalizacao' exact element={<InformacoesLocalizacao />}></Route>
                    <Route path='/manutencao/informacoesmesa' exact element={<InformacoesMesa />}></Route>
                    <Route path='/manutencao/testetranslacao' exact element={<TesteTranslacao />}></Route>

                    <Route path='/operacao/producao' exact element={<Producao />}></Route>
                    <Route path='/operacao/recebimentoarmazem' exact element={<RecebimentoArmazem />}></Route>
                    <Route path='/operacao/configuracao' exact element={<ConfiguracaoEstacaoTrabalho />}></Route>
                    {/*Esses Route path='' abaixo das págs Internas ñ tem o Link to='' ainda*/}
                    <Route path='/operacao/detalhesprodpuncionadeira' exact element={<DetalhesProdPuncionadeira />}></Route>
                    <Route path='/operacao/detalhesproducao' exact element={<DetalhesProducao />}></Route>

                    <Route path='/movimentos/filademovimentos' exact element={<ListaMovimentos />}></Route>
                    <Route path='/movimentos/movimentomesadesaida' exact element={<LancarSaidaGondola />}></Route>
                    <Route path='/movimentos/movimentoparaarmazem' exact element={<RetornarGondolaArmazem />}></Route>
                    <Route path='/movimentos/entradagondolavazia' exact element={<EntradaGondolaVazia />}></Route>
                    <Route path='/movimentos/enviarcomandos' exact element={<EnviarComandosPlc />}></Route>

                    <Route path='/dashboard/acompanhamentodeproducao' exact element={<AcompanhamentoProducao />}></Route>
                    <Route path='/dashboard/acompanhamentodeestoque' exact element={<AcompanhamentoEstoque />}></Route>
                    <Route path='/dashboard/acompanhametodefabrica' exact element={<AcompanhamentoFabrica />}></Route>
                    <Route path='/dashboard/acompanhamentodeproducaokanban' exact element={<AcompanhamentoProdKanban />}></Route>
                    <Route path='/dashboard/acompanhamentodeproducaoproduto' exact element={<AcompanhamentoProdProduto />}></Route>

                    <Route path='/relatorios/historicodeordemproducao' exact element={<DadosProducao />}></Route>
                    <Route path='/relatorios/historicodemovimentacao' exact element={<HistoricoMovimentacao />}></Route>
                    <Route path='/relatorios/estoquedeproduto' exact element={<EstoqueMaterial />}></Route>
                    <Route path='/relatorios/historicodegondola' exact element={<HistoricoGondola />}></Route>
                    <Route path='/relatorios/encerramentodeordemproducao' exact element={<EncerramentoOrdem />}></Route>
                    <Route path='/relatorios/historicodeentradaproduto' exact element={<HistoricoEntradaMaterial />}></Route>
                    <Route path='/relatorios/producaopormaquina' exact element={<ProducaoMaquina />}></Route>
                    <Route path='/relatorios/analisedefalhas' exact element={<AnaliseFalhas />}></Route>


                    <Route path='*' exact element={<Pagina404 />}></Route>
                    <Route path='/home' exact element={<Home />}></Route>
                    <Route path='/' exact element={<Login />}></Route>
               </Routes>
            </div>
        </div >
    )
}

export default Rotas