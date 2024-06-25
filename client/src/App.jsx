import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./pages/Home";
import Shorts from "./pages/Shorts";
import Subscription from "./pages/Subscription";
import You from "./pages/You";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WatchVideo from "./pages/WatchVideo";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";

function App() {
  const reduxData = useSelector((state) => state.isSignInPage);

  return (
    <BrowserRouter>
      <Header />
      <div className="flex mt-4 h-[100vh]">
        <div className={`sm:inline hidden ${reduxData && "sm:hidden "}`}>
          <SideBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/you" element={<You />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/watch/:id" element={<WatchVideo />} />
        </Routes>
      </div>
      {/* for small devices */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
