import styled from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Animated from "react-native-reanimated";


export const Container = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 199;
`;


export const PrimaryHeader = styled(Animated.View)`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 10px 0 10px;
`;

export const Logo = styled.Image`
  width: 40px;
  height: 40px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchIcons = styled(Ionicons).attrs({ 
  name: "search-outline",
})`
  color: #fff;
  font-size: 24px;
`;

export const Avatar = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 13px;
  margin-left: 20px;
`;



export const SecondHeader = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
`;