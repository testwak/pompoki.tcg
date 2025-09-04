import './global.css';
import type { Viewport } from 'next';
import { baseUrl, createMetadata } from '@/lib/metadata';
import { Body } from 'src/app/layout.client';
import { Provider } from './provider';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

const description = "Pompoki Bot is a Discord bot with a modern retro theme that serves as a trading card game (TCG) bot, allowing users to collect and trade cards from games like Genshin Impact, Honkai Star Rail, and Zenless Zone Zero. It includes features like a rarity and pity system, profile customization, and a wishlist for desired cards."

export const metadata = createMetadata({
    title: {
        template: '%s | POMPOKI.tcg Documentation',
        default: 'POMPOKI.tcg Documentation',
    },
    description: description,
    metadataBase: baseUrl,
    openGraph: {
        title: 'POMPOKI.tcg Documentation',
        description: description,
        url: baseUrl.toString(),
        siteName: 'POMPOKI.tcg',
        images: [
            {
                url: `${baseUrl}/image/log.GIF`, // your thumbnail path
                width: 800,   // optional
                height: 600,  // optional
                alt: 'POMPOKI.tcg thumbnail', // optional
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'POMPOKI.tcg Documentation',
        description: description,
        images: [`${baseUrl}/image/log.GIF`],
    },
});

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