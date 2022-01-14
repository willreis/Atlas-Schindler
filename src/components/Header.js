import React from 'react'
import styled from 'styled-components'                           //styled-components faz com que o CSS vire um Componente.
import spiLogo from '../assets/img/spi_logo.jpg'                 //Na img tem css inline

const Nav = styled.div`
    background-color: #999;
    height: 100px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const DivP = styled.p`
    background-color: #999;
    color: #fff; 
    font-size: 2rem;
`

function Header(props) {
    return (
        <div {...props}>
            <Nav>
                <DivP>
                    Atlas Schindler
                </DivP>
                <div>
                    <img src={spiLogo} alt='spi-logo' Style='height: 60px; border-radius: 6px;' />
                </div>
            </Nav>
        </div>
    )
}

export default Header