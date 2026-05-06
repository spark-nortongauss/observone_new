import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        limeBrand: '#D9FF35',
        limeDark: '#b8d900',
        base: '#050505',
        surface: '#F8F8F6',
        border: '#E4E4E0',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.04)',
        elevated: '0 4px 6px rgba(0,0,0,0.05), 0 20px 60px rgba(0,0,0,0.08)',
        'inner-brand': 'inset 0 0 0 1px rgba(217,255,53,0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-dark':
          'radial-gradient(ellipse at 15% 15%, rgba(217,255,53,0.18) 0%, transparent 50%), radial-gradient(ellipse at 85% 80%, rgba(217,255,53,0.10) 0%, transparent 45%), linear-gradient(160deg, #0a0a0a 0%, #111318 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-up': 'slideUp 0.5s ease forwards',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
} satisfies Config;
