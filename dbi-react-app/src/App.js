import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home';
import Ecosystem from './components/Ecosystem';
import Libraries from './components/Libraries';
import ModbusDocs from './components/ModbusDocs';
import DeltaDocs from './components/DeltaDocs';
import Downloads from './components/Downloads';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function Navigation() {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('color-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center text-2xl font-bold text-primary-600 dark:text-primary-400">
          <img src="logo.svg" alt="DBI Logo" className="w-8 h-8 mr-3" />
          DBI Platform
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
            Giới thiệu DBI
          </Link>
          <Link to="/ecosystem" className={`nav-link ${isActive('/ecosystem') ? 'active' : ''}`}>
            Hệ sinh thái
          </Link>
          <Link to="/libraries" className={`nav-link ${isActive('/libraries') ? 'active' : ''}`}>
            Thư viện
          </Link>
          <Link to="/downloads" className={`nav-link ${isActive('/downloads') ? 'active' : ''}`}>
            Tools
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
            Về tác giả
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
            Liên hệ
          </Link>
        </div>

        <div className="flex items-center">
          <button onClick={toggleTheme} className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden ml-4 p-2 text-gray-600 dark:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            Giới thiệu DBI
          </Link>
          <Link to="/ecosystem" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            Hệ sinh thái
          </Link>
          <Link to="/libraries" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            Thư viện
          </Link>
          <Link to="/downloads" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            Tools
          </Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            Về tác giả
          </Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 px-6 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">
            Liên hệ
          </Link>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-4 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; 2024 DBI - Data Bridge Industrial Project. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans antialiased min-h-screen flex flex-col">
        <Navigation />

        <main className="container mx-auto p-6 md:p-8 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/libraries" element={<Libraries />} />
            <Route path="/libraries/modbus" element={<ModbusDocs />} />
            <Route path="/libraries/delta" element={<DeltaDocs />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
