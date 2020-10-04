import React from 'react';
import {} from '../styles/GlobalStyle';
import { Container, Background, Card, BoxText } from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <Container>
        <Background />
        <Card>
          <div>
            <BoxText>Filipe Chaves de Macedo</BoxText>
          </div>
          <img src="/perfil.jpg" alt="perfil" />
        </Card>
      </Container>
    </>
  );
}
