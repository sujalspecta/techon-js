import React from 'react';
import { Link } from 'react-router-dom';

import Team1 from '../../assets/images/resource/team1-1.jpg';
import Team2 from '../../assets/images/resource/team1-2.jpg';
import Team3 from '../../assets/images/resource/team1-3.jpg';


function TeamsInner({ className }) {
    return (
        <>

        <section className={`team-section pb-60 ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="team-block col-lg-4 col-md-6 wow fadeInUp">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-team-details"><img src={Team1} alt="Image" /></Link></figure>
                                <div className="social-links">
                                    <Link to="/"><i className="fab fa-twitter" /></Link>
                                    <Link to="/"><i className="fab fa-facebook" /></Link>
                                    <Link to="/"><i className="fab fa-instagram" /></Link>
                                </div>
                            </div>
                            <div className="info-box">
                                <span className="designation">IT Director</span>
                                <h4 className="name"><Link to="/page-team-details">Mike Hardson</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="team-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-team-details"><img src={Team2} alt="Image" /></Link></figure>
                                <div className="social-links">
                                    <Link to="/"><i className="fab fa-twitter" /></Link>
                                    <Link to="/"><i className="fab fa-facebook" /></Link>
                                    <Link to="/"><i className="fab fa-instagram" /></Link>
                                </div>
                            </div>
                            <div className="info-box">
                                <span className="designation">HR Admin</span>
                                <h4 className="name"><Link to="/page-team-details">Sarah Albert</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="team-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-team-details"><img src={Team3} alt="Image" /></Link></figure>
                                <div className="social-links">
                                    <Link to="/"><i className="fab fa-twitter" /></Link>
                                    <Link to="/"><i className="fab fa-facebook" /></Link>
                                    <Link to="/"><i className="fab fa-instagram" /></Link>
                                </div>
                            </div>
                            <div className="info-box">
                                <span className="designation">Manager</span>
                                <h4 className="name"><Link to="/page-team-details">David Cooper</Link></h4>
                            </div>
                        </div>
                    </div>                
                    <div className="team-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-team-details"><img src={Team2} alt="Image" /></Link></figure>
                                <div className="social-links">
                                    <Link to="/"><i className="fab fa-twitter" /></Link>
                                    <Link to="/"><i className="fab fa-facebook" /></Link>
                                    <Link to="/"><i className="fab fa-instagram" /></Link>
                                </div>
                            </div>
                            <div className="info-box">
                                <span className="designation">HR Admin</span>
                                <h4 className="name"><Link to="/page-team-details">Sarah Albert</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="team-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-team-details"><img src={Team3} alt="Image" /></Link></figure>
                                <div className="social-links">
                                    <Link to="/"><i className="fab fa-twitter" /></Link>
                                    <Link to="/"><i className="fab fa-facebook" /></Link>
                                    <Link to="/"><i className="fab fa-instagram" /></Link>
                                </div>
                            </div>
                            <div className="info-box">
                                <span className="designation">Manager</span>
                                <h4 className="name"><Link to="/page-team-details">David Cooper</Link></h4>
                            </div>
                        </div>
                    </div>
                    <div className="team-block col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="600ms">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><Link to="/page-team-details"><img src={Team1} alt="Image" /></Link></figure>
                                <div className="social-links">
                                    <Link to="/"><i className="fab fa-twitter" /></Link>
                                    <Link to="/"><i className="fab fa-facebook" /></Link>
                                    <Link to="/"><i className="fab fa-instagram" /></Link>
                                </div>
                            </div>
                            <div className="info-box">
                                <span className="designation">IT Director</span>
                                <h4 className="name"><Link to="/page-team-details">Mike Hardson</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        </>
    );
}

export default TeamsInner;
