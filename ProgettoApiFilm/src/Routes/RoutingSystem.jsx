import { Routes, Route } from "react-router";
import Home from "../views/Home.jsx";
import Genres from "../views/Genres.jsx";
import Best from "../views/Best.jsx";
import NotFound from "../views/NotFound.jsx";
import ApplicationLayout from "../layout/ApplicationLayout.jsx";
import SelectedGenre from "../views/SelectedGenre.jsx";
import SelectedFilm from "../views/SelectedFilm.jsx";

function RoutingSystem() {
    return (
        //insieme delle rotte
        <Routes>
            <Route element={<ApplicationLayout/>}>
            //singola rotta
            <Route path="/" element={<Home />} />
            <Route path="/genres" element={<Genres />} />
            <Route path="/best" element={<Best />} />
            <Route path="/genere/:genreId/:genreName" element={<SelectedGenre />} />
            <Route path="/film/:filmId" element={<SelectedFilm />} />
            <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
export default RoutingSystem