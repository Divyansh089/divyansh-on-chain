import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Neo-Web3 Colors
				neon: {
					cyan: 'hsl(var(--neon-cyan))',
					pink: 'hsl(var(--neon-pink))',
					green: 'hsl(var(--neon-green))',
					purple: 'hsl(var(--neon-purple))',
					orange: 'hsl(var(--neon-orange))'
				},
				matrix: {
					green: 'hsl(var(--matrix-green))'
				},
				void: {
					black: 'hsl(var(--void-black))'
				},
				glass: {
					white: 'hsl(var(--glass-white))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'float-complex': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-15px) rotate(5deg)' },
					'50%': { transform: 'translateY(-10px) rotate(0deg)' },
					'75%': { transform: 'translateY(-20px) rotate(-5deg)' }
				},
				'pulse-neon': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(270 100% 60% / 0.5)',
						filter: 'brightness(1)'
					},
					'50%': { 
						boxShadow: '0 0 60px hsl(270 100% 60% / 0.8)',
						filter: 'brightness(1.2)'
					}
				},
				'glitch': {
					'0%, 100%': { transform: 'translateX(0)' },
					'10%': { transform: 'translateX(-2px) skew(-0.5deg)' },
					'20%': { transform: 'translateX(2px) skew(0.5deg)' },
					'30%': { transform: 'translateX(-1px) skew(-0.2deg)' },
					'40%': { transform: 'translateX(1px) skew(0.2deg)' },
					'50%': { transform: 'translateX(0)' }
				},
				'hologram-shift': {
					'0%': { backgroundPosition: '0% 0%' },
					'50%': { backgroundPosition: '100% 100%' },
					'100%': { backgroundPosition: '0% 0%' }
				},
				'cosmic-pulse': {
					'0%, 100%': { 
						filter: 'brightness(1) saturate(1)',
						transform: 'scale(1)'
					},
					'50%': { 
						filter: 'brightness(1.3) saturate(1.2)',
						transform: 'scale(1.02)'
					}
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'cyber-scan': {
					'0%, 100%': { transform: 'translateX(-100%)' },
					'50%': { transform: 'translateX(100vw)' }
				},
				'particle-drift': {
					'0%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(-10px, -10px)' },
					'50%': { transform: 'translate(10px, -20px)' },
					'75%': { transform: 'translate(-5px, -15px)' },
					'100%': { transform: 'translate(0, 0)' }
				},
				'neural-pulse': {
					'0%, 100%': { opacity: '0.3' },
					'50%': { opacity: '0.7' }
				},
				'holo-rotate': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-complex': 'float-complex 12s ease-in-out infinite',
				'pulse-neon': 'pulse-neon 3s ease-in-out infinite',
				'glitch': 'glitch 2s ease-in-out infinite',
				'hologram-shift': 'hologram-shift 4s linear infinite',
				'cosmic-pulse': 'cosmic-pulse 3s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 4s linear infinite',
				'cyber-scan': 'cyber-scan 6s ease-in-out infinite',
				'particle-drift': 'particle-drift 20s linear infinite',
				'neural-pulse': 'neural-pulse 8s ease-in-out infinite',
				'holo-rotate': 'holo-rotate 4s linear infinite'
			},
			backgroundImage: {
				'gradient-cosmic': 'var(--gradient-cosmic)',
				'gradient-matrix': 'var(--gradient-matrix)',
				'gradient-void': 'var(--gradient-void)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-hologram': 'var(--gradient-hologram)',
				'particle-glow': 'var(--particle-glow)',
				'particle-trail': 'var(--particle-trail)',
				'neural-node': 'var(--neural-node)',
				'neural-connection': 'var(--neural-connection)'
			},
			boxShadow: {
				'neon': 'var(--shadow-neon)',
				'glass': 'var(--shadow-glass)',
				'hologram': 'var(--shadow-hologram)',
				'depth': 'var(--shadow-depth)'
			},
			backdropBlur: {
				'xs': '2px',
				'4xl': '72px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
