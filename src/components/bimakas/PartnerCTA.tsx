import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent } from '@/registry/new-york-v4/ui/card';

import { Calendar, CreditCard, TrendingUp, Users } from 'lucide-react';

const PartnerCTA = () => {
    const benefits = [
        {
            icon: Users,
            title: 'Yeni müşteri edinimi',
            description: 'Uygulama sana talep getirir'
        },
        {
            icon: Calendar,
            title: 'Akıllı randevu kutusu',
            description: 'Kabul/ret, takvim yönetimi'
        },
        {
            icon: CreditCard,
            title: 'Güvenli ödemeler',
            description: 'Tamamlanan işten sonra cüzdana yansır'
        }
    ];

    return (
        <section id='kuaforler' className='bg-muted py-12 sm:py-16 md:py-20 lg:py-24'>
            <div className='container mx-auto max-w-screen-xl px-3 sm:px-4 lg:px-8'>
                <div className='grid items-center gap-8 sm:gap-12 lg:grid-cols-2'>
                    {/* Content */}
                    <div className='order-2 lg:order-1'>
                        <div className='mb-3 flex items-center justify-center gap-2 sm:mb-4 lg:justify-start'>
                            <TrendingUp className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                            <span className='text-primary text-xs font-semibold tracking-wide uppercase sm:text-sm'>
                                Kuaförler İçin
                            </span>
                        </div>

                        <h2 className='text-foreground mb-4 text-center text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-left lg:text-5xl'>
                            BiMakas&apos;la Gelirini <span className='text-primary'>Arttır</span>
                        </h2>

                        <p className='text-muted-foreground mb-6 text-center text-base sm:mb-8 sm:text-lg lg:text-left'>
                            Esnek saatler, kendi servis yarıçapın, anında ödeme akışı.
                        </p>

                        {/* Benefits */}
                        <div className='mb-6 space-y-4 sm:mb-8 sm:space-y-6'>
                            {benefits.map((benefit, index) => {
                                const IconComponent = benefit.icon;

                                return (
                                    <div key={index} className='flex items-start gap-3 sm:gap-4'>
                                        <div className='bg-primary/10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12'>
                                            <IconComponent className='text-primary h-5 w-5 sm:h-6 sm:w-6' />
                                        </div>
                                        <div>
                                            <h3 className='text-foreground mb-1 text-sm font-semibold sm:text-base'>
                                                {benefit.title}
                                            </h3>
                                            <p className='text-muted-foreground text-sm sm:text-base'>
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className='flex justify-center lg:justify-start'>
                            <Button
                                size='lg'
                                className='bg-primary hover:bg-primary/90 text-primary-foreground w-full px-6 py-3 text-base sm:w-auto sm:px-8 sm:py-4 sm:text-lg md:py-6'>
                                Partner Başvurusu
                            </Button>
                        </div>
                    </div>

                    {/* Image */}
                    <div className='relative order-1 lg:order-2'>
                        <Card className='border-0 shadow-lg'>
                            <CardContent className='p-0'>
                                <div className='from-primary/10 to-primary/5 flex aspect-[4/5] items-center justify-center rounded-lg bg-gradient-to-br sm:aspect-[3/4] md:aspect-[4/5]'>
                                    <div className='text-center'>
                                        <div className='bg-primary/20 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full sm:mb-4 sm:h-20 sm:w-20 md:h-24 md:w-24'>
                                            <TrendingUp className='text-primary h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12' />
                                        </div>
                                        <p className='text-muted-foreground text-sm font-medium sm:text-base'>
                                            Kuaför Partner Görseli
                                        </p>
                                        <p className='text-muted-foreground mt-1 text-xs sm:mt-2 sm:text-sm'>
                                            /images/partners/pro-hero.png
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnerCTA;
