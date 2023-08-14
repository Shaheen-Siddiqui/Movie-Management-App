import { MovieListing } from "./page/MovieListing";
import "./styles.css";

import { Routes, Route } from "react-router-dom";
import { StarMovies } from "./page/StarMovies";
import { Header } from "./component/Header";
import { MovieDetail } from "./page/MovieDetail";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<MovieListing />} />
        <Route path="/star" element={<StarMovies />} />
        <Route path="/movie/:MovieID" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}
