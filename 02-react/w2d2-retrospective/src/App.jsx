import NavBar from "./components/NavBar";
import { Navigate, Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Locations from "./components/Locations";
import Episodes from "./components/Episodes";
import RickMorty from "./components/RickMorty";
import './bootstrap.min.css';
import OneCharacter from "./components/OneCharacter";
import OneLocation from "./components/OneLocation";
import OneEpisode from "./components/OneEpisode";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<RickMorty />}>
            <Route path="characters/" element={<Characters />}>
              <Route path=":id" element={<OneCharacter />} />
            </Route>
            <Route path="locations/" element={<Locations />}>
              <Route path=":id" element={<OneLocation />} />
            </Route>
            <Route path="episodes/" element={<Episodes />}>
              <Route path=":id" element={<OneEpisode />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
