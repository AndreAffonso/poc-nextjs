import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('https://media.giphy.com/media/xTiN0L7EW5trfOvEk0/giphy.gif');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

import React from 'react'

function Error({ statusCode }) {
  return (
    <Container>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </Container>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error


