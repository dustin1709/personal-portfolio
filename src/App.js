import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import './App.css';
import Overview from './Pages/Overview/Overview';
import Experience from "./Pages/Experience/Experience";

function App() {
  return (
    <div className="App">
      <main className="App">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
