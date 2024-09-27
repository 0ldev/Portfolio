import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen transition-colors duration-500">
      <Router>
        {/* Navigation Bar */}
        <nav className="p-4 flex flex-col md:flex-row justify-between items-center bg-primary dark:bg-darkPrimary text-black dark:text-white">
          <div className="flex space-x-0 md:space-x-6 space-y-2 md:space-y-0 flex-col md:flex-row items-center">
            <Link to="/" className="hover:underline">
              Início
            </Link>
            <Link to="/projects" className="hover:underline">
              Projetos
            </Link>
            <Link to="/about" className="hover:underline">
              Sobre Mim
            </Link>
            <Link to="/contact" className="hover:underline">
              Contato
            </Link>
          </div>
          <button
            onClick={toggleDarkMode}
            className="mt-2 md:mt-0 bg-secondary dark:bg-darkSecondary text-white px-4 py-2 rounded-full flex items-center space-x-2 transition duration-300 ease-in-out hover:opacity-80"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? 'Modo Claro' : 'Modo Escuro'}</span>
          </button>
        </nav>

        {/* Routes with page transitions */}
        <div className="transition-all duration-500">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
