import { ThemeProvider } from "styled-components";

import theme from "../themes/default";
import GlobalStyles from "./globals";
import { ReactNode } from "react";

const Theme = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
