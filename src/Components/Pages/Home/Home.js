import React from 'react';
import Banner from '../../Banner/Banner';
import Features from '../../Features/Features';
import LogoSection from '../../LogoSection/LogoSection';
import Services from '../../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Features></Features>
            <LogoSection></LogoSection>
        </div>
    );
};

export default Home;