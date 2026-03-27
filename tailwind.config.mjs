/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        desktop: '1440px',
      },
      colors: {
        'dark-bg': '#0b0118',
        'trueview-blue': '#2563eb',
        'trueview-red': '#ef4444',
        'card-bg': '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}