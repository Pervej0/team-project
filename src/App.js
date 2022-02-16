import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Component/About/About";
import ContactUs from "./Component/ContactUs/ContactUs";
import Home from "./Component/Home/Home";
import RequestForBlood from "./Component/RequestForBlood/RequestForBlood";
import Footer from "./Component/Shared/Footer/Footer";
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
    </div>
  );
}

export default App;
