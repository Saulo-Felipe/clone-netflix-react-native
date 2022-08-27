import "styled-components";
import standard from "./standard";

declare module "styled-components" {
  type ThemeType = typeof standard;

  export interface DefaultTheme extends ThemeType {  };
}