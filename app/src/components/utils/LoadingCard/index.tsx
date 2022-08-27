import { useEffect } from "react";
import { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import { Container, AnimatedBg } from "../Card/styles";


export function LoadingCard() {
  const animatedOffset = useSharedValue(0.4);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: `rgba(255, 255, 255, ${animatedOffset.value})`
  }));

  useEffect(() => {
    animatedOffset.value = withRepeat(
      withTiming(animatedOffset.value == 0.75 ? 0.4 : 0.75, {
        duration: 500,
        easing: Easing.elastic(1),
      }),
      -1,
      true
    );
  }, []);


  return (
    <Container>
      <AnimatedBg style={animatedStyle}/>
    </Container>
  );
}