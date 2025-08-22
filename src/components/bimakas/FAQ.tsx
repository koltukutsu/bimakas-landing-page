import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/registry/new-york-v4/ui/accordion';

const FAQ = () => {
    const faqs = [
        {
            question: 'Hangi şehirlerde hizmet veriyorsunuz?',
            answer: 'Pilot bölgelerde başlıyoruz; uygulama içinden kapsama alanını görebilirsin.'
        },
        {
            question: 'Ücretler nasıl belirleniyor?',
            answer: 'Hizmete ve mesafeye göre, siparişten önce net şekilde görünür.'
        },
        {
            question: 'Ödemeler güvenli mi?',
            answer: 'Ödemeler şifreli altyapı ve güvenli sağlayıcılarla alınır.'
        },
        {
            question: 'Randevuyu iptal edebilir miyim?',
            answer: 'İptal koşulları randevu saatine kalan süreye göre değişir.'
        },
        {
            question: 'Kuaförler nasıl doğrulanıyor?',
            answer: 'Belge kontrolü, profil incelemesi ve müşteri puanlarıyla.'
        }
    ];

    return (
        <section id='sss' className='bg-muted/30 py-12 sm:py-16 md:py-20 lg:py-24'>
            <div className='container mx-auto max-w-screen-xl px-3 sm:px-4 lg:px-8'>
                <div className='mb-12 text-center sm:mb-16'>
                    <h2 className='text-foreground mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl'>
                        Sıkça Sorulan Sorular
                    </h2>
                    <p className='text-muted-foreground mx-auto max-w-2xl px-4 text-base sm:px-0 sm:text-lg'>
                        BiMakas hakkında merak ettiğin her şey
                    </p>
                </div>

                <div className='mx-auto max-w-3xl'>
                    <Accordion type='single' collapsible className='space-y-3 sm:space-y-4'>
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className='border-border bg-background rounded-lg border shadow-sm'>
                                <AccordionTrigger className='text-foreground hover:text-primary px-4 py-3 text-left text-sm font-semibold hover:no-underline sm:px-6 sm:py-4 sm:text-base'>
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className='text-muted-foreground px-4 pb-3 text-sm leading-relaxed sm:px-6 sm:pb-4 sm:text-base'>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
