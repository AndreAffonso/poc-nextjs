import Link from "next/link";

import styled from 'styled-components'

import Title from '../Title'

const Container = styled.section`
    display: flex;
    width: 100%;
    padding: 96px 120px;
    align-items: flex-start;
    background: ${({theme}) => theme.colors.grayBackground};
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
  margin: 32px 0;
  width: 70%;
`

const A = styled.a`
    display: block;
    font-size: 17px;
    font-weight: 600;
    line-height: 24px;
    color: #5b5adb;
`


function SeeOurBlog({fontSize, fontColor, children}) {
  return (
      <Container>
         <LeftSection>
            
            <Title>Somos descomplicados</Title> 
            <P>A Pier é uma empresa de tecnologia que oferece uma nova geração de seguros, sem carência, sem franquia e sem o excesso de burocracia</P>
            <A href="https://blog.pier.digital">Conheça nosso Blog</A>
         </LeftSection>
         <RightSection>

         <img alt="Mulher fazendo Yoga com celular da Pier na mão" id="img-yoga" src="https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-yoga-3c5427acc02cfcf199573d357cf7e7478d7cebd8538926fecc8a4e0fa9c3ac28.svg" alt="Img yoga" data-original="https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-yoga-3c5427acc02cfcf199573d357cf7e7478d7cebd8538926fecc8a4e0fa9c3ac28.svg" />

         </RightSection>
      </Container>
   
  );
}



export default SeeOurBlog;
