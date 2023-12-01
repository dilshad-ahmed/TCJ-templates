import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./routes/Homepage.jsx";
import Navbars from "./routes/Navbars.jsx";
import Footers from "./routes/Footers.jsx";
import HeroPages from "./routes/HeroPages.jsx";
import NoPage from "./components/NoPage.jsx";
import MainLayout from "./MainLayout.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/navbars" element={<Navbars />} />
            <Route path="/footers" element={<Footers />} />
            <Route path="/hero-pages" element={<HeroPages />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
