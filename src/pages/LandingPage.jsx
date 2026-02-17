import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import SellerRateCard from '../components/SellerRateCard';
import FeaturedShop from '../components/FeaturedShop';
import Reviews from '../components/Reviews';
import ComparisonSection from '../components/ComparisonSection';
import FAQSection from '../components/FAQSection';
import OnboardingForm from '../components/OnboardingForm';

const LandingPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="landing-page">
            <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <About />

            <div style={{ background: 'var(--color-surface)', padding: '2rem 0' }}>
                <FeaturedShop />
            </div>

            <ComparisonSection />

            <SellerRateCard />

            <OnboardingForm />

            <div style={{ background: 'var(--color-surface)', padding: '2rem 0' }}>
                <Reviews />
            </div>

            {/* FAQ Section Moved to Bottom (Before Footer) */}
            <FAQSection />
        </div>
    );
};

export default LandingPage;
