import { Card, CardContent } from '@/registry/new-york-v4/ui/card';

import { Calendar, CreditCard, MapPin, Search, Smartphone } from 'lucide-react';

const AppScreens = () => {
    const screens = [
        {
            icon: Search,
            title: 'Yakındaki kuaförleri keşfet',
            description: 'Konumuna yakın tüm profesyonelleri gör ve karşılaştır',
            placeholder: '/images/screens/home.png'
        },
        {
            icon: Calendar,
            title: 'Hizmeti seç, saatini belirle',
            description: 'İstediğin hizmeti seç ve uygun saati rezerve et',
            placeholder: '/images/screens/booking.png'
        },
        {
            icon: CreditCard,
            title: 'Güvenli ödeme',
            description: 'Şeffaf fiyatlandırma ile güvenli ödeme yap',
            placeholder: '/images/screens/checkout.png'
        },
        {
            icon: MapPin,
            title: 'Geliyor! Canlı takip',
            description: 'Kuaförünün konumunu gerçek zamanlı takip et',
            placeholder: '/images/screens/tracking.png'
        }
    ];

    return (
        <section className='bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24'>
            <div className='container mx-auto max-w-screen-xl px-3 sm:px-4 lg:px-8'>
                <div className='mb-12 text-center sm:mb-16'>
                    <div className='mb-3 flex items-center justify-center gap-2 sm:mb-4'>
                        <Smartphone className='text-primary h-6 w-6 sm:h-8 sm:w-8' />
                        <span className='text-primary text-sm font-semibold tracking-wide uppercase sm:text-base'>
                            BiMakas Uygulaması
                        </span>
                    </div>

                    <h2 className='text-foreground mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl'>
                        Kullanımı Bu Kadar Basit
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-2xl px-4 text-base sm:px-0 sm:text-lg'>
                        Sezgisel arayüz ile kuaför hizmetine dakikalar içinde ulaş
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4'>
                    {screens.map((screen, index) => {
                        const IconComponent = screen.icon;

                        return (
                            <Card
                                key={index}
                                className='border-0 shadow-sm transition-shadow duration-300 hover:shadow-md'>
                                <CardContent className='p-4 sm:p-6'>
                                    {/* App Screen Mockup */}
                                    <div className='from-muted to-muted/50 mb-4 flex aspect-[9/16] items-center justify-center rounded-xl border bg-gradient-to-br sm:mb-6 sm:rounded-2xl'>
                                        <div className='text-center'>
                                            <IconComponent className='text-primary mx-auto mb-2 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12' />
                                            <p className='text-muted-foreground px-2 text-xs'>{screen.placeholder}</p>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className='text-foreground mb-2 text-base leading-tight font-semibold sm:text-lg'>
                                        {screen.title}
                                    </h3>
                                    <p className='text-muted-foreground text-sm leading-relaxed'>
                                        {screen.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AppScreens;
