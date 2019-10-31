import Link from 'next/link';

import styled from 'styled-components';

import Button from '../components/Button';

const Container = styled.header`
  padding: 36px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-shadow: 0 2px 10px 0 rgba(48, 48, 66, 0.1);

  margin: 16px;

  font-weight: bold;
`;

const Image = styled.img``;

const PlanType = styled.div``;

const Price = styled.div``;

const PercentageToReceive = styled.div``;

const SemiNewValue = styled.div``;

const NewValue = styled.div``;

function Header({ type }) {
  const isEconomic = type === 'economic';

  const planText = isEconomic ? 'ECONÔMICO' : 'PREMIUM';

  const planPercentage = isEconomic ? '80%' : '100%';

  return (
    <Container>
      <Image
        alt="barco"
        src="https://d233wbzwz46uqm.cloudfront.net/assets/img-pricing-economic-616734f34a0ece539e3580de3798d764989017287dccba0a0729ecbaf7211ef4.png"
      />
      <PlanType>{planText}</PlanType>
      <Price>R$ 24,90 / mês</Price>
      <PercentageToReceive>Receba {planPercentage} do valor de um modelo seminovo</PercentageToReceive>
      <SemiNewValue>Valor de um seminovo R$ xx,00</SemiNewValue>
      <NewValue>Você recebe R$ xx,00</NewValue>
      <Button
        onClick={() =>
          (window.location.href =
            'https://stag.pier.digital/waiting_registration/new?device_model=GALAXY_A6_PLUS_64GB&device_os=android&plan=premium&source=')
        }
      >
        Pedir Convite
      </Button>
    </Container>
  );
}

export default Header;
