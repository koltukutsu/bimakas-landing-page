import { Card, CardContent } from '@/registry/new-york-v4/ui/card';

import { Award, Star, Users } from 'lucide-react';

const SocialProof = () => {
    const testimonials = [
        {
            name: 'Ayşe K.',
            location: 'İstanbul',
            text: 'Evde kuaför hizmeti alabilmek çok pratik. Hem zaman kazanıyor hem de kaliteli hizmet alıyorum.',
            rating: 5
        },
        {
            name: 'Mehmet B.',
            location: 'Ankara',
            text: 'Kuaför aramakla uğraşmıyorum artık. BiMakas sayesinde güvenilir profesyonellere kolayca ulaşıyorum.',
            rating: 5
        },
        {
            name: 'Zeynep M.',
            location: 'İzmir',
            text: 'Fiyatlar çok şeffaf ve kuaförler gerçekten profesyonel. Kesinlikle tavsiye ederim.',
            rating: 5
        }
    ];

    const stats = [
        {
            icon: Users,
            value: '10K+',
            label: 'Mutlu Müşteri',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            icon: Award,
            value: '500+',
            label: 'Doğrulanmış Kuaför',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            icon: Star,
            value: '4.9',
            label: 'Ortalama Puan',
            color: 'text-yellow-600',
            bgColor: 'bg-yellow-50'
        }
    ];

    return (
        <section className='py-12 sm:py-16 md:py-20 lg:py-24'>
            <div className='container mx-auto max-w-screen-xl px-3 sm:px-4 lg:px-8'>
                {/* Stats */}
                <div className='mb-12 grid grid-cols-1 gap-6 sm:mb-16 sm:grid-cols-3 sm:gap-8'>
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;

                        return (
                            <div key={index} className='text-center'>
                                <div
                                    className={`h-12 w-12 rounded-full sm:h-14 sm:w-14 md:h-16 md:w-16 ${stat.bgColor} mx-auto mb-3 flex items-center justify-center sm:mb-4`}>
                                    <IconComponent className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 ${stat.color}`} />
                                </div>
                                <div className='text-foreground mb-1 text-2xl font-bold sm:mb-2 sm:text-3xl'>
                                    {stat.value}
                                </div>
                                <div className='text-muted-foreground text-sm sm:text-base'>{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Testimonials */}
                <div className='mb-8 text-center sm:mb-12'>
                    <h2 className='text-foreground mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl'>
                        Müşterilerimiz Ne Diyor?
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-2xl px-4 text-base sm:px-0 sm:text-lg'>
                        BiMakas kullanıcılarının deneyimleri
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8'>
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className='border-0 shadow-sm'>
                            <CardContent className='p-4 sm:p-6'>
                                {/* Stars */}
                                <div className='mb-3 flex items-center justify-center gap-1 sm:mb-4 md:justify-start'>
                                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                                        <Star key={i} className='h-4 w-4 fill-yellow-400 text-yellow-400' />
                                    ))}
                                </div>

                                {/* Testimonial */}
                                <p className='text-muted-foreground mb-3 text-center text-sm leading-relaxed italic sm:mb-4 sm:text-base md:text-left'>
                                    &quot;{testimonial.text}&quot;
                                </p>

                                {/* Author */}
                                <div className='border-t pt-3 text-center sm:pt-4 md:text-left'>
                                    <div className='text-foreground text-sm font-semibold sm:text-base'>
                                        {testimonial.name}
                                    </div>
                                    <div className='text-muted-foreground text-xs sm:text-sm'>
                                        {testimonial.location}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
