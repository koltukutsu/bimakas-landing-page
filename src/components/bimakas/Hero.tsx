'use client';

import Image from 'next/image';

import { Button } from '@/registry/new-york-v4/ui/button';

const Hero = () => {
    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className='relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-32'>
            <div className='container mx-auto max-w-screen-xl px-3 sm:px-4 lg:px-8'>
                <div className='grid items-center gap-8 sm:gap-12 lg:grid-cols-2'>
                    {/* Content */}
                    <div className='order-2 text-center lg:order-1 lg:text-left'>
                        <h1 className='text-foreground mb-4 text-3xl leading-tight font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl'>
                            Kuaför, dakikalar içinde <span className='text-primary'>kapında</span>.
                        </h1>

                        <p className='text-muted-foreground mx-auto mb-6 max-w-2xl text-base sm:mb-8 sm:text-lg md:text-xl lg:mx-0'>
                            BiMakas, konumuna en uygun{' '}
                            <span className='text-foreground font-semibold'>profesyonel kuaförü</span> getirir.
                            Uygulamadan seç, anında randevu al, bekleme yok.
                        </p>

                        <div className='mb-6 flex flex-col justify-center gap-3 sm:mb-8 sm:gap-4 lg:justify-start'>
                            <Button
                                size='lg'
                                onClick={() => scrollToSection('#indir')}
                                className='bg-primary hover:bg-primary/90 text-primary-foreground w-full px-6 py-3 text-base sm:w-auto sm:px-8 sm:py-4 sm:text-lg md:py-6'>
                                Erken Erişim Listesine Katıl
                            </Button>
                            <Button
                                variant='outline'
                                size='lg'
                                onClick={() => scrollToSection('#kuaforler')}
                                className='border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full px-6 py-3 text-base sm:w-auto sm:px-8 sm:py-4 sm:text-lg md:py-6'>
                                <span className='hidden sm:inline'>Kuaförüm ve Gelirimi Arttırmak İstiyorum</span>
                                <span className='sm:hidden'>Kuaför Olarak Katıl</span>
                            </Button>
                        </div>

                        {/* App Store Badges */}
                        <div className='flex flex-col items-center justify-center gap-3 sm:gap-4 lg:justify-start'>
                            <span className='text-muted-foreground text-sm'>Yakında:</span>
                            <div className='flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4'>
                                <div className='bg-muted flex h-10 items-center justify-center rounded-lg px-4 sm:h-12 sm:px-6'>
                                    <span className='text-xs font-medium sm:text-sm'>App Store</span>
                                </div>
                                <div className='bg-muted flex h-10 items-center justify-center rounded-lg px-4 sm:h-12 sm:px-6'>
                                    <span className='text-xs font-medium sm:text-sm'>Google Play</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Phone Mockups */}
                    <div className='relative order-1 flex justify-center lg:order-2 lg:justify-end'>
                        <div className='relative w-full max-w-xs sm:max-w-sm md:max-w-md'>
                            <Image
                                src='/images/hero/phones.svg'
                                alt='BiMakas Uygulaması'
                                width={400}
                                height={500}
                                priority
                                className='h-auto w-full drop-shadow-2xl'
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Elements */}
            <div className='absolute inset-0 -z-10'>
                <div className='bg-primary/5 absolute top-1/4 left-1/4 h-48 w-48 rounded-full blur-3xl sm:h-72 sm:w-72'></div>
                <div className='bg-primary/3 absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full blur-3xl sm:h-96 sm:w-96'></div>
            </div>
        </section>
    );
};

export default Hero;
