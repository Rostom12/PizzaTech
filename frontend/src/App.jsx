import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Menu from './pages/Menu/Menu'
import Admin from './pages/Admin/Admin'
import Legal from './pages/Legal/Legal'
import Cgu from './pages/Cgu/Cgu'
import Contact from './pages/Contact/Contact'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/legal" element={<Legal />} />
                <Route path="/cgu" element={<Cgu />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App
