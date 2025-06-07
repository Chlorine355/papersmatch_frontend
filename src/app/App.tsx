import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from '../pages/HomePage/HomePage';
import { Layout } from '../pages/Layout';
import './App.css'
import { SearchPage } from "../pages/SearchPage";

const AppProvider = () =>
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:query/:page" element={<SearchPage/>} />
        <Route path="/graph/:id" element={<div>Graph</div>} />
        <Route path="/proof_of_authorship" element={<div>Сервис создан Андреем Акимовым хихи</div>} />
      </Route>
    </Routes>
  </BrowserRouter>

export default AppProvider
