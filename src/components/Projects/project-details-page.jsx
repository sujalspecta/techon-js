import React from 'react';
import Header from '../InnerPage/Header.jsx';
import Footer from '../HomeOne/Footer.jsx';
import BackToTop from '../BackToTop.jsx';
import PageTitle from '../PageTitle.jsx';
import ProjectDetails from '../Projects/ProjectDetails.jsx';
import Projects from '../HomeOne/Projects.jsx';

function ProjectDetailsPage() {

    return (
        <>
            <Header />
            <PageTitle
                title="Project Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                ]}
            />
            <ProjectDetails />
            <Projects className="pt-0"/>
            <Footer />
            <BackToTop />
        </>
    );
}

export default ProjectDetailsPage;
