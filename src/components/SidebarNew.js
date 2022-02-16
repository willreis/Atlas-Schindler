import React, { useState } from "react";
import fotoPerfil from "../assets/img/userimg.png";
import atlasLogo from "../assets/img/atlas_logo.png";
import { Link } from "react-router-dom";
import spiLogo from '../assets/img/spi_logo.jpg' 

//react pro sidebar components
import {
  ProSidebar,
  Menu,
  SubMenu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//icons from react icons
import { FaRegClock } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";

import {
  FaUser,
  FaUsers,
  FaProductHunt,
  FaMap,
  FaUserCog,
} from "react-icons/fa";

import {
  BsPrinterFill,
  BsFillPatchExclamationFill,
  BsGraphUp,
  BsFillGearFill,
  BsMenuButtonFill,
  BsArrowsMove,
  BsFillCalendarWeekFill,
  BsCalendar2EventFill,
  BsCalendar2RangeFill,
  BsFillExclamationOctagonFill,
  BsInboxesFill,
} from "react-icons/bs";

import { IoIosPaper } from "react-icons/io";
import { HiOutlineClock } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { VscGitPullRequestClosed } from "react-icons/vsc";

import { BiImport, BiUserCheck } from "react-icons/bi";
import { HiOutlineIdentification } from "react-icons/hi";

import {
  RiStoreFill,
  RiStore2Line,
  RiChatFollowUpFill,
  RiChatFollowUpLine,
  RiUserFollowLine,
} from "react-icons/ri";

import { FiArrowDownLeft } from "react-icons/fi";

import {
  MdOutlineSendToMobile,
  MdFollowTheSigns,
  MdHistoryToggleOff,
} from "react-icons/md";

import {
  AiFillInfoCircle,
  AiOutlineDashboard,
  AiOutlineFileExclamation,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";

import { GiMovementSensor } from "react-icons/gi";
//sidebar css from react-pro-sidebar module
import "react-pro-sidebar/dist/css/styles.css";

const SidebarNew = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
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
              <SubMenu
                title="Dados Pessoais"
                icon={<HiOutlineIdentification />}
              >
                <MenuItem title="Dados Pessoais" icon={<RiLockPasswordLine />}>
                  Alterar Senha
                </MenuItem>
                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
              </SubMenu>
            </Menu>
          </SidebarHeader>
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
                <MenuItem
                  title="Processo"
                  icon={<BsFillPatchExclamationFill />}
                >
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

            <Menu>
              <SubMenu title="Planejamento" icon={<BsGraphUp />}>
                <MenuItem
                  title="Importação de Ordem Produção"
                  icon={<BiImport />}
                >
                  <Link
                    className="link"
                    to="planejamento/importacaoordemproducao"
                  >
                    Importação de Ordem Produção
                  </Link>
                </MenuItem>
                <MenuItem title="Grupo de Acesso" icon={<IoIosPaper />}>
                  <Link className="link" to="/planejamento/ordensproducao">
                    Ordens de Produção
                  </Link>
                </MenuItem>
                <MenuItem title="Impressora" icon={<BsPrinterFill />}>
                  <Link
                    className="link"
                    to="/planejamento/ordensproducaokanban"
                  >
                    Ordens de Produção KANBAN
                  </Link>
                </MenuItem>
                <MenuItem
                  title="Problema de Produção"
                  icon={<AiFillInfoCircle />}
                >
                  <Link className="link" to="/planejamento/problemasproducao">
                    Problema de Produção
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>

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
                <MenuItem
                  title="Ocupação do Armazém"
                  icon={<BsMenuButtonFill />}
                >
                  <Link className="link" to="/manutencao/ocupacaodoarmazem">
                    Ocupação do Armazém
                  </Link>
                </MenuItem>
                <MenuItem
                  title="Informações do Transelevador"
                  icon={<BsFillPatchExclamationFill />}
                >
                  <Link
                    className="link"
                    to="/manutencao/informacoesdotranselevador"
                  >
                    Informações do Transelevador
                  </Link>
                </MenuItem>
              </SubMenu>
            </Menu>

            <Menu>
              <SubMenu title="Operação" icon={<FaUserCog />}>
                <MenuItem title="Produção" icon={<FaUsers />}>
                  Produção
                </MenuItem>
                <MenuItem
                  title="Recebimento Armazém"
                  icon={<BsMenuButtonFill />}
                >
                  Recebimento Armazém
                </MenuItem>
                <MenuItem title="Configuração" icon={<BsFillGearFill />}>
                  Configuração
                </MenuItem>
              </SubMenu>
            </Menu>

            <Menu>
              <SubMenu title="Movimentos" icon={<BsArrowsMove />}>
                <MenuItem
                  title="Fila de Movimentos"
                  icon={<GiMovementSensor />}
                >
                  Fila de Movimentos
                </MenuItem>
                <MenuItem
                  title="Movimento Mesa de Saída"
                  icon={<FiArrowDownLeft />}
                >
                  Movimento Mesa de Saída
                </MenuItem>
                <MenuItem title="Movimento para Armazém" icon={<RiStoreFill />}>
                  Movimento para Armazém
                </MenuItem>
                <MenuItem title="Entrada Gôndola Vazia" icon={<RiStore2Line />}>
                  Entrada Gôndola Vazia
                </MenuItem>
                <MenuItem
                  title="Enviar Comandos"
                  icon={<MdOutlineSendToMobile />}
                >
                  Enviar Comandos
                </MenuItem>
              </SubMenu>
            </Menu>

            <Menu>
              <SubMenu title="Dashboard" icon={<AiOutlineDashboard />}>
                <MenuItem
                  title="Acompanhamento de Produção"
                  icon={<MdFollowTheSigns />}
                >
                  Acompanhamento de Produção
                </MenuItem>
                <MenuItem
                  title="Acompanhamento de Estoque"
                  icon={<RiChatFollowUpFill />}
                >
                  Acompanhamento de Estoque
                </MenuItem>
                <MenuItem
                  title="Acompanhamento de Fábrica"
                  icon={<RiChatFollowUpLine />}
                >
                  Acompanhamento de Fábrica
                </MenuItem>
                <MenuItem
                  title="Acompanhamento de Produção KANBAN"
                  icon={<BiUserCheck />}
                >
                  Acompanhamento de Produção KANBAN
                </MenuItem>
                <MenuItem
                  title="Acompanhamento de Produção Produto"
                  icon={<RiUserFollowLine />}
                >
                  Acompanhamento de Produção Produto
                </MenuItem>
              </SubMenu>
            </Menu>

            <Menu>
              <SubMenu title="Relatórios" icon={<AiOutlineFileExclamation />}>
                <MenuItem
                  title="Acompanhamento de Produção"
                  icon={<HiOutlineClock />}
                >
                  Histórico de Ordem Produção
                </MenuItem>
                <MenuItem
                  title="Histórico de Movimentação"
                  icon={<BsFillCalendarWeekFill />}
                >
                  Histórico de Movimentação
                </MenuItem>
                <MenuItem
                  title="Histórico de Estoque"
                  icon={<BsCalendar2EventFill />}
                >
                  Histórico de Estoque
                </MenuItem>
                <MenuItem
                  title="Estoque de Produto"
                  icon={<BsCalendar2RangeFill />}
                >
                  Estoque de Produto
                </MenuItem>
                <MenuItem title="Histórico de Gondola" icon={<FaRegClock />}>
                  Histórico de Gondola
                </MenuItem>
                <MenuItem
                  title="Encerramento de Ordem de Produção"
                  icon={<VscGitPullRequestClosed />}
                >
                  Encerramento de Ordem de Produção
                </MenuItem>
                <MenuItem
                  title="Histórico de Entrada Produto"
                  icon={<MdHistoryToggleOff />}
                >
                  Histórico de Entrada Produto
                </MenuItem>
                <MenuItem title="Produção por Máquina" icon={<FaProductHunt />}>
                  Produção por Máquina
                </MenuItem>
                <MenuItem
                  title="Análise de Falhas"
                  icon={<BsFillExclamationOctagonFill />}
                >
                  Análise de Falhas
                </MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <div Style="text-align:center; padding:30px 0">
                <img src={spiLogo} alt='spi-logo' Style='width:80%; border-radius: 10px' />
            </div>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
export default SidebarNew;
