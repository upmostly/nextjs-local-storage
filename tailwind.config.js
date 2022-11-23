const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                title: ['Inter', ...defaultTheme.fontFamily.sans],
                text: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: colors.red[500],
                secondary: colors.orange[500],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
