'use client';

import { CheckCircle, MapPin, Search, UserCheck } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            number: '01',
            icon: MapPin,
            title: 'Konumunu paylaş ve ihtiyacını seç',
            description: 'Bulunduğun yeri belirt ve hangi hizmeti istediğini seç.',
            color: 'text-primary',
            bgColor: 'bg-primary/10'
        },
        {
            number: '02',
            icon: Search,
            title: 'Uygun kuaförleri karşılaştır',
            description: 'Yakınındaki kuaförlerin profillerini, puanlarını ve fiyatlarını incele.',
            color: 'text-blue-600',
            bgColor: 'bg-blue-50'
        },
        {
            number: '03',
            icon: CheckCircle,
            title: 'Randevunu onayla, güvenle öde',
            description: 'Uygun saati seç, randevunu onayla ve güvenli ödeme yap.',
            color: 'text-green-600',
            bgColor: 'bg-green-50'
        },
        {
            number: '04',
            icon: UserCheck,
            title: 'Profesyonel kapında, keyfini çıkar',
            description: 'Kuaför kapında, sen sadece keyfini çıkar.',
            color: 'text-purple-600',
            bgColor: 'bg-purple-50'
        }
    ];

    return (
        <section id='nasil-calisir' className='py-12 sm:py-16 md:py-20 lg:py-24'>
            <div className='container mx-auto max-w-screen-xl px-3 sm:px-4 lg:px-8'>
                <div className='mb-12 text-center sm:mb-16'>
                    <h2 className='text-foreground mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl'>
                        Nasıl Çalışır?
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-2xl px-4 text-base sm:px-0 sm:text-lg'>
                        4 basit adımda kuaför hizmetine ulaş
                    </p>
                </div>

                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4'>
                    {steps.map((step, index) => {
                        const IconComponent = step.icon;

                        return (
                            <div key={index} className='group relative text-center'>
                                {/* Step Number */}
                                <div className='relative mb-4 sm:mb-6'>
                                    <div
                                        className={`h-12 w-12 rounded-full sm:h-14 sm:w-14 md:h-16 md:w-16 ${step.bgColor} mx-auto mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 sm:mb-4`}>
                                        <IconComponent
                                            className={`h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 ${step.color}`}
                                        />
                                    </div>
                                    <div className='bg-primary text-primary-foreground absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold sm:-top-2 sm:-right-2 sm:h-8 sm:w-8 sm:text-sm'>
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className='text-foreground mb-2 px-2 text-lg leading-tight font-semibold sm:mb-3 sm:text-xl'>
                                    {step.title}
                                </h3>
                                <p className='text-muted-foreground px-2 text-sm leading-relaxed sm:text-base'>
                                    {step.description}
                                </p>

                                {/* Connector Line (except for last item) - Only on large screens */}
                                {index < steps.length - 1 && (
                                    <div className='bg-muted-foreground/20 absolute top-6 left-1/2 hidden h-0.5 w-full translate-x-6 -translate-y-1/2 transform sm:top-7 sm:translate-x-7 md:top-8 md:translate-x-8 lg:block'>
                                        <div className='bg-primary absolute top-1/2 right-0 h-3 w-3 -translate-y-1/2 transform rounded-full sm:h-4 sm:w-4'></div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
