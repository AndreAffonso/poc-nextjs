import Link from "next/link";

import styled from 'styled-components'

import Title from '../Title'

const Container = styled.section`
    display: flex;
    width: 100%;
    padding: 96px 120px;
    align-items: flex-start;
    ${({theme}) => theme.colors.text}
`

const LeftSection = styled.div`
  flex-basis: 50%;
`

const RightSection = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`

const P = styled.p`
  font-size: 20px;
  line-height: 32px;
  font-weight: normal;
`

const Content = styled.div`
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Emoji = styled.span`
  font-size: 45px;
  margin-right: 40px;

`

const Line = styled.div`
  height: 1px;
  background-color: #e8e8e8;
  margin-top: 56px;
`

const SubTitle = styled.h6`
    margin-top: 56px;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    line-height: 26px;
    letter-spacing: 0.2px;
`

const SubSection = styled.div`
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
    color: #303042;
    margin-bottom: 24px;
`

function HouOurProtectionWorks({fontSize, fontColor, children}) {
  return (
      <Container>
         <LeftSection>
            
            <Title>Proteção contra roubo e todos os tipos de furtos</Title> 
         </LeftSection>
         <RightSection>

            <Content>
              <Emoji>😁</Emoji> <P>Cobrimos celulares usados, comprados no exterior e sem nota-fiscal.</P>
            </Content>

            <Content>
              <Emoji>😉</Emoji> <P>Seu pagamento é mensal e você pode cancelar quando quiser!</P>
            </Content>

            <Content>
              <Emoji>😎</Emoji> <P>Contratação em minutos. Ativou o aplicativo, você já está segurado.</P>
            </Content>
            <Line/>
            <div>
              <SubTitle>O que não cobrimos</SubTitle>
              <SubSection>Danos físicos (Quebrou a tela ou danificou o aparelho)</SubSection>
              <SubSection>Perdas (Perdeu seu celular ou não sabe onde colocou)</SubSection>
            </div>

         </RightSection>
      </Container>
   
  );
}

Title.defaultProps = {
  fontColor: '#333',
  fontSize: '40px'
}

export default HouOurProtectionWorks;
