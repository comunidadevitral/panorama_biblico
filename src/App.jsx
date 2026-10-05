import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AntigoTestamento from './pages/AntigoTestamento'
import NovoTestamento from './pages/NovoTestamento'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/antigo-testamento" element={<AntigoTestamento />} />
        <Route path="/novo-testamento" element={<NovoTestamento />} />
      </Routes>
    </BrowserRouter>
  )
}
