import Link from "next/link";

import styled from 'styled-components'

import Title from '../Title'

const Container = styled.section`
    display: flex;
    width: 100%;
    padding: 96px 120px;
    align-items: flex-start;
`

const LeftSection = styled.div`
  flex-basis: 50%;
  padding-right: 6%;
`

const RightSection = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`

const P = styled.p`
  font-size: 20px;
  line-height: 32px;
  font-weight: ${({bold})  => bold ? 'bold' : 'normal'};
  width: 70%;
`

const A = styled.a`
    display: block;
    font-size: 17px;
    font-weight: 600;
    line-height: 24px;
    color: #5b5adb;
`

const Line = styled.div`
  height: 1px;
  background-color: #e8e8e8;
  margin-top: 56px;
`

const SubTitle = styled.h6`
  font-size: 20px;
  line-height: 32px;
  font-weight: bold;
  width: 70%;
  margin: 0;
`

const SubSection = styled.div`
  display: flex;
`


function Refund({fontSize, fontColor, children}) {
  return (
      <Container>
         <LeftSection>
            
            <Title>Receba em dinheiro na sua conta corrente</Title> 
            <P>9 a cada 10 pessoas recebem o pagamento em até 5 dias úteis após o envio do B.O e bloqueio do aparelho (IMEI)</P>
         </LeftSection>
         <RightSection>
            <div>
              <div>
                <SubTitle>Aplicativo instalado</SubTitle>
                <P>Tenha o aplicativo instalado no seu celular no momento da ocorrência</P>
              </div>
              <SubTitle>B.O em mãos</SubTitle>
              <P>Registre e nos envie o boletim de ocorrência incluindo o número único do celular (IMEI)</P>
              <SubTitle>Bloqueio de Aparelho</SubTitle>
              <P>O número de identificação do celular (IMEI) precisa estar bloqueado na Anatel</P>
            </div>

           <Line/>
           <P>Em alguns casos atípicos, esse prazo pode ser maior e documentações adicionais poderão ser solicitadas.</P>
           <A href="https://blog.pier.digital">Pedir reembolso</A>
           
         </RightSection>
      </Container>
   
  );
}



export default Refund;
