import { Route, Routes } from "react-router-dom";

// Components
import TopBar from "./components/TopBar";
import BottomNavigationBar from "./components/BottomNavigationBar";
import { RecipeUploadProvider } from "../RecipeUploadContext";

// Main Pages
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
import GranolaBars from "./pages/recipes/GranolaBars";
import AvocadoToastwWGB from "./pages/recipes/AvocadoToastwWGB";
import GreekYogurtwFBaN from "./pages/recipes/GreekYogurtwFBaN";
import HummusaVeggieSticks from "./pages/recipes/HummusaVeggieSticks";
import QuinoaSaladwCaV from "./pages/recipes/QuinoaSaladwCaV";
import ChiaSeedPuddingwAMaF from "./pages/recipes/ChiaSeedPuddingwAMaF";
import EggaMustardCrackers from "./pages/recipes/EggaMustardCrackers";
import BakedSweetPotatoFries from "./pages/recipes/BakedSweetPotatoFries";

// Quest Pages
import Quest1 from "./pages/quests/Quest1";

// Adventure 
import Level1 from "./pages/levels/Level1";
import Level2 from "./pages/levels/Level2";

// Food Info Pages
import HummusaVeggieSticksInfo from "./pages/info/HummusaVeggieSticksInfo";
import GranolaBarsInfo from "./pages/info/GranolaBarsInfo";

// Food Info Pages
import Carrotti from "./pages/yummigo/Carrotti";

function App() {
  return (
    <RecipeUploadProvider>
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
          <Route path="/YummiGo/recipes/granolabars" element={<GranolaBars />} />
          <Route path="/YummiGo/recipes/avocadotoastwwgb" element={<AvocadoToastwWGB />} />
          <Route path="/YummiGo/recipes/greekyogurtwfban" element={<GreekYogurtwFBaN />} />
          <Route path="/YummiGo/recipes/hummusaveggiesticks" element={<HummusaVeggieSticks />} />
          <Route path="/YummiGo/recipes/quinoasaladwcav" element={<QuinoaSaladwCaV />} />
          <Route path="/YummiGo/recipes/chiaseedpuddingwamaf" element={<ChiaSeedPuddingwAMaF />} />
          <Route path="/YummiGo/recipes/eggamustardcrackers" element={<EggaMustardCrackers />} />
          <Route path="/YummiGo/recipes/bakedsweetpotatofries" element={<BakedSweetPotatoFries />} />

          {/* Quests Pages Routing */}
          <Route path="/YummiGo/quests/quest1" element={<Quest1 />} />

        {/* Adventure Pages Routing */}
        <Route
          path="/YummiGo/levels/level1"
          element={<Level1 />}
        />
        <Route
          path="/YummiGo/levels/level2"
          element={<Level2 />}
        />

        {/* Food Info Pages Routing */}
        <Route
          path="/YummiGo/info/granolabarsinfo"
          element={<GranolaBarsInfo />}
        />
        <Route
          path="/YummiGo/info/hummusaveggiesticksinfo"
          element={<HummusaVeggieSticksInfo />}
        />

        {/* Yummigo Pages Routing */}
        <Route
          path="/YummiGo/yummigo/carrotti"
          element={<Carrotti />}
        />
      </Routes>

        <TopBar />
        <BottomNavigationBar />
      </>
    </RecipeUploadProvider>
  );
}

export default App;
