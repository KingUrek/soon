import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: white;
  width: 70%;
  height: 100vh;
  perspective: 1000px;
  margin: auto;
`;

export const FlipCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  ${({ back }) => back && 'transform: rotateY(180deg)'}
  }

`;

export const FrontCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: black;
`;

export const BackCard = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: white;
  color: white;
  transform: rotateY(180deg);
`;
