import styled, { keyframes } from 'styled-components/native';

// Turquoise
const titleColor = "rgb(180,242,242)";
const backgroundColor = "black";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LandingPageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${backgroundColor};
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Frost = styled.Text`
  color: ${titleColor};
  font-family: 'IceCaps';
  font-size: 90px;
  text-shadow: 0 0 0.6em rgba(255, 255, 255, 0.5), 0 0 0.6em ${titleColor};
`;

export const Milano = styled.Text`
  color: ${titleColor};
  font-family: 'IceCaps';
  font-size: 90px;
  text-shadow: 0 0 0.4em rgba(255, 255, 255, 0.5), 0 0 0.25em ${titleColor};
`;

export const BackgroundFlower = styled.Image`
  height: 50px;
  width: 50px;
  animation: ${rotate} 5s linear infinite;
  opacity: 0.5;
`;

export const NeonBtn = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px 30px;
  border: 2px solid ${props => props.NeonColor};
  border-radius: 5px;
  text-shadow: 0 0 0.125em rgba(255, 255, 255, 0.5), 0 0 0.25em ${props => props.NeonColor};
  box-shadow: 0 0 0.5em ${props => props.NeonColor}, 0 0 0.5em ${props => props.NeonColor};
  background-color: ${backgroundColor};
`;

export const NeonText = styled.Text`
  color: ${props => props.NeonColor};
  font-size: 24px;
  font-family: 'IceCaps';
`;
