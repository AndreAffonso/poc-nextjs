import Link from "next/link";

import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${({theme}) => theme.colors.text};
  margin: 0;
  margin-bottom: 32px;
  font-size: 56px;
  line-height: 60px;
`

function Title({fontSize, fontColor, children}) {
  return (
      <StyledTitle>{children}</StyledTitle>
   
  );
}



export default Title;
