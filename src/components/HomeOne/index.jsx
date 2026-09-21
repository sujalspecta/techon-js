import React from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from './Header.jsx';
import Slider from './Slider.jsx';
import Services from './Services.jsx';
import About from './About.jsx';
import Marquee from './Marquee.jsx';
import Projects from './Projects.jsx';
import Features from './Features.jsx';
import Teams from './Teams.jsx';
import Clients from './Clients.jsx';
import Pricing from './Pricing.jsx';
import Testimonials from './Testimonials.jsx';
import News from './News.jsx';
import Map from './Map.jsx';
import Footer from './Footer.jsx';

function HomeOne() {

    return (
        <>   
            <Header/>
            <Slider/>
            <Services/>
            <About/>
            <Marquee/>
            <Projects/>
            <Features/>
            <Teams/>
            <Clients/>
            <Pricing/>
            <Testimonials/>
            <News/>
            <Map/>
            <Footer/>
            <BackToTop/>
        </>
    );
}

export default HomeOne;