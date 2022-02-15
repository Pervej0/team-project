import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Shared/Header/Header";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import ContactUs from "./Component/ContactUs/ContactUs";
import Footer from "./Component/Shared/Footer/Footer";
import Login from './Authentication/Login/Login'
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Register from './Authentication/Register/Register'
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
