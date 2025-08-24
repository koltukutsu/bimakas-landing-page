'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';

import {
    Calendar,
    CheckCircle,
    ChevronLeft,
    ChevronRight,
    Clock,
    CreditCard,
    MapPin,
    Navigation,
    Star
} from 'lucide-react';

/**
 * AppScreens Component - App Showcase Section ("Mobil Uygulama")
 *
 * Interactive showcase of mobile app interface and features.
 * Implements luxury tech vibe with glassmorphism and floating elements.
 *
 * Content:
 * - "BiMakas Uygulamasıyla Tanışın"
 * - Phone mockups showing: booking, map, payment screens
 *
 * Design Wow Effect:
 * - Floating phone mockups in carousel → luxury tech vibe
 * - Subtle glassmorphism background → futuristic, aspirational
 * - Interactive elements showcase app functionality
 *
 * Responsive Behavior:
 * - Desktop: Multiple phones side-by-side with animations
 * - Mobile: Single phone mockup, swipe-enabled slider
 */
const AppScreens = () => {
    const [activeScreen, setActiveScreen] = useState(0);

    const screens = [
        {
            id: 'discovery',
            title: 'Keşfet & Seç',
            description:
                'Yakınınızdaki profesyonel berberleri keşfedin, profillerini inceleyin ve favorilerinizi seçin.',
            image: '/images/screens/home-discovery.png',
            icon: MapPin,
            features: ['Konum bazlı arama', 'Berber profilleri', 'Yorumlar ve puanlar', 'Fotoğraf galerisi'],
            color: 'from-blue-500/20 to-blue-600/20',
            screenPath: '/c/home → /c/results → /c/profile/:id'
        },
        {
            id: 'booking',
            title: 'Rezervasyon & Ödeme',
            description: 'Hizmetlerinizi seçin, uygun tarihi belirleyin ve güvenli ödeme yapın.',
            image: '/images/screens/booking-checkout.png',
            icon: Calendar,
            features: ['Hizmet seçimi', 'Müsaitlik takvimi', 'Anlık rezervasyon', 'Güvenli ödeme'],
            color: 'from-green-500/20 to-green-600/20',
            screenPath: '/c/services → /c/checkout'
        },
        {
            id: 'tracking',
            title: 'Canlı Takip',
            description: 'Berberinizin konumunu gerçek zamanlı takip edin ve varış saatini öğrenin.',
            image: '/images/screens/live-tracking.png',
            icon: Navigation,
            features: ['GPS takip', 'Tahmini varış', 'Mesajlaşma', 'Durum güncellemeleri'],
            color: 'from-primary/20 to-primary/30',
            screenPath: '/c/tracking/:id'
        },
        {
            id: 'service',
            title: 'Hizmet & Değerlendirme',
            description: 'Hizmetinizi alın, deneyiminizi değerlendirin ve gelecek randevular için not alın.',
            image: '/images/screens/service-review.png',
            icon: CheckCircle,
            features: ['Hizmet süreci', 'Fotoğraf çekimi', 'Puan verme', 'Yorum yazma'],
            color: 'from-amber-500/20 to-amber-600/20',
            screenPath: '/b/inservice/:id → /c/bookings'
        }
    ];

    const nextScreen = () => {
        setActiveScreen((prev) => (prev + 1) % screens.length);
    };

    const prevScreen = () => {
        setActiveScreen((prev) => (prev - 1 + screens.length) % screens.length);
    };

    return (
        <section id='app-showcase' className='bg-background relative overflow-hidden py-20 lg:py-32'>
            {/* Background Elements */}
            <div className='absolute inset-0 -z-10'>
                <div className='from-primary/5 to-primary/10 absolute top-1/4 left-10 h-72 w-72 rounded-full bg-gradient-to-br blur-3xl' />
                <div className='absolute right-10 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/5 to-blue-600/10 blur-3xl' />
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <Badge className='bg-primary/10 text-primary border-primary/20 mb-6 px-4 py-2'>
                        📱 Mobil Uygulama
                    </Badge>
                    <h2 className='text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                        <span className='text-primary'>BiMakas</span> Uygulamasıyla Tanışın
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed'>
                        Keşiften rezervasyona, canlı takipten hizmet tamamlanmasına kadar müşteri yolculuğunuzun her
                        adımında yanınızda.
                    </p>
                </div>

                <div className='grid items-center gap-16 lg:grid-cols-2'>
                    {/* Content Section */}
                    <div className='space-y-8'>
                        {/* Feature Tabs */}
                        <div className='grid grid-cols-2 gap-4'>
                            {screens.map((screen, index) => (
                                <button
                                    key={screen.id}
                                    onClick={() => setActiveScreen(index)}
                                    className={`rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                                        activeScreen === index
                                            ? 'border-primary bg-primary/5'
                                            : 'border-border hover:border-primary/50 bg-background/50'
                                    }`}>
                                    <div className='mb-2 flex items-center space-x-3'>
                                        <div className={`rounded-lg bg-gradient-to-br p-2 ${screen.color}`}>
                                            <screen.icon className='text-foreground h-5 w-5' strokeWidth={1.5} />
                                        </div>
                                        <span className='text-sm font-semibold'>{screen.title}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Active Screen Details */}
                        <div className='space-y-6'>
                            <div>
                                <h3 className='text-foreground mb-3 text-2xl font-bold'>
                                    {screens[activeScreen].title}
                                </h3>
                                <p className='text-muted-foreground leading-relaxed'>
                                    {screens[activeScreen].description}
                                </p>
                            </div>

                            {/* Feature List */}
                            <div className='space-y-4'>
                                <div className='space-y-3'>
                                    {screens[activeScreen].features.map((feature, index) => (
                                        <div key={index} className='flex items-center space-x-3'>
                                            <div className='bg-primary h-2 w-2 rounded-full' />
                                            <span className='text-muted-foreground'>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Screen Path */}
                                <div className='border-t pt-4'>
                                    <div className='text-muted-foreground mb-2 text-sm'>Ekran Akışı:</div>
                                    <code className='bg-muted text-primary rounded px-2 py-1 font-mono text-xs'>
                                        {screens[activeScreen].screenPath}
                                    </code>
                                </div>
                            </div>

                            {/* Navigation Controls */}
                            <div className='flex items-center space-x-4'>
                                <Button variant='outline' size='icon' onClick={prevScreen} className='rounded-full'>
                                    <ChevronLeft className='h-4 w-4' />
                                </Button>

                                <div className='flex items-center space-x-2'>
                                    {screens.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveScreen(index)}
                                            className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                                index === activeScreen ? 'bg-primary w-6' : 'bg-primary/30'
                                            }`}
                                        />
                                    ))}
                                </div>

                                <Button variant='outline' size='icon' onClick={nextScreen} className='rounded-full'>
                                    <ChevronRight className='h-4 w-4' />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Phone Mockup Section */}
                    <div className='relative flex justify-center lg:justify-end'>
                        <div className='relative'>
                            {/* Glassmorphism Background */}
                            <div className='absolute inset-0 scale-105 -rotate-6 rounded-[3rem] border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm' />

                            {/* Main Phone Mockup */}
                            <div className='bg-background border-border/50 relative z-10 rounded-[2.5rem] border p-3 shadow-2xl'>
                                <div className='from-primary/5 to-primary/10 rounded-[2rem] bg-gradient-to-br p-1'>
                                    <div className='relative overflow-hidden rounded-[1.8rem] bg-white'>
                                        <Image
                                            src={screens[activeScreen].image}
                                            alt={`${screens[activeScreen].title} Ekranı`}
                                            width={300}
                                            height={600}
                                            className='h-auto w-full'
                                            priority
                                        />

                                        {/* Screen Overlay */}
                                        <div className='absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent' />
                                    </div>
                                </div>

                                {/* Status Bar */}
                                <div className='absolute top-6 left-1/2 h-1 w-20 -translate-x-1/2 transform rounded-full bg-black/20' />

                                {/* Dynamic Badge */}
                                <div className='bg-primary text-primary-foreground absolute -top-3 right-8 animate-pulse rounded-full px-3 py-1 text-xs font-medium'>
                                    {screens[activeScreen].title}
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className='bg-primary/10 absolute -top-8 -left-8 h-16 w-16 animate-pulse rounded-full' />
                            <div className='absolute -right-8 -bottom-8 h-12 w-12 animate-bounce rounded-full bg-blue-500/10' />

                            {/* Secondary Phone (Desktop Only) */}
                            <div className='absolute top-20 -left-20 z-0 hidden opacity-30 lg:block'>
                                <div className='bg-background border-border/30 scale-75 rotate-12 rounded-[2rem] border p-2 shadow-lg'>
                                    <Image
                                        src='/images/screenshot2.png'
                                        alt='İkincil Ekran'
                                        width={200}
                                        height={400}
                                        className='h-auto w-full rounded-[1.5rem]'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Features */}
                <div className='mt-20 grid grid-cols-2 gap-8 text-center lg:grid-cols-4'>
                    <div className='space-y-2'>
                        <div className='text-primary text-2xl font-bold'>iOS & Android</div>
                        <div className='text-muted-foreground text-sm'>Çift Platform</div>
                    </div>
                    <div className='space-y-2'>
                        <div className='text-primary text-2xl font-bold'>5⭐</div>
                        <div className='text-muted-foreground text-sm'>App Store Puanı</div>
                    </div>
                    <div className='space-y-2'>
                        <div className='text-primary text-2xl font-bold'>50MB</div>
                        <div className='text-muted-foreground text-sm'>Hafif Boyut</div>
                    </div>
                    <div className='space-y-2'>
                        <div className='text-primary text-2xl font-bold'>Offline</div>
                        <div className='text-muted-foreground text-sm'>Çevrimdışı Çalışma</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppScreens;
