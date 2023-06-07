import Image from 'next/image';
import Link from 'next/link';
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
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled('div')`
  flex-grow: 1;
  background-color: #1f1f1f;
`;

const Footer = styled('div')`
  background-color: #222;
  padding: 20px;
`;

const Logo = styled('div')`
  width: 30%;
`

const Links = styled('div')`
  width: 50%;
  display: flex;
  gap: 30px;
  justify-content: center;
  a {
    color: #ed6c54;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    &:hover {
      color: #d75a44;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header>
        <Logo>
          <Link href={'/'} passHref>
            <Image src={'/static/img/CodeRLopezLogo.png'} alt={''} width={250}  height={40} />
          </Link>
        </Logo>
        <Links>
          <Link href={'/'}>
            Home
          </Link>
          <Link href={'/about'}>
            About me
          </Link>
        </Links>
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
