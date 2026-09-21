import React from 'react';
import Header from '../InnerPage/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import Testimonials from '../HomeThree/Testimonials.jsx';

function TestimonialPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="Testimonial"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />    
            <Testimonials />     
            <Footer />
            <BackToTop />
        </>
    );
}

export default TestimonialPages;