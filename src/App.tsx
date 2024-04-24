"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages";
import Posts from "./pages/posts";
import Footer from "./components/Footer";
import Sidebar from "./components/SideBar";
// import { Sidebar } from "flowbite-react";

function App() {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
