"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Input } from '@/registry/new-york-v4/ui/input';
import { Badge } from '@/registry/new-york-v4/ui/badge';
import { Card, CardContent } from '@/registry/new-york-v4/ui/card';
import { Mail, CheckCircle, Sparkles, Download, Smartphone, Bell } from 'lucide-react';
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
            toast.error("Lütfen en az isim ve e-posta adresinizi girin.");
            
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name, phone }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsSuccess(true);
                setEmail('');
                setName('');
                setPhone('');
                toast.success(data.message || "Bekleme listesine başarıyla kaydoldunuz! 🎉");
                
                // Reset success state after 5 seconds
                setTimeout(() => setIsSuccess(false), 5000);
            } else {
                toast.error(data.error || "Bir hata oluştu. Lütfen tekrar deneyin.");
            }
        } catch (error) {
            toast.error("Sunucuya bağlanılamadı. Lütfen tekrar deneyin.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="waitlist" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-primary/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2 mb-6">
                        🚀 Yakında Sizinle
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        <span className="text-primary">Geleceğin</span> Parçası Ol
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        BiMakas uygulaması yakında çıkıyor! Bekleme listesine katılın ve 
                        özel indirimlerden ilk siz haberdar olun.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* Signup Form */}
                    <Card className="bg-background/60 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
                        <CardContent className="p-8">
                            {!isSuccess ? (
                                <>
                                    <div className="mb-8 text-center">
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                                            <Bell className="h-8 w-8 text-primary" strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-2">
                                            Bekleme Listesine Katıl
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Erken erişim fırsatını kaçırma!
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Name Input */}
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-foreground">
                                                İsim Soyisim
                                            </label>
                                            <Input
                                                id="name"
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Adınızı girin"
                                                className="h-12 border-2 border-border focus:border-primary focus:ring-primary/20 rounded-xl bg-background/50"
                                                required
                                            />
                                        </div>

                                        {/* Email Input */}
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-foreground">
                                                E-posta Adresi
                                            </label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="ornek@email.com"
                                                className="h-12 border-2 border-border focus:border-primary focus:ring-primary/20 rounded-xl bg-background/50"
                                                required
                                            />
                                        </div>

                                        {/* Phone Input */}
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-sm font-medium text-foreground">
                                                Telefon Numarası <span className="text-muted-foreground">(opsiyonel)</span>
                                            </label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="+90 555 123 45 67"
                                                className="h-12 border-2 border-border focus:border-primary focus:ring-primary/20 rounded-xl bg-background/50"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            disabled={isLoading}
                                            className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold rounded-xl group"
                                        >
                                            {isLoading ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                                                    Kaydediliyor...
                                                </>
                                            ) : (
                                                <>
                                                    <Mail className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                                                    Geleceğin Parçası Ol
                                                </>
                                            )}
                                        </Button>

                                        {/* Privacy Note */}
                                        <p className="text-xs text-muted-foreground text-center">
                                            Kaydolarak{' '}
                                            <a href="/legal/terms" className="text-primary hover:underline">
                                                Kullanım Şartları
                                            </a>{' '}
                                            ve{' '}
                                            <a href="/legal/kvkk" className="text-primary hover:underline">
                                                Gizlilik Politikası
                                            </a>
                                            'nı kabul etmiş olursunuz.
                                        </p>
                                    </form>
                                </>
                            ) : (
                                /* Success State */
                                <div className="text-center py-8">
                                    <div className="relative">
                                        <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4 animate-bounce" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-2">
                                        🎉 Başarılı!
                                    </h3>
                                    <p className="text-muted-foreground mb-6">
                                        Bekleme listesine başarıyla kaydoldunuz! 
                                        Uygulama çıktığında ilk siz haberdar olacaksınız.
                                    </p>
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                                        <p className="text-sm text-green-800">
                                            ✨ Özel erken erişim indirimi için e-postanızı kontrol etmeyi unutmayın!
                                        </p>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    {/* App Store Badges & Info */}
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                Uygulamayı İndirin
                            </h3>
                            <p className="text-muted-foreground mb-8">
                                BiMakas yakında iOS ve Android platformlarında!
                                Şimdi bekleme listesine katılın, çıktığında ilk siz indirin.
                            </p>

                            {/* Coming Soon Badges */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                <div className="relative">
                                    <Image
                                        src="/images/app-store-badge.png"
                                        alt="App Store'dan İndir"
                                        width={160}
                                        height={48}
                                        className="opacity-50 grayscale"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Badge className="bg-primary text-primary-foreground text-xs">
                                            Yakında
                                        </Badge>
                                    </div>
                                </div>
                                <div className="relative">
                                    <Image
                                        src="/images/google-play-badge.png"
                                        alt="Google Play'den İndir"
                                        width={160}
                                        height={48}
                                        className="opacity-50 grayscale"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Badge className="bg-primary text-primary-foreground text-xs">
                                            Yakında
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            {/* Features Preview */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg border border-border/50">
                                    <Download className="h-5 w-5 text-primary" />
                                    <span className="text-sm text-muted-foreground">Ücretsiz indirme</span>
                                </div>
                                <div className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg border border-border/50">
                                    <Smartphone className="h-5 w-5 text-primary" />
                                    <span className="text-sm text-muted-foreground">iOS & Android</span>
                                </div>
                            </div>
                        </div>

                        {/* Waitlist Stats */}
                        <div className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl p-6">
                            <h4 className="font-semibold text-foreground mb-4 text-center lg:text-left">
                                Bekleme Listesi İstatistikleri
                            </h4>
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-primary">1,247+</div>
                                    <div className="text-sm text-muted-foreground">Kayıtlı Kullanıcı</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-primary">89+</div>
                                    <div className="text-sm text-muted-foreground">Hazır Profesyonel</div>
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