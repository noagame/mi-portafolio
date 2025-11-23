import React from 'react';
import { Check, Zap, Globe, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, description, features, icon: Icon, popular, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={`relative p-8 rounded-2xl border transition-all ${popular
            ? 'bg-stone-50 border-stone-300 shadow-xl shadow-stone-200 ring-1 ring-stone-200'
            : 'bg-stone-50 border-stone-200 shadow-lg hover:shadow-xl'
            } flex flex-col`}
    >
        {popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-stone-800 text-stone-50 text-xs font-bold uppercase tracking-wide rounded-full shadow-md">
                Más Popular
            </div>
        )}

        <div className="mb-6">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${popular ? 'bg-stone-100 text-stone-600' : 'bg-stone-100 text-stone-500'}`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-900 mb-2">{title}</h3>
            <p className="text-stone-500 text-sm h-10">{description}</p>
        </div>

        <div className="mb-6">
            <span className="text-4xl font-bold text-stone-900">{price}</span>
            {price !== 'Cotizar' && <span className="text-stone-400">/proyecto</span>}
        </div>

        <ul className="space-y-4 mb-8 flex-1">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-stone-600">
                    <Check className="w-5 h-5 text-stone-500 mr-3 shrink-0" />
                    {feature}
                </li>
            ))}
        </ul>

        <a
            href="#contact"
            className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-all ${popular
                ? 'bg-stone-800 hover:bg-stone-700 text-stone-50 shadow-lg shadow-stone-200 hover:shadow-stone-300'
                : 'bg-stone-200 hover:bg-stone-300 text-stone-900'
                }`}
        >
            Seleccionar Plan
        </a>
    </motion.div>
);

const Services = () => {
    return (
        <section id="services" className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                        Planes y Servicios
                    </h2>
                    <p className="text-lg text-stone-600">
                        Soluciones adaptadas a tus necesidades, desde landing pages simples hasta aplicaciones web complejas.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <PricingCard
                        title="Landing Page"
                        price="$150.000"
                        description="Ideal para presencia online básica y portafolios personales."
                        icon={Globe}
                        delay={0}
                        features={[
                            'Diseño Responsivo (Mobile First)',
                            'Sección de Contacto',
                            'Integración con Redes Sociales',
                            'Optimización Básica SEO',
                            'Hosting Gratuito (Netlify/Vercel)'
                        ]}
                    />
                    <PricingCard
                        title="Web Dinámica"
                        price="$350.000"
                        description="Para negocios que necesitan interactividad y gestión de contenido."
                        icon={Zap}
                        popular={true}
                        delay={0.2}
                        features={[
                            'Todo lo del plan Landing Page',
                            'Desarrollada en React / Next.js',
                            'Animaciones e Interactividad',
                            'Formularios Avanzados',
                            'Panel de Administración Básico',
                            'Optimización de Performance'
                        ]}
                    />
                    <PricingCard
                        title="Full Stack App"
                        price="Cotizar"
                        description="Soluciones a medida con backend robusto y bases de datos."
                        icon={Server}
                        delay={0.4}
                        features={[
                            'Arquitectura Escalable',
                            'Backend Personalizado (Node/Python)',
                            'Base de Datos (SQL/NoSQL)',
                            'Autenticación de Usuarios',
                            'Integración de Pagos',
                            'Soporte y Mantenimiento'
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;
