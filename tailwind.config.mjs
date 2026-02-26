/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: "#3a527e",
                secondary: "#e1ecef",
                accent: "#f0e6d5",
            },
            fontFamily: {
                serif: ["Cormorant Garamond", "serif"],
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
