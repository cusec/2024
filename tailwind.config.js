/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        royalPurple: '#AC65E3',
        lavenderFog: '#CA78CC',
        roseQuartz: '#E087BB',
        goldenApricot: '#FFB963',
        royalBlue: '#0569FF',
      }
    },
  },
  plugins: [
    // require("daisyui")
  ],
};
