import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import TrendingPage from "./pages/Trending";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./components/PrivateRoute";
import { Toaster } from "react-hot-toast";
import Profile from './pages/Profile.jsx'
import GeneratePost from './pages/GeneratePost.jsx'

const App = () => {




  return (
    <>
    <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/trending"
          element={
            <PrivateRoute>
              {" "}
              <TrendingPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/generate"
          element={
            <PrivateRoute>
              {" "}
              <GeneratePost/>
            </PrivateRoute>
          }
        />
 <Route
          path="/profile"
          element={
            <PrivateRoute>
              {" "}
              <Profile/>
            </PrivateRoute>
          }
        />

        <Route
          path="/about"
          element={
            <PrivateRoute>
              {" "}
              <About />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              {" "}
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute>
              {" "}
              <Contact />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
