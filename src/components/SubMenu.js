import React, { useState } from 'react'
import { Link } from 'react-router-dom'                          //react-router-dom
import styled from 'styled-components'                           //styled-components faz com que o CSS vire um Componente.

//Como é um Link do react-router-dom, se chama entre Parêteses.
//Hover se chama com &.
const SidebarLink = styled(Link)`                      
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    text-decoration: none;
    height: 60px;
    font-size: 1rem;

    &:hover{
        background-color: #666;
        cursor: pointer;
        color: #fff;
    }
`

const SidebarLabel = styled.span`
    margin-left: 12px;
`

const DropdownLink = styled(Link)`
    background: #444;
    color: #fff;
    height: 60px;
    margin-left: -2rem;
    padding-left: 2.8rem;
    display: flex;
    align-items: center;
    list-style: none;
    text-decoration: none;
    font-size: 14px;

    &:hover{
        background-color: #000;
        cursor: pointer;
        color: #fff;
    }
`

const SubMenu = ({ item }) => {                                                  //Prop item será passada para filtrar o path, icon e title.
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>                                                                       {/*Ele já vai para o Sidebar.js(Pai) Estilizado*/}
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>     {/*Ele tem subNav?*/}
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>

                <div>                                                             {/*Só terá Arrow onde houber subNav*/}
                    {item.subNav && subnav
                        ? item.iconOpened                                         //Se tiver, mostra o ícone de seta pra cima.
                        : item.subNav                                             //Senão:
                            ? item.iconClosed                                     //mostra a seta pra baixo.
                            : null}                                               {/*E ñ retorna nada*/}
                </div>
            </SidebarLink>

            {subnav &&
                item.subNav.map((item, index) => {                                //*Eu cliquei e tem uma subNav? Então faço um Map pra chegar no Sidebar.js já Mapeado.
                    return (
                        <DropdownLink to={item.path} key={index}>                 {/*Filtrando com o item*/}
                            {item.icon}                                           {/*Novamente as 2 linhas*/}
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    )
                })}

        </>
    )
}

export default SubMenu