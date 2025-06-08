import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from '../pages/HomePage/HomePage';
import { Layout } from '../pages/Layout';
import './App.css'
import { SearchPage } from "../pages/SearchPage/ui/SearchPage";
import { GraphPage } from "../pages/GraphPage";

const AppProvider = () =>
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index path="*" element={<HomePage />} />
        <Route path="/search/:query/:page" element={<SearchPage/>} />
        <Route path="/graph/:id" element={<GraphPage/>} />
        <Route path="/proof_of_authorship" element={<div>Сервис создан Андреем Акимовым хихи</div>} />
      </Route>
    </Routes>
  </BrowserRouter>

export default AppProvider
