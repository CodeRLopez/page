import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

// Estilos del layout
const LayoutContainer = styled('div')`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
`;

const Header = styled('div')`
  background-color: #222;
  padding: 10px;
`;

const Main = styled('div')`
  flex-grow: 1;
  background-color: #1f1f1f;
`;

const Footer = styled('div')`
  background-color: #222;
  padding: 20px;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header>
        <Image src={'/static/img/CodeRLopezLogo.png'} alt={''} width={250}  height={40} />
      </Header>
      <Main>
        {children}
      </Main>
      <Footer>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
