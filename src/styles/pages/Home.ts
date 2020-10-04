import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 70%;
`;

export const Background = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 35vh;
  background: url('/background.png') no-repeat center;
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateY(150px);
    width: 50vw;
  }
  to{
    opacity: 1;
    transform: translateY(0);
    width: 60vw;
  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  animation: ${appearFromLeft} 1s;
  background: #262525;
  margin: -20vh 0 0 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  width: 60vw;
  max-width: 60vw;
  height: 40vh;
  font-size: 70%;

  border-radius: 50px 0 50px 0;

  div {
    max-width: 100%;
  }

  h2 {
    display: block;
    width: 100%;
    padding: 40px;
    font-family: 'Raleway';
    font-size: 1rem;
    color: #7b7b7b;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.29);
    @media (max-width: 720px) {
      font-size: 0.5rem;
    }
  }

  img {
    @media (max-width: 720px) {
      display: none;
    }
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
    display: block;
    max-width: 50%;
    height: 100%;
  }
`;

export const BoxText = styled.p`
  color: #666;
  font-family: 'Raleway';
  font-size: 1rem;

  @media (min-width: 720px) {
    font-size: 2rem;
  }
`;
