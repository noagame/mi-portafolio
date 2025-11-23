import React from 'react';
import { ArrowRight, Code, Layout, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-stone-900 dark:text-stone-100 mb-6 tracking-tight">
                        Desarrollo Web <span className="text-stone-500 dark:text-stone-400">Moderno</span>
                    </h1>
                    <p className="text-xl text-stone-600 dark:text-stone-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Transformo ideas en experiencias digitales fluidas. Especializado en React, Angular y diseño responsivo de alto impacto.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-stone-800 dark:bg-stone-700 text-stone-50 rounded-lg font-semibold hover:bg-stone-700 dark:hover:bg-stone-600 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                        >
                            Iniciar Proyecto <ArrowRight size={20} />
                        </a>
                        <a
                            href="#services"
                            className="px-8 py-4 bg-white dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 rounded-lg font-semibold hover:bg-stone-50 dark:hover:bg-stone-700 transition-all shadow-sm hover:shadow-md"
                        >
                            Ver Servicios
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-20 grid grid-cols-3 gap-8 text-stone-400 dark:text-stone-500"
                >
                    <div className="flex flex-col items-center gap-2">
                        <Code size={32} />
                        <span className="text-sm font-medium">Clean Code</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Layout size={32} />
                        <span className="text-sm font-medium">Responsive</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Smartphone size={32} />
                        <span className="text-sm font-medium">Mobile First</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
