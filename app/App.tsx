import { Home } from "./src/screens/Home";
import { ThemeProvider } from "styled-components/native";
import standard from "./src/theme/standard";

export default function App() {
  return (
    <ThemeProvider theme={standard}>
      <Home />
    </ThemeProvider>
  );
}