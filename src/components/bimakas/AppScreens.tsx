"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Calendar, MapPin, CreditCard, Star, ChevronLeft, ChevronRight } from 'lucide-react';

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
            id: 'booking',
            title: 'Randevu Sistemi',
            description: 'Uygun saatleri görün, profesyonelleri karşılaştırın ve anında randevu alın.',
            image: '/images/screenshot1.png',
            icon: Calendar,
            features: ['Anlık müsaitlik', 'Fiyat karşılaştırma', 'Hızlı rezervasyon'],
            color: 'from-blue-500/20 to-blue-600/20'
        },
        {
            id: 'map',
            title: 'Harita & Konum',
            description: 'Size en yakın profesyonelleri harita üzerinde görün ve seçin.',
            image: '/images/screenshot2.png',
            icon: MapPin,
            features: ['Gerçek zamanlı konum', 'Mesafe hesaplama', 'Rota planlama'],
            color: 'from-green-500/20 to-green-600/20'
        },
        {
            id: 'payment',
            title: 'Güvenli Ödeme',
            description: 'Kartla, dijital cüzdan veya nakit ile güvenli ödeme yapın.',
            image: '/images/screenshot1.png',
            icon: CreditCard,
            features: ['Çoklu ödeme seçenekleri', 'SSL güvenlik', 'Fatura sistemi'],
            color: 'from-primary/20 to-primary/30'
        },
        {
            id: 'reviews',
            title: 'Yorumlar & Puanlama',
            description: 'Gerçek müşteri yorumlarını okuyun ve kendi deneyiminizi paylaşın.',
            image: '/images/screenshot2.png',
            icon: Star,
            features: ['Doğrulanmış yorumlar', 'Detaylı puanlama', 'Fotoğraf paylaşımı'],
            color: 'from-amber-500/20 to-amber-600/20'
        }
    ];

    const nextScreen = () => {
        setActiveScreen((prev) => (prev + 1) % screens.length);
    };

    const prevScreen = () => {
        setActiveScreen((prev) => (prev - 1 + screens.length) % screens.length);
    };

    return (
        <section id="app-showcase" className="py-20 lg:py-32 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-10 w-72 h-72 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-6">
                        📱 Mobil Uygulama
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        <span className="text-primary">BiMakas</span> Uygulamasıyla Tanışın
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Modern tasarım ve kullanıcı dostu arayüzle profesyonel güzellik hizmetlerini 
                        elinizin altında bulun.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content Section */}
                    <div className="space-y-8">
                        {/* Feature Tabs */}
                        <div className="grid grid-cols-2 gap-4">
                            {screens.map((screen, index) => (
                                <button
                                    key={screen.id}
                                    onClick={() => setActiveScreen(index)}
                                    className={`text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                                        activeScreen === index
                                            ? 'border-primary bg-primary/5'
                                            : 'border-border hover:border-primary/50 bg-background/50'
                                    }`}
                                >
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${screen.color}`}>
                                            <screen.icon className="h-5 w-5 text-foreground" strokeWidth={1.5} />
                                        </div>
                                        <span className="font-semibold text-sm">{screen.title}</span>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Active Screen Details */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">
                                    {screens[activeScreen].title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {screens[activeScreen].description}
                                </p>
                            </div>

                            {/* Feature List */}
                            <div className="space-y-3">
                                {screens[activeScreen].features.map((feature, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Controls */}
                            <div className="flex items-center space-x-4">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={prevScreen}
                                    className="rounded-full"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>

                                <div className="flex items-center space-x-2">
                                    {screens.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setActiveScreen(index)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                index === activeScreen ? 'bg-primary w-6' : 'bg-primary/30'
                                            }`}
                                        />
                                    ))}
                                </div>

                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={nextScreen}
                                    className="rounded-full"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Phone Mockup Section */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Glassmorphism Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-[3rem] border border-white/20 -rotate-6 scale-105" />
                            
                            {/* Main Phone Mockup */}
                            <div className="relative bg-background rounded-[2.5rem] p-3 shadow-2xl border border-border/50 z-10">
                                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-[2rem] p-1">
                                    <div className="relative bg-white rounded-[1.8rem] overflow-hidden">
                                        <Image
                                            src={screens[activeScreen].image}
                                            alt={`${screens[activeScreen].title} Ekranı`}
                                            width={300}
                                            height={600}
                                            className="w-full h-auto"
                                            priority
                                        />
                                        
                                        {/* Screen Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                                    </div>
                                </div>
                                
                                {/* Status Bar */}
                                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-black/20 rounded-full" />
                                
                                {/* Dynamic Badge */}
                                <div className="absolute -top-3 right-8 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium animate-pulse">
                                    {screens[activeScreen].title}
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-8 -left-8 w-16 h-16 bg-primary/10 rounded-full animate-pulse" />
                            <div className="absolute -bottom-8 -right-8 w-12 h-12 bg-blue-500/10 rounded-full animate-bounce" />
                            
                            {/* Secondary Phone (Desktop Only) */}
                            <div className="hidden lg:block absolute -left-20 top-20 z-0 opacity-30">
                                <div className="bg-background rounded-[2rem] p-2 shadow-lg border border-border/30 scale-75 rotate-12">
                                    <Image
                                        src="/images/screenshot2.png"
                                        alt="İkincil Ekran"
                                        width={200}
                                        height={400}
                                        className="w-full h-auto rounded-[1.5rem]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Features */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 text-center">
                    <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">iOS & Android</div>
                        <div className="text-sm text-muted-foreground">Çift Platform</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">5⭐</div>
                        <div className="text-sm text-muted-foreground">App Store Puanı</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">50MB</div>
                        <div className="text-sm text-muted-foreground">Hafif Boyut</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-2xl font-bold text-primary">Offline</div>
                        <div className="text-sm text-muted-foreground">Çevrimdışı Çalışma</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppScreens;