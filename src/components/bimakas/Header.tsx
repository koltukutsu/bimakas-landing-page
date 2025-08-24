'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';

import { Menu, X } from 'lucide-react';

/**
 * Header Component - Navigation Bar
 *
 * Professional sticky navigation with luxury minimalism aesthetic.
 * Features logo, navigation links, and primary CTA for early access.
 *
 * Design Rationale:
 * - Sticky positioning ensures constant access to CTA
 * - Clean white background with subtle shadow for luxury feel
 * - Coral primary button creates energy and conversion focus
 * - Mobile-first hamburger menu for touch optimization
 *
 * Responsive Behavior:
 * - Desktop: Horizontal nav (logo left, links center, CTA right)
 * - Mobile: Hamburger menu with collapsible navigation
 */
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const navigationLinks = [
        { label: 'Ana Sayfa', id: 'hero' },
        { label: 'Özellikler', id: 'features' },
        { label: 'Nasıl Çalışır', id: 'how-it-works' },
        { label: 'Profesyoneller', id: 'professionals' },
        { label: 'Yorumlar', id: 'testimonials' }
    ];

    return (
        <header className='bg-background/95 supports-[backdrop-filter]:bg-background/60 border-border/40 sticky top-0 z-50 w-full border-b backdrop-blur'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex h-16 items-center justify-between'>
                    {/* Logo */}
                    <Link
                        href='/'
                        className='flex items-center space-x-2 transition-opacity hover:opacity-80'
                        onClick={() => scrollToSection('hero')}>
                        <Image
                            src='/brand/logo.png'
                            alt='BiMakas Logo'
                            width={40}
                            height={40}
                            className='h-8 w-auto sm:h-10'
                            priority
                        />
                        <span className='text-foreground text-xl font-bold'>BiMakas</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className='hidden items-center space-x-8 md:flex'>
                        {navigationLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className='text-muted-foreground hover:text-foreground font-medium transition-colors duration-200'>
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* Desktop CTA & Mobile Menu Button */}
                    <div className='flex items-center space-x-4'>
                        {/* Desktop CTA */}
                        <Button
                            onClick={() => scrollToSection('waitlist')}
                            className='bg-primary hover:bg-primary/90 text-primary-foreground hidden md:inline-flex'>
                            Erken Erişim
                        </Button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className='hover:bg-muted rounded-lg p-2 transition-colors md:hidden'
                            aria-label='Toggle navigation menu'>
                            {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className='border-border/40 bg-background/95 border-t backdrop-blur md:hidden'>
                        <nav className='space-y-1 py-4'>
                            {navigationLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className='text-muted-foreground hover:text-foreground hover:bg-muted/50 block w-full px-4 py-3 text-left font-medium transition-colors duration-200'>
                                    {link.label}
                                </button>
                            ))}

                            {/* Mobile CTA */}
                            <div className='px-4 pt-4'>
                                <Button
                                    onClick={() => scrollToSection('waitlist')}
                                    className='bg-primary hover:bg-primary/90 text-primary-foreground w-full'>
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
