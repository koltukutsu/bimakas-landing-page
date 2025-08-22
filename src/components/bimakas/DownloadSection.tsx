'use client';

import { useState } from 'react';

import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent } from '@/registry/new-york-v4/ui/card';
import { Input } from '@/registry/new-york-v4/ui/input';

import { CheckCircle, Mail, Smartphone } from 'lucide-react';

const DownloadSection = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                setIsSubmitted(true);
                setEmail('');
            } else {
                const errorData = await response.json();
                alert(errorData.error || 'Bir hata oluştu. Lütfen tekrar deneyin.');
            }
        } catch (error) {
            console.error('Subscription error:', error);
            alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id='indir' className='from-primary/5 to-primary/10 bg-gradient-to-br py-12 sm:py-16 md:py-20 lg:py-24'>
            <div className='container mx-auto max-w-screen-xl px-3 sm:px-4 lg:px-8'>
                <div className='mb-12 text-center sm:mb-16'>
                    <div className='mb-3 flex items-center justify-center gap-2 sm:mb-4'>
                        <Smartphone className='text-primary h-6 w-6 sm:h-8 sm:w-8' />
                        <span className='text-primary text-sm font-semibold tracking-wide uppercase sm:text-base'>
                            BiMakas&apos;ı İndir
                        </span>
                    </div>

                    <h2 className='text-foreground mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl'>
                        Yakında Tüm Platformlarda
                    </h2>
                    <p className='text-muted-foreground mx-auto mb-6 max-w-2xl px-4 text-base sm:mb-8 sm:px-0 sm:text-lg'>
                        BiMakas uygulaması yakında App Store ve Google Play&apos;de. Erken erişim için e-posta adresini
                        bırak, ilk sen haberdar ol.
                    </p>
                </div>

                <div className='mx-auto max-w-4xl'>
                    <div className='grid items-center gap-8 sm:gap-12 lg:grid-cols-2'>
                        {/* Waitlist Form */}
                        <Card className='order-2 border-0 shadow-lg lg:order-1'>
                            <CardContent className='p-4 sm:p-6 md:p-8'>
                                <div className='mb-4 text-center sm:mb-6'>
                                    <Mail className='text-primary mx-auto mb-3 h-10 w-10 sm:mb-4 sm:h-12 sm:w-12' />
                                    <h3 className='text-foreground mb-2 text-xl font-bold sm:text-2xl'>
                                        Erken Erişim Listesi
                                    </h3>
                                    <p className='text-muted-foreground text-sm sm:text-base'>
                                        BiMakas yayınlandığında ilk sen haberdar ol
                                    </p>
                                </div>

                                {isSubmitted ? (
                                    <div className='text-center'>
                                        <CheckCircle className='mx-auto mb-3 h-12 w-12 text-green-500 sm:mb-4 sm:h-16 sm:w-16' />
                                        <h4 className='text-foreground mb-2 text-lg font-semibold sm:text-xl'>
                                            Teşekkürler!
                                        </h4>
                                        <p className='text-muted-foreground text-sm sm:text-base'>
                                            E-posta adresin kaydedildi. BiMakas hazır olduğunda seni bilgilendireceğiz.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className='space-y-3 sm:space-y-4'>
                                        <Input
                                            type='email'
                                            placeholder='E-posta adresin'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className='h-10 text-base sm:h-12'
                                        />
                                        <Button
                                            type='submit'
                                            disabled={isLoading}
                                            className='bg-primary hover:bg-primary/90 text-primary-foreground h-10 w-full text-sm sm:h-12 sm:text-base'>
                                            {isLoading ? 'Kaydediliyor...' : 'Erken Erişim İçin Katıl'}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>

                        {/* App Store Badges */}
                        <div className='order-1 text-center lg:order-2 lg:text-left'>
                            <h3 className='text-foreground mb-4 text-xl font-bold sm:mb-6 sm:text-2xl'>
                                Yakında Mağazalarda
                            </h3>
                            <div className='space-y-3 sm:space-y-4'>
                                <div className='bg-background border-border flex h-12 items-center justify-center rounded-lg border transition-shadow hover:shadow-md sm:h-16'>
                                    <span className='text-foreground text-sm font-semibold sm:text-base'>
                                        App Store&apos;da İndir
                                    </span>
                                </div>
                                <div className='bg-background border-border flex h-12 items-center justify-center rounded-lg border transition-shadow hover:shadow-md sm:h-16'>
                                    <span className='text-foreground text-sm font-semibold sm:text-base'>
                                        Google Play&apos;de Al
                                    </span>
                                </div>
                            </div>

                            <div className='bg-background/50 border-border mt-6 rounded-lg border p-3 sm:mt-8 sm:p-4'>
                                <p className='text-muted-foreground text-xs sm:text-sm'>
                                    <strong>Beta Testleri:</strong> Erken erişim listesine katılanlar beta testlere
                                    davet edilecek.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
