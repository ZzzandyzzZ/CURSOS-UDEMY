import { Navigate, Route, Routes } from 'react-router-dom'

import { Navbar } from '../../ui'
import { DcPage, MarvelPage, SearchPage } from '../pages';
import { HeroePage } from '../pages/HeroePage';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />}/>
          <Route path="dc" element={<DcPage />}/>
          <Route path="search" element={<SearchPage />}/>
          <Route path="hero" element={<HeroePage />}/>
          <Route path="/" element={<Navigate to="/marvel" />}/>
        </Routes>
      </div>
    </>
  )
}
