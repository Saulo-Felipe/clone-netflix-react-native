import { Container } from "./styles";
import { HorizontalScroll } from "../HorizontalScroll";
import { LinearGradient } from "expo-linear-gradient";

export function Content() {

  return (
    <Container>
      <HorizontalScroll title={"Populares"} />
      <HorizontalScroll title={"Terror"} />
      <HorizontalScroll title={"Lançamentos"} />
    </Container>
  );
}

