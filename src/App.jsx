import React, { Suspense, lazy } from 'react';
import MouseTrail from './components/MouseTrail';
import ThemeToggle from './components/ThemeToggle';

// Lazy Loading de Secciones para optimizar carga inicial
const Hero = lazy(() => import('./sections/Hero'));
const About = lazy(() => import('./sections/About'));
const Services = lazy(() => import('./sections/Services'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
    return (
        <div className="bg-stone-50 dark:bg-stone-900 min-h-screen text-stone-800 dark:text-stone-100 transition-colors duration-300">
            <MouseTrail />
            <nav className="fixed top-0 w-full bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-md z-50 border-b border-stone-200 dark:border-stone-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 font-bold text-xl text-stone-700 dark:text-stone-100">
                            DevPortfolio
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="#hero" className="hover:bg-stone-100 dark:hover:bg-stone-800 px-3 py-2 rounded-md text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors">Inicio</a>
                                    <a href="#about" className="hover:bg-stone-100 dark:hover:bg-stone-800 px-3 py-2 rounded-md text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors">Sobre Mí</a>
                                    <a href="#services" className="hover:bg-stone-100 dark:hover:bg-stone-800 px-3 py-2 rounded-md text-sm font-medium text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white transition-colors">Servicios</a>
                                    <a href="#contact" className="bg-stone-800 hover:bg-stone-700 dark:bg-stone-700 dark:hover:bg-stone-600 text-stone-50 px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm hover:shadow-md">Contacto</a>
                                </div>
                            </div>
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <Suspense fallback={
                    <div className="h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-900 text-stone-400 dark:text-stone-500">
                        <div className="animate-pulse">Cargando...</div>
                    </div>
                }>
                    <Hero />
                    <About />
                    <Services />
                    <Contact />
                </Suspense>
            </main>

            <footer className="bg-stone-100 dark:bg-stone-950 py-8 text-center text-stone-500 dark:text-stone-400 text-sm border-t border-stone-200 dark:border-stone-800 transition-colors duration-300">
                <p>&copy; {new Date().getFullYear()} DevPortfolio. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default App;
