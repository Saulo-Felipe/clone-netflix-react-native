import { Header } from "../../components/core/Header";
import { Suggestion } from "../../components/template/Home/Suggestion";
import { Container } from "./styles";
import { StatusBar, ScrollView, TouchableOpacity, Text, NativeSyntheticEvent, NativeScrollEvent, ViewPagerAndroidComponent } from "react-native";
import { Content } from "../../components/template/Home/Content";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedProps } from 'react-native-reanimated';


export function Home() {
  const backgroundOffset = useSharedValue(0);

  const animatedBackgroundHeader = useAnimatedProps(() => {
    return {
      backgroundColor: `rgba(0, 0, 0, ${backgroundOffset.value})`
    }
  });

  const animatedSubHeader = useAnimatedProps(() => {
    return {
      marginTop: 0 - 52*backgroundOffset.value/0.75
    }
  });

  function handleScrollPage(e: NativeSyntheticEvent<NativeScrollEvent>) {
    const scrollY = e.nativeEvent.contentOffset.y;
    if (scrollY <= 150) {
      backgroundOffset.value = withSpring(scrollY/100/2);
    } else if (backgroundOffset.value != 0.75) {
      backgroundOffset.value = withSpring(0.75);
    }
  }

  return (
    <>
      <StatusBar />
      <Container>
        <Header 
          backgroundAnimatedStyle={animatedBackgroundHeader} 
          subHeaderAnimatedStyle={animatedSubHeader}
        />
        
        <ScrollView onScroll={handleScrollPage}>
          <Suggestion />
          <Content />
        </ScrollView>
      </Container>
    </>
  );
}