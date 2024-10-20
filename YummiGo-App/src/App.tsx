import { Route, Routes } from "react-router-dom";

// Components
import MuiAppBar from "./components/MuiAppBar"
import MuiBottomNavigation from "./components/MuiBottomNavigation";

// Pages
import Adventure from "./pages/Adventure";
import Recipe from "./pages/Recipe";
import Profile from "./pages/Profile";
import Quest from "./pages/Quest";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <MuiAppBar />
      <Routes>
        <Route path="/" element={<Adventure />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quest" element={<Quest />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <MuiBottomNavigation />
    </>
  )
}

export default App;