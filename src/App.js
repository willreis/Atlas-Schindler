import React from 'react';
import styled from 'styled-components'
import { IconContext } from 'react-icons/lib'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Rotas from './Rotas';



//2ª grid-template-areas.
const Container = styled.div` 
    display: grid;                                                                        
    grid-template-columns: auto 1fr;  
    grid-template-rows: auto 1fr;
    grid-template-areas: 
    "sidebar header"
    "sidebar content"; 
    min-height: 100vh;
`

function App() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: '1.2rem' }}>
      <Router>
        <Container>
          <Header Style={"grid-area: header;"} />                                        {/*1ª grid-area no elemento*/}
          <Sidebar Style={"grid-area: sidebar;"} />
          <Rotas Style={"grid-area: content"} />
        </Container>
      </Router>
    </IconContext.Provider>
  )
}

export default App;