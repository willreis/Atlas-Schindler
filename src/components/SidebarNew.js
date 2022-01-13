import React, { useState } from "react";
import atlasLogo from "../assets/img/atlas_logo.png"; //Na img tem css inline

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
import {FaRegClock } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,

} from "react-icons/fi";

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
} from "react-icons/bs";

import { IoIosPaper } from "react-icons/io";
import { HiOutlineClock } from "react-icons/hi";
import { VscGitPullRequestClosed } from "react-icons/vsc";

import { BiImport, BiUserCheck } from "react-icons/bi";
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
      <div id="sideBar">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <img src={atlasLogo} alt="atlas-logo" className="logoAtlas" />
            </div>
            <div className="closemenu" onClick={menuIconClick} alt="Menu">
              {menuCollapse ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <SubMenu title="Cadastro" icon={<FiHome />}>
                <MenuItem title="Usuario" icon={<FaUser />}>
                  Usuario
                </MenuItem>
                <MenuItem title="Grupo de Acesso" icon={<FaUsers />}>
                  Grupo de Acesso
                </MenuItem>
                <MenuItem title="Impressora" icon={<BsPrinterFill />}>
                  Impressora
                </MenuItem>
                <MenuItem
                  title="Processo"
                  icon={<BsFillPatchExclamationFill />}
                >
                  Processo
                </MenuItem>
                <MenuItem title="Maquina" icon={<IoIosPaper />}>
                  Maquina
                </MenuItem>
                <MenuItem title="Produto" icon={<FaProductHunt />}>
                  Produto
                </MenuItem>
              </SubMenu>
            </Menu>

            <Menu iconShape="square">
              <SubMenu title="Planejamento" icon={<BsGraphUp />}>
                <MenuItem
                  title="Importação de Ordem Produção"
                  icon={<BiImport />}
                >
                  Importação de Ordem Produção
                </MenuItem>
                <MenuItem title="Grupo de Acesso" icon={<IoIosPaper />}>
                  Ordens de Produção
                </MenuItem>
                <MenuItem title="Impressora" icon={<BsPrinterFill />}>
                  Ordens de Produção KANBAN
                </MenuItem>
                <MenuItem
                  title="Problema de Produção"
                  icon={<AiFillInfoCircle />}
                >
                  Problema de Produção
                </MenuItem>
              </SubMenu>
            </Menu>

            <Menu iconShape="square">
              <SubMenu title="Manutenção" icon={<BsFillGearFill />}>
                <MenuItem title="Mapa de Posições" icon={<FaMap />}>
                  Mapa de Posições
                </MenuItem>
                <MenuItem title="Informações de Gôndola" icon={<IoIosPaper />}>
                  Informações de Gôndola
                </MenuItem>
                <MenuItem
                  title="Ocupação do Armazém"
                  icon={<BsMenuButtonFill />}
                >
                  Ocupação do Armazém
                </MenuItem>
                <MenuItem
                  title="Informações do Transelevador"
                  icon={<BsFillPatchExclamationFill />}
                >
                  Informações do Transelevador
                </MenuItem>
              </SubMenu>
            </Menu>

            <Menu iconShape="square">
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

            <Menu iconShape="square">
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

            <Menu iconShape="square">
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

            <Menu iconShape="square">
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
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};
export default SidebarNew;
