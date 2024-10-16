import "./App.css";
import { Route, Routes } from "react-router-dom";

// Components
import MuiBottomNavigation from "./components/MuiBottomNavigation";

// Pages
import Adventure from "./pages/Adventure";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";
import Quest from "./pages/Quest";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Adventure />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quest" element={<Quest />} />
          <Route path="/settings" element={<Settings />} />
      </Routes>

      <h1>
        Yummigo
      </h1>

      <div id="nav">
        <MuiBottomNavigation />
      </div>
    </>
  )
}