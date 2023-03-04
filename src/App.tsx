import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import LoginScreen from "./screens/login";
import Home from "./components/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home></Home>}></Route>
        <Route path="/login/:type" element={<LoginScreen />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
