import { Card, CardContent } from '@/registry/new-york-v4/ui/card';

import { Bell, Clock, CreditCard, DollarSign, MapPin, ShieldCheck } from 'lucide-react';

const ValueProps = () => {
    const features = [
        {
            icon: Clock,
            title: 'Dakikalar İçinde Hizmet',
            description: 'Yakınındaki profesyonellerden anında randevu.',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            icon: CreditCard,
            title: 'Güvenli Ödeme',
            description: 'İş tamamlanınca ödemeni güvenle tamamla.',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            icon: DollarSign,
            title: 'Şeffaf Fiyatlandırma',
            description: 'Hizmetler ve ücretler siparişten önce net.',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50'
        },
        {
            icon: ShieldCheck,
            title: 'Doğrulanmış Profesyoneller',
            description: 'Belge ve puan doğrulamasıyla için rahat.',
            color: 'text-emerald-600',
            bgColor: 'bg-emerald-50'
        },
        {
            icon: MapPin,
            title: 'Konumuna Gelen Kuaför',
            description: 'Evde, ofiste veya otelde, nerede istersen.',
            color: 'text-orange-600',
            bgColor: 'bg-orange-50'
        },
        {
            icon: Bell,
            title: 'Takip & Bildirim',
            description: 'Randevunu gerçek zamanlı takip et.',
            color: 'text-indigo-600',
            bgColor: 'bg-indigo-50'
        }
    ];

    return (
        <section id='ozellikler' className='bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24'>
            <div className='container mx-auto max-w-screen-xl px-3 sm:px-4 lg:px-8'>
                <div className='mb-12 text-center sm:mb-16'>
                    <h2 className='text-foreground mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl'>
                        Neden BiMakas?
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-2xl px-4 text-base sm:px-0 sm:text-lg'>
                        BiMakas, bulunduğun yerde kaliteli kuaför hizmetini hızlı, şeffaf ve güvenli şekilde sunar.
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3'>
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;

                        return (
                            <Card
                                key={index}
                                className='border-0 shadow-sm transition-shadow duration-300 hover:shadow-md'>
                                <CardContent className='p-4 sm:p-6'>
                                    <div
                                        className={`h-10 w-10 rounded-lg sm:h-12 sm:w-12 ${feature.bgColor} mb-3 flex items-center justify-center sm:mb-4`}>
                                        <IconComponent className={`h-5 w-5 sm:h-6 sm:w-6 ${feature.color}`} />
                                    </div>
                                    <h3 className='text-foreground mb-2 text-lg leading-tight font-semibold sm:mb-3 sm:text-xl'>
                                        {feature.title}
                                    </h3>
                                    <p className='text-muted-foreground text-sm leading-relaxed sm:text-base'>
                                        {feature.description}
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

export default ValueProps;
