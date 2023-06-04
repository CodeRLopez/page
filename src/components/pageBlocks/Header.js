import React from 'react';
import styled from 'styled-components';

// Estilos del layout
const LayoutContainer = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;

const Header = styled('div')`
  background-color: #222;
  padding: 20px;
`;

const Main = styled('div')`
  flex-grow: 1;
  padding: 20px;
  background-color: #1f1f1f;
`;

const Footer = styled('div')`
  background-color: #f2f2f2;
  padding: 20px;
`;

const Logo = styled('div')`
  width: 210px;
  height: 35px;
  background-image: url('/static/img/CodeRLopezLogo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 20px;
`

// Componente del layout
const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header>
        {/* Contenido del header */}
        <Logo />
      </Header>
      <Main>
        {/* Contenido principal */}
        {children}
      </Main>
      <Footer>
        {/* Contenido del footer */}
        <p>Footer</p>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
