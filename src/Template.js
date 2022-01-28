import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons/lib";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Rotas from "./Rotas";
import SidebarNew from "./components/SidebarNew";

//2ª grid-template-areas.
const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar content";
  min-height: 100vh;
`;

function Template() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: "1.2rem" }}>
      <Router>
        <Container>
          <Rotas Style={"grid-area: content"} />
          <Header Style={"grid-area: header;"} />
          <SidebarNew Style={"grid-area: sidebar"} />
        </Container>
      </Router>
    </IconContext.Provider>
  );
}

export default Template;
