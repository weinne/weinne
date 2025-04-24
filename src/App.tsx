import React from 'react';
import { Book, GraduationCap, Mail, MenuIcon, Moon, Sun, X, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeContext';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleDark } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-serif font-bold text-gray-900 dark:text-white">Weinne Santos</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#sobre" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Sobre</a>
              <a href="#projetos" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projetos</a>
              <a href="#blog" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</a>
              <a href="#contato" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contato</a>
              <button
                onClick={toggleDark}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button
                onClick={toggleDark}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 dark:text-gray-300"
              >
                {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
              <a href="#sobre" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Sobre</a>
              <a href="#projetos" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projetos</a>
              <a href="#blog" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</a>
              <a href="#contato" className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contato</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="pt-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img
            src="https://avatars.githubusercontent.com/u/2789869?v=4"
            alt="Weinne Santos"
            className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg"
          />
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">Weinne Santos</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Pastor presbiteriano</p>
          
        </div>
      </div>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8 text-center">Sobre</h2>
          <div className="prose prose-lg dark:prose-invert mx-auto">
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
              Weinne Santos é Bacharel em Sistemas de Informação pela Universidade Federal de Mato Grosso (UFMT, 2015), 
              bacharel em Teologia pelo Seminário Teológico Rev. José Manoel da Conceição (JMC, 2019), Mestre em 
              Divindade pelo Centro Presbiteriano de Pós-Graduação Andrew Jumper, cum laude (CPAJ, 2024), licenciado 
              em Filosofia pelo Centro Universitário Fatecie (UniFatecie, 2024), professor de 
              História no Seminário Presbiteriano de Jesus e pastor da Primeira Igreja Presbiteriana de Mairiporã (2021-atual). 
              32 anos, marido da Aniely e pai do Manuel e da Lúcia.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-12 text-center">Projetos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cristo na Bíblia Project */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <Book className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cristo na Bíblia</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Um projeto dedicado a explorar como Cristo é revelado em toda a Escritura, 
                oferecendo estudos e reflexões teológicas sobre a centralidade de Cristo na Bíblia.
              </p>
              <a 
                href="http://cristonabiblia.weinne.teo.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                Visitar projeto →
              </a>
            </div>

            {/* Liturgia Reformada Project */}
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-6 h-6 text-gray-700 dark:text-gray-300 mr-2" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Liturgia Reformada</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Um recurso para ajudar igrejas e pastores a estruturarem cultos reformados, 
                baseando-se nas categorias litúrgicas de Bryan Chapell e em uma teologia centrada no evangelho.
              </p>
              <a 
                href="http://liturgiareformada.weinne.teo.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
              >
                Visitar projeto →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8">Blog</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Acompanhe minhas reflexões teológicas, análises e estudos no Medium
          </p>
          <a 
            href="https://medium.com/@weinne" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
          >
            Visitar Blog
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-8">Contato</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <a href="mailto:contato@weinne.teo.br" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
                contato@weinne.teo.br
              </a>
            </div>
            <div className="flex items-center space-x-6 mt-4">
              <a
                href="https://instagram.com/weinne"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/revweinne"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/weinne"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Weinne Santos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;