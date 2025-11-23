/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#fafaf9', // Stone 50
                secondary: '#f5f5f4', // Stone 100
                dark: '#1c1917', // Stone 900
                accent: '#57534e', // Stone 600
            }
        },
    },
    plugins: [],
}
