import ChoosePhone from '../components/sections/ChoosePhone';

import Head from 'next/head'

import LandingTemplate from '../layouts/LandingTemplate';

function Home() {
  return (
    <>
     <Head>
        <title>Pier Digital</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
        <meta name="description" content="Seu celular segurado por quem se importa"/>
      </Head>
    <LandingTemplate>
      <ChoosePhone />
    </LandingTemplate>
    </>
  );
}

export default Home;
