import React from 'react';
import BackToTop from '../BackToTop.jsx';
import HeaderSingle from './HeaderSingle.jsx';
import Slider from './Slider.jsx';
import Features from './Features.jsx';
import About from './About.jsx';
import Marquee from './Marquee.jsx';
import Video from './Video.jsx';
import Chooseus from './Chooseus.jsx';
import Piechart from './Piechart.jsx';
import Projects from './Projects.jsx';
import Funfact from './Funfact.jsx';
import Accordion from './Accordion.jsx';
import Clients from './Clients.jsx';
import Testimonials from './Testimonials.jsx';
import News from './News.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Services from '../HomeOne/Services.jsx';

function HomeThreeSingle() {

    return (
        <>   
            <HeaderSingle />
            <Slider />
            <Features />
            <About />
            <Marquee />
            <Video />
            <Chooseus />
            <Piechart />
            <Projects />
            <Funfact />
            <Accordion />
            <Services />
            <Clients />
            <Testimonials />
            <News />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeThreeSingle;