import React from 'react';
import Header from '../InnerPage/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import ServiceDetails from '../ServicesPages/ServiceDetails.jsx';

function ServiceDetailsPage() {

    return (
        <>
            <Header />
            <PageTitle
                title="Service Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <ServiceDetails />
            <Footer />
            <BackToTop />
        </>
    );
}

export default ServiceDetailsPage;
