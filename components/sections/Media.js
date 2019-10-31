import Link from 'next/link';

import styled from 'styled-components';

import Title from '../Title';

const Container = styled.section`
  display: flex;
  width: 100%;
  padding: 96px 20%;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.grayBackground};
  border-top: 1px solid #e8e8e8;
`;

const Img = styled.img``;

function Refund({ fontSize, fontColor, children }) {
  return (
    <Container>
      <img
        alt="emoji"
        src="https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-1-cc544924e8cda8eed5890cfb6105f9af900f98c6adcd03b4318dee631b363e82.svg"
      />
      <img
        alt="emoji"
        src="https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-2-ed6ebd2960602c80a444f857458d84d4b7fe0739ad51a040be1a90e495f7af79.svg"
      />
      <img
        src="https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-3-ed53e454191be33fd124b56973e37f7d9c281d9b7879acb3a36783c12a18b721.svg"
        alt="emoji"
        data-original="https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-3-ed53e454191be33fd124b56973e37f7d9c281d9b7879acb3a36783c12a18b721.svg"
      />
      <img
        src="https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-4-86c7e6fb6a9b41c9dbce0c39dd5dc43c4109c4af786bdb97ee1545177282919e.svg"
        alt="emoji"
        data-original="https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/img-press-4-86c7e6fb6a9b41c9dbce0c39dd5dc43c4109c4af786bdb97ee1545177282919e.svg"
      />
    </Container>
  );
}

export default Refund;
