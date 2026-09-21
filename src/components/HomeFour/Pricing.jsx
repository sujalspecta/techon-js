import React from 'react';
import { Link } from 'react-router-dom';

function Pricing3({ className }) {

    return (

        <section className={`pricing-section-three ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title text-center"> <span className="sub-title style-three">Our Pricing Plans</span>
                    <h2 className="scrub-each-word text-split">Choose Your Optimal <br/>Pricing Plans</h2>
                </div>
                <div className="row">
                    <div className="pricing-block-three col-xl-4 col-md-6">
                        <div className="inner-box">
                            <div className="icon-lines-9" />
                            <div className="icon-arrow" />
                            <div className="offer">Save <span>23%</span></div>
                            <i className="icon-two flaticon-agency-digital-services" />
                            <h4 className="title">Regular Plan</h4>
                            <h2 className="price">$39<sub>/ for per month</sub></h2>
                            <ul className="features-list">
                                <li><i className="fa-solid fa-circle-check" /> Network Security Audit</li>
                                <li><i className="fa-solid fa-circle-check" /> Support Management</li>
                                <li><i className="fa-solid fa-circle-check" /> Cyber Security </li>
                                <li><i className="fa-solid fa-circle-check" /> 24/7 Remote Support</li>
                            </ul>
                            <Link to="/page-pricing" className="theme-btn btn-style-one"><span className="btn-title">Choose Package</span></Link>
                        </div>
                    </div>
                    <div className="pricing-block-three col-xl-4 col-md-6">
                        <div className="inner-box">
                            <div className="icon-lines-9" />
                            <div className="icon-arrow" />
                            <div className="offer">Save <span>23%</span></div>
                            <i className="icon-two flaticon-agency-bank" />
                            <h4 className="title">Standard Plan</h4>
                            <h2 className="price">$99<sub>/ for per month</sub></h2>
                            <ul className="features-list">
                                <li><i className="fa-solid fa-circle-check" /> Data Backup And Recovery</li>
                                <li><i className="fa-solid fa-circle-check" /> Network Security Audit</li>
                                <li><i className="fa-solid fa-circle-check" /> Cybersecurity Training</li>
                                <li><i className="fa-solid fa-circle-check" /> 24/7 Remote Support</li>
                            </ul>
                            <Link to="/page-pricing" className="theme-btn btn-style-one"><span className="btn-title">Choose Package</span></Link>
                        </div>
                    </div>
                    <div className="pricing-block-three col-xl-4 col-md-6">
                        <div className="inner-box">
                            <div className="icon-lines-9" />
                            <div className="icon-arrow" />
                            <div className="offer">Save <span>23%</span></div>
                            <i className="icon-two flaticon-agency-health-check" />
                            <h4 className="title">Ultimate Plan</h4>
                            <h2 className="price">$199<sub>/ for per month</sub></h2>
                            <ul className="features-list">
                                <li><i className="fa-solid fa-circle-check" /> Migration Consultation</li>
                                <li><i className="fa-solid fa-circle-check" /> Network Security Audit</li>
                                <li><i className="fa-solid fa-circle-check" /> Cyber Security</li>
                                <li><i className="fa-solid fa-circle-check" /> 24/7 Remote Support</li>
                            </ul>
                            <Link to="/page-pricing" className="theme-btn btn-style-one"><span className="btn-title">Choose Package</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Pricing3;
