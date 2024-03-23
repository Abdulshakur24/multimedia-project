import "styled-components";
import object from "../themes/default";

type Theme = typeof object;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
