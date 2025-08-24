'use client';

import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/registry/new-york-v4/ui/avatar';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent } from '@/registry/new-york-v4/ui/card';

import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

/**
 * SocialProof Component - Testimonials Section ("Yorumlar")
 *
 * Social proof through customer testimonials and ratings.
 * Implements luxury fashion brand aesthetic with trust-building elements.
 *
 * Content:
 * - "Evimde saç kesimi yaptırmak bu kadar kolay olmamıştı." – Ahmet
 * - "Kuaförüm ayağıma geldi, dakikalar içinde hazırdım." – Elif
 *
 * Design Wow Effect:
 * - Minimal testimonial cards with round user avatars
 * - Star ratings in coral → positivity and approachability
 * - Luxury fashion brand "review" section feel (trust + elegance)
 *
 * Responsive Behavior:
 * - Desktop: Carousel slider (3 cards visible)
 * - Mobile: One card per view, swipeable slider for smooth UX
 */
const SocialProof = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Ahmet Yılmaz',
            role: 'Pazarlama Müdürü',
            avatar: '/avatars/ahmet.jpg',
            rating: 5,
            text: 'Evimde saç kesimi yaptırmak bu kadar kolay olmamıştı. Profesyonel ekip, hijyenik malzemeler ve mükemmel sonuç. BiMakas hayatımı kolaylaştırdı!',
            service: 'Saç Kesimi',
            date: '2 gün önce'
        },
        {
            id: 2,
            name: 'Elif Demir',
            role: 'Grafik Tasarımcı',
            avatar: '/avatars/elif.jpg',
            rating: 5,
            text: 'Kuaförüm ayağıma geldi, dakikalar içinde hazırdım. Hem zaman tasarrufu hem de evimin konforunda hizmet aldım. Kesinlikle tavsiye ederim!',
            service: 'Saç Boyama',
            date: '1 hafta önce'
        },
        {
            id: 3,
            name: 'Mehmet Kaya',
            role: 'Yazılım Geliştirici',
            avatar: '/avatars/mehmet.jpg',
            rating: 5,
            text: 'Berberim ofise geldi, toplantı aralarında traş oldum. İş yoğunluğu olan birisi için mükemmel çözüm. Uygulama çok pratik!',
            service: 'Sakal Traşı',
            date: '3 gün önce'
        },
        {
            id: 4,
            name: 'Zeynep Arslan',
            role: 'Doktor',
            avatar: '/avatars/zeynep.jpg',
            rating: 5,
            text: 'Nöbet sonrası eve gidip kuaföre gitmek yerine evde hizmet aldım. Çok profesyonel ve güvenilir. Sağlık çalışanları için büyük kolaylık.',
            service: 'Makyaj',
            date: '5 gün önce'
        },
        {
            id: 5,
            name: 'Can Özkan',
            role: 'Mimar',
            avatar: '/avatars/can.jpg',
            rating: 5,
            text: 'Önemli bir sunum öncesi acil saç kesimi gerekiyordu. 30 dakika içinde profesyonel geldi ve harika bir iş çıkardı. Çok memnunum!',
            service: 'Saç Kesimi',
            date: '1 gün önce'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);

        return () => clearInterval(timer);
    }, []);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star key={index} className={`h-4 w-4 ${index < rating ? 'text-primary fill-primary' : 'text-gray-300'}`} />
        ));
    };

    return (
        <section id='testimonials' className='bg-muted/20 py-20 lg:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                        Müşterilerimiz <span className='text-primary'>Ne Diyor</span>?
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed'>
                        Binlerce memnun müşterimizden gelen gerçek yorumlar. Siz de BiMakas deneyimini yaşayın.
                    </p>
                </div>

                {/* Testimonials Carousel */}
                <div className='relative mx-auto max-w-7xl'>
                    {/* Desktop View - 3 cards */}
                    <div className='hidden gap-8 lg:grid lg:grid-cols-3'>
                        {[0, 1, 2].map((offset) => {
                            const index = (currentIndex + offset) % testimonials.length;
                            const testimonial = testimonials[index];

                            return (
                                <Card
                                    key={testimonial.id}
                                    className='bg-background/60 border-border/50 hover:border-primary/30 group backdrop-blur-sm transition-all duration-300 hover:shadow-lg'>
                                    <CardContent className='p-8'>
                                        {/* Quote Icon */}
                                        <div className='mb-6'>
                                            <Quote className='text-primary/30 group-hover:text-primary/50 h-8 w-8 transition-colors' />
                                        </div>

                                        {/* Rating */}
                                        <div className='mb-4 flex items-center space-x-1'>
                                            {renderStars(testimonial.rating)}
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className='text-muted-foreground mb-6 leading-relaxed italic'>
                                            "{testimonial.text}"
                                        </p>

                                        {/* User Info */}
                                        <div className='flex items-center space-x-4'>
                                            <Avatar className='border-primary/20 h-12 w-12 border-2'>
                                                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                                                <AvatarFallback className='bg-primary/10 text-primary font-semibold'>
                                                    {testimonial.name
                                                        .split(' ')
                                                        .map((n) => n[0])
                                                        .join('')}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className='text-foreground font-semibold'>{testimonial.name}</div>
                                                <div className='text-muted-foreground text-sm'>{testimonial.role}</div>
                                                <div className='text-primary text-xs'>
                                                    {testimonial.service} • {testimonial.date}
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>

                    {/* Mobile View - 1 card */}
                    <div className='lg:hidden'>
                        <Card className='bg-background/60 border-border/50 hover:border-primary/30 backdrop-blur-sm transition-all duration-300 hover:shadow-lg'>
                            <CardContent className='p-8'>
                                {/* Quote Icon */}
                                <div className='mb-6 text-center'>
                                    <Quote className='text-primary/30 mx-auto h-8 w-8' />
                                </div>

                                {/* Rating */}
                                <div className='mb-4 flex items-center justify-center space-x-1'>
                                    {renderStars(testimonials[currentIndex].rating)}
                                </div>

                                {/* Testimonial Text */}
                                <p className='text-muted-foreground mb-6 text-center leading-relaxed italic'>
                                    "{testimonials[currentIndex].text}"
                                </p>

                                {/* User Info */}
                                <div className='flex items-center justify-center space-x-4'>
                                    <Avatar className='border-primary/20 h-12 w-12 border-2'>
                                        <AvatarImage
                                            src={testimonials[currentIndex].avatar}
                                            alt={testimonials[currentIndex].name}
                                        />
                                        <AvatarFallback className='bg-primary/10 text-primary font-semibold'>
                                            {testimonials[currentIndex].name
                                                .split(' ')
                                                .map((n) => n[0])
                                                .join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className='text-center'>
                                        <div className='text-foreground font-semibold'>
                                            {testimonials[currentIndex].name}
                                        </div>
                                        <div className='text-muted-foreground text-sm'>
                                            {testimonials[currentIndex].role}
                                        </div>
                                        <div className='text-primary text-xs'>
                                            {testimonials[currentIndex].service} • {testimonials[currentIndex].date}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Navigation Controls */}
                    <div className='mt-8 flex items-center justify-center space-x-4'>
                        <Button
                            variant='outline'
                            size='icon'
                            onClick={prevSlide}
                            className='border-primary/30 hover:bg-primary/10 rounded-full'>
                            <ChevronLeft className='h-4 w-4' />
                        </Button>

                        {/* Dots Indicator */}
                        <div className='flex items-center space-x-2'>
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30'
                                    }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant='outline'
                            size='icon'
                            onClick={nextSlide}
                            className='border-primary/30 hover:bg-primary/10 rounded-full'>
                            <ChevronRight className='h-4 w-4' />
                        </Button>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className='mt-20 grid grid-cols-2 gap-8 text-center lg:grid-cols-4'>
                    <div className='space-y-2'>
                        <div className='text-primary text-3xl font-bold'>4.9★</div>
                        <div className='text-muted-foreground text-sm'>Ortalama Puan</div>
                    </div>
                    <div className='space-y-2'>
                        <div className='text-primary text-3xl font-bold'>2,500+</div>
                        <div className='text-muted-foreground text-sm'>Mutlu Müşteri</div>
                    </div>
                    <div className='space-y-2'>
                        <div className='text-primary text-3xl font-bold'>98%</div>
                        <div className='text-muted-foreground text-sm'>Memnuniyet Oranı</div>
                    </div>
                    <div className='space-y-2'>
                        <div className='text-primary text-3xl font-bold'>5,000+</div>
                        <div className='text-muted-foreground text-sm'>Tamamlanan Hizmet</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
