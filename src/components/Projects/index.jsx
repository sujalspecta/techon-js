import React from 'react';
import Header from '../InnerPage/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import ProjectsList from './ProjectsList.jsx';

function ProjectList() {

    return (
        <>
            <Header />
            <PageTitle
                title="Projects"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <ProjectsList/>
            <Footer />
            <BackToTop />
        </>
    );
}

export default ProjectList;
