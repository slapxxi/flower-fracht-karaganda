const plugin = require('tailwindcss/plugin');

const colors = {
  'navy-100': ['211', '33%', '94%'],
  'navy-200': ['211', '100%', '81%'],
  'navy-300': ['211', '17%', '76%'],
  'navy-400': ['211', '17%', '66%'],
  'navy-500': ['211', '17%', '56%'],
  'navy-600': ['211', '17%', '44%'],
  'navy-700': ['211', '31%', '28%'],
  'navy-800': ['211', '29%', '19%'],
  'navy-900': ['211', '32%', '15%'],

  'navyDark-500': ['212', '33%', '14%'],
};

const mappedColors = Object.fromEntries(
  Object.entries(colors).map(([name, hsl]) => [
    name,
    `hsl(var(--${name}-hsl, ${hsl.join(' ')}) / <alpha-value>)`,
  ]),
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    data: {
      checked: 'checked',
      vertical: 'vertical',
      horizontal: 'horizontal',
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    extend: {
      keyframes: {
        slideLeft: {
          from: { transform: 'translateX(30%)' },
          to: { transform: 'none' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 150ms ease-out',
      },
      colors: {
        ...mappedColors,
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        '2xs': '0.5rem',
      },
      transitionDelay: {
        '2s': '-2s',
        '4s': '-4s',
        '6s': '-6s',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.px-wrap': {
          'padding-left': 'max(calc((100% - 1536px) / 2), 28px)',
          'padding-right': 'max(calc((100% - 1536px) / 2), 28px)',
        },
        '.pl-wrap': {
          'padding-left': 'max(calc((100% - 1536px) / 2), 28px)',
        },
        '.pr-wrap': {
          'padding-right': 'max(calc((100% - 1536px) / 2), 28px)',
        },
        '.area-full': {
          'grid-area': '1 / 1',
        },
        '.no-scroll': {
          overflow: 'hidden',
        },
        '.writing-v-rl': {
          writingMode: 'vertical-rl',
        },
        '.writing-v-lr': {
          writingMode: 'vertical-lr',
        },
        '.writing-h-tb': {
          writingMode: 'horizontal-tb',
        },
        '.perspective': {
          perspective: '800px',
        },
        '.pre-3d': {
          'transform-style': 'preserve-3d',
        },
        '.cap-round': {
          'stroke-linecap': 'round',
        },
        '.line-round': {
          'stroke-linejoin': 'round',
        },
        '.content-auto': {
          'content-visibility': 'auto',
        },
        '.content-hidden': {
          'content-visibility': 'hidden',
        },
        '.content-visible': {
          'content-visibility': 'visible',
        },
      });
    }),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'anim-delay': (value) => ({
            'animation-delay': value,
          }),
        },
        { values: theme('transitionDelay') },
      );
    }),
  ],
};
