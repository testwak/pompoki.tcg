import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      links={[
        {
          text: 'Documentation',
          url: '/docs/introduction',
        },
      ]}
    >
        <meta name="theme-color" content="#a0312d" media="(prefers-color-scheme: dark)"/>
        <meta name="theme-color" content="#a0312d" media="(prefers-color-scheme: light)"/>

        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {children}
    </HomeLayout>
  );
}

