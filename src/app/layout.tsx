import './global.css';
import type { Viewport } from 'next';
import { baseUrl, createMetadata } from '@/lib/metadata';
import { Body } from 'src/app/layout.client';
import { Provider } from './provider';
import type { ReactNode } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';

export const metadata = createMetadata({
    title: {
        template: '%s | POMPOKI.tcg',
        default: 'POMPOKI.tcg',
    },
    description: 'POMPOKI documentation site',
    metadataBase: baseUrl,
    themeColor: '#a0312d', // ← ✅ this sets the embed/mobile browser color
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

                <Provider>
                    {children}
                </Provider>

            </Body>
        </html>
    );
}