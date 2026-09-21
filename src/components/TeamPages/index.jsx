import React from 'react';
import Header from '../InnerPage/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import TeamsInner from '../TeamPages/TeamsInner.jsx';

function TeamPage() {

    return (
        <>
            <Header />
            <PageTitle
                title="Team"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <TeamsInner />     
            <Footer/>
            <BackToTop />
        </>
    );
}

export default TeamPage;
