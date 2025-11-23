import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        }, 1500);
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-stone-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                            Hablemos de tu proyecto
                        </h2>
                        <p className="text-lg text-stone-600 mb-8">
                            ¿Tienes una idea en mente? Estoy disponible para nuevos proyectos y colaboraciones. Contáctame y construyamos algo increíble juntos.
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:contacto@ejemplo.com" className="flex items-center text-stone-600 hover:text-stone-900 transition-colors">
                                <div className="w-12 h-12 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-center mr-4 shadow-sm">
                                    <Mail className="w-6 h-6 text-stone-600" />
                                </div>
                                <div>
                                    <span className="block text-sm text-stone-500">Email</span>
                                    <span className="text-lg font-medium">estudiante@inacap.cl</span>
                                </div>
                            </a>

                            <div className="flex gap-4 mt-8">
                                <a href="#" className="w-12 h-12 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-center text-stone-500 hover:bg-stone-800 hover:text-stone-50 hover:border-stone-800 transition-all shadow-sm">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-stone-50 border border-stone-200 rounded-lg flex items-center justify-center text-stone-500 hover:bg-stone-800 hover:text-stone-50 hover:border-stone-800 transition-all shadow-sm">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-stone-50 p-8 rounded-2xl border border-stone-200 shadow-xl"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-transparent text-stone-900 placeholder-stone-400 transition-all"
                                    placeholder="Tu nombre"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-transparent text-stone-900 placeholder-stone-400 transition-all"
                                    placeholder="tu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-stone-100 border border-stone-200 rounded-lg focus:ring-2 focus:ring-stone-400 focus:border-transparent text-stone-900 placeholder-stone-400 transition-all resize-none"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 rounded-lg font-bold text-stone-50 flex items-center justify-center transition-all shadow-lg ${submitted ? 'bg-green-600 hover:bg-green-700 shadow-green-200' : 'bg-stone-800 hover:bg-stone-700 shadow-stone-200'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Enviando...</span>
                                ) : submitted ? (
                                    <span>¡Mensaje Enviado!</span>
                                ) : (
                                    <>
                                        Enviar Mensaje
                                        <Send className="ml-2 w-5 h-5" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
