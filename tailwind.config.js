/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        // Light Theme Colors
        light: {
          bg: {
            primary: '#ffffff',
            secondary: '#fafafa',
            tertiary: '#f8f9fa',
            card: '#ffffff',
            overlay: 'rgba(255, 255, 255, 0.95)',
            gradient: {
              from: '#ffffff',
              to: '#fff8dc'
            }
          },
          text: {
            primary: '#1f2937',
            secondary: '#4b5563',
            tertiary: '#6b7280',
            muted: '#9ca3af'
          },
          border: {
            primary: '#e5e7eb',
            secondary: '#f3f4f6',
            accent: '#f5deb3'
          }
        },
        // Dark Theme Colors
        dark: {
          bg: {
            primary: '#000000',
            secondary: '#1e293b',
            tertiary: '#334155',
            card: '#1e293b',
            overlay: 'rgba(15, 23, 42, 0.95)',
            gradient: {
              from: '#0f172a',
              to: '#1e293b'
            }
          },
          text: {
            primary: '#f8fafc',
            secondary: '#e2e8f0',
            tertiary: '#cbd5e1',
            muted: '#94a3b8'
          },
          border: {
            primary: '#334155',
            secondary: '#475569',
            accent: '#64748b'
          }
        },
        // Golden Brand Colors (Same for both themes)
        brand: {
          // Primary golden colors
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fcd34d',
            300: '#fbbf24',
            400: '#f59e0b',
            500: '#d97706',
            600: '#b45309',
            700: '#92400e',
            800: '#78350f',
            900: '#451a03'
          },
          // Your existing golden palette
          primary: '#daa520',    // goldenrod
          secondary: '#ffd700',  // gold
          tertiary: '#b8860b',   // dark goldenrod
          accent: '#f0e68c',     // khaki
          light: '#fff8dc',      // cornsilk
          lighter: '#fffacd',    // lemon chiffon
          cream: '#f5deb3',      // wheat
          // Golden gradients
          gradient: {
            primary: 'linear-gradient(135deg, #daa520 0%, #ffd700 100%)',
            secondary: 'linear-gradient(135deg, #b8860b 0%, #daa520 50%, #ffd700 100%)',
            accent: 'linear-gradient(135deg, #f0e68c 0%, #ffd700 100%)'
          }
        },
        // Semantic colors for both themes
        semantic: {
          success: {
            light: '#10b981',
            dark: '#34d399'
          },
          error: {
            light: '#ef4444',
            dark: '#f87171'
          },
          warning: {
            light: '#f59e0b',
            dark: '#fbbf24'
          },
          info: {
            light: '#3b82f6',
            dark: '#60a5fa'
          }
        }
      },
      // Theme-aware backgrounds
      backgroundColor: {
        'theme-primary': 'var(--bg-primary)',
        'theme-secondary': 'var(--bg-secondary)',
        'theme-tertiary': 'var(--bg-tertiary)',
        'theme-card': 'var(--bg-card)',
        'theme-overlay': 'var(--bg-overlay)',
      },
      // Theme-aware text colors
      textColor: {
        'theme-primary': 'var(--text-primary)',
        'theme-secondary': 'var(--text-secondary)',
        'theme-tertiary': 'var(--text-tertiary)',
        'theme-muted': 'var(--text-muted)',
      },
      // Theme-aware border colors
      borderColor: {
        'theme-primary': 'var(--border-primary)',
        'theme-secondary': 'var(--border-secondary)',
        'theme-accent': 'var(--border-accent)',
      },
      // Enhanced animations
      animation: {
        'shimmer-light': 'shimmer-light 4s infinite linear',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'slide-in-up': 'slide-in-up 0.6s ease-out forwards',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'ping-slow': 'ping 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      // Enhanced keyframes
      keyframes: {
        'shimmer-light': {
          '0%': { opacity: '0.3', transform: 'rotate(0deg)' },
          '50%': { opacity: '0.7', transform: 'rotate(180deg)' },
          '100%': { opacity: '0.3', transform: 'rotate(360deg)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      // Enhanced shadows for theme support
      boxShadow: {
        'theme-sm': 'var(--shadow-sm)',
        'theme-md': 'var(--shadow-md)',
        'theme-lg': 'var(--shadow-lg)',
        'theme-xl': 'var(--shadow-xl)',
        'theme-2xl': 'var(--shadow-2xl)',
        'gold-glow': '0 0 20px rgba(218, 165, 32, 0.3), 0 0 40px rgba(255, 215, 0, 0.2)',
        'gold-glow-lg': '0 0 30px rgba(218, 165, 32, 0.4), 0 0 60px rgba(255, 215, 0, 0.3)',
      },
      // Enhanced backdrop blur
      backdropBlur: {
        'theme': 'var(--backdrop-blur)',
      },
      // Enhanced gradients
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #daa520 0%, #ffd700 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #ffd700 0%, #f0e68c 100%)',
        'gold-text-gradient': 'linear-gradient(135deg, #b8860b 0%, #daa520 50%, #ffd700 100%)',
        'theme-gradient': 'var(--bg-gradient)',
      },
      // Enhanced spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      // Enhanced border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      // Enhanced font sizes
      fontSize: {
        'xxs': '0.625rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      // Enhanced z-index
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      // Enhanced transitions
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      // Enhanced transform
      scale: {
        '102': '1.02',
        '103': '1.03',
        '98': '0.98',
        '97': '0.97',
      },
    },
  },
  plugins: [
    // Custom plugin for CSS variables
    function({ addBase, theme }) {
      addBase({
        ':root': {
          // Light theme variables
          '--bg-primary': theme('colors.light.bg.primary'),
          '--bg-secondary': theme('colors.light.bg.secondary'),
          '--bg-tertiary': theme('colors.light.bg.tertiary'),
          '--bg-card': theme('colors.light.bg.card'),
          '--bg-overlay': theme('colors.light.bg.overlay'),
          '--bg-gradient': `linear-gradient(135deg, ${theme('colors.light.bg.gradient.from')} 0%, ${theme('colors.light.bg.gradient.to')} 100%)`,
          '--text-primary': theme('colors.light.text.primary'),
          '--text-secondary': theme('colors.light.text.secondary'),
          '--text-tertiary': theme('colors.light.text.tertiary'),
          '--text-muted': theme('colors.light.text.muted'),
          '--border-primary': theme('colors.light.border.primary'),
          '--border-secondary': theme('colors.light.border.secondary'),
          '--border-accent': theme('colors.light.border.accent'),
          '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          '--shadow-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          '--backdrop-blur': 'blur(12px)',
        },
        '.dark': {
          // Dark theme variables
          '--bg-primary': theme('colors.dark.bg.primary'),
          '--bg-secondary': theme('colors.dark.bg.secondary'),
          '--bg-tertiary': theme('colors.dark.bg.tertiary'),
          '--bg-card': theme('colors.dark.bg.card'),
          '--bg-overlay': theme('colors.dark.bg.overlay'),
          '--bg-gradient': `linear-gradient(135deg, ${theme('colors.dark.bg.gradient.from')} 0%, ${theme('colors.dark.bg.gradient.to')} 100%)`,
          '--text-primary': theme('colors.dark.text.primary'),
          '--text-secondary': theme('colors.dark.text.secondary'),
          '--text-tertiary': theme('colors.dark.text.tertiary'),
          '--text-muted': theme('colors.dark.text.muted'),
          '--border-primary': theme('colors.dark.border.primary'),
          '--border-secondary': theme('colors.dark.border.secondary'),
          '--border-accent': theme('colors.dark.border.accent'),
          '--shadow-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
          '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
          '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
          '--shadow-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)',
          '--shadow-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
          '--backdrop-blur': 'blur(16px)',
        }
      });
    }
  ],
};