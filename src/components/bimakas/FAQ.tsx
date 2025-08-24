import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/registry/new-york-v4/ui/accordion';

/**
 * FAQ Component - Frequently Asked Questions
 * 
 * Common questions and answers about BiMakas service.
 * Helps reduce customer support load and builds trust.
 */
const FAQ = () => {
    const faqs = [
        {
            question: "BiMakas nasıl çalışır?",
            answer: "BiMakas uygulamasını indirin, konumunuzu belirleyin ve istediğiniz hizmeti seçin. Size en yakın profesyonelleri görün, birini seçin ve randevu alın. Profesyonel evinize gelir ve hizmeti verir."
        },
        {
            question: "Hangi şehirlerde hizmet veriyorsunuz?",
            answer: "Şu anda İstanbul, Ankara ve İzmir'de hizmet veriyoruz. Yakında daha fazla şehre genişlemeyi planlıyoruz. Bekleme listesine katılarak şehrinizde hizmete başladığımızda haberdar olabilirsiniz."
        },
        {
            question: "Ödeme nasıl yapılır?",
            answer: "Kredi kartı, banka kartı, dijital cüzdanlar veya nakit ile ödeme yapabilirsiniz. Tüm kartlı ödemeler SSL şifreleme ile güvence altındadır. Ödeme işlemi hizmet tamamlandıktan sonra gerçekleşir."
        },
        {
            question: "Profesyoneller nasıl seçiliyor?",
            answer: "Tüm profesyonellerimiz sertifika kontrolünden geçer, geçmiş deneyimleri ve müşteri yorumları değerlendirilir. Hijyen eğitimi alırlar ve düzenli olarak performansları takip edilir."
        },
        {
            question: "Randevumu iptal edebilir miyim?",
            answer: "Evet, randevunuzu hizmetten 2 saat öncesine kadar ücretsiz iptal edebilirsiniz. 2 saatten az kalan iptal işlemlerinde küçük bir iptal bedeli alınabilir."
        },
        {
            question: "Hijyen konusunda ne tür önlemler alınıyor?",
            answer: "Tüm profesyonellerimiz hijyen sertifikası sahibidir. Steril araçlar kullanır, her müşteri öncesi dezenfeksiyon yaparlar. Maske, eldiven gibi koruyucu ekipmanlar zorunludur."
        },
        {
            question: "Uygulama ne zaman çıkacak?",
            answer: "BiMakas uygulaması 2024 yılı içinde iOS ve Android platformlarında yayınlanacak. Bekleme listesine katılarak erken erişim fırsatından yararlanabilirsiniz."
        },
        {
            question: "Profesyonel olmak için nasıl başvuru yapabilirim?",
            answer: "Profesyonel başvuru formunu doldurarak ekibimize katılabilirsiniz. Sertifikalarınız ve deneyimleriniz değerlendirildikten sonra oryantasyon sürecine dahil edilirsiniz."
        }
    ];

    return (
        <section id="faq" className="py-20 lg:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Sıkça Sorulan <span className="text-primary">Sorular</span>
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        BiMakas hakkında merak ettiklerinizin cevapları burada. 
                        Aradığınızı bulamadıysanız bizimle iletişime geçin.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem 
                                key={index} 
                                value={`item-${index}`}
                                className="bg-background/60 backdrop-blur-sm border border-border/50 rounded-xl px-6 hover:border-primary/30 transition-colors"
                            >
                                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-muted-foreground mb-4">
                        Başka sorularınız mı var?
                    </p>
                    <a 
                        href="mailto:info@bimakas.com"
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                        Bizimle iletişime geçin →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;