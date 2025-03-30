const { BiHeading } = require('react-icons/bi');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            // 'xl': '1280px',
        },
        container: {
            padding: '2rem',
            center: true,
        },
        extend: {
            colors: {
                lava: "#FF753C",
                lime: "#ADFF5B",
                onyx: "#0F0F0F",
                azure: "#1954D8",
                lavender: "#CF9EFF",
                white: "#ffffff",
                offwhite: "#f5f5f5",
                gold: "#93894e",
            },
            backgroundImage: {
                'panel': 'linear-gradient(to top right, #373636, #1c1c1c)',
            },
            fontFamily: {
                body: ['Helvetica'],
                mono: ['Inconsolata'],
                unica: ['"Unica One"'],
                bungee: ['Bungee'],
                sans: ['Helvetica'], // default ( Preflight sets the font family on the html element to match your configured sans font )
            },
            fontSize: {
                h1: ['2.25rem', {
                    'line-height': '2.5rem'
                }]
            },
        },
    },
    plugins: [],
}