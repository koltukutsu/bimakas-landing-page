'use client';

import { useState } from 'react';

import Image from 'next/image';

import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent } from '@/registry/new-york-v4/ui/card';
import { Input } from '@/registry/new-york-v4/ui/input';

import { Bell, CheckCircle, Download, Mail, Smartphone, Sparkles } from 'lucide-react';
import { toast } from 'sonner';

/**
 * DownloadSection Component - Waitlist Signup Section ("Bekleme Listesi")
 *
 * Conversion-focused email capture with app store badges and premium styling.
 * Implements coral border glow and confetti animation for success state.
 *
 * Content:
 * - Email signup form with name, email, phone fields
 * - CTA: "Geleceğin Parçası Ol"
 * - App store download badges (iOS/Android)
 *
 * Design Wow Effect:
 * - Rounded input fields with coral border glow → welcoming yet premium
 * - Success message with subtle confetti animation → surprise & delight
 * - Strategic placement after social proof builds trust
 *
 * Responsive Behavior:
 * - Desktop: Inline form with fields + button
 * - Mobile: Vertical stacked form, large touch-friendly inputs
 */
const DownloadSection = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !name) {
            toast.error('Lütfen en az isim ve e-posta adresinizi girin.');

            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, name, phone })
            });

            const data = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                setEmail('');
                setName('');
                setPhone('');
                toast.success(data.message || 'Bekleme listesine başarıyla kaydoldunuz! 🎉');

                // Reset success state after 5 seconds
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                toast.error(data.error || 'Bir hata oluştu. Lütfen tekrar deneyin.');
            }
        } catch (error) {
            toast.error('Sunucuya bağlanılamadı. Lütfen tekrar deneyin.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section
            id='waitlist'
            className='from-primary/5 via-background to-primary/5 relative overflow-hidden bg-gradient-to-br py-20 lg:py-32'>
            {/* Background Elements */}
            <div className='absolute inset-0 -z-10'>
                <div className='bg-primary/10 absolute top-20 left-20 h-96 w-96 animate-pulse rounded-full blur-3xl' />
                <div className='bg-primary/5 absolute right-20 bottom-20 h-72 w-72 rounded-full blur-3xl' />
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <Badge className='bg-primary/20 text-primary border-primary/30 mb-6 px-4 py-2'>
                        🚀 Yakında Sizinle
                    </Badge>
                    <h2 className='text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                        <span className='text-primary'>Geleceğin</span> Parçası Ol
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed'>
                        BiMakas uygulaması yakında çıkıyor! Bekleme listesine katılın ve özel indirimlerden ilk siz
                        haberdar olun.
                    </p>
                </div>

                <div className='mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2'>
                    {/* Signup Form */}
                    <Card className='bg-background/60 border-border/50 hover:border-primary/30 backdrop-blur-sm transition-all duration-300 hover:shadow-xl'>
                        <CardContent className='p-8'>
                            {!isSuccess ? (
                                <>
                                    <div className='mb-8 text-center'>
                                        <div className='bg-primary/10 mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full'>
                                            <Bell className='text-primary h-8 w-8' strokeWidth={1.5} />
                                        </div>
                                        <h3 className='text-foreground mb-2 text-2xl font-bold'>
                                            Bekleme Listesine Katıl
                                        </h3>
                                        <p className='text-muted-foreground'>Erken erişim fırsatını kaçırma!</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className='space-y-6'>
                                        {/* Name Input */}
                                        <div className='space-y-2'>
                                            <label htmlFor='name' className='text-foreground text-sm font-medium'>
                                                İsim Soyisim
                                            </label>
                                            <Input
                                                id='name'
                                                type='text'
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder='Adınızı girin'
                                                className='border-border focus:border-primary focus:ring-primary/20 bg-background/50 h-12 rounded-xl border-2'
                                                required
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div className='space-y-2'>
                                            <label htmlFor='email' className='text-foreground text-sm font-medium'>
                                                E-posta Adresi
                                            </label>
                                            <Input
                                                id='email'
                                                type='email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder='ornek@email.com'
                                                className='border-border focus:border-primary focus:ring-primary/20 bg-background/50 h-12 rounded-xl border-2'
                                                required
                                            />
                                        </div>

                                        {/* Phone Input */}
                                        <div className='space-y-2'>
                                            <label htmlFor='phone' className='text-foreground text-sm font-medium'>
                                                Telefon Numarası{' '}
                                                <span className='text-muted-foreground'>(opsiyonel)</span>
                                            </label>
                                            <Input
                                                id='phone'
                                                type='tel'
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder='+90 555 123 45 67'
                                                className='border-border focus:border-primary focus:ring-primary/20 bg-background/50 h-12 rounded-xl border-2'
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <Button
                                            type='submit'
                                            disabled={isLoading}
                                            className='bg-primary hover:bg-primary/90 text-primary-foreground group h-12 w-full rounded-xl text-lg font-semibold'>
                                            {isLoading ? (
                                                <>
                                                    <div className='mr-2 h-5 w-5 animate-spin rounded-full border-b-2 border-white' />
                                                    Kaydediliyor...
                                                </>
                                            ) : (
                                                <>
                                                    <Mail className='mr-2 h-5 w-5 transition-transform group-hover:scale-110' />
                                                    Geleceğin Parçası Ol
                                                </>
                                            )}
                                        </Button>

                                        {/* Privacy Note */}
                                        <p className='text-muted-foreground text-center text-xs'>
                                            Kaydolarak{' '}
                                            <a href='/legal/terms' className='text-primary hover:underline'>
                                                Kullanım Şartları
                                            </a>{' '}
                                            ve{' '}
                                            <a href='/legal/kvkk' className='text-primary hover:underline'>
                                                Gizlilik Politikası
                                            </a>
                                            'nı kabul etmiş olursunuz.
                                        </p>
                                    </form>
                                </>
                            ) : (
                                /* Success State */
                                <div className='py-8 text-center'>
                                    <div className='relative'>
                                        <CheckCircle className='mx-auto mb-4 h-20 w-20 animate-bounce text-green-500' />
                                        <div className='absolute inset-0 flex items-center justify-center'>
                                            <Sparkles className='text-primary h-6 w-6 animate-pulse' />
                                        </div>
                                    </div>
                                    <h3 className='text-foreground mb-2 text-2xl font-bold'>🎉 Başarılı!</h3>
                                    <p className='text-muted-foreground mb-6'>
                                        Bekleme listesine başarıyla kaydoldunuz! Uygulama çıktığında ilk siz haberdar
                                        olacaksınız.
                                    </p>
                                    <div className='rounded-xl border border-green-200 bg-green-50 p-4'>
                                        <p className='text-sm text-green-800'>
                                            ✨ Özel erken erişim indirimi için e-postanızı kontrol etmeyi unutmayın!
                                        </p>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* App Store Badges & Info */}
                    <div className='space-y-8'>
                        <div className='text-center lg:text-left'>
                            <h3 className='text-foreground mb-4 text-2xl font-bold'>Uygulamayı İndirin</h3>
                            <p className='text-muted-foreground mb-8'>
                                BiMakas yakında iOS ve Android platformlarında! Şimdi bekleme listesine katılın,
                                çıktığında ilk siz indirin.
                            </p>

                            {/* Coming Soon Badges */}
                            <div className='mb-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start'>
                                <div className='relative'>
                                    <Image
                                        src='/images/app-store-badge.png'
                                        alt="App Store'dan İndir"
                                        width={160}
                                        height={48}
                                        className='opacity-50 grayscale'
                                    />
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <Badge className='bg-primary text-primary-foreground text-xs'>Yakında</Badge>
                                    </div>
                                </div>
                                <div className='relative'>
                                    <Image
                                        src='/images/google-play-badge.png'
                                        alt="Google Play'den İndir"
                                        width={160}
                                        height={48}
                                        className='opacity-50 grayscale'
                                    />
                                    <div className='absolute inset-0 flex items-center justify-center'>
                                        <Badge className='bg-primary text-primary-foreground text-xs'>Yakında</Badge>
                                    </div>
                                </div>
                            </div>

                            {/* Features Preview */}
                            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                                <div className='bg-background/50 border-border/50 flex items-center space-x-3 rounded-lg border p-3'>
                                    <Download className='text-primary h-5 w-5' />
                                    <span className='text-muted-foreground text-sm'>Ücretsiz indirme</span>
                                </div>
                                <div className='bg-background/50 border-border/50 flex items-center space-x-3 rounded-lg border p-3'>
                                    <Smartphone className='text-primary h-5 w-5' />
                                    <span className='text-muted-foreground text-sm'>iOS & Android</span>
                                </div>
                            </div>
                        </div>

                        {/* Waitlist Stats */}
                        <div className='bg-background/60 border-border/50 rounded-xl border p-6 backdrop-blur-sm'>
                            <h4 className='text-foreground mb-4 text-center font-semibold lg:text-left'>
                                Bekleme Listesi İstatistikleri
                            </h4>
                            <div className='grid grid-cols-2 gap-4 text-center'>
                                <div>
                                    <div className='text-primary text-2xl font-bold'>1,247+</div>
                                    <div className='text-muted-foreground text-sm'>Kayıtlı Kullanıcı</div>
                                </div>
                                <div>
                                    <div className='text-primary text-2xl font-bold'>89+</div>
                                    <div className='text-muted-foreground text-sm'>Hazır Profesyonel</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
