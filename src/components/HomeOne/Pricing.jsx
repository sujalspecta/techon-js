import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Pricing({ className }) {
    // State to track which pricing plan is active
    const [isYearly, setIsYearly] = useState(false);

    // Toggle function to switch between monthly and yearly
    const handleToggle = (plan) => {
        setIsYearly(plan === 'year');
    };

    return (
        <section className={`pricing-section ${className || ''}`}>
            <div className="auto-container">
                <div className="row">
                    <div className="content-column col-lg-5">
                        <div className="sec-title">
                            <span className="sub-title">Our pricing plans</span>
                            <h2 className="scrub-each-word text-split">Choose optimal pricing plans</h2>
                        </div>
                        <div className="info-box">
                            <span className="icon fa fa-check" />
                            <h5 className="title">Quality Services</h5>
                            <div className="text">
                                There are many variations of passages of Lorem Ipsum available, but the majority
                            </div>
                        </div>
                        <div className="info-box">
                            <span className="icon fa fa-check" />
                            <h5 className="title">Business Management</h5>
                            <div className="text">
                                There are many variations of passages of Lorem Ipsum available, but the majority
                            </div>
                        </div>
                        <div className="tm-pricing-smart-switcher-button">
                            <ul className="switch-buttons pt-1 mb-60">
                                <li className={isYearly ? '' : 'active'}>
                                    <button 
                                        className={`btn-toggle ${!isYearly ? 'active' : ''}`} 
                                        onClick={() => handleToggle('month')}
                                    >
                                        <span className="title">Monthly</span>
                                    </button>
                                </li>
                                <li className={isYearly ? 'active' : ''}>
                                    <button 
                                        className={`btn-toggle ${isYearly ? 'active' : ''}`} 
                                        onClick={() => handleToggle('year')}
                                    >
                                        <span className="title">Yearly</span>
                                        <span className="price-offer">20% Off</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <div className="row">
                            {[ 
                                { title: 'Basic Plan', monthly: 250, yearly: 600 },
                                { title: 'Standard Plan', monthly: 450, yearly: 800 }
                            ].map((plan, index) => (
                                <div key={index} className="tm-pricing-table pricing-block col-xl-6 col-md-6">
                                    <div className={`inner-box ${index === 1 ? 'active' : ''}`}>
                                        <h4 className="title">{plan.title}</h4>
                                        <div className={`price-box ${isYearly ? 'price-secondary' : 'price-normal'}`}>
                                            <h4 className="price">
                                                <span>$</span>{isYearly ? plan.yearly : plan.monthly}
                                            </h4>
                                            <span className="validaty">
                                                {isYearly ? '/ Yearly' : '/ Monthly'}
                                            </span>
                                        </div>
                                        <div className="text">
                                            When your audience visits your website, it gives them their first impression
                                        </div>
                                        {index === 1 && <span className="pricing-plan-label">Most Popular</span>}
                                        <ul className="features-list">
                                            <li><i className="fa-solid fa-circle-check" /> Data Backup and Recovery</li>
                                            <li><i className="fa-solid fa-circle-check" /> Cybersecurity Training</li>
                                            <li><i className="fa-solid fa-circle-check" /> 24/7 Free Support</li>
                                            <li><i className="fa-solid fa-circle-check" /> Managed IT Services</li>
                                        </ul>
                                        <Link to="/page-pricing" className="theme-btn btn-style-one">
                                            <span className="btn-title">Choose Package</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pricing;