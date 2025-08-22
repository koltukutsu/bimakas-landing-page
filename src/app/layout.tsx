import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

// Import will be added when we create the new Header component
import '@/app/globals.css';
import { Toaster } from '@/registry/new-york-v4/ui/sonner';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'BiMakas – Kuaför, dakikalar içinde kapında',
    description:
        'BiMakas, konumuna en uygun profesyonel kuaförü getirir. Uygulamadan seç, anında randevu al, bekleme yok.',
    keywords: 'kuaför, mobil kuaför, evde kuaför hizmeti, saç kesimi, berber, güzellik, BiMakas',
    openGraph: {
        title: 'BiMakas – Kuaför, dakikalar içinde kapında',
        description:
            'BiMakas, konumuna en uygun profesyonel kuaförü getirir. Uygulamadan seç, anında randevu al, bekleme yok.',
        type: 'website',
        locale: 'tr_TR'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'BiMakas – Kuaför, dakikalar içinde kapında',
        description:
            'BiMakas, konumuna en uygun profesyonel kuaförü getirir. Uygulamadan seç, anında randevu al, bekleme yok.'
    }
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='tr'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground overscroll-none antialiased`}>
                <ThemeProvider attribute='class'>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
