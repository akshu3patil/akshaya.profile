import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import About from './pages/About';

function Navigation() {
  const location = useLocation();
  const links = [
    { path: '/', label: 'Home' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About & Skills' }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6">
        {links.map((link) => (
          <Link 
            key={link.path} 
            to={link.path}
            className={`font-medium transition-colors hover:text-cyan-400 ${
              location.pathname === link.path ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-300'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-cyan-500/30">
        <Navigation />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}