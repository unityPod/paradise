import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import { Home } from "./components/Home/Home";
import { Card } from "./components/Card/Card";
import { AuthContextProvider } from './components/AuthContext/AuthContext';
import { CardContextProvider } from "./components/AuthContext/CardContext";
import SignUp from "./components/SignUp/SignUp";

const App = () => {
  return (
    <AuthContextProvider>
      <CardContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<Card />} />
          </Routes>
        </BrowserRouter>
      </CardContextProvider>
    </AuthContextProvider>
  );
};

export default App;

