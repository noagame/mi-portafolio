import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Terminal } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }) => (
    <div className="p-6 bg-stone-50 rounded-xl border border-stone-200 shadow-sm hover:shadow-md hover:border-stone-300 transition-all">
        <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center mb-4 text-stone-600">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold text-stone-900 mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-stone-100 rounded text-xs text-stone-600 font-medium">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const About = () => {
    return (
        <section id="about" className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                            Sobre Mí
                        </h2>
                        <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                            Soy estudiante de Ingeniería en Informática en <span className="text-stone-600 font-semibold">INACAP</span>, apasionado por el desarrollo de software y la creación de soluciones digitales innovadoras.
                        </p>
                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            Me especializo en el desarrollo frontend moderno, creando interfaces intuitivas y performantes. Mi objetivo es combinar código limpio con diseño funcional para entregar productos de alta calidad.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-stone-50 rounded-lg text-center shadow-sm border border-stone-200">
                                <span className="block text-3xl font-bold text-stone-600 mb-1">3+</span>
                                <span className="text-sm text-stone-500">Años estudiando</span>
                            </div>
                            <div className="p-4 bg-stone-50 rounded-lg text-center shadow-sm border border-stone-200">
                                <span className="block text-3xl font-bold text-stone-500 mb-1">10+</span>
                                <span className="text-sm text-stone-500">Proyectos realizados</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid gap-4"
                    >
                        <SkillCard
                            icon={Layout}
                            title="Frontend Moderno"
                            skills={['React', 'Angular', 'Vue.js', 'Next.js']}
                        />
                        <SkillCard
                            icon={Code}
                            title="Estilos & UI"
                            skills={['TailwindCSS', 'Sass', 'Framer Motion', 'Material UI']}
                        />
                        <SkillCard
                            icon={Database}
                            title="Backend & Tools"
                            skills={['Node.js', 'Firebase', 'Git', 'Docker']}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
