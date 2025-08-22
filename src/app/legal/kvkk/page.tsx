import Link from 'next/link';

import { Button } from '@/registry/new-york-v4/ui/button';

import { ArrowLeft } from 'lucide-react';

export const metadata = {
    title: 'KVKK & Gizlilik Politikası - BiMakas',
    description: 'BiMakas KVKK ve Gizlilik Politikası. Kişisel verileriniz nasıl korunur?'
};

const KVKKPage = () => {
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
                    <h1 className='text-foreground mb-4 text-3xl font-bold'>KVKK & Gizlilik Politikası</h1>
                    <p className='text-muted-foreground'>Son güncelleme: {new Date().toLocaleDateString('tr-TR')}</p>
                </div>

                {/* Content */}
                <div className='prose prose-lg max-w-none'>
                    <div className='bg-muted/30 mb-8 rounded-lg p-6'>
                        <p className='text-muted-foreground mb-0'>
                            <strong>Önemli:</strong> Bu sayfa henüz geliştirilme aşamasındadır. BiMakas uygulaması
                            yayınlanmadan önce detaylı KVKK ve Gizlilik Politikası metnileri burada yer alacaktır.
                        </p>
                    </div>

                    <section className='mb-8'>
                        <h2 className='text-foreground mb-4 text-2xl font-semibold'>1. Genel Bilgiler</h2>
                        <p className='text-muted-foreground mb-4'>
                            BiMakas Teknoloji A.Ş. olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK)
                            kapsamında kişisel verilerinizin güvenliğini sağlamak öncelikli hedefimizdir.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-foreground mb-4 text-2xl font-semibold'>2. Toplanan Veriler</h2>
                        <p className='text-muted-foreground mb-4'>
                            BiMakas uygulaması aracılığıyla topladığımız kişisel veriler şunlardır:
                        </p>
                        <ul className='text-muted-foreground mb-4 list-disc pl-6'>
                            <li>İletişim bilgileri (e-posta, telefon)</li>
                            <li>Konum bilgileri (hizmet alanı belirleme)</li>
                            <li>Randevu ve hizmet geçmişi</li>
                            <li>Ödeme bilgileri (güvenli sağlayıcılar aracılığıyla)</li>
                        </ul>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-foreground mb-4 text-2xl font-semibold'>3. Veri Güvenliği</h2>
                        <p className='text-muted-foreground mb-4'>
                            Kişisel verileriniz güncel güvenlik standartlarına uygun şekilde şifrelenerek
                            saklanmaktadır. Verileriniz hiçbir şekilde üçüncü taraflarla paylaşılmamaktadır.
                        </p>
                    </section>

                    <section className='mb-8'>
                        <h2 className='text-foreground mb-4 text-2xl font-semibold'>4. İletişim</h2>
                        <p className='text-muted-foreground'>
                            KVKK kapsamındaki haklarınız hakkında sorularınız için{' '}
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

export default KVKKPage;
