import styled from 'styled-components';
import dynamic from 'next/dynamic';

import { useState } from 'react';

import smartphones from './smartphones';

import Link from 'next/link';

const PlanCard = dynamic(() => import('../PlanCard'));

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModelName = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  display: inline;
  font-size: 21px;
  font-weight: 500;
  color: #737387;
  line-height: 48px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ModelsContainer = styled.div`
  padding-top: 16px;
  display: flex;
  flex-basis: 60%;
  flex-direction: column;
`;

const PlansContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseButton = styled.button`
  position: fixed;
  right: 16px;
  top: 16px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.textSecondary};
  border: none;
`;

function PhoneModelsModal({ onClose }) {
  const [phone, setPhone] = useState({ serie: null, model: null, memory: null });

  const setSerie = serie => setPhone({ ...phone, serie });

  const setModel = model => setPhone({ ...phone, model });

  const setMemory = memory => setPhone({ ...phone, memory });

  const onCloseModalWhenEscapeIsPressed = event => {
    onClose();
  };

  const getModelsOfTheSelectedLine = () => (phone.serie ? smartphones.find(({ name }) => name === phone.serie) : []);

  const onRenderCorrectInfo = () => {
    if (phone?.memory)
      return (
        <PlansContainer>
          <PlanCard type="economic" />
          <PlanCard type="premium" />
        </PlansContainer>
      );

    if (phone?.model)
      return (
        <>
          {phone.model.memories.map(memory => (
            <ModelName onClick={() => setMemory(memory)}>{memory}</ModelName>
          ))}
          <ModelName>Não Sei</ModelName>
        </>
      );

    if (phone?.serie)
      return (
        <>
          {getModelsOfTheSelectedLine().models.map(model => (
            <ModelName onClick={() => setModel(model)}>{model.name}</ModelName>
          ))}
          <ModelName>Outro Modelo</ModelName>
          <ModelName>Não Sei</ModelName>
        </>
      );

    return (
      <>
        {smartphones.map(({ name }) => (
          <ModelName onClick={() => setSerie(name)}>{name}</ModelName>
        ))}
        <ModelName>Outro Modelo</ModelName>
        <ModelName>Não Sei</ModelName>
      </>
    );
  };

  return (
    <Container role="button" onKeyDown={onCloseModalWhenEscapeIsPressed}>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ModelsContainer>{onRenderCorrectInfo()}</ModelsContainer>
    </Container>
  );
}

export default PhoneModelsModal;
