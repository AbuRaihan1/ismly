import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./screens/Home/Home";
import LoginScreen from "./screens/Login/login";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/login/:type" element={<LoginScreen />}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
