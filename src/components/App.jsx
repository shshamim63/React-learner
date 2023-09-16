import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NavBarMain from "./NavbarMain";
import AppRouter from "../Router";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: "2rem",
  lineHeight: "5.5rem",
  "@media (min-width:600px)": {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBarMain />
        <main>
          <div>
            <AppRouter />
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
