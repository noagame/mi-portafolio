import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Contact from './sections/Contact';
import MouseTrail from './components/MouseTrail';

function App() {
    return (
        <div className="bg-stone-50 min-h-screen text-stone-800">
            <MouseTrail />
            <nav className="fixed top-0 w-full bg-stone-50/80 backdrop-blur-md z-50 border-b border-stone-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 font-bold text-xl text-stone-700">
                            DevPortfolio
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="#hero" className="hover:bg-stone-100 px-3 py-2 rounded-md text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Inicio</a>
                                <a href="#about" className="hover:bg-stone-100 px-3 py-2 rounded-md text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Sobre Mí</a>
                                <a href="#services" className="hover:bg-stone-100 px-3 py-2 rounded-md text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Servicios</a>
                                <a href="#contact" className="bg-stone-800 hover:bg-stone-700 text-stone-50 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm hover:shadow-md">Contacto</a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <Hero />
                <About />
                <Services />
                <Contact />
            </main>

            <footer className="bg-stone-100 py-8 text-center text-stone-500 text-sm border-t border-stone-200">
                <p>&copy; {new Date().getFullYear()} DevPortfolio. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default App;
