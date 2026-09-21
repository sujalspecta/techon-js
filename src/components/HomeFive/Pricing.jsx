import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Pricing({ className }) {
    // State to manage pricing toggle
    const [isYearly, setIsYearly] = useState(false);

    // Toggle function
    const handleToggle = () => {
        setIsYearly(!isYearly);
    };

    return (
        <section className={`pricing-section-two pt-0 ${className || ''}`}>
            <div className="auto-container">
                <div className="sec-title text-center">
                    <span className="sub-title">Pricing plan</span>
                    <h2 className="scrub-each-word text-split">
                        Best pricing plans <br /> that fit for you
                    </h2>
                </div>

                <div className="tm-pricing-plan-switcher">
                    <span className="title-normal">Monthly</span>
                    <div className="pricing-switcher-btn">
                        <button 
                            aria-label="Toggle Pricing" 
                            className={`btn-toggle ${isYearly ? 'secondary-active' : ''}`} 
                            onClick={handleToggle}
                        >
                            <span className="round"></span>
                        </button>
                    </div>
                    <span className="title-secondary">Yearly</span>
                    <span className="price-offer">20% Off</span>
                </div>

                <div className="tabs-content">
                    <div className="row">
                        {/* Pricing Plans */}
                        {[ 
                            { title: 'Regular Plan', monthly: 29, yearly: 199 },
                            { title: 'Standard Plan', monthly: 88, yearly: 399 },
                            { title: 'Ultimate Plan', monthly: 149, yearly: 599 }
                        ].map((plan, index) => (
                            <div key={index} className="tm-pricing-table pricing-block-two col-xl-4 col-md-6">
                                <div className="inner-box">
                                    <div className="icon-arrow" />
                                    <div className="offer">Save <span>23%</span></div>
                                    <h4 className="title">{plan.title}</h4>
                                    <div className="price-box-outer">
                                        <div className={`price-box ${isYearly ? 'price-secondary' : 'price-normal'}`}>
                                            <h4 className="price">
                                                <span>$</span>{isYearly ? plan.yearly : plan.monthly}
                                            </h4>
                                            <span className="validaty">
                                                {isYearly ? '/ Yearly' : '/ per month'}
                                            </span>
                                        </div>
                                    </div>
                                    <ul className="features-list">
                                        <li><i className="fa-solid fa-circle-check" /> Network Security Audit</li>
                                        <li><i className="fa-solid fa-circle-check" /> Custom Softwar</li>
                                        <li><i className="fa-solid fa-circle-check" /> Cyber Security</li>
                                        <li><i className="fa-solid fa-circle-check" /> 24/7 Remote Support</li>
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
        </section>
    );
}

export default Pricing;
