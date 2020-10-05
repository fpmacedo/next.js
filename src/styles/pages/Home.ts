import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-flow: column;
  font-size: 70%;
`;

export const Background = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 300px;
  min-height: 200px;
  background: url('/background.png') no-repeat center;
`;

const appearFromLeft = keyframes`
  from{
    opacity: 0;
    transform: translateY(150px);

  }
  to{
    opacity: 1;
    transform: translateY(0);

  }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;
  animation: ${appearFromLeft} 2s;
  background: #262525;
  margin: -20vh 0 0 0;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  width: 60vw;
  max-width: 900px;
  min-height: 250px;
  padding: 40px;
  height: 300px;
  @media (max-width: 1000px) {
    position: relative;
    width: 60vw;
    overflow: visible;
    z-index: 1;
    top: 34px;
  }

  ul {
    list-style-type: none;
  }
  li {
    margin: 10px 0;
    display: block;
    line-height: 26px;
    color: #666;
    font-family: 'Raleway';
    font-size: 1rem;
    @media (max-width: 1000px) {
      text-align: center;
    }
  }
`;

export const BoxText = styled.p`
  color: #666;
  font-family: 'Raleway';
  font-size: 2rem;
  @media (max-width: 1300px) {
    align-items: center;
    font-size: 2rem;
  }
`;

export const BoxMail = styled.div`
  display: flex;
  flex-flow: column wrap;
  @media (max-width: 1000px) {
    align-items: center;
  }
  h2 {
    color: #666;
    font-family: 'Raleway';
    font-size: 1.3rem;
    align-items: center;
    @media (max-width: 500px) {
      font-size: 1rem;
    }
  }
`;

export const ProfileImage = styled.img`
  @media (max-width: 1000px) {
    width: 150px;
    height: 150px;
    min-height: 150px;
    left: 0;
    top: 0;
    margin: -130px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 50%;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  display: block;
  max-width: 50%;
  height: 100%;
`;
