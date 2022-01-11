import React, { useState } from 'react'
import styled from 'styled-components'                           //styled-components faz com que o CSS vire um Componente.
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import atlasLogo from '../assets/img/atlas_logo.png'             //Na img tem css inline
import userLogo from '../assets/img/user_logo.png'               //Na img tem css inline

const SidebarNav = styled.nav`
    background-color: #999;
    width: 220px;
    height: 100%;
    display: flex;
    padding-top: 0.5rem;
    flex-direction: column;
    // justify-content: stretch;
    // left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    // transition: 350ms;
    // z-index: 10;
`

const SidebarWrap = styled.div`
    width: 100%;
    // overflow-y: scroll;
    // flex-grow: 1; 
`

const UserContainer = styled.div`
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    margin: 1rem 1.4rem 1rem 1.4rem;
    padding: 0.6rem;
    display: flex;
    justify-content: center;
`

function Sidebar(props) {
    const [sidebar, setSidebar] = useState(true)

    // const showSideBar = () => setSidebar(!sidebar)

    return (
        <div {...props}>
            <SidebarNav sidebar={sidebar} >
                <img src={atlasLogo} alt='atlas-logo' Style='width: 155px; height: 76px; margin-left: 2rem; background-color: #fff; padding: 10px; border-radius: 8px' />
                <UserContainer>
                    <img src={userLogo} alt='user-logo' Style='width: 80px; height: 76px; border-radius: 8px;' />
                </UserContainer>
                <SidebarWrap>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;       //Map do SidebarData será feito nesse local da tela E o SubMenu aqui logo abaixo.
                    })}
                </SidebarWrap>
            </SidebarNav>
        </div >
    )
}

export default Sidebar