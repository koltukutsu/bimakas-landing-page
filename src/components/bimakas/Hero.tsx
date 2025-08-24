'use client';

import Image from 'next/image';

import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowRight, Play } from 'lucide-react';

/**
 * Hero Section Component - "Uygulama Ön Planda"
 *
 * Main value proposition with app mockup as the centerpiece.
 * Implements luxury minimalism with coral accent colors.
 *
 * Content:
 * - Başlık: "Profesyonel Bakım Ayağınıza Gelsin"
 * - Alt Başlık: "Saç, sakal ve güzellik hizmetlerini dilediğiniz yerde alın."
 * - CTA: "Bekleme Listesine Katıl" (primary coral), "Daha Fazla Bilgi" (secondary)
 * - App mockup center stage
 *
 * Design Wow Effect:
 * - App mockup in center makes product the hero → instant value recognition
 * - Coral CTA provides energy, dark secondary gives premium balance
 * - White spacious background conveys luxury minimalism
 *
 * Responsive Behavior:
 * - Desktop: Split layout → left text + right app mockup (large)
 * - Mobile: Stacked → text above/below mockup, full-width buttons for easy tapping
 */
const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id='hero'
            className='bg-background relative flex min-h-screen items-center justify-center overflow-hidden'>
            {/* Background Elements */}
            <div className='absolute inset-0 -z-10'>
                <div className='bg-primary/5 absolute top-10 left-10 h-72 w-72 rounded-full blur-3xl' />
                <div className='bg-primary/3 absolute right-10 bottom-10 h-96 w-96 rounded-full blur-3xl' />
            </div>

            <div className='container mx-auto px-4 py-20 sm:px-6 lg:px-8'>
                <div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
                    {/* Content Section */}
                    <div className='space-y-8 text-center lg:text-left'>
                        {/* Badge */}
                        <div className='inline-flex'>
                            <Badge
                                variant='secondary'
                                className='bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-medium'>
                                🚀 Yakında Sizinle
                            </Badge>
                        </div>

                        {/* Main Heading */}
                        <div className='space-y-4'>
                            <h1 className='text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl'>
                                <span className='text-foreground'>Profesyonel Bakım</span>
                                <br />
                                <span className='text-primary'>Ayağınıza Gelsin</span>
                            </h1>

                            <p className='text-muted-foreground max-w-2xl text-xl leading-relaxed sm:text-2xl'>
                                Saç, sakal ve güzellik hizmetlerini dilediğiniz yerde alın.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className='space-y-3'>
                            {[
                                '⏱️ Anında randevu sistemi',
                                '📍 Konumunuza en yakın profesyoneller',
                                '💳 Güvenli ödeme altyapısı'
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className='flex items-center justify-center space-x-3 lg:justify-start'>
                                    <span className='text-lg'>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-col justify-center gap-4 sm:flex-row lg:justify-start'>
                            <Button
                                size='lg'
                                onClick={() => scrollToSection('waitlist')}
                                className='bg-primary hover:bg-primary/90 text-primary-foreground group h-auto px-8 py-4 text-lg'>
                                Bekleme Listesine Katıl
                                <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
                            </Button>

                            <Button
                                size='lg'
                                variant='outline'
                                onClick={() => scrollToSection('how-it-works')}
                                className='group h-auto border-2 px-8 py-4 text-lg'>
                                <Play className='mr-2 h-5 w-5 transition-transform group-hover:scale-110' />
                                Nasıl Çalışır?
                            </Button>
                        </div>

                        {/* Social Proof Numbers */}
                        <div className='flex justify-center space-x-8 pt-8 lg:justify-start'>
                            <div className='text-center'>
                                <div className='text-primary text-2xl font-bold'>1000+</div>
                                <div className='text-muted-foreground text-sm'>Bekleme Listesi</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-primary text-2xl font-bold'>50+</div>
                                <div className='text-muted-foreground text-sm'>Hazır Profesyonel</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-primary text-2xl font-bold'>5★</div>
                                <div className='text-muted-foreground text-sm'>Ortalama Puan</div>
                            </div>
                        </div>
                    </div>

                    {/* App Mockup Section */}
                    <div className='relative flex justify-center lg:justify-end'>
                        <div className='relative'>
                            {/* Floating Elements */}
                            <div className='bg-primary/20 absolute -top-6 -left-6 h-12 w-12 animate-pulse rounded-full' />
                            <div className='bg-primary/30 absolute -right-6 -bottom-6 h-8 w-8 animate-bounce rounded-full' />

                            {/* Phone Mockup */}
                            <div className='bg-background border-border/50 relative rounded-[2.5rem] border p-2 shadow-2xl'>
                                <div className='from-primary/5 to-primary/10 rounded-[2rem] bg-gradient-to-br p-1'>
                                    <Image
                                        src='/images/screenshot1.png'
                                        alt='BiMakas Mobil Uygulaması'
                                        width={300}
                                        height={600}
                                        className='h-auto w-full rounded-[1.8rem] shadow-inner'
                                        priority
                                    />
                                </div>

                                {/* Notification Badge */}
                                <div className='bg-primary text-primary-foreground absolute -top-2 right-8 animate-pulse rounded-full px-3 py-1 text-xs font-medium'>
                                    Yeni Mesaj
                                </div>
                            </div>

                            {/* Background Decoration */}
                            <div className='from-primary/5 to-primary/10 absolute inset-0 -z-10 scale-150 rounded-full bg-gradient-to-br via-transparent blur-3xl' />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce'>
                <div className='border-muted-foreground/30 flex h-10 w-6 justify-center rounded-full border-2'>
                    <div className='bg-primary mt-2 h-3 w-1 animate-pulse rounded-full' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
