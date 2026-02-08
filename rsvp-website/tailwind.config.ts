import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette
        blush: '#E8A0BF',
        babyPink: '#F4C2C2',
        dustyRose: '#C48B9F',
        deepPink: '#C75B7A',
        champagne: '#F5E6CC',
        ivory: '#FFFFF0',
        white: '#FFFFFF',

        // Accent colors
        gold: '#BFA06E',
        goldLight: '#D4BE96',
        roseGold: '#B76E79',
        sage: '#AFC3A5',
        sageDark: '#91A88A',

        // Text colors
        textDark: '#523040',
        textMedium: '#825569',
        textLight: '#AA8294',

        // Background gradients
        bgTop: '#FFFAF8',
        bgBottom: '#FDEBE8',

        // Pastel additions
        pastelLavender: '#D2BEDC',
        pastelMint: '#C3E1D2',
        pastelPeach: '#FFDAC8',

        // UI states
        error: '#C75B7A',
        success: '#AFC3A5',
        warning: '#F5E6CC',
        info: '#D4BE96',
      },
      fontFamily: {
        script: ['var(--font-script)', 'Dancing Script', 'cursive'],
        elegant: ['var(--font-elegant)', 'Playfair Display', 'serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
      },
      spacing: {
        xs: '0.5rem',    // 8px
        sm: '1rem',      // 16px
        md: '1.5rem',    // 24px
        lg: '2rem',      // 32px
        xl: '3rem',      // 48px
        xxl: '4rem',     // 64px
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(199, 91, 122, 0.05)',
        md: '0 4px 6px -1px rgba(199, 91, 122, 0.1)',
        lg: '0 10px 15px -3px rgba(199, 91, 122, 0.1)',
        xl: '0 20px 25px -5px rgba(199, 91, 122, 0.1)',
        '2xl': '0 25px 50px -12px rgba(199, 91, 122, 0.25)',
      },
      borderRadius: {
        sm: '0.25rem',   // 4px
        md: '0.5rem',    // 8px
        lg: '1rem',      // 16px
        xl: '1.5rem',    // 24px
        '2xl': '2rem',   // 32px
        full: '9999px',
      },
      transitionDuration: {
        fast: '150ms',
        normal: '250ms',
        slow: '350ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
