import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  display: block;
  position: initial;
  margin-top: 64px;
  order: none;
  cursor: pointer;
  bottom: 32px;
  left: calc(50% - 155px);
  z-index: 10;
  padding: 24px 32px;
  border-radius: 4px;
  width: 310px;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 1px;
  background: ${({ theme }) => theme.colors.secondaryGradient};
  box-shadow: 0 6px 30px 0 rgba(48, 48, 66, 0.1);
  border: none;
`;

function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
