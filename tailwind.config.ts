import { Config } from "tailwindcss";

import { colors } from './src/styles/theme/color';

const config: Config = {
	content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
		},
		extend: {
			scale: {
				25: "0.25",
			},
			colors,
			fontFamily: {
				'jalnan': ['Jalnan OTF']
			},
			boxShadow: {
				thumb: '0px 0px 7.9px 0px rgba(0, 88, 255, 0.10)',
			},
			screens: {
				phone: "340px",
				desktop: "568px",
			},
			width: {
				phone: "340px",
				desktop: "568px",
			},
		},
	},
	plugins: [],
};

export default config;