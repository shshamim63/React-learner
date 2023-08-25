import { CssBaseline } from "@mui/material";
import NavBar from "./components/navbar";
import AppRouter from "./Router";

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <main>
        <div>
          <AppRouter />
        </div>
      </main>
    </>
  );
}

export default App;
