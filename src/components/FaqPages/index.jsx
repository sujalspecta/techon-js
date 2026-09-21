import React from 'react';
import Header from '../InnerPage/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import FaqInner from '../FaqPages/FaqInner.jsx';

function FaqPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="FAQ"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />    
            <FaqInner />
            <Footer />
            <BackToTop />
        </>
    );
}

export default FaqPages;