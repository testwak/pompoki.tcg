import './global.css';
import type { Viewport } from 'next';
import { Body } from 'src/app/layout.client';
import { Provider } from './provider';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

import { Metadata } from 'next';
import { baseUrl } from '@/lib/metadata';

const description = "Pompoki Bot is a Discord bot with a modern retro theme that serves as a trading card game (TCG) bot, allowing users to collect and trade cards from games like Genshin Impact, Honkai Star Rail, and Zenless Zone Zero. It includes features like a rarity and pity system, profile customization, and a wishlist for desired cards."

export const metadata: Metadata = {
    title: 'POMPOKI.tcg',
    description: description,
    metadataBase: baseUrl,
    openGraph: {
        type: 'website',
        url: baseUrl.toString(),
        title: 'POMPOKI.tcg',
        description: description,
        images: [
            {
                url: '/image/logo.GIF', // relative path resolves against metadataBase
                width: 1200,
                height: 630,
                alt: 'POMPOKI.tcg thumbnail',
            },
        ],
    },
};

const geist = Geist({
    variable: '--font-sans',
    subsets: ['latin'],
});

const mono = Geist_Mono({
    variable: '--font-mono',
    subsets: ['latin'],
});

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: '#a0312d' },
        { media: '(prefers-color-scheme: light)', color: '#a0312d' },
    ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={`${geist.variable} ${mono.variable}`}
            suppressHydrationWarning
        >
            <Body>
                <Provider>{children}</Provider>
            </Body>
        </html>
    );
}