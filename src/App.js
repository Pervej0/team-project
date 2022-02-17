import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import ContactUs from "./Component/ContactUs/ContactUs";
import Home from "./Component/Home/Home";
import RequestForBlood from "./Component/RequestForBlood/RequestForBlood";
import Footer from "./Component/Shared/Footer/Footer";
<<<<<<< HEAD
import Header from "./Component/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/request" element={<RequestForBlood />} />
        </Routes>
        <Footer />
      </BrowserRouter>
=======
import Login from "./Authentication/Login/Login";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Register from "./Authentication/Register/Register";
import ChitChat from "./Component/ChitChat/ChitChat";
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
            <Route path="/chitchat/:roomId" element={<ChitChat />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
>>>>>>> 95dd1392bd29a3c406ea10eb2257b717db51a521
    </div>
  );
}

export default App;
