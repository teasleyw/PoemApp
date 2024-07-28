// src/Pages/PoetryPage/PoetryPageStyled.js
import styled from "styled-components/native";
import { AccentColor, MobileSize } from "../../utils/constants";

const backgroundColor = "#272727";
const poemColor = "#D8D8D8";
const poemTitleColor = "rgb(255, 253, 208)";
const poemAuthorColor = "rgb(255, 253, 208)";
const titleColor = "rgb(180,242,242)";

export const PoetryPageContainer = styled.ScrollView`
  background: ${backgroundColor};
  width: 100%;
  min-height: 100%;
  padding: 20px;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-vertical: 20px;
`;

export const PoemContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const PoemOfTheDay = styled.Text`
  color: ${titleColor};
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
`;

export const PoemTitle = styled.Text`
  color: ${AccentColor};
  font-size: 24px;
  text-align: center;
`;

export const PoemAuthor = styled.Text`
  color: ${AccentColor};
  font-size: 20px;
  text-align: center;
`;

export const PoemText = styled.Text`
  color: ${poemColor};
  font-size: 18px;
  margin-top: 10px;
`;

export const Poem = styled.View`
  background: #303030;
  border-radius: 25px;
  padding: 20px;
  width: 100%;
`;

export const ModalContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${backgroundColor};
`;

export const CloseButton = styled.TouchableOpacity`
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
`;