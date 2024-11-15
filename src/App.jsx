import Nav from './components/Nav'
import Entrada from './components/Entrada'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Experiencias from './components/pages/Experiencias'
import Contacto from './components/pages/Contacto'
import Footer from './components/Footer'



function App() {
 

  return (
    <>
    <Routes>
      <Route path="/" element={<Entrada />} />
      <Route path="/experiencias" element={<Experiencias />} />
      <Route path="/contacto" element={<Contacto />} />

    </Routes>
    <Nav />
    <Footer />
      
    </>
  )
}

export default App
