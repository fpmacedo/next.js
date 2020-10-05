/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-indent */
import React from 'react';
import {} from '../styles/GlobalStyle';
import { BsEnvelopeOpen, BsPhone } from 'react-icons/bs';
import {
  Container,
  Background,
  Card,
  BoxText,
  ProfileImage,
  BoxMail,
} from '../styles/pages/Home';

export default function Home() {
  return (
    <>
      <Container>
        <Background />

        <Card>
          <ProfileImage src="/perfil.jpg" />
          <BoxMail>
            <BoxText>FILIPE MACEDO</BoxText>
            <h2>Eng. de Controle e Automação</h2>

            <ul>
              <li>
                <BsEnvelopeOpen size="20px" /> lipe_macedo@msn.com
              </li>
              <li>
                <BsPhone size="20px" /> +55 54 99107-8122
              </li>
            </ul>
          </BoxMail>
        </Card>
      </Container>
    </>
  );
}
