import AppScreens from '@/components/bimakas/AppScreens';
import DownloadSection from '@/components/bimakas/DownloadSection';
import FAQ from '@/components/bimakas/FAQ';
import Footer from '@/components/bimakas/Footer';
import Header from '@/components/bimakas/Header';
import Hero from '@/components/bimakas/Hero';
import HowItWorks from '@/components/bimakas/HowItWorks';
import PartnerCTA from '@/components/bimakas/PartnerCTA';
import SocialProof from '@/components/bimakas/SocialProof';
import ValueProps from '@/components/bimakas/ValueProps';

/**
 * BiMakas Landing Page - Main page component
 *
 * A comprehensive landing page for the BiMakas mobile app that provides
 * on-demand professional barber services at your location.
 *
 * @returns {JSX.Element} The complete BiMakas landing page
 */
const Page = () => {
    return (
        <main className='min-h-screen'>
            {/* Navigation Header */}
            <Header />

            {/* Hero Section - Main value proposition and CTAs */}
            <Hero />

            {/* Value Propositions - 6 key features */}
            <ValueProps />

            {/* App Screenshots - Mobile app interface showcase */}
            <AppScreens />

            {/* How It Works - 4 step process */}
            <HowItWorks />

            {/* Partner CTA - For barbers to join */}
            <PartnerCTA />

            {/* Social Proof - Testimonials and stats */}
            <SocialProof />

            {/* FAQ - Frequently Asked Questions */}
            <FAQ />

            {/* Download & Waitlist - App store badges and email signup */}
            <DownloadSection />

            {/* Footer - Links and company info */}
            <Footer />
        </main>
    );
};

export default Page;
