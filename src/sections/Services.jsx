import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Services = () => {
    const tiers = [
        {
            name: 'Landing Page',
            price: 'Desde $150.000',
            description: 'Ideal para presencia online rápida y efectiva.',
            features: ['Diseño Responsive', 'Sección de Contacto', 'Optimización Básica SEO', 'Hosting Configurado'],
            highlight: false
        },
        {
            name: 'Web Dinámica',
            price: 'Desde $350.000',
            description: 'Para negocios que necesitan gestionar contenido.',
            features: ['Todo lo anterior', 'Panel de Administración', 'Blog / Noticias', 'Integración Redes Sociales', 'Analytics Avanzado'],
            highlight: true
        },
        {
            name: 'App Full Stack',
            price: 'Cotizar',
            description: 'Soluciones a medida con lógica compleja.',
            features: ['Arquitectura Escalable', 'Base de Datos', 'Autenticación Usuarios', 'API REST / GraphQL', 'Soporte Prioritario'],
            highlight: false
        }
    ];

    return (
        <section id="services" className="py-24 bg-stone-50 dark:bg-stone-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">Servicios y Planes</h2>
                    <p className="text-xl text-stone-600 dark:text-stone-300">Soluciones adaptadas a cada etapa de tu crecimiento digital.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className={`relative p-8 rounded-2xl border ${tier.highlight
                                    ? 'bg-white dark:bg-stone-800 border-stone-300 dark:border-stone-600 shadow-xl scale-105 z-10'
                                    : 'bg-stone-100 dark:bg-stone-950 border-stone-200 dark:border-stone-800'
                                } flex flex-col transition-colors duration-300`}
                        >
                            {tier.highlight && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-stone-800 dark:bg-stone-600 text-stone-50 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                    Más Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-2">{tier.name}</h3>
                            <div className="text-3xl font-bold text-stone-800 dark:text-stone-200 mb-4">{tier.price}</div>
                            <p className="text-stone-600 dark:text-stone-400 mb-8">{tier.description}</p>

                            <ul className="space-y-4 mb-8 flex-1">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-stone-700 dark:text-stone-300">
                                        <Check className="w-5 h-5 text-stone-500 dark:text-stone-400 mr-3 flex-shrink-0" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className={`w-full py-3 rounded-lg font-bold text-center transition-colors ${tier.highlight
                                        ? 'bg-stone-800 dark:bg-stone-700 hover:bg-stone-700 dark:hover:bg-stone-600 text-stone-50'
                                        : 'bg-white dark:bg-stone-800 hover:bg-stone-50 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700'
                                    }`}
                            >
                                Seleccionar
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
