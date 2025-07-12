import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';   // <-- import nomeado
import { Footer } from './components/Footer';   // <-- import nomeado

import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Loja from './pages/Loja';
import Produto from './pages/Produto';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';

export default function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/loja/:id" element={<Produto />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
