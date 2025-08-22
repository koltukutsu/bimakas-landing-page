import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'Kullanım Şartları - BiMakas',
    description: 'BiMakas uygulaması kullanım şartları ve koşulları'
};

const TermsPage = () => {
    return (
        <div className='bg-background min-h-screen'>
            <div className='container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8'>
                {/* Header */}
                <div className='mb-8'>
                    <Link href='/'>
                        <Button variant='outline' className='mb-4'>
                            <ArrowLeft className='mr-2 h-4 w-4' />
                            Ana Sayfaya Dön
                        </Button>
                    </Link>
                    <h1 className='text-foreground mb-4 text-3xl font-bold'>Kullanım Şartları</h1>
                    <p className='text-muted-foreground'>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                </div>

                {/* Content */}
                <div className='prose prose-lg max-w-none'>
                    <div className='bg-muted/30 mb-8 rounded-lg p-6'>
                        <p className='text-muted-foreground mb-0'>
                            <strong>Önemli:</strong> Bu sayfa henüz geliştirilme aşamasındadır. BiMakas uygulaması
                            yayınlanmadan önce detaylı Kullanım Şartları burada yer alacaktır.
                        </p>
                    </div>

                    <section className='mb-8'>
                        <h2 className='text-foreground mb-4 text-2xl font-semibold'>1. Hizmet Tanımı</h2>
                        <p className='text-muted-foreground mb-4'>
                            BiMakas, kullanıcıların bulundukları konumda profesyonel kuaför hizmeti alabilmelerini
                            sağlayan bir mobil platform hizmetidir.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-foreground mb-4 text-2xl font-semibold'>2. Kullanıcı Yükümlülükleri</h2>
                        <ul className='text-muted-foreground mb-4 list-disc pl-6'>
                            <li>Doğru ve güncel bilgiler vermek</li>
                            <li>Randevu saatlerine uygun davranmak</li>
                            <li>Hizmet sağlayıcılara saygılı davranmak</li>
                            <li>Platform kurallarına uymak</li>
                        </ul>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-foreground mb-4 text-2xl font-semibold'>3. Ödeme ve İptal Koşulları</h2>
                        <p className='text-muted-foreground mb-4'>
                            Ödemeler güvenli ödeme sağlayıcıları aracılığıyla alınmaktadır. İptal koşulları randevu
                            saatine kalan süreye göre değişkenlik gösterir.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-foreground mb-4 text-2xl font-semibold'>4. Sorumluluk Sınırları</h2>
                        <p className='text-muted-foreground mb-4'>
                            BiMakas, platform hizmeti sağlayıcısı olarak hizmet kalitesinden sorumlu değildir. Hizmet
                            sağlayıcılar bağımsız profesyonellerdir.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-foreground mb-4 text-2xl font-semibold'>5. İletişim</h2>
                        <p className='text-muted-foreground'>
                            Kullanım şartları hakkında sorularınız için{' '}
                            <Link href='/contact' className='text-primary hover:underline'>
                                iletişim sayfamızı
                            </Link>{' '}
                            kullanabilirsiniz.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
