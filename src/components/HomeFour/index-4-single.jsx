import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HeaderSingle from './HeaderSingle.jsx';
import Footer from './Footer.jsx';
import Slider from './Slider.jsx';
import Features from './Features.jsx';
import About from './About.jsx';
import Marquee from './Marquee.jsx';
import Services from './Services.jsx';
import Projects from './Projects.jsx';
import Pricing from './Pricing.jsx';
import Features2 from './Features2.jsx';
import Testimonials from './Testimonials.jsx';
import Cta from './Cta.jsx';
import Contact from './Contact.jsx';
import News from '../HomeOne/News.jsx';
import Clients from './Clients.jsx';

function HomeFourSingle() {

    return (
        <>   
            <HeaderSingle/>
            <Slider/>
            <Features/>
            <About/>
            <Marquee/>
            <Services/>
            <Projects/>
            <Pricing/>
            <Features2/>
            <Testimonials/>
            <Cta/>
            <Contact/>
            <News/>
            <Clients/>
            <Footer/>
            <BackToTop/>
        </>
    );
}

export default HomeFourSingle;