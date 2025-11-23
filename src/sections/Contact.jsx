import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import ReCAPTCHA from "react-google-recaptcha";
import { contactService } from '../services/contactService';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
        honeypot: '' // Campo trampa para bots
    });
    const [captchaValue, setCaptchaValue] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const recaptchaRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // 1. Validación Honeypot (Anti-Spam Invisible)
        if (formState.honeypot) {
            // Si el bot llenó este campo oculto, simulamos éxito pero no enviamos nada.
            console.warn("Bot detectado (Honeypot).");
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 3000);
            return;
        }

        // 2. Validación reCAPTCHA
        if (!captchaValue) {
            setError("Por favor, verifica que no eres un robot.");
            setIsSubmitting(false);
            return;
        }

        try {
            await contactService.sendMessage({
                name: formState.name,
                email: formState.email,
                message: formState.message
            });

            setIsSubmitting(false);
            setSubmitted(true);
            setFormState({ name: '', email: '', message: '', honeypot: '' });
            setCaptchaValue(null);
            if (recaptchaRef.current) recaptchaRef.current.reset();

            setTimeout(() => setSubmitted(false), 5000);

        } catch (err) {
            console.error("Error submitting form:", err);
            setError("Hubo un error al enviar el mensaje. Por favor intenta nuevamente.");
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-stone-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-stone-900 dark:text-stone-100 mb-6">Hablemos</h2>
                        <p className="text-xl text-stone-600 dark:text-stone-300 mb-8">
                            ¿Tienes un proyecto en mente? Estoy disponible para trabajos freelance y colaboraciones.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-stone-700 dark:text-stone-300">
                                <div className="w-12 h-12 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-bold">Email</p>
                                    <a href="mailto:contacto@ejemplo.com" className="hover:text-stone-900 dark:hover:text-white">fabiandelvillar@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-6">
                                <a href="https://github.com/noagame" className="w-12 h-12 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/fabi%C3%A1n-del-villar-velasquez-894212273/" className="w-12 h-12 bg-stone-100 dark:bg-stone-800 rounded-full flex items-center justify-center text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-stone-50 dark:bg-stone-900 p-8 rounded-2xl border border-stone-100 dark:border-stone-800 shadow-lg"
                    >
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="name" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-stone-400 focus:border-transparent outline-none transition-all text-stone-900 dark:text-stone-100 placeholder-stone-400"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-stone-400 focus:border-transparent outline-none transition-all text-stone-900 dark:text-stone-100 placeholder-stone-400"
                                    placeholder="tu@email.com"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">Mensaje</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 focus:ring-2 focus:ring-stone-400 focus:border-transparent outline-none transition-all text-stone-900 dark:text-stone-100 placeholder-stone-400"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                ></textarea>
                            </div>

                            {/* Honeypot Field (Invisible para usuarios, visible para bots) */}
                            <input
                                type="text"
                                name="honeypot"
                                value={formState.honeypot}
                                onChange={handleChange}
                                style={{ display: 'none' }}
                                tabIndex={-1}
                                autoComplete="off"
                            />

                            <div className="mb-6 flex justify-center">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Clave de prueba de Google
                                    onChange={(val) => setCaptchaValue(val)}
                                    theme="light"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 px-6 rounded-lg font-bold text-stone-50 flex items-center justify-center transition-all shadow-lg ${submitted ? 'bg-green-600 hover:bg-green-700 shadow-green-200 dark:shadow-none' : 'bg-stone-800 hover:bg-stone-700 dark:bg-stone-700 dark:hover:bg-stone-600 shadow-stone-200 dark:shadow-none'
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
                            {error && (
                                <p className="text-red-500 text-sm text-center mt-2">{error}</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
