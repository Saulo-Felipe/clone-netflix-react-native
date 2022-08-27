import { Dimensions } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import Ionicon from "@expo/vector-icons/Ionicons";

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
  background-color: #2b2b2b;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-top: auto;
  justify-content: space-between;
`;

export const ModalInfo = styled.View`
  flex: 1;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  padding: 10px;
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

export const Classification = styled.Text`
  background-color: red;
  color: white;
  font-weight: bold;
  padding: 2px;
`;

export const Description = styled.Text`
  color: rgba(255, 255, 255, 0.85);
  margin-top: 7px;
`;

export const IconsActionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
`;

export const ActionIcon = styled(Ionicon)`
  font-size: 25px;
  background-color: #3c3c3c;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  color: #fff;
  vertical-align: center;

  text-align: center;
  textAlignVertical: center;
  justify-content: space-between;
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const IconTitle = styled.Text`
  color: rgba(255, 255, 255, 0.7);
`;


export const MoreInfo = styled.TouchableOpacity`
  justify-content: space-between; 
  flex-direction: row;
  border-top-width: 1px;
  border-color: rgba(255, 255, 255, 0.2);
  padding: 10px;
  margin-top: 10px;
`;

export const MoreInfoContainer = styled.View`
  flex-direction: row; 
  align-items: center;
`;