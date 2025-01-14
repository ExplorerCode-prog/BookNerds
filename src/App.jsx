import Home from "./pages/Home";
import Info from "./pages/Info";
import "./css/App.css";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const HandleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <NavBar onSearch={HandleSearch} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />}></Route>
      </Routes>
    </>
  );
}

export default App;
