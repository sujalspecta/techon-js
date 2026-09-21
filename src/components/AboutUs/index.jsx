import React from 'react';
import Header from '../InnerPage/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import About from '../AboutUs/About.jsx';
import Services from '../HomeTwo/Services.jsx';
import Projects from '../HomeOne/Projects.jsx';
import Features from '../HomeOne/Features.jsx';
import Teams from '../HomeOne/Teams.jsx';

function AboutUs() {

    return (
        <>
            <Header />
            <PageTitle
                title="About Us"
                breadcrumb={[
                    { link: '/', title: 'Home' }
                ]}
            />
            <About />
            <Services />
            <Projects />
            <Features />
            <Teams />
            <Footer />
            <BackToTop />
        </>
    );
}

export default AboutUs;
