import React from 'react';
import { RiLoginCircleFill } from "react-icons/ri";                                //Importando 7 ícones do react-icons (Menu da Atlas).
import { IoIosPaper } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsArrowsMove } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { GoReport } from "react-icons/go";
//Os 2 Arrows.
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
//Ícones do SubMenu:
import { AiOutlineUser } from "react-icons/ai";
import { MdGroups } from "react-icons/md";
import { AiFillPrinter } from "react-icons/ai";
import { SiProcesswire } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { MdReportProblem } from "react-icons/md";
import { BsMap } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsFillMenuButtonFill } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineReceiptRefund } from "react-icons/hi";
import { GiMovementSensor } from "react-icons/gi";
import { MdTransitEnterexit } from "react-icons/md";
import { CgMoveUp } from "react-icons/cg";
import { MdOutlineSettingsInputComponent } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { MdFollowTheSigns } from "react-icons/md";
import { RiChatFollowUpFill } from "react-icons/ri";
import { RiChatFollowUpLine } from "react-icons/ri";
import { RiUserFollowFill } from "react-icons/ri";
import { RiUserFollowLine } from "react-icons/ri";
import { MdHistoryToggleOff } from "react-icons/md";
import { RiFileHistoryLine } from "react-icons/ri";
import { SiShutterstock } from "react-icons/si";
import { MdOutlineSmsFailed } from "react-icons/md";

export const SidebarData = [                                                       //Array de Objetos
    {
        cName: 'nav-text',                                                         //A Propriedade dos Objetos 'cName' é className.
        title: 'Cadastro',
        path: '/cadastro',
        icon: <RiLoginCircleFill />,
        iconClosed: <AiOutlineArrowDown />,
        iconOpened: <AiOutlineArrowUp />,
        subNav: [
            {
                title: 'Usuário',
                path: '/cadastro/usuario',
                icon: <AiOutlineUser />,
            },
            {
                title: 'Grupos de Acesso',
                path: '/cadastro/gruposdeacesso',
                icon: <MdGroups />,
            },
            {
                title: 'Impressora',
                path: '/cadastro/impressora',
                icon: <AiFillPrinter />,
            },
            {
                title: 'Processo',
                path: '/cadastro/processo',
                icon: <SiProcesswire />,
            },
            {
                title: 'Máquina',
                path: '/cadastro/maquina',
                icon: <FaWpforms />,
            },
            {
                title: 'Produto',
                path: '/cadastro/produto',
                icon: <FaProductHunt />,
            },
        ]
    },

    {
        cName: 'nav-text',
        title: 'Planejamento',
        path: '/planejamento',
        icon: <IoIosPaper />,
        iconClosed: <AiOutlineArrowDown />,
        iconOpened: <AiOutlineArrowUp />,
        subNav: [
            {
                title: 'Importação de Ordem Produção',
                path: '/planejamento/importacaoordemproducao',
                icon: <BiImport />,
            },
            {
                title: 'Ordens de Produção',
                path: '/planejamento/ordensproducao',
                icon: <MdProductionQuantityLimits />,
            },
            {
                title: 'Ordens de Produção KANBAN',
                path: '/planejamento/ordensdeproducaokanban',
                icon: <MdProductionQuantityLimits />,
            },
            {
                title: 'problemas de Produção',
                path: 'planejamento/problemasproducao',
                icon: <MdReportProblem />,
            },
        ]
    },

    {
        cName: 'nav-text',
        title: 'Manutenção',
        path: '/manutencao',
        icon: <FiSettings />,
        iconClosed: <AiOutlineArrowDown />,
        iconOpened: <AiOutlineArrowUp />,
        subNav: [
            {
                title: 'Mapa de Posições',
                path: '/manutencao/mapadeposicoes',
                icon: <BsMap />,
            },
            {
                title: 'Informações da Gôndola',
                path: '/manutencao/informacoesgondola',
                icon: <IoNewspaperOutline />,
            },
            {
                title: 'Ocupação do Armazém',
                path: '/manutencao/ocupacaodoarmazem',
                icon: <BsFillMenuButtonFill />,
            },
            {
                title: 'Informações do Transelevador',
                path: '/manutencao/informacoesdotranselevador',
                icon: <BsInfoCircle />,
            },
        ]
    },

    {
        cName: 'nav-text',
        title: 'Operação',
        path: '/operacao',
        icon: <RiUserSettingsLine />,
        iconClosed: <AiOutlineArrowDown />,
        iconOpened: <AiOutlineArrowUp />,
        subNav: [
            {
                title: 'Produção',
                path: '/operacao/producao',
                icon: <HiOutlineUserGroup />,
            },
            {
                title: 'Recebimento Armazém',
                path: '/operacao/recebimentoarmazem',
                icon: <HiOutlineReceiptRefund />,
            },
            {
                title: 'Configuração',
                path: '/operacao/configuracao',
                icon: <FiSettings />,
            },
        ]
    },

    {
        cName: 'nav-text',
        title: 'Movimentos',
        path: '/movimentos',
        icon: <BsArrowsMove />,
        iconClosed: <AiOutlineArrowDown />,
        iconOpened: <AiOutlineArrowUp />,
        subNav: [
            {
                title: 'Fila de Movimentos',
                path: '/movimentos/filademovimentos',
                icon: <GiMovementSensor />,
            },
            {
                title: 'Movimento Mesa de Saída',
                path: '/movimentos/movimentomesadesaida',
                icon: <MdTransitEnterexit />,
            },
            {
                title: 'Movimento para Armazém',
                path: '/movimentos/movimentoparaarmazem',
                icon: <CgMoveUp />,
            },
            {
                title: 'Entrada Gôndola Vazia',
                path: '/movimentos/entradagondolavazia',
                icon: <MdOutlineSettingsInputComponent />,
            },
            {
                title: 'Enviar Comandos',
                path: '/movimentos/enviarcomandos',
                icon: <FiSend />,
            },
        ]
    },

    {
        cName: 'nav-text',
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
        iconClosed: <AiOutlineArrowDown />,
        iconOpened: <AiOutlineArrowUp />,
        subNav: [
            {
                title: 'Acompanhamento de Produção',
                path: '/dashboard/acompanhamentodeproducao',
                icon: <MdFollowTheSigns />,
            },
            {
                title: 'Acompanhamento de Estoque',
                path: '/dashboard/acompanhamentodeestoque',
                icon: <RiChatFollowUpFill />,
            },
            {
                title: 'Acompanhamento de Fábrica',
                path: '/dashboard/acompanhametodefabrica',
                icon: <RiChatFollowUpLine />,
            },
            {
                title: 'Acompanhamento de Produção Kanban',
                path: '/dashboard/acompanhamentodeproducaokanban',
                icon: <RiUserFollowFill />,
            },
            {
                title: 'Acompanhamento de Produção Produto',
                path: '/dashboard/acompanhamentodeproducaoproduto',
                icon: <RiUserFollowLine />,
            },
        ]
    },

    {
        cName: 'nav-text',
        title: 'Relatórios',
        path: '/relatorios',
        icon: <GoReport />,
        iconClosed: <AiOutlineArrowDown />,
        iconOpened: <AiOutlineArrowUp />,
        subNav: [
            {
                title: 'Histórico de Ordem Produção',
                path: '/relatorios/historicodeordemproducao',
                icon: <MdHistoryToggleOff />,
            },
            {
                title: 'Histórico de Movimentação',
                path: '/relatorios/historicodemovimentacao',
                icon: <MdHistoryToggleOff />,
            },
            {
                title: 'Estoque de Produto',
                path: '/relatorios/estoquedeproduto',
                icon: <SiShutterstock />,
            },
            {
                title: 'Histórico de Gôndola',
                path: '/relatorios/historicodegondola',
                icon: <MdHistoryToggleOff />,
            },
            {
                title: 'Encerramento de Ordem Produção',
                path: '/relatorios/encerramentodeordemproducao',
                icon: <RiFileHistoryLine />,
            },
            {
                title: 'Histórico de Entrada Produto',
                path: '/relatorios/historicodeentradaproduto',
                icon: <MdHistoryToggleOff />,
            },
            {
                title: 'Produção por Máquina',
                path: '/relatorios/producaopormaquina',
                icon: <FaProductHunt />,
            },
            {
                title: 'Análise de Falhas',
                path: '/relatorios/analisedefalhas',
                icon: <MdOutlineSmsFailed />,
            },
        ]
    }
]