import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyles } from "./styles/global"

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider >

    </>
  )
}

export default App
