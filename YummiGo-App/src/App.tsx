import { Route, Routes } from "react-router-dom";

// Components
import TopBar from "./components/TopBar"
import BottomNavigationBar from "./components/BottomNavigationBar";

// Pages
import Adventure from "./pages/Adventure";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";
import Quest from "./pages/Quest";
import Settings from "./pages/Settings";

// Recipe Pages
import SpringRoll from "./pages/recipes/SpringRoll";

function App() {
  return (
    <>
      <Routes>
        {/* Main Pages Routing */}
        <Route path="/YummiGo/" element={<Adventure />} />
        <Route path="/YummiGo/recipe" element={<Recipe />} />
        <Route path="/YummiGo/profile" element={<Profile />} />
        <Route path="/YummiGo/quest" element={<Quest />} />
        <Route path="/YummiGo/settings" element={<Settings />} />

        {/* Recipes Pages Routing */}
        <Route path="/YummiGo/recipes/springroll" element={<SpringRoll />} />
      </Routes>

      <TopBar />
      <BottomNavigationBar />
    </>
  )
}

export default App;