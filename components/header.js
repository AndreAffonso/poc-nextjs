import Link from "next/link";

import styled from 'styled-components'

const Container = styled.header`
  padding: 0 48px;
  height: 80px;
  color: ${({theme}) => theme.colors.white};
  width: 100%;
  display: flex;
  color: white;
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
`

const StyledLink = styled.a`
  color: white;
  font-size: 14px;
  padding: 10px 15px;
`

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Logo = styled.a`
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 48px;
color: ${({theme}) => theme.colors.primary};
  width: 100px;
`


function Header() {

  return (
      <Container >
        <Link href="/">
          <Logo>PIER.</Logo>
        </Link>
        <StyledNav>
            <Link href="/termos">
              <StyledLink>Blog</StyledLink>
            </Link>
            <Link href="/termos">
              <StyledLink>Termos</StyledLink>
            </Link>
            <Link href="/tabela-pipe">
              <StyledLink>Tabela Pipe</StyledLink>
            </Link>
            <Link href="/pedir-reembolso">
              <StyledLink>Pedir Reembolso</StyledLink>
            </Link>
            <Link href="/pedir-reembolso">
              <StyledLink>Dúvidas</StyledLink>
            </Link>
            <Link href="/pedir-reembolso">
              <StyledLink>Login</StyledLink>
            </Link>
        </StyledNav>
      </Container>
  );
}

export default Header;
