/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,scss,css}'],
    darkMode: 'selector',
    plugins: [],
    theme: {
        extend: {
            colors: {
                navy: '#162438',
            },
            container: {
                center: true,
            },
        },
        container: {
            center: true,
        },
    },
};
