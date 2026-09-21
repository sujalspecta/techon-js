import React, {useEffect} from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from './Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import Slider from './Slider.jsx';
import Services from './Services.jsx';
import About from './About.jsx';
import Marquee from './Marquee.jsx';
import Cta from './Cta.jsx';
import Accordion from './Accordion.jsx';
import Pricing from './Pricing.jsx';
import Contact from './Contact.jsx';

function HomeFiveYellow() {

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
            <Services/>
            <About/>
            <Marquee/>
            <Cta/>
            <Accordion/>
            <Pricing/>
            <Contact/>
            <Footer/>
            <BackToTop/>
        </>
    );
}

export default HomeFiveYellow;