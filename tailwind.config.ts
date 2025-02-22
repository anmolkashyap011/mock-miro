import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			keyframes: {
				scrollLeft: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				}
			},
			animation: {
				scrollLeft: "scrollLeft 20s linear infinite",
			},
			colors: {
				white: "#F5F5F5",
				black: "#050505",
				"neutral-light": "#FFFFFF",
				"neutral-mid": "#9B99AF",
				"neutral-dark": "#696688",
				primary: "#4262FF",
				secondary: "#050038",
				accent: "#FFD02F",
				surface: "#F1F3FD",
				"surface-variant": "#F2F2F2"
			},
			borderRadius: {
				'c-xs': "0.25rem",  // 4px
				'c-sm': "0.5rem",   // 8px
				'c-md': "0.75rem",  // 12px
				'c-lg': "1rem",     // 16px
				'c-xl': "1.75rem",  // 28px
			  },
			fontFamily: {
				default: ['Helvetica', 'Inter', 'sans-serif'],
			},
			fontSize: {
				'head-l': ['3rem', { lineHeight: '3.5rem', fontWeight: 'bold' }],
				'head-m': ['1.5rem', { lineHeight: '1.75rem', fontWeight: 'bold' }],
				'head-s': ['1.125rem', { lineHeight: '1.5rem', fontWeight: 'bold' }],

				'body-l': ['1.125rem', { lineHeight: '1.5rem', fontWeight: 'normal' }],

				'label-l': ['1.125rem', { lineHeight: '1.5rem', fontWeight: '500' }],
				'label-m': ['1rem', { lineHeight: '1.5rem', fontWeight: '500' }],
				'label-s': ['.875rem', { lineHeight: '1.25rem', fontWeight: 'normal' }],
			},
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
} satisfies Config;
