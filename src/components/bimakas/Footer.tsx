'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navigationLinks = [
        { href: '#ozellikler', label: 'Özellikler' },
        { href: '#nasil-calisir', label: 'Nasıl Çalışır?' },
        { href: '#kuaforler', label: 'Kuaförler' },
        { href: '#sss', label: 'SSS' }
    ];

    const legalLinks = [
        { href: '/legal/kvkk', label: 'KVKK & Gizlilik' },
        { href: '/legal/terms', label: 'Kullanım Şartları' },
        { href: '/contact', label: 'İletişim' }
    ];

    return (
        <footer className='bg-muted/50 border-t'>
            <div className='container mx-auto max-w-screen-xl px-3 py-8 sm:px-4 sm:py-12 lg:px-8'>
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4'>
                    {/* Brand */}
                    <div className='text-center sm:col-span-2 sm:text-left lg:col-span-2'>
                        <Link
                            href='/'
                            className='mb-3 flex items-center justify-center space-x-2 sm:mb-4 sm:justify-start'>
                            <Image
                                src='/brand/logo.png'
                                alt='BiMakas Logo'
                                width={120}
                                height={40}
                                className='h-6 w-auto sm:h-8'
                            />
                        </Link>
                        <p className='text-muted-foreground mx-auto mb-4 max-w-md text-sm sm:mx-0 sm:mb-6 sm:text-base'>
                            BiMakas, konumuna profesyonel kuaför hizmetini getirir.
                        </p>
                        <div className='text-muted-foreground text-xs sm:text-sm'>
                            <p className='mb-1 sm:mb-2'>
                                <strong>BiMakas Teknoloji A.Ş.</strong>
                            </p>
                            <p>Mobil kuaför hizmetlerinin öncüsü</p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className='text-center sm:text-left'>
                        <h3 className='text-foreground mb-3 text-sm font-semibold sm:mb-4 sm:text-base'>Keşfet</h3>
                        <ul className='space-y-2 sm:space-y-3'>
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => scrollToSection(link.href)}
                                        className='text-muted-foreground hover:text-foreground text-xs transition-colors sm:text-sm'>
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className='text-center sm:text-left'>
                        <h3 className='text-foreground mb-3 text-sm font-semibold sm:mb-4 sm:text-base'>Yasal</h3>
                        <ul className='space-y-2 sm:space-y-3'>
                            {legalLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className='text-muted-foreground hover:text-foreground text-xs transition-colors sm:text-sm'>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className='border-border mt-8 border-t pt-6 sm:mt-12 sm:pt-8'>
                    <div className='flex flex-col items-center justify-between gap-3 text-center sm:gap-4 md:flex-row md:text-left'>
                        <p className='text-muted-foreground text-xs sm:text-sm'>
                            © {currentYear} BiMakas Teknoloji A.Ş. Tüm hakları saklıdır.
                        </p>
                        <div className='flex items-center gap-4 sm:gap-6'>
                            <span className='text-muted-foreground text-xs'>v1.0.0</span>
                            <span className='text-muted-foreground text-xs'>🇹🇷 Türkiye</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
