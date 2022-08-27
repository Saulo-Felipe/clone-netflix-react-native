import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

const windowHeight = Dimensions.get('window').height;

export const Container = styled.TouchableOpacity`
  height: 180px;
  width: 110px;
  margin: 0 3.5px;
  border-radius: 10px;
`;
export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  border-radius: 10px;
`;


export const AnimatedBg = styled(Animated.View)`
  flex: 1;
`;


//=========== Modal ===========//

export const ModalContent = styled.View`
  flex: 0.5;
  flex-direction: row;
  justify-content: flex-start;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #2b2b2b;
  padding: 10px;
  margin-top: auto;
`;

export const ModalInfo = styled.View`
  border: solid 1px blue;
  flex: 1;
`;

export const ImageInfoPreview = styled.Image`
  height: 150px;
  width: 100px;
  margin-right: 10px;
`;

export const TitleInfo = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 26px;
`;

export const ReleaseDate = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  margin-right: 10px;
`;
// #3c3c3c

export const Classification = styled.Text`
  background-color: red;
  color: white;
  font-weight: bold;
  padding: 2px;
`;

export const Description = styled.Text`
  color: rgba(255, 255, 255, 0.85);
`;
