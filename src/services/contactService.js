import emailjs from '@emailjs/browser';

/**
 * Servicio para manejar la lógica de contacto.
 * Usa EmailJS para enviar mensajes por correo.
 */
export const contactService = {
    /**
     * Envía el formulario de contacto por correo usando EmailJS.
     * @param {Object} formData - Datos del formulario { name, email, service, message }
     * @returns {Promise<void>}
     */
    async sendMessage(formData) {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        console.log("Intentando enviar correo con EmailJS...", {
            serviceId,
            templateId,
            publicKey: publicKey ? '***' : 'MISSING'
        });

        if (!serviceId || !templateId || !publicKey) {
            const error = "Faltan credenciales de EmailJS. Verifica tu archivo .env";
            console.error(error);
            throw new Error(error);
        }

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                service_type: formData.service || 'No especificado',
                to_name: "Fabian",
            };

            console.log("Enviando parámetros a EmailJS:", templateParams);

            const response = await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            console.log("✅ Correo enviado exitosamente!", response.status, response.text);
            return response;
        } catch (error) {
            console.error("❌ Error enviando correo EmailJS:", error);
            throw error;
        }
    }
};
