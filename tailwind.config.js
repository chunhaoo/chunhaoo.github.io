/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,scss,css}'],
    darkMode: 'selector',
    plugins: [],
    theme: {
        extend: {
            colors: {
                navy: '#162438',
                'dark-green': '#528a64',
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
