import React from 'react';
import { ArrowRight, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-stone-50">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-stone-200/40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-stone-300/30 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-sm font-medium mb-6">
                        <Code2 className="w-4 h-4 mr-2" />
                        Desarrollador Web Full Stack
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900 mb-6">
                        Creo experiencias web <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-500 to-stone-700">
                            dinámicas y modernas
                        </span>
                    </h1>

                    <p className="mt-4 text-xl text-stone-600 max-w-2xl mx-auto mb-10">
                        Transformo ideas en realidad digital. Especializado en crear aplicaciones web rápidas, estables y escalables utilizando las últimas tecnologías.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-stone-50 bg-stone-800 hover:bg-stone-700 rounded-lg transition-all hover:scale-105 shadow-lg shadow-stone-900/10"
                        >
                            Comenzar Proyecto
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-stone-700 bg-stone-50 border border-stone-200 hover:bg-stone-100 rounded-lg transition-all hover:scale-105 shadow-sm"
                        >
                            Ver Servicios
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
