const { BiHeading } = require('react-icons/bi');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx,html}",
    ],
    theme: {
        colors: {
            orange: "#ff9d77",
            white: "#ffffff",
            slate: "#2f4f4f"
        },
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
            fontFamily: {
                body: ['Inconsolata'],
                mono: ['Inconsolata'],
                unica: ['"Unica One"'],
                heading: ['Bungee'],
                sans: ['Inconsolata'], // default ( Preflight sets the font family on the html element to match your configured sans font )
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