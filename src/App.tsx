import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./screens/Dashboard/Dashboard";
import Home from "./screens/Home/Home";
import LoginScreen from "./screens/Login/login";
import Constants from "./utils/Constants";

// Light Theme

// Dark Theme


const theme = createTheme(Constants.colors.lightTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login/:type" element={<LoginScreen />} />
          <Route
            path={Constants.navigationStack.dashboard}
            element={<Dashboard />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
