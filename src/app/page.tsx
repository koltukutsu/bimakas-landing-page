import AppScreens from '@/components/bimakas/AppScreens';
import DownloadSection from '@/components/bimakas/DownloadSection';
import Footer from '@/components/bimakas/Footer';
import Header from '@/components/bimakas/Header';
import Hero from '@/components/bimakas/Hero';
import HowItWorks from '@/components/bimakas/HowItWorks';
import PartnerCTA from '@/components/bimakas/PartnerCTA';
import SocialProof from '@/components/bimakas/SocialProof';
import ValueProps from '@/components/bimakas/ValueProps';

/**
 * BiMakas Landing Page - Complete Mobile App Business Landing Page
 *
 * A professionally designed landing page following mobile-first responsive design principles
 * with luxury minimalism aesthetic and coral (#FF6B6B) + ivory (#FDFCFB) color palette.
 *
 * Target Audience:
 * - Primary: Customers seeking on-demand professional barber services
 * - Secondary: Barbers/stylists looking to increase income through mobile services
 *
 * Design Philosophy:
 * - Approachable luxury: Premium feel with human-centered accessibility
 * - Mobile-first: Optimized for touch interfaces, then enhanced for desktop
 * - Trust-building: Social proof, testimonials, and clear value propositions
 * - Conversion-focused: Strategic CTA placement and waitlist building
 *
 * @returns {JSX.Element} The complete BiMakas landing page
 */
const Page = () => {
    return (
        <main className='bg-background min-h-screen antialiased'>
            {/*
            ═══════════════════════════════════════════════════════════════════
            NAVIGATION HEADER
            ═══════════════════════════════════════════════════════════════════

            Sticky navigation with logo, menu links, and primary CTA.
            Desktop: Horizontal nav with logo left, links center, CTA right
            Mobile: Hamburger menu with collapsible navigation
            */}
            <Header />

            {/*
            ═══════════════════════════════════════════════════════════════════
            1. HERO SECTION - "Uygulama Ön Planda"
            ═══════════════════════════════════════════════════════════════════

            Main value proposition with app mockup as the centerpiece.

            Content:
            - Başlık: "Profesyonel Bakım Ayağınıza Gelsin"
            - Alt Başlık: "Saç, sakal ve güzellik hizmetlerini dilediğiniz yerde alın."
            - CTA: "Bekleme Listesine Katıl" (primary coral), "Daha Fazla Bilgi" (secondary)
            - App mockup center stage

            Design Wow Effect:
            - App mockup in center makes product the hero → instant value recognition
            - Coral CTA provides energy, dark secondary gives premium balance
            - White spacious background conveys luxury minimalism

            Responsive:
            - Desktop: Split layout → left text + right app mockup (large)
            - Mobile: Stacked → text above/below mockup, full-width buttons for easy tapping
            */}
            <Hero />

            {/*
            ═══════════════════════════════════════════════════════════════════
            2. FEATURES SECTION - "Özellikler"
            ═══════════════════════════════════════════════════════════════════

            Key value propositions showcased in elegant cards.

            Content:
            - 4 features with icons: Anlık randevu, Harita, Güvenli ödeme, Yorumlar

            Design Wow Effect:
            - Soft beige rounded cards → approachable, human-centered feel
            - Minimalist line icons (thin but elegant) → luxury balance
            - Clean typography hierarchy

            Responsive:
            - Desktop: 4 features horizontal grid (evenly spaced)
            - Mobile: 2x2 grid or vertical stack, large icons for clarity
            */}
            <ValueProps />

            {/*
            ═══════════════════════════════════════════════════════════════════
            3. HOW IT WORKS SECTION - "Nasıl Çalışır?"
            ═══════════════════════════════════════════════════════════════════

            Simple 3-step process explanation with visual timeline.

            Content:
            - 3 steps: Aç → Çağır → Şıklığın Keyfini Çıkar

            Design Wow Effect:
            - Timeline flow with numbered circles (1-2-3) + minimal illustrations
            - Sense of simplicity + progression
            - Coral highlights create visual guidance → effortless feel

            Responsive:
            - Desktop: Horizontal timeline with connecting arrows
            - Mobile: Vertical stacked timeline, centered icons + text
            */}
            <HowItWorks />

            {/*
            ═══════════════════════════════════════════════════════════════════
            4. FOR PROFESSIONALS SECTION - "Profesyoneller İçin"
            ═══════════════════════════════════════════════════════════════════

            Business growth opportunity for barbers and stylists.

            Content:
            - Başlık: "Kazancını Arttır, Müşteri Portföyünü Genişlet"
            - Sub: "BiMakas, salon dışı kazanç için yeni fırsatlar sunar."

            Design Wow Effect:
            - Dark luxury background (#2E2E2E) with coral text highlights
            - Conveys exclusivity and business growth focus
            - Visual contrast signals this is for professionals, not end-users

            Responsive:
            - Desktop: Left text + right professional illustration
            - Mobile: Full-width centered text, background overlay for readability
            */}
            <PartnerCTA />

            {/*
            ═══════════════════════════════════════════════════════════════════
            5. TESTIMONIALS SECTION - "Yorumlar"
            ═══════════════════════════════════════════════════════════════════

            Social proof through customer testimonials and ratings.

            Content:
            - "Evimde saç kesimi yaptırmak bu kadar kolay olmamıştı." – Ahmet
            - "Kuaförüm ayağıma geldi, dakikalar içinde hazırdım." – Elif

            Design Wow Effect:
            - Minimal testimonial cards with round user avatars
            - Star ratings in coral → positivity and approachability
            - Luxury fashion brand "review" section feel (trust + elegance)

            Responsive:
            - Desktop: Carousel slider (3 cards visible)
            - Mobile: One card per view, swipeable slider for smooth UX
            */}
            <SocialProof />

            {/*
            ═══════════════════════════════════════════════════════════════════
            6. APP SHOWCASE SECTION - "Mobil Uygulama"
            ═══════════════════════════════════════════════════════════════════

            Interactive showcase of mobile app interface and features.

            Content:
            - "BiMakas Uygulamasıyla Tanışın"
            - Phone mockups showing: booking, map, payment screens

            Design Wow Effect:
            - Floating phone mockups in carousel → luxury tech vibe
            - Subtle glassmorphism background → futuristic, aspirational
            - Interactive elements showcase app functionality

            Responsive:
            - Desktop: Multiple phones side-by-side with animations
            - Mobile: Single phone mockup, swipe-enabled slider
            */}
            <AppScreens />

            {/*
            ═══════════════════════════════════════════════════════════════════
            7. WAITLIST SIGNUP SECTION - "Bekleme Listesi"
            ═══════════════════════════════════════════════════════════════════

            Conversion-focused email capture with app store badges.

            Content:
            - Email signup form
            - CTA: "Geleceğin Parçası Ol"
            - App store download badges (iOS/Android)

            Design Wow Effect:
            - Rounded input fields with coral border glow → welcoming yet premium
            - Success message with subtle confetti animation → surprise & delight
            - Strategic placement after social proof builds trust

            Responsive:
            - Desktop: Inline form with fields + button
            - Mobile: Vertical stacked form, large touch-friendly inputs
            */}
            <DownloadSection />

            {/*
            ═══════════════════════════════════════════════════════════════════
            8. FOOTER SECTION
            ═══════════════════════════════════════════════════════════════════

            Site navigation, legal links, and company information.

            Content:
            - Logo, contact info, social links, mini navigation
            - Legal pages: KVKK, Terms of Use

            Design Wow Effect:
            - Simple, minimal, dark background
            - Coral hover effects on social icons → playful yet premium
            - Clean typography hierarchy maintains brand consistency

            Responsive:
            - Desktop: 3-column layout (logo + links + contact)
            - Mobile: Centered stacked blocks for clarity
            */}
            <Footer />
        </main>
    );
};

export default Page;
