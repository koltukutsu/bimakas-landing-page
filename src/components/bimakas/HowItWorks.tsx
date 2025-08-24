import { Search, Smartphone, Sparkles } from 'lucide-react';

/**
 * HowItWorks Component - Process Timeline ("Nasıl Çalışır?")
 *
 * Simple 3-step process explanation with visual timeline and coral highlights.
 * Emphasizes simplicity and effortless user experience.
 *
 * Content:
 * - 3 steps: Aç → Çağır → Şıklığın Keyfini Çıkar
 *
 * Design Wow Effect:
 * - Timeline flow with numbered circles (1-2-3) + minimal illustrations
 * - Sense of simplicity + progression through visual hierarchy
 * - Coral highlights create visual guidance → effortless feel
 *
 * Responsive Behavior:
 * - Desktop: Horizontal timeline with connecting arrows
 * - Mobile: Vertical stacked timeline, centered icons + text
 */
const HowItWorks = () => {
    const steps = [
        {
            number: 1,
            icon: Smartphone,
            title: 'Uygulamayı Aç',
            description: 'BiMakas uygulamasını açın ve konumunuzu belirleyin. Hangi hizmeti istediğinizi seçin.',
            details: ['Konum belirleme', 'Hizmet seçimi', 'Tarih ve saat']
        },
        {
            number: 2,
            icon: Search,
            title: 'Profesyoneli Çağır',
            description: 'Yakınınızdaki uygun kuaförleri görün, profillerini inceleyin ve birini seçin.',
            details: ['Profesyonel profilleri', 'Yorum ve puanlar', 'Anında randevu']
        },
        {
            number: 3,
            icon: Sparkles,
            title: 'Şıklığın Keyfini Çıkar',
            description: 'Profesyoneliniz evinize gelsin ve konforun tadını çıkararak bakımınızı yaptırın.',
            details: ['Evde hizmet', 'Profesyonel bakım', 'Güvenli ödeme']
        }
    ];

    return (
        <section id='how-it-works' className='bg-background py-20 lg:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-20 text-center'>
                    <h2 className='text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                        Nasıl <span className='text-primary'>Çalışır</span>?
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed'>
                        Sadece 3 basit adımda profesyonel bakım hizmetini evinizde yaşayın. Teknoloji ve kolaylık bir
                        arada.
                    </p>
                </div>

                {/* Timeline */}
                <div className='relative'>
                    {/* Desktop Connection Line */}
                    <div className='via-primary/30 absolute top-24 left-1/2 hidden h-0.5 w-full -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r from-transparent to-transparent lg:block' />

                    {/* Steps Grid */}
                    <div className='grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8'>
                        {steps.map((step, index) => (
                            <div key={index} className='relative'>
                                {/* Mobile Connection Line */}
                                {index < steps.length - 1 && (
                                    <div className='from-primary/30 absolute top-24 left-12 h-12 w-0.5 bg-gradient-to-b to-transparent lg:hidden' />
                                )}

                                <div className='space-y-6 text-center lg:text-center'>
                                    {/* Step Number & Icon */}
                                    <div className='relative flex justify-center'>
                                        <div className='relative'>
                                            {/* Outer Ring */}
                                            <div className='from-primary/10 to-primary/20 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br'>
                                                {/* Inner Circle */}
                                                <div className='bg-background border-primary flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-lg'>
                                                    <step.icon className='text-primary h-7 w-7' strokeWidth={1.5} />
                                                </div>
                                            </div>

                                            {/* Step Number Badge */}
                                            <div className='bg-primary text-primary-foreground absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold shadow-lg'>
                                                {step.number}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className='space-y-4'>
                                        <h3 className='text-foreground text-2xl font-semibold'>{step.title}</h3>

                                        <p className='text-muted-foreground mx-auto max-w-sm leading-relaxed'>
                                            {step.description}
                                        </p>

                                        {/* Feature List */}
                                        <div className='space-y-2'>
                                            {step.details.map((detail, detailIndex) => (
                                                <div
                                                    key={detailIndex}
                                                    className='flex items-center justify-center space-x-2'>
                                                    <div className='bg-primary h-1.5 w-1.5 rounded-full' />
                                                    <span className='text-muted-foreground text-sm'>{detail}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Desktop Arrow */}
                                {index < steps.length - 1 && (
                                    <div className='absolute top-12 -right-4 z-10 hidden lg:block'>
                                        <div className='border-primary/40 bg-background h-8 w-8 rotate-45 transform border-t-2 border-r-2' />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className='mt-20 text-center'>
                    <div className='text-muted-foreground mb-4 inline-flex items-center space-x-2 text-lg'>
                        <Sparkles className='text-primary h-5 w-5' />
                        <span>Bu kadar basit!</span>
                        <Sparkles className='text-primary h-5 w-5' />
                    </div>
                    <p className='text-muted-foreground'>
                        Ortalama süreç süresi: <span className='text-primary font-semibold'>5 dakika</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
