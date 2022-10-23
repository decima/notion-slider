const defaultColors = require('daisyui/src/colors/themes')


const lightColors = {
    gray: "#9B9A97",
    gray_background: "#EBECED",
    brown: "#64473A",
    brown_background: "#E9E5E3",
    orange: "#D9730D",
    orange_background: "#FAEBDD",
    yellow: "#FAEBDD",
    yellow_background: "#FBF3DB",
    green: "#0F7B6C",
    green_background: "#DDEDEA",
    blue: "#0B6E99",
    blue_background: "#DDEBF1",
    purple: "#6940A5",
    purple_background: "#EAE4F2",
    pink: "#AD1A72",
    pink_background: "#F4DFEB",
    red: "#E03E3E",
    red_background: "#FBE4E4",
}
const darkColors = {
    gray: "#979A9B",
    gray_background: "#454B4E",
    brown: "#937264",
    brown_background: "#434040",
    orange: "#FFA344",
    orange_background: "#594A3A",
    yellow: "#FFDC49",
    yellow_background: "#59563B",
    green: "#4DAB9A",
    green_background: "#354C4B",
    blue: "#529CCA",
    blue_background: "#364954",
    purple: "#9A6DD7",
    purple_background: "#443F57",
    pink: "#E255A1",
    pink_background: "#533B4C",
    red: "#FF7369",
    red_background: "#594141",
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{svelte,js,ts,jsx,tsx}",

    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui"), require('@tailwindcss/typography')],
    daisyui: {
        themes: [
            {
                light: {
                    ...defaultColors["[data-theme=light]"],
                    ...lightColors,
                },
            },
            {
                dark: {
                    ...defaultColors["[data-theme=dark]"],
                    ...darkColors,
                },
            }, "cupcake",
            "bumblebee",
            "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
            {
                lpl: {
                    fontFamily: 'Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                    "primary": "#2DB7E0",
                    "secondary": "#F4DA85",
                    "accent": "#0393BE",
                    "neutral": "#13110C",
                    "base-100": "#FFFFFF",
                    "info": "#96DBF0",
                    "success": "#2DC94F",
                    "warning": "#FFA92B",
                    "error": "#FF2E54",
                },
                "lpl-v2": {
                    fontFamily: 'Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
                    "primary": "#3A3A3A",
                    "primary-content": "#EAF8FC",
                    "secondary": "#3A3A3A",
                    "secondary-content": "#FEF8E6",
                    "accent": "#3A3A3A",
                    "accent-content": "#E8FFF6",
                    "neutral": "#13110C",
                    "base-100": "#FFFFFF",
                    "info": "#96DBF0",
                    "success": "#2DC94F",
                    "warning": "#FFA92B",
                    "error": "#FF2E54",
                },

                //#EAF8FC
            }],
    },
}
