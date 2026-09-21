import React from 'react';
import Header from '../InnerPage/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import Pricing from '../PricingPages/Pricing.jsx';

function PricingPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Pricing"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />    
            <Pricing />     
            <Footer />
            <BackToTop />
        </>
    );
}

export default PricingPages;
