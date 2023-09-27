import { ThemeProvider } from "styled-components";
import { Title } from "./style";

export function Provid() {
  const theme = {
    borderColor: '#1A1B1C',
    textColor: '#1FB621',
  }
  return (
    <ThemeProvider theme={ theme }>
      <Title>
        Styled Component - Theme Provider
      </Title>
    </ThemeProvider>
  )
}