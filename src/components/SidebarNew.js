import React, { useState } from "react";
import { ProSidebar, Menu, SubMenu, MenuItem, SidebarHeader, SidebarFooter, SidebarContent, } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { FaUser, FaUsers, FaProductHunt, FaMap, FaUserCog } from "react-icons/fa";
import { BsPrinterFill, BsFillPatchExclamationFill, BsGraphUp, BsFillGearFill, BsMenuButtonFill, BsArrowsMove, BsFillCalendarWeekFill, BsCalendar2EventFill, BsCalendar2RangeFill, BsFillExclamationOctagonFill, BsInboxesFill } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { HiOutlineClock } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscGitPullRequestClosed } from "react-icons/vsc";
import { BiImport, BiUserCheck } from "react-icons/bi";
import { HiOutlineIdentification } from "react-icons/hi";
import { RiStoreFill, RiStore2Line, RiChatFollowUpFill, RiChatFollowUpLine, RiUserFollowLine } from "react-icons/ri";
import { FiArrowDownLeft } from "react-icons/fi";
import { MdOutlineSendToMobile, MdFollowTheSigns, MdHistoryToggleOff } from "react-icons/md";
import { AiFillInfoCircle, AiOutlineDashboard, AiOutlineFileExclamation, AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { GiMovementSensor } from "react-icons/gi";
import atlasLogo from "../assets/img/atlas_logo.png";
import spiLogo from "../assets/img/spi_logo2.png";
import fotoPerfil from "../assets/img/userimg.png";
import "react-pro-sidebar/dist/css/styles.css";

const SidebarNew = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const logout = () => {
    window.location.href = "/login";
  };
  return (
    <>
      <div className="sideBar" Style="grid-area:sidebar">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <img src={atlasLogo} alt="atlas-logo" className="logoAtlas" />
            </div>

            <hr />
            <div className="closemenu" onClick={menuIconClick} alt="Menu">
              {menuCollapse ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            </div>
            <div className="fotoPerfilBox">
              <img src={fotoPerfil} alt="fotoPerfil" className="fotoUsuario" />
              <ul className="dadosPessoais">
                <li>Julio César</li>
                <li>Operador de Máquinas</li>
              </ul>
            </div>
            <Menu>
              <SubMenu title="Dados Pessoais" icon={<HiOutlineIdentification />}>
                <MenuItem title="Dados Pessoais" icon={<RiLockPasswordLine />}>
                  Alterar Senha
                </MenuItem>
                <MenuItem icon={<FiLogOut />} onClick={logout}>
                  Logout
                </MenuItem>
              </SubMenu>
            </Menu>
          </SidebarHeader>

          {/*Cadastro*/}
          <SidebarContent>
            <Menu>
              <SubMenu title="Cadastro" icon={<FiHome />}>
                <MenuItem title="Usuario" icon={<FaUser />}>
                  <Link className="link" to="/cadastro/usuarios">
                    Usuario
                  </Link>
                </MenuItem>
                <MenuItem title="Grupo de Acesso" icon={<FaUsers />}>
                  <Link className="link" to="/cadastro/gruposdeacesso">
                    Grupo de Acesso
                  </Link>
                </MenuItem>
                <MenuItem title="Impressora" icon={<BsPrinterFill />}>
                  <Link className="link" to="/cadastro/impressora">
                    Impressora
                  </Link>
                </MenuItem>
                <MenuItem title="Processo" icon={<BsFillPatchExclamationFill />}>
                  <Link className="link" to="/cadastro/processo">
                    Processo
                  </Link>
                </MenuItem>
                <MenuItem title="Maquina" icon={<IoIosPaper />}>
                  <Link className="link" to="/cadastro/maquina">
                    Maquina
                  </Link>
                </MenuItem>
                <MenuItem title="Material" icon={<BsInboxesFill />}>
                  <Link className="link" to="/cadastro/material">
                    Material
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>

            {/*Planejamento*/}
            <Menu>
              <SubMenu title="Planejamento" icon={<BsGraphUp />}>
                <MenuItem title="Importação de Ordem Produção" icon={<BiImport />}>
                  <Link className="link" to="/planejamento/importacaoordemproducao">
                    Importação de Ordem Produção
                  </Link>
                </MenuItem>
                <MenuItem title="Grupo de Acesso" icon={<IoIosPaper />}>
                  <Link className="link" to="/planejamento/ordensparaproducao">
                    Ordens para Produção
                  </Link>
                </MenuItem>
                <MenuItem title="Impressora" icon={<BsPrinterFill />}>
                  <Link className="link" to="/planejamento/ordensproducaokanban">
                    Ordens de Produção KANBAN
                  </Link>
                </MenuItem>
                <MenuItem title="Problema de Produção" icon={<AiFillInfoCircle />}>
                  <Link className="link" to="/planejamento/problemasproducao">
                    Problema de Produção
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>

            {/*Manutenção*/}
            <Menu>
              <SubMenu title="Manutenção" icon={<BsFillGearFill />}>
                <MenuItem title="Mapa de Posições" icon={<FaMap />}>
                  <Link className="link" to="/manutencao/mapadeposicoes">
                    Mapa de Posições
                  </Link>
                </MenuItem>
                <MenuItem title="Informações de Gôndola" icon={<IoIosPaper />}>
                  <Link className="link" to="/manutencao/informacoesgondola">
                    Informações de Gôndola
                  </Link>
                </MenuItem>
                <MenuItem title="Ocupação do Armazém" icon={<BsMenuButtonFill />}>
                  <Link className="link" to="/manutencao/ocupacaodoarmazem">
                    Ocupação do Armazém
                  </Link>
                </MenuItem>
                <MenuItem title="Informações do Transelevador" icon={<BsFillPatchExclamationFill />} >
                  <Link className="link" to="/manutencao/informacoesdotranselevador" >
                    Informações do Transelevador
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>

            {/*Operação*/}
            <Menu>
              <SubMenu title="Operação" icon={<FaUserCog />}>
                <MenuItem title="Produção" icon={<FaUsers />}>
                  <Link className="link" to="/operacao/producao">
                    Produção
                  </Link>
                </MenuItem>
                <MenuItem title="Recebimento Armazém" icon={<BsMenuButtonFill />}>
                  <Link className="link" to="/operacao/recebimentoarmazem">
                    Recebimento Armazém
                  </Link>
                </MenuItem>
                <MenuItem title="Configuração" icon={<BsFillGearFill />}>
                  <Link className="link" to="/operacao/configuracaoestacaotrabalho">
                    Configuração
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>

            {/*Movimentos*/}
            <Menu>
              <SubMenu title="Movimentos" icon={<BsArrowsMove />}>
                <MenuItem title="Fila de Movimentos" icon={<GiMovementSensor />} >
                  <Link className='link' to='/movimentos/filademovimentos'>
                    Fila de Movimentos
                  </Link>
                </MenuItem>
                <MenuItem title="Movimento Mesa de Saída" icon={<FiArrowDownLeft />}>
                  <Link className='link' to='/movimentos/movimentomesadesaida' >
                    Movimento Mesa de Saída
                  </Link>
                </MenuItem>
                <MenuItem title="Movimento para Armazém" icon={<RiStoreFill />}>
                  <Link className='link' to='/movimentos/movimentoparaarmazem' >
                    Movimento para Armazém
                  </Link>
                </MenuItem>
                <MenuItem title="Entrada Gôndola Vazia" icon={<RiStore2Line />}>
                  <Link className='link' to='/movimentos/entradagondolavazia' >
                    Entrada Gôndola Vazia
                  </Link>
                </MenuItem>
                <MenuItem title="Enviar Comandos" icon={<MdOutlineSendToMobile />} >
                  <Link className='link' to='/movimentos/enviarcomandos' >
                    Enviar Comandos
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>

            {/*Dashboard*/}
            <Menu>
              <SubMenu title="Dashboard" icon={<AiOutlineDashboard />}>
                <MenuItem title="Acompanhamento de Produção" icon={<MdFollowTheSigns />} >
                  <Link className='link' to='/dashboard/acompanhamentodeproducao'>
                    Acopanhamento de Produção
                  </Link>
                </MenuItem>
                <MenuItem title="Acompanhamento de Estoque" icon={<RiChatFollowUpFill />}>
                  <Link className='link' to='/dashboard/acompanhamentodeestoque'>
                    Acompanhamento de Estoque
                  </Link>
                </MenuItem>
                <MenuItem title="Acompanhamento de Fábrica" icon={<RiChatFollowUpLine />}>
                  <Link className='link' to='/dashboard/acompanhametodefabrica'>
                    Acompanhamento de Fábrica
                  </Link>
                </MenuItem>
                <MenuItem title="Acompanhamento de Produção KANBAN" icon={<BiUserCheck />}>
                  <Link className='link' to='/dashboard/acompanhamentodeproducaokanban'>
                    Acompanhamento de Produção Kanban
                  </Link>
                </MenuItem>
                <MenuItem title="Acompanhamento de Produção Produto" icon={<RiUserFollowLine />} >
                  <Link className='link' to='/dashboard/acompanhamentodeproducaoproduto'>
                    Acompanhamento de Produção Produto
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>

            {/*Relatórios*/}
            <Menu>
              <SubMenu title="Relatórios" icon={<AiOutlineFileExclamation />}>
                <MenuItem title="Acompanhamento de Produção" icon={<HiOutlineClock />}>
                  <Link className='link' to='/relatorios/historicodeordemproducao'>
                    Histórico de Ordem Produção
                  </Link>
                </MenuItem>
                <MenuItem title="Histórico de Movimentação" icon={<BsFillCalendarWeekFill />} >
                  <Link className='link' to='/relatorios/historicodemovimentacao'>
                    Histórico de Movimentação
                  </Link>
                </MenuItem>
                <MenuItem title="Histórico de Estoque" icon={<BsCalendar2EventFill />}>
                  <Link className='link' to='/relatorios/estoquedeproduto'>
                    Estoque de Produto
                  </Link>
                </MenuItem>
                <MenuItem title="Estoque de Produto" icon={<BsCalendar2RangeFill />} >
                  <Link className='link' to='/relatorios/historicodegondola'>
                    Histórico de Gôndola
                  </Link>
                </MenuItem>
                <MenuItem title="Histórico de Gondola" icon={<FaRegClock />}>
                  <Link className='link' to='/relatorios/encerramentodeordemproducao'>
                    Encerramento de Ordem de Produção
                  </Link>
                </MenuItem>
                <MenuItem title="Encerramento de Ordem de Produção" icon={<VscGitPullRequestClosed />} >
                  <Link className='link' to='/relatorios/historicodeentradaproduto'>
                    Histórico de Entrada de Produto
                  </Link>
                </MenuItem>
                <MenuItem title="Histórico de Entrada Produto" icon={<MdHistoryToggleOff />} >
                  <Link className='link' to='/relatorios/producaopormaquina'>
                    Produção por Máquina
                  </Link>
                </MenuItem>
                <MenuItem title="Produção por Máquina" icon={<FaProductHunt />}>
                  <Link className='link' to='/relatorios/analisedefalhas'>
                    Análise de Falhas
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>

          <SidebarFooter>
            <div Style="text-align:center; padding:30px 0">
              <img src={spiLogo} alt="spi-logo" Style="width:80%; border-radius: 10px"
              />
            </div>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
export default SidebarNew;