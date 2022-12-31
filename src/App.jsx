import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { AppContext } from './context/AppContext'
import './App.css'
import Home from './pages/Home'
import ResultsPage from './pages/ResultsPage'
import AllTab from './pages/AllTab'
import ImagesTab from './pages/ImagesTab'
import NewsTab from './pages/NewsTab'
import Layout from './pages/Layout'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/results' element={<ResultsPage />}>
            <Route index element={<AllTab />} />
            <Route path='images' element={<ImagesTab />} />
            <Route path='news' element={<NewsTab />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
