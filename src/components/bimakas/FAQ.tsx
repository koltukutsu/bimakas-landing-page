import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york-v4/ui/accordion';

/**
 * FAQ Component - Frequently Asked Questions
 *
 * Common questions and answers about BiMakas service.
 * Helps reduce customer support load and builds trust.
 */
const FAQ = () => {
    const faqs = [
        {
            question: 'BiMakas nasıl çalışır?',
            answer: 'BiMakas uygulamasını indirin, konumunuzu belirleyin ve istediğiniz hizmeti seçin. Size en yakın profesyonelleri görün, birini seçin ve randevu alın. Profesyonel evinize gelir ve hizmeti verir.'
        },
        {
            question: 'Hangi şehirlerde hizmet veriyorsunuz?',
            answer: "Şu anda İstanbul, Ankara ve İzmir'de hizmet veriyoruz. Yakında daha fazla şehre genişlemeyi planlıyoruz. Bekleme listesine katılarak şehrinizde hizmete başladığımızda haberdar olabilirsiniz."
        },
        {
            question: 'Ödeme nasıl yapılır?',
            answer: 'Kredi kartı, banka kartı, dijital cüzdanlar veya nakit ile ödeme yapabilirsiniz. Tüm kartlı ödemeler SSL şifreleme ile güvence altındadır. Ödeme işlemi hizmet tamamlandıktan sonra gerçekleşir.'
        },
        {
            question: 'Profesyoneller nasıl seçiliyor?',
            answer: 'Tüm profesyonellerimiz sertifika kontrolünden geçer, geçmiş deneyimleri ve müşteri yorumları değerlendirilir. Hijyen eğitimi alırlar ve düzenli olarak performansları takip edilir.'
        },
        {
            question: 'Randevumu iptal edebilir miyim?',
            answer: 'Evet, randevunuzu hizmetten 2 saat öncesine kadar ücretsiz iptal edebilirsiniz. 2 saatten az kalan iptal işlemlerinde küçük bir iptal bedeli alınabilir.'
        },
        {
            question: 'Hijyen konusunda ne tür önlemler alınıyor?',
            answer: 'Tüm profesyonellerimiz hijyen sertifikası sahibidir. Steril araçlar kullanır, her müşteri öncesi dezenfeksiyon yaparlar. Maske, eldiven gibi koruyucu ekipmanlar zorunludur.'
        },
        {
            question: 'Uygulama ne zaman çıkacak?',
            answer: 'BiMakas uygulaması 2024 yılı içinde iOS ve Android platformlarında yayınlanacak. Bekleme listesine katılarak erken erişim fırsatından yararlanabilirsiniz.'
        },
        {
            question: 'Profesyonel olmak için nasıl başvuru yapabilirim?',
            answer: 'Profesyonel başvuru formunu doldurarak ekibimize katılabilirsiniz. Sertifikalarınız ve deneyimleriniz değerlendirildikten sonra oryantasyon sürecine dahil edilirsiniz.'
        }
    ];

    return (
        <section id='faq' className='bg-background py-20 lg:py-32'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Section Header */}
                <div className='mb-16 text-center'>
                    <h2 className='text-foreground mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                        Sıkça Sorulan <span className='text-primary'>Sorular</span>
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed'>
                        BiMakas hakkında merak ettiklerinizin cevapları burada. Aradığınızı bulamadıysanız bizimle
                        iletişime geçin.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className='mx-auto max-w-4xl'>
                    <Accordion type='single' collapsible className='space-y-4'>
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className='bg-background/60 border-border/50 hover:border-primary/30 rounded-xl border px-6 backdrop-blur-sm transition-colors'>
                                <AccordionTrigger className='py-6 text-left text-lg font-medium hover:no-underline'>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-muted-foreground pb-6 leading-relaxed'>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Bottom CTA */}
                <div className='mt-16 text-center'>
                    <p className='text-muted-foreground mb-4'>Başka sorularınız mı var?</p>
                    <a
                        href='mailto:info@bimakas.com'
                        className='text-primary hover:text-primary/80 font-medium transition-colors'>
                        Bizimle iletişime geçin →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
