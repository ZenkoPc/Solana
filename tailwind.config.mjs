/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
				'Roboto-Bold': ['Roboto-Bold','sans-serif'],
				'Roboto-Thin': ['Roboto-Thin','sans-serif']
			},
			colors: {
				softGray: '#848895',
				softBlue: '#618ADC',
				softDarkGray: '#C4C4C4',
				lessDark: '#111',
				highPurple: '#a962ff',
				strangeGray: '#261f26',
				activeGray: '#1a1a1a',
				notThatDarkGray: '#BABABA',
				smoothPink: '#F087FF',
				nightDark: '#000508',
				neutralGray: '#141414',
				spotifyGreen: '#14f195',
				smoothPurple: '#9945ff',
				deepBlack: '#19161c',
				newGreen: '#19fb9b'
			},
			backgroundImage: {
				'middleBack': "url('/images/middle-back.png)"
			},
			screens: {
				lg2: '1040px',
				xs: '330px'
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
