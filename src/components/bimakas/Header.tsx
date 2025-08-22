'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';

import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigationItems = [
        { href: '#ozellikler', label: 'Özellikler' },
        { href: '#nasil-calisir', label: 'Nasıl Çalışır?' },
        { href: '#kuaforler', label: 'Kuaförler' },
        { href: '#sss', label: 'SSS' },
        { href: '#indir', label: 'İndir' }
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className='bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur'>
            <div className='container mx-auto max-w-screen-xl px-3 sm:px-4 lg:px-8'>
                <div className='flex h-14 items-center justify-between sm:h-16'>
                    {/* Logo */}
                    <Link href='/' className='flex flex-shrink-0 items-center space-x-2'>
                        <Image
                            src='/brand/logo.png'
                            alt='BiMakas Logo'
                            width={120}
                            height={40}
                            priority
                            className='h-6 w-auto sm:h-8'
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className='hidden items-center space-x-6 md:flex lg:space-x-8'>
                        {navigationItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className='text-muted-foreground hover:text-foreground text-sm font-medium whitespace-nowrap transition-colors'>
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className='hidden items-center space-x-4 md:flex'>
                        <Button
                            onClick={() => scrollToSection('#indir')}
                            className='bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 text-sm'>
                            Erken Erişim
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='-mr-2 p-2 md:hidden'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label='Toggle menu'>
                        {isMenuOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className='border-t py-4 md:hidden'>
                        <nav className='flex flex-col space-y-1'>
                            {navigationItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    className='text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md px-2 py-3 text-left text-base font-medium transition-colors'>
                                    {item.label}
                                </button>
                            ))}
                            <div className='pt-4'>
                                <Button
                                    onClick={() => scrollToSection('#indir')}
                                    className='bg-primary hover:bg-primary/90 text-primary-foreground w-full py-3 text-base'>
                                    Erken Erişim
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
