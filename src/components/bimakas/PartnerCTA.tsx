import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowRight, Clock, MapPin, Scissors, TrendingUp, Users } from 'lucide-react';

/**
 * PartnerCTA Component - For Professionals Section ("Profesyoneller İçin")
 *
 * Business growth opportunity section targeting barbers and stylists.
 * Uses dark luxury aesthetic to convey exclusivity and premium positioning.
 *
 * Content:
 * - Başlık: "Kazancını Arttır, Müşteri Portföyünü Genişlet"
 * - Sub: "BiMakas, salon dışı kazanç için yeni fırsatlar sunar."
 *
 * Design Wow Effect:
 * - Dark luxury background (#2E2E2E) with coral text highlights
 * - Conveys exclusivity and business growth focus
 * - Visual contrast signals this is for professionals, not end-users
 *
 * Responsive Behavior:
 * - Desktop: Left text + right professional illustration
 * - Mobile: Full-width centered text, background overlay for readability
 */
const PartnerCTA = () => {
    const benefits = [
        {
            icon: TrendingUp,
            title: 'Kazanç Artışı',
            description: 'Salon dışında ek gelir elde edin'
        },
        {
            icon: Users,
            title: 'Geniş Müşteri Ağı',
            description: 'Binlerce potansiyel müşteriyle buluşun'
        },
        {
            icon: MapPin,
            title: 'Esnek Çalışma',
            description: 'İstediğiniz bölgelerde hizmet verin'
        },
        {
            icon: Clock,
            title: 'Zaman Özgürlüğü',
            description: 'Kendi çalışma saatlerinizi belirleyin'
        }
    ];

    const stats = [
        { value: '₺2,500+', label: 'Ortalama Aylık Ek Gelir' },
        { value: '40+', label: 'Haftalık Randevu' },
        { value: '4.8★', label: 'Profesyonel Puanı' }
    ];

    return (
        <section id='professionals' className='relative overflow-hidden bg-[#2E2E2E] py-20 text-white lg:py-32'>
            {/* Background Elements */}
            <div className='absolute inset-0'>
                <div className='bg-primary/5 absolute top-20 right-20 h-96 w-96 rounded-full blur-3xl' />
                <div className='bg-primary/10 absolute bottom-20 left-20 h-72 w-72 rounded-full blur-3xl' />
            </div>

            <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid items-center gap-16 lg:grid-cols-2'>
                    {/* Content Section */}
                    <div className='space-y-8'>
                        {/* Badge */}
                        <Badge className='bg-primary/20 text-primary border-primary/30 px-4 py-2'>
                            💼 Profesyoneller İçin
                        </Badge>

                        {/* Main Heading */}
                        <div className='space-y-6'>
                            <h2 className='text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl'>
                                <span className='text-primary'>Kazancını Arttır,</span>
                                <br />
                                Müşteri Portföyünü Genişlet
                            </h2>

                            <p className='text-xl leading-relaxed text-gray-300'>
                                BiMakas, salon dışı kazanç için yeni fırsatlar sunar. Mobil güzellik sektörünün öncüsü
                                olun.
                            </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className='hover:border-primary/30 flex items-start space-x-4 rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300'>
                                    <div className='flex-shrink-0'>
                                        <div className='bg-primary/20 flex h-12 w-12 items-center justify-center rounded-lg'>
                                            <benefit.icon className='text-primary h-6 w-6' strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='mb-1 font-semibold text-white'>{benefit.title}</h3>
                                        <p className='text-sm text-gray-400'>{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-6 border-t border-white/10 py-8'>
                            {stats.map((stat, index) => (
                                <div key={index} className='text-center'>
                                    <div className='text-primary mb-1 text-2xl font-bold'>{stat.value}</div>
                                    <div className='text-sm text-gray-400'>{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <Button
                            size='lg'
                            className='bg-primary hover:bg-primary/90 text-primary-foreground group h-auto px-8 py-4 text-lg'>
                            Partner Başvurusu Yap
                            <ArrowRight className='ml-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
                        </Button>

                        {/* Small note */}
                        <p className='text-sm text-gray-500'>
                            * Başvuru sürecinde profesyonel sertifikalarınız kontrol edilecektir.
                        </p>
                    </div>

                    {/* Visual Section */}
                    <div className='relative'>
                        <div className='relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-8 backdrop-blur-sm'>
                            {/* Professional Icon */}
                            <div className='mb-8 text-center'>
                                <div className='bg-primary/20 mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full'>
                                    <Scissors className='text-primary h-12 w-12' strokeWidth={1.5} />
                                </div>
                                <h3 className='mb-2 text-2xl font-bold text-white'>Profesyonel Profili</h3>
                                <p className='text-gray-400'>BiMakas Partner Kuaförü</p>
                            </div>

                            {/* Mock Profile Stats */}
                            <div className='space-y-4'>
                                <div className='flex items-center justify-between rounded-lg bg-white/5 p-3'>
                                    <span className='text-gray-400'>Bu Ay Kazanç</span>
                                    <span className='text-primary font-semibold'>₺3,250</span>
                                </div>
                                <div className='flex items-center justify-between rounded-lg bg-white/5 p-3'>
                                    <span className='text-gray-400'>Tamamlanan Hizmet</span>
                                    <span className='text-primary font-semibold'>47</span>
                                </div>
                                <div className='flex items-center justify-between rounded-lg bg-white/5 p-3'>
                                    <span className='text-gray-400'>Müşteri Puanı</span>
                                    <span className='text-primary font-semibold'>4.9 ⭐</span>
                                </div>
                            </div>

                            {/* Success Badge */}
                            <div className='mt-6 text-center'>
                                <div className='inline-flex items-center space-x-2 rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400'>
                                    <div className='h-2 w-2 animate-pulse rounded-full bg-green-400' />
                                    <span>Aktif Partner</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className='bg-primary/30 absolute -top-4 -right-4 h-8 w-8 animate-pulse rounded-full' />
                        <div className='bg-primary/20 absolute -bottom-4 -left-4 h-6 w-6 animate-bounce rounded-full' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerCTA;
