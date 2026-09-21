import React from 'react';


function Marquee({ className }) {
    return (
        <>

        <div className={`marquee-section ${className || ''}`}>
            <div className="marquee">
                <div className="marquee-group">
                    <div className="text">Data Tracking Security</div>
                    <span className="text-sign">●</span>
                    <div className="text">Website &amp; Mobile App Design</div>
                    <span className="text-sign">?</span>
                    <div className="text">IT Management Service</div>
                    <span className="text-sign">●</span>
                    <div className="text">Technology Solution</div>
                    <span className="text-sign">●</span>
                    <div className="text">IT Counsultancy</div>
                    <span className="text-sign">●</span>
                    <div className="text">Dedicated Team</div>
                </div>
                <div aria-hidden="true" className="marquee-group">
                    <div className="text">Data Tracking Security</div>
                    <span className="text-sign">●</span>
                    <div className="text">Website &amp; Mobile App Design</div>
                    <span className="text-sign">?</span>
                    <div className="text">IT Management Service</div>
                    <span className="text-sign">●</span>
                    <div className="text">Technology Solution</div>
                    <span className="text-sign">●</span>
                    <div className="text">IT Counsultancy</div>
                    <span className="text-sign">●</span>
                    <div className="text">Dedicated Team</div>
                </div>
            </div>
        </div>

        </>
    );
}

export default Marquee;
