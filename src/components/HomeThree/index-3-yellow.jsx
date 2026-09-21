import React, {useEffect} from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from './Header.jsx';
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

function HomeThreeYellow() {

    useEffect(() => {
        document.body.classList.add('yellow-mode');
        return () => {
          document.body.classList.remove('yellow-mode');
        };
    });

    return (
        <>   
            <Header />
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
            <Clients />
            <Testimonials />
            <News />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default HomeThreeYellow;