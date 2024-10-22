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
import SpringRoll from "./pages/recipes/Springroll";
import AvocadoSmoothie from "./pages/recipes/AvocadoSmoothie";
import ChickenPorridge from "./pages/recipes/ChickenPorridge";
import PastaSalad from "./pages/recipes/PastaSalad";



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
        <Route path="/YummiGo/recipes/avocadosmoothie" element={<AvocadoSmoothie />} />
        <Route path="/YummiGo/recipes/chickenporridge" element={<ChickenPorridge />} />
        <Route path="/YummiGo/recipes/pastasalad" element={<PastaSalad />} />

      </Routes>

      <TopBar />
      <BottomNavigationBar />
    </>
  )
}

export default App;