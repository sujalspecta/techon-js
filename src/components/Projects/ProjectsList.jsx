import React from 'react';
import { Link } from 'react-router-dom';

// Image imports
import Projects1 from '/src/assets/images/resource/project1-1.jpg';
import Projects2 from '/src/assets/images/resource/project1-2.jpg';
import Projects3 from '/src/assets/images/resource/project1-3.jpg';
import Projects4 from '/src/assets/images/resource/project1-4.jpg';


function ProjectsList({ className }) {
    return (

        <section className={`our-project pt-120 pb-90 ${className || ''}`}>
            <div className="icon-lines-21 position-absolute" />
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-4 col-sm-6">
                        <div className="project-block">
                            <div className="inner-box">
                                <figure className="image"><img src={Projects1} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h5 className="title">Technology Device</h5>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum is simply free text available in the market</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project-block">
                            <div className="inner-box">
                                <figure className="image"><img src={Projects2} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h5 className="title">Product Launching</h5>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum is simply free text available in the market</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project-block">
                            <div className="inner-box">
                                <figure className="image"><img src={Projects3} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h5 className="title">Technology Device</h5>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum is simply free text available in the market</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project-block">
                            <div className="inner-box">
                                <figure className="image"><img src={Projects4} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h5 className="title">Product Launching</h5>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum is simply free text available in the market</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project-block">
                            <div className="inner-box">
                                <figure className="image"><img src={Projects3} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h5 className="title">Technology Device</h5>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum is simply free text available in the market</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="project-block">
                            <div className="inner-box">
                                <figure className="image"><img src={Projects1} alt="Image" /></figure>
                                <div className="content-box">
                                    <div className="content">
                                        <h5 className="title">Technology Device</h5>
                                        <Link to="/page-project-details" className="read-more"><i className="icon fa fa-long-arrow-right" /></Link>
                                        <div className="inner">
                                            <div className="text">Lorem ipsum is simply free text available in the market</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ProjectsList;
