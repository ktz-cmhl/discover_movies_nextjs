import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Link from "next/link";
import logo from "../../public/theater.png"
import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import HeaderComponent from "@/compoenents/component_header";
config.autoAddCss = false;

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Discover Movies',
    description: 'Discover Movie: Your gateway to the cinematic universe, powered by TMDB API.',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <HeaderComponent/>
        {children}</body>
        </html>
    )
}
