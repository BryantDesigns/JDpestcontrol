import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                jdpestcontrol: {
                    DEFAULT: '#3390AC',
                    50: '#AFDAE7',
                    100: '#A0D3E3',
                    200: '#80C5D9',
                    300: '#61B6D0',
                    400: '#41A8C7',
                    500: '#3390AC',
                    600: '#266C81',
                    700: '#194855',
                    800: '#0D232A',
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
export default config
