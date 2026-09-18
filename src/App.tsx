import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Contact from './pages/Contact'
import Music from './pages/Music'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/project-details" element={<ProjectDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/music" element={<Music />} />
    </Routes>
  )
}
