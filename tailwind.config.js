/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "2rem",
            },
        },
        extend: {
            colors: {
                "-text": "#171717",
                "-background": "#FAFAFA",
            },
            fontSize: {
                xs: "clamp(0.64rem, 0.17vw + 0.76rem, 0.89rem)",
                sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
                base: "base: clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
                lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
                xl: "clamp(1.56rem, 0.88vw + 1.3rem, 1.95rem)",
                "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
                "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
                "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
                "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
                "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
            },
        },
    },

    plugins: [
        require("@tailwindcss/typography", "@tailwindcss/container-queries"),
    ],
};