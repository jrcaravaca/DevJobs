import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'

import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"

const HomePage = lazy(() => import('./pages/Home.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFound.jsx'))
const JobDetail = lazy(() => import('./pages/Detail.jsx'))

function App() {
  
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
