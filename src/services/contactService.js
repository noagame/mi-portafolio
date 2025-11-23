import { collection, addDoc } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { db } from '../firebase';

/**
 * Servicio para manejar la lógica de contacto.
 * Separa la vista (React) de la lógica de negocio (Firebase/EmailJS).
 */
export const contactService = {
    /**
     * Envía el formulario de contacto: guarda en BD y envía correo.
     * @param {Object} formData - Datos del formulario { name, email, message }
     * @returns {Promise<void>}
     */
    async sendMessage(formData) {
        try {
            // 1. Guardar en Firebase Firestore
            await this.saveToDatabase(formData);

            // 2. Enviar correo con EmailJS
            await this.sendEmail(formData);

            return true;
        } catch (error) {
            console.error("Error en contactService:", error);
            throw error;
        }
    },

    /**
     * Guarda el contacto en Firestore.
     * @private
     */
    async saveToDatabase(data) {
        try {
            await addDoc(collection(db, "contacts"), {
                ...data,
                createdAt: new Date()
            });
        } catch (error) {
            console.error("Error guardando en Firebase:", error);
            throw new Error("Error al guardar en la base de datos.");
        }
    },

    /**
     * Envía la notificación por correo usando EmailJS.
     * @private
     */
    async sendEmail(data) {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.warn("Faltan credenciales de EmailJS. No se envió el correo.");
            return;
        }

        try {
            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                    to_name: "Fabian",
                },
                publicKey
            );
        } catch (error) {
            console.error("Error enviando correo EmailJS:", error);
            // No lanzamos error aquí para no fallar todo el proceso si solo falla el correo
            // pero podríamos hacerlo si el correo es crítico.
        }
    }
};
