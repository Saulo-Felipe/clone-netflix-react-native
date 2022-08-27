import styled from "styled-components/native";
import { Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicon from "@expo/vector-icons/Ionicons";


const windowHeight = Dimensions.get('window').height;

export const Container = styled.View`
  height: ${70/100*windowHeight}px;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  background-image: linear-gradient(0);
`;

export const VerticalGradient = styled(LinearGradient).attrs(({theme}) => ({ 
  colors: [theme.dark_1000, "transparent", theme.dark_1000] 
}))
`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;


export const Info = styled.View`
  width: 100%;
  align-items: center;
`;

export const CategoriesInfo = styled.Text`
  color: #fff
`;

export const ActionInfo = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;


/*==== ADD MY LIST BUTTON =====*/
export const LateralActionBtn = styled.TouchableOpacity`
  align-items: center;
`;

export const LateralActionIcon = styled(Ionicon)`
  color: #fff;
  font-size: 26px;
`;

export const LateralActionText = styled.Text`
  color: #fff;
  font-size: 10px;
`;



/*==== WATCH BUTTON =====*/
export const WatchBtn = styled.TouchableOpacity`
  align-items: center;
  background-color: #fff;
  flex-direction: row;
  padding: 0px 20px 0 20px;
  height: 35px;
  border-radius: 5px;
`;

export const WatchIcon = styled(FontAwesome5).attrs({ 
  name: "play"
})`
  font-size: 15px;
  margin-right: 8px;
`;

export const WatchText = styled.Text`
`;
