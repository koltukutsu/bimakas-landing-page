import { Card, CardContent } from '@/registry/new-york-v4/ui/card';

import { Clock, CreditCard, MapPin, Star } from 'lucide-react';

/**
 * ValueProps Component - Features Section ("Özellikler")
 *
 * Key value propositions showcased in elegant soft beige cards.
 * Implements approachable luxury with minimalist line icons.
 *
 * Content:
 * - 4 features with icons: Anlık randevu, Harita, Güvenli ödeme, Yorumlar
 *
 * Design Wow Effect:
 * - Soft beige rounded cards → approachable, human-centered feel
 * - Minimalist line icons (thin but elegant) → luxury balance
 * - Clean typography hierarchy maintains premium aesthetic
 *
 * Responsive Behavior:
 * - Desktop: 4 features horizontal grid (evenly spaced)
 * - Mobile: 2x2 grid or vertical stack, icons remain large for clarity
 */
const ValueProps = () => {
    const features = [
        {
            icon: Clock,
            title: 'Anlık Randevu',
            description:
                'Dakikalar içinde randevu alın, bekleme yaşamayın. Uygun profesyonelleri anında görün ve seçin.',
            color: 'text-primary'
        },
        {
            icon: MapPin,
            title: 'Harita Entegrasyonu',
            description:
                'Konumunuza en yakın kuaförleri harita üzerinde görün. Mesafe ve süre bilgisi ile akıllı seçim yapın.',
            color: 'text-blue-600'
        },
        {
            icon: CreditCard,
            title: 'Güvenli Ödeme',
            description: 'Kartla, dijital cüzdan veya nakit ödeme seçenekleri. Tüm işlemler SSL ile korunuyor.',
            color: 'text-green-600'
        },
        {
            icon: Star,
            title: 'Gerçek Yorumlar',
            description:
                'Doğrulanmış müşteri yorumları ve puanlamaları ile en iyi hizmeti seçin. Şeffaf değerlendirme sistemi.',
            color: 'text-amber-600'
        }
    ];

    return (
        <section id='features' className='bg-muted/30 py-20 lg:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                        Neden <span className='text-primary'>BiMakas</span>?
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed'>
                        Mobil güzellik deneyimini yeniden tanımlayan özelliklerle, profesyonel bakımı evinizin
                        konforunda yaşayın.
                    </p>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className='group bg-background/60 border-border/50 hover:border-primary/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'>
                            <CardContent className='space-y-6 p-8 text-center'>
                                {/* Icon */}
                                <div className='flex justify-center'>
                                    <div
                                        className={`from-primary/5 to-primary/10 group-hover:from-primary/10 group-hover:to-primary/20 rounded-2xl bg-gradient-to-br p-4 transition-all duration-300`}>
                                        <feature.icon
                                            className={`h-8 w-8 ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className='text-foreground group-hover:text-primary text-xl font-semibold transition-colors duration-300'>
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className='text-muted-foreground text-sm leading-relaxed'>{feature.description}</p>

                                {/* Subtle accent line */}
                                <div className='from-primary/30 group-hover:from-primary/60 mx-auto h-0.5 w-12 bg-gradient-to-r to-transparent transition-all duration-300' />
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className='mt-20 grid grid-cols-2 gap-8 text-center lg:grid-cols-4'>
                    <div className='space-y-2'>
                        <div className='text-primary text-3xl font-bold'>24/7</div>
                        <div className='text-muted-foreground text-sm'>Hizmet Saatleri</div>
                    </div>
                    <div className='space-y-2'>
                        <div className='text-primary text-3xl font-bold'>15dk</div>
                        <div className='text-muted-foreground text-sm'>Ortalama Varış</div>
                    </div>
                    <div className='space-y-2'>
                        <div className='text-primary text-3xl font-bold'>100%</div>
                        <div className='text-muted-foreground text-sm'>Güvenli Ödeme</div>
                    </div>
                    <div className='space-y-2'>
                        <div className='text-primary text-3xl font-bold'>4.9★</div>
                        <div className='text-muted-foreground text-sm'>Müşteri Memnuniyeti</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ValueProps;
