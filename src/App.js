import React from "react";
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
<<<<<<< HEAD
import AddReview from "./Component/Dashboard/AddReview/AddReview";
import MyOrders from "./Component/Dashboard/AddReview/MyOrders/MyOrders";
import AllOrders from "./Component/Dashboard/AllOrders/AllOrders";
=======


>>>>>>> 199803563d4387d1df2d2829d068ec726100dd82
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
            <Route
              path="/AddReview"
              element={
                <PrivateRoute>
                  <AddReview />
                </PrivateRoute>
              }
            />
            <Route
              path="/mybooking"
              element={
                <PrivateRoute>
                  <MyOrders />
                </PrivateRoute>
              }
            />
            <Route
              path="/allorders"
              element={
                <PrivateRoute>
                  <AllOrders />
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
