import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from '../pages/HomePage/HomePage';
import { Layout } from '../pages/Layout';
import './App.css'

const AppProvider = () =>
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:query/:page" element={<div>Search</div>} />
        <Route path="/graph/:id" element={<div>Graph</div>} />
      </Route>
    </Routes>
  </BrowserRouter>

export default AppProvider
