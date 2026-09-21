import React from 'react';
import Header from '../InnerPage/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import ServiceList from '../ServicesPages/ServiceList.jsx';

function ServicesList() {

    return (
        <>
            <Header />
            <PageTitle
                title="Services"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <ServiceList/>
            <Footer />
            <BackToTop />
        </>
    );
}

export default ServicesList;
