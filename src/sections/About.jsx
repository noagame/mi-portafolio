import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Palette } from 'lucide-react';

const About = () => {
    const skills = [
        { name: 'React & Angular', icon: <Code2 className="w-6 h-6" />, level: 'Avanzado' },
        { name: 'TailwindCSS', icon: <Palette className="w-6 h-6" />, level: 'Avanzado' },
        { name: 'Node.js Basics', icon: <Database className="w-6 h-6" />, level: 'Intermedio' },
        { name: 'Web Architecture', icon: <Globe className="w-6 h-6" />, level: 'Intermedio' },
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-stone-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6">Quién Soy</h2>
                        <div className="prose prose-lg text-stone-600 dark:text-stone-300">
                            <p className="mb-4">
                                Soy estudiante de Ingeniería en Informática en <span className="font-semibold text-stone-800 dark:text-stone-200">INACAP</span>, apasionado por el desarrollo frontend y la creación de interfaces de usuario intuitivas.
                            </p>
                            <p className="mb-4">
                                Mi enfoque combina la lógica técnica con una sensibilidad estética moderna. Me especializo en construir aplicaciones web rápidas, accesibles y visualmente atractivas utilizando las últimas tecnologías del mercado.
                            </p>
                            <p>
                                Busco constantemente nuevos desafíos que me permitan crecer profesionalmente y aportar valor a través de soluciones digitales innovadoras.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="p-6 bg-stone-50 dark:bg-stone-900 rounded-xl border border-stone-100 dark:border-stone-800 hover:shadow-lg transition-shadow"
                            >
                                <div className="w-12 h-12 bg-stone-200 dark:bg-stone-800 rounded-lg flex items-center justify-center text-stone-700 dark:text-stone-300 mb-4">
                                    {skill.icon}
                                </div>
                                <h3 className="font-bold text-stone-900 dark:text-stone-100 mb-1">{skill.name}</h3>
                                <span className="text-sm text-stone-500 dark:text-stone-400">{skill.level}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
