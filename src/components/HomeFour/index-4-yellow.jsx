import React, {useEffect} from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from './Header.jsx';
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

function HomeFourYellow() {

    useEffect(() => {
        document.body.classList.add('yellow-mode');
        return () => {
          document.body.classList.remove('yellow-mode');
        };
    });

    return (
        <>   
            <Header/>
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

export default HomeFourYellow;