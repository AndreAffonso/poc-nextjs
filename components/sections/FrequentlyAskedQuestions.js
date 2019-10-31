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
  margin: 28px 0;
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
            
            <Title>Dúvidas</Title> 
            <P>Respondemos as perguntas mais populares</P>
         </LeftSection>
         <RightSection>
            <div>
                <P>Posso pagar com boleto ou débito automático?</P>
                <Line />
                <P>A Pier emite algum certificado da minha proteção?</P>
                <Line />
                <P >Existe fidelidade ou prazo mínimo de permanência?</P>
            </div>

           <Line/>
           <A href="https://blog.pier.digital">Veja mais respostas</A>
           
         </RightSection>
      </Container>
   
  );
}



export default Refund;
