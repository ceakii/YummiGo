import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from 'react';

// Components
import MuiBottomNavigation from "./components/MuiBottomNavigation";

// Pages
import Adventure from "./pages/Adventure";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";
import Quest from "./pages/Quest";
import Settings from "./pages/Settings";

const App = () => {
  // Set the document title when the component loads
  useEffect(() => {
    document.title = 'YummiGo';
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Adventure />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>

      <h1>YummiGo</h1>

      <div id="nav">
        <MuiBottomNavigation />
      </div>
    </>
  );
};

export default App;
