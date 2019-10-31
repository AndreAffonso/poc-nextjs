import Link from 'next/link';

import styled from 'styled-components';

const Container = styled.footer`
  background: ${({ theme }) => theme.colors.grayBackground};
  width: 100%;
  border-top: 1px solid #e8e8e8;
  padding: 56px 40px;
  padding-bottom: 96px;
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 15%;
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 56px;
`;

const Media = styled.div`
  display: flex;
  flex-direction: column;
`;

const KnowMore = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const A = styled.a`
  margin: 16px;
  padding: 16px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 40px;
  font-size: 15px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Title = styled.h6`
  margin-bottom: 16px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
`;

const Logo = styled.a`
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 2px;
  line-height: 48px;
  color: ${({ theme }) => theme.colors.text};
  width: 100px;
`;

function Footer() {
  return (
    <Container>
      <Flex>
        <Media>
          <Logo>PIER</Logo>
          <div>
            <A> Facebook</A>
            <A>Instagram</A>
          </div>

          <img
            alt="Midia"
            src="https://d233wbzwz46uqm.cloudfront.net/assets/img-app-store-badge-d1825228643cd8ce1a8103fe5427296523c5cf9959876f899883dbee262bf6ab.svg"
            alt="Img app store badge"
            data-original="https://d233wbzwz46uqm.cloudfront.net/assets/img-app-store-badge-d1825228643cd8ce1a8103fe5427296523c5cf9959876f899883dbee262bf6ab.svg"
          />
          <img
            alt="Midia"
            src="https://d233wbzwz46uqm.cloudfront.net/assets/img-google-store-badge-0b178e7ab017e32d02f3fe85b386a4ed5886b95a9e6c0ce7f1b306dbc62275bd.png"
            alt="Img google store badge"
            data-original="https://d233wbzwz46uqm.cloudfront.net/assets/img-google-store-badge-0b178e7ab017e32d02f3fe85b386a4ed5886b95a9e6c0ce7f1b306dbc62275bd.png"
            height={42}
          />
        </Media>
        <KnowMore>
          <Title>Carreiras</Title>
          <A>Pedir reembolso</A>
          <A>Tabela Pipe</A>
          <A>Termos</A>
          <A>Blog</A>
        </KnowMore>
        <Contact>
          <Title>Contato</Title>
          <A>Chat</A>
          <A>Email</A>
          <A>Imprensa</A>
        </Contact>
      </Flex>
    </Container>
  );
}

export default Footer;
