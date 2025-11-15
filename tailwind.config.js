/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,scss,css}'],
    darkMode: 'selector',
    plugins: [],
    theme: {
        extend: {
            colors: {
                cyan: '#1fecff',
                navy: '#162438',
                offwhite: '#fcfaf0',
                pink: '#f472b6',
                teal: '#ff531f',
                'black-20': '#00000020',
                'dark-green': '#528a64',
                'white-80': '#ffffff80',
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
