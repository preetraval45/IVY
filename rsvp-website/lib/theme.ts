// Pretty in Pink Theme Configuration
// Colors extracted from ivy_sweet16_poster.png

export const colors = {
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
};

export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1440px',
};

export const spacing = {
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2rem',      // 32px
  xl: '3rem',      // 48px
  xxl: '4rem',     // 64px
};

export const typography = {
  fonts: {
    script: '"Dancing Script", "Brush Script MT", cursive',
    elegant: '"Playfair Display", "Georgia", serif',
    body: '"Inter", "Segoe UI", sans-serif',
  },
  sizes: {
    xs: '0.75rem',   // 12px
    sm: '0.875rem',  // 14px
    base: '1rem',    // 16px
    lg: '1.125rem',  // 18px
    xl: '1.5rem',    // 24px
    '2xl': '2rem',   // 32px
    '3xl': '3rem',   // 48px
    '4xl': '4rem',   // 64px
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
};

export const shadows = {
  sm: '0 1px 2px 0 rgba(199, 91, 122, 0.05)',
  md: '0 4px 6px -1px rgba(199, 91, 122, 0.1)',
  lg: '0 10px 15px -3px rgba(199, 91, 122, 0.1)',
  xl: '0 20px 25px -5px rgba(199, 91, 122, 0.1)',
};

export const borderRadius = {
  sm: '0.25rem',   // 4px
  md: '0.5rem',    // 8px
  lg: '1rem',      // 16px
  xl: '1.5rem',    // 24px
  full: '9999px',
};

export const transitions = {
  fast: '150ms ease-in-out',
  normal: '250ms ease-in-out',
  slow: '350ms ease-in-out',
};

// Tailwind CSS theme extension
export const tailwindTheme = {
  extend: {
    colors: colors,
    fontFamily: {
      script: ['"Dancing Script"', 'cursive'],
      elegant: ['"Playfair Display"', 'serif'],
      body: ['"Inter"', 'sans-serif'],
    },
    spacing: spacing,
    boxShadow: shadows,
    borderRadius: borderRadius,
    transitionDuration: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
    },
  },
};
