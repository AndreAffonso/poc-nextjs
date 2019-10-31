import Link from 'next/link';
import dynamic from 'next/dynamic';

import styled from 'styled-components';
import { useState } from 'react';

import Button from '../Button';

const PhoneModelsModal = dynamic(() => import('../PhoneModelsModal'));

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryGradient};
  height: 100vh;
  color: white;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 1200px;
`;

const LeftContent = styled.div`
  /* flex-basis: 50%; */
`;

const RightContent = styled.div`
  /* flex-basis: 50%; */
`;

const imgLink =
  'https://d233wbzwz46uqm.cloudfront.net/assets/smartmei/tilted-phone-08da133986db03837a97f14174a23b0edb0f873f4ee2c671f08b0c68a33c487e.png';

const Title = styled.h1`
  font-size: 56px;
  line-height: 64px;
  font-weight: 600;
  letter-spacing: -1px;
`;

const Subtitle = styled.p`
  max-width: 100%;
  margin-top: 48px;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
`;

function ChoosePhone({ fontSize, fontColor, children }) {
  const [openModal, setOPenModal] = useState(false);

  return (
    <>
      {openModal && <PhoneModelsModal onClose={() => setOPenModal(false)} />}
      <Container>
        <Center>
          <LeftContent>
            <Title>Seu celular segurado por quem se importa</Title>
            <Subtitle>Porque também amamos relacionamentos descomplicados</Subtitle>
            <Button onClick={() => setOPenModal(true)}>VER PREÇOS</Button>
          </LeftContent>
          <RightContent>
            <img alt="Celular Coberto pela Pier" src={imgLink} />
          </RightContent>
        </Center>
      </Container>
    </>
  );
}

export default ChoosePhone;
