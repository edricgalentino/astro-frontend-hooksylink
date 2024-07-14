import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}',
    './editor/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
    extend: {
      colors: {
        canvas: '#FFFFFF', // white
        background: '#F6F6F6', // light grey
        default: '#f8f4e1', // yellow
        primary: {
          DEFAULT: '#f8f4e1', // yellow
        },
        secondary: {
          DEFAULT: '#991b1b', // red
        },
        tertiary: {
          DEFAULT: '#0f172a', // black
        },
        subdued: {
          DEFAULT: '#eaeaec',
        },
        disabled: {
          DEFAULT: '#D1D1D1',
          surface: '#F6F6F6',
        },
        information: {
          DEFAULT: '#277CE9',
          surface: '#EFF8FF',
          hovered: '#C0E2FD',
          pressed: '#61B7F9',
          bold: '#1E63D2',
          icon: '#3D98F4',
          border: '#94D2FC',
        },
        success: {
          DEFAULT: '#93BC29',
          surface: '#F8FCE9',
          hovered: '#DFF0A6',
          pressed: '#AFD447',
          bold: '#55711A',
          disabled: '#F6F6F6',
          text: '#70941C',
          icon: '#93BC29',
          border: '#C7E472',
        },
        warning: {
          DEFAULT: '#C2830C',
          surface: '#FDFBE9',
          hovered: '#F9EA8F',
          pressed: '#F1C11E',
          bold: '#9B5E0D',
          disabled: '#F6F6F6',
          icon: '#EDB312',
          border: '#F6D74E',
        },
        critical: {
          DEFAULT: '#CE4F34',
          surface: '#FDF5F3',
          hovered: '#FAD6CE',
          pressed: '#ED907C',
          bold: '#AD3F28',
          disabled: '#F6F6F6',
          text: '#CE4F34',
          icon: '#DE593D',
          border: '#F5B9AC',
          action: {
            DEFAULT: '#DE593D',
            hovered: '#AD3F28',
            pressed: '#773325',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      keyframes: {
        'fade-slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateX(var(--tw-translate-x, 0)) translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(var(--tw-translate-x, 0)) translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-slide-up':
          'fade-slide-up 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'fade-in': 'fade-in 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
