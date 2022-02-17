import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Shared/Header/Header";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import ContactUs from "./Component/ContactUs/ContactUs";
import Footer from "./Component/Shared/Footer/Footer";
import Login from "./Authentication/Login/Login";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Register from "./Authentication/Register/Register";
import ChitChat from "./Component/ChitChat/ChitChat";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/about"
              element={
                <PrivateRoute>
                  <About />
                </PrivateRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute>
                  <ContactUs />
                </PrivateRoute>
              }
            />
            <Route
              path="/chitchat/:email"
              element={
                <PrivateRoute>
                  <ChitChat />
                </PrivateRoute>
              }
            />
            <Route
              path="/chitchat"
              element={
                <PrivateRoute>
                  <ChitChat />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
