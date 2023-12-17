import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'movieGrid': 'repeat(auto-fit, minmax(220px, 1fr))',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                'backgroundColor': '#000104',
                'cardColor': '#20223b',
                'accentColor': '#c51536',
                'headerColor': '#eae9e9',
            },
            fontFamily: {
                'nova-square': ['"Nova Square"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
export default config
