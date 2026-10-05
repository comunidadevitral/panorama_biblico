import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import TestamentPage from './pages/TestamentPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:testament" element={<TestamentPage />} />
      </Routes>
    </BrowserRouter>
  )
}
