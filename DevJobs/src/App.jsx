import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router'
import { Header } from "./components/Header/Header.jsx"
import { Footer } from "./components/Footer/Footer.jsx"
import ProtectedRoute from "./components/ProtectedRoute.jsx"

const HomePage = lazy(() => import('./pages/Home.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFound.jsx'))
const JobDetail = lazy(() => import('./pages/Detail.jsx'))
const ProfilePage = lazy(() => import('./pages/ProfilePage.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const Register = lazy(() => import('./pages/Register.jsx'))

function App() {
  
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/jobs/:jobId" element={<JobDetail />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
