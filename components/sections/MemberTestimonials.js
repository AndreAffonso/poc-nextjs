import Link from 'next/link';

import styled from 'styled-components';

import Title from '../Title';

const Container = styled.section`
  display: flex;
  width: 100%;
  padding: 96px 120px;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.grayBackground};
`;

const LeftSection = styled.div`
  flex-basis: 50%;
  padding-right: 6%;
`;

const RightSection = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`;

const P = styled.p`
  font-size: 20px;
  line-height: 32px;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
`;

const A = styled.a`
  display: block;
  font-size: 17px;
  font-weight: 600;
  line-height: 24px;
  color: #5b5adb;
`;

const Line = styled.div`
  height: 1px;
  background-color: #e8e8e8;
  margin-top: 56px;
`;

const SubTitle = styled.h6`
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  width: 70%;
  margin: 0;
`;

const SubSection = styled.div`
  display: flex;
`;

const NumberOfMembers = styled.h2`
  font-size: 120px;
  line-height: 100px;
  letter-spacing: -1.5px;
  margin: 0;
`;

const Card = styled.div`
  margin-right: 24px;
  padding: 24px;
  min-width: 100%;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div``;

const Name = styled.span`
  font-weight: 800;
`;

const Img = styled.img`
  border-radius: 50%;
  margin-right: 16px;
`;

const Text = styled.p``;

function MemberTestimonials({ fontSize, fontColor, children }) {
  return (
    <Container>
      <LeftSection>
        <NumberOfMembers>+ 7500</NumberOfMembers>
        <P>Pessoas seguradas em nossa comunidade 🎉</P>
      </LeftSection>
      <RightSection>
        <Card>
          <Header>
            <Img
              alt="Cliente da pier satisfeito"
              src="https://d233wbzwz46uqm.cloudfront.net/assets/testimonials/dany_prado-6018aecef1c112764c208b2e79dc95fe9f5dc4d1d3a19f0317af0f45fb0fc047.jpg"
            />
            <Name>Dany Prado</Name>
          </Header>
          <Text>
            Sem dúvidas, a melhor seguradora do mundo! Sem burocracia, sem nada sistemático, tudo de uma maneira bem
            humana e direta! O reembolso foi o mais rápido que poderia ser, e o atendimento do João foi simplesmente
            perfeito! Fica aqui meu agradecimento a empresa e ao João que me atendeu super bem! Muito MUITO obrigado!
          </Text>
        </Card>
      </RightSection>
    </Container>
  );
}

export default MemberTestimonials;
