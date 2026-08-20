import { Routes, Route } from 'react-router-dom'
import Splash from './pages/Splash.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Show from './pages/Show.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Thanks from './pages/Thanks.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/show" element={<Show />} />
      <Route path="/project" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thanks" element={<Thanks />} />
    </Routes>
  )
}
