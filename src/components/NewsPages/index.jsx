import React from 'react';
import Header from '../InnerPage/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import News from './News.jsx';

function NewsPages() {

    return (
        <>
            <Header />
            <PageTitle
                title="News Grid"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <News />
            <Footer />
            <BackToTop />
        </>
    );
}

export default NewsPages;

