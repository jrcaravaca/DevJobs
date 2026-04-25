
import { Routes, Route } from 'react-router'
import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import { HomePage } from "./pages/Home.jsx"
import { SearchPage } from "./pages/Search.jsx"
import { NotFoundPage } from './pages/NotFound.jsx'




function App() {
  
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
