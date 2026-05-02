import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { limeBrand:'#D9FF35', base:'#050505' }, boxShadow:{soft:'0 10px 30px rgba(0,0,0,0.08)'} } },
  plugins: []
} satisfies Config;
