import React from 'react';
import Header from '../InnerPage/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import PortfolioFilter1 from '../ShopPages/PortfolioFilter1.jsx';

function ShopPage() {

    return (
        <>
            <Header />
            <PageTitle
                title="Shop"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <section className="featured-products">
                <span className="bg-shape"></span>
                <div className="auto-container">
                    <div className="mixitup-gallery">
                        <PortfolioFilter1 />   
                    </div>
                </div>
            </section>
            <Footer />
            <BackToTop /> 
        </>
    );
}

export default ShopPage;
