import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-600 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/about">Sobre Mim</Link></li>
        <li><Link to="/projects">Projetos</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  );
}
