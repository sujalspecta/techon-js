import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HeaderSingle from './HeaderSingle.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import Slider from './Slider.jsx';
import Services from './Services.jsx';
import About from './About.jsx';
import Marquee from './Marquee.jsx';
import Cta from './Cta.jsx';
import Accordion from './Accordion.jsx';
import Pricing from './Pricing.jsx';
import Contact from './Contact.jsx';
import Projects from '../HomeOne/Projects.jsx';
import Testimonials from '../HomeOne/Testimonials.jsx';
import News from '../HomeOne/News.jsx';

function HomeFiveSingle() {

    return (
        <>   
            <HeaderSingle/>
            <Slider/>
            <Services/>
            <About/>
            <Marquee/>
            <Cta/>
            <Accordion/>
            <Pricing/>
            <Contact/>
            <Projects/>
            <Testimonials/>
            <News/>
            <Footer/>
            <BackToTop/>
        </>
    );
}

export default HomeFiveSingle;