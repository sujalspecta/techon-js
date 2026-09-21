import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HeaderSingle from './HeaderSingle.jsx';
import Slider from './Slider.jsx';
import Features from './Features.jsx';
import About from './About.jsx';
import Marquee from './Marquee.jsx';
import Services from './Services.jsx';
import Process from './Process.jsx';
import Pricing from './Pricing.jsx';
import Testimonials from './Testimonials.jsx';
import News from './News.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Projects from '../HomeOne/Projects.jsx';

function HomeTwoSingle() {

    return (
        <>   
            <HeaderSingle />
            <Slider />
            <Features />
            <About />
            <Marquee />
            <Projects className="pt-60" />
            <Services />
            <Process />            
            <Pricing />
            <Testimonials />
            <News />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeTwoSingle;