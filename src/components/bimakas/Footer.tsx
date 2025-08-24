'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Separator } from '@/registry/new-york-v4/ui/separator';

import { ArrowUp, Facebook, Heart, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

/**
 * Footer Component - Site Footer Section
 *
 * Site navigation, legal links, and company information.
 * Implements dark luxury aesthetic with coral hover effects.
 *
 * Content:
 * - Logo, contact info, social links, mini navigation
 * - Legal pages: KVKK, Terms of Use
 *
 * Design Wow Effect:
 * - Simple, minimal, dark background
 * - Coral hover effects on social icons → playful yet premium
 * - Clean typography hierarchy maintains brand consistency
 *
 * Responsive Behavior:
 * - Desktop: 3-column layout (logo + links + contact)
 * - Mobile: Centered stacked blocks for clarity
 */
const Footer = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const footerSections = [
        {
            title: 'Platform',
            links: [
                { label: 'Ana Sayfa', action: () => scrollToSection('hero') },
                { label: 'Özellikler', action: () => scrollToSection('features') },
                { label: 'Nasıl Çalışır', action: () => scrollToSection('how-it-works') },
                { label: 'Mobil Uygulama', action: () => scrollToSection('app-showcase') }
            ]
        },
        {
            title: 'Şirket',
            links: [
                { label: 'Hakkımızda', href: '#' },
                { label: 'Kariyer', href: '#' },
                { label: 'Basın Kiti', href: '#' },
                { label: 'Blog', href: '#' }
            ]
        },
        {
            title: 'Destek',
            links: [
                { label: 'Yardım Merkezi', href: '#' },
                { label: 'SSS', action: () => scrollToSection('faq') },
                { label: 'İletişim', href: '#' },
                { label: 'Profesyonel Ol', action: () => scrollToSection('professionals') }
            ]
        },
        {
            title: 'Yasal',
            links: [
                { label: 'Kullanım Şartları', href: '/legal/terms' },
                { label: 'KVKK & Gizlilik', href: '/legal/kvkk' },
                { label: 'Çerez Politikası', href: '#' },
                { label: 'Hizmet Sözleşmesi', href: '#' }
            ]
        }
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' }
    ];

    const contactInfo = [
        { icon: Mail, text: 'info@bimakas.com', href: 'mailto:info@bimakas.com' },
        { icon: Phone, text: '+90 555 123 45 67', href: 'tel:+905551234567' },
        { icon: MapPin, text: 'İstanbul, Türkiye', href: '#' }
    ];

    return (
        <footer className='relative bg-[#1a1a1a] text-white'>
            {/* Main Footer */}
            <div className='container mx-auto px-4 py-16 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 gap-12 lg:grid-cols-4'>
                    {/* Brand Section */}
                    <div className='space-y-6 lg:col-span-1'>
                        <div className='flex items-center space-x-3'>
                            <Image
                                src='/brand/logo.png'
                                alt='BiMakas Logo'
                                width={40}
                                height={40}
                                className='h-10 w-auto'
                            />
                            <span className='text-2xl font-bold'>BiMakas</span>
                        </div>

                        <p className='max-w-sm leading-relaxed text-gray-400'>
                            Profesyonel güzellik hizmetlerini evinizin konforuna getiren yeni nesil mobil platform.
                        </p>

                        {/* Social Links */}
                        <div className='flex items-center space-x-4'>
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='hover:bg-primary group flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-110'
                                    aria-label={social.label}>
                                    <social.icon
                                        className='h-5 w-5 text-gray-400 transition-colors group-hover:text-white'
                                        strokeWidth={1.5}
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Contact Info */}
                        <div className='space-y-3'>
                            {contactInfo.map((contact, index) => (
                                <a
                                    key={index}
                                    href={contact.href}
                                    className='hover:text-primary group flex items-center space-x-3 text-gray-400 transition-colors'>
                                    <contact.icon
                                        className='h-4 w-4 transition-transform group-hover:scale-110'
                                        strokeWidth={1.5}
                                    />
                                    <span className='text-sm'>{contact.text}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className='grid grid-cols-2 gap-8 md:grid-cols-4 lg:col-span-3'>
                        {footerSections.map((section, index) => (
                            <div key={index} className='space-y-4'>
                                <h4 className='text-lg font-semibold text-white'>{section.title}</h4>
                                <ul className='space-y-3'>
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            {link.href ? (
                                                <Link
                                                    href={link.href}
                                                    className='hover:text-primary text-sm text-gray-400 transition-colors'>
                                                    {link.label}
                                                </Link>
                                            ) : (
                                                <button
                                                    onClick={link.action}
                                                    className='hover:text-primary text-left text-sm text-gray-400 transition-colors'>
                                                    {link.label}
                                                </button>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Separator className='bg-white/10' />

            {/* Bottom Footer */}
            <div className='container mx-auto px-4 py-8 sm:px-6 lg:px-8'>
                <div className='flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0'>
                    {/* Copyright */}
                    <div className='flex items-center space-x-2 text-sm text-gray-400'>
                        <span>© {currentYear} BiMakas.</span>
                        <span>Tüm hakları saklıdır.</span>
                        <span className='flex items-center space-x-1'>
                            <span>Türkiye'de</span>
                            <Heart className='text-primary fill-primary h-4 w-4' />
                            <span>ile yapıldı</span>
                        </span>
                    </div>

                    {/* Back to Top */}
                    <Button
                        variant='outline'
                        size='sm'
                        onClick={scrollToTop}
                        className='hover:border-primary hover:bg-primary/10 group border-white/20 text-gray-400 hover:text-white'>
                        <ArrowUp className='mr-2 h-4 w-4 group-hover:animate-bounce' />
                        Başa Dön
                    </Button>
                </div>

                {/* Additional Info */}
                <div className='mt-8 border-t border-white/10 pt-8'>
                    <div className='grid grid-cols-1 gap-6 text-center md:grid-cols-3 md:text-left'>
                        <div>
                            <h5 className='mb-2 font-medium text-white'>Güvenlik</h5>
                            <p className='text-xs text-gray-500'>SSL şifreleme ile korunmuş veri aktarımı</p>
                        </div>
                        <div>
                            <h5 className='mb-2 font-medium text-white'>Sertifikalar</h5>
                            <p className='text-xs text-gray-500'>ISO 27001 ve PCI DSS uyumlu</p>
                        </div>
                        <div>
                            <h5 className='mb-2 font-medium text-white'>Versiyon</h5>
                            <p className='text-xs text-gray-500'>Web: v1.0.0 | Mobil: Yakında</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className='via-primary/50 absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent' />
        </footer>
    );
};

export default Footer;
